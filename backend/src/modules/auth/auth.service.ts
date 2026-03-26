import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { User } from '../users/entities/user.entity';
import { RegisterDto, LoginDto } from './dto/auth.dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
    private jwtService: JwtService,
  ) {}

  // --- HÀM ĐĂNG KÝ ---
  async register(registerDto: RegisterDto) {
    const { email, password, fullname } = registerDto;

    // 1. Kiểm tra email đã tồn tại chưa
    const existingUser = await this.userRepository.findOne({ where: { email } });
    if (existingUser) {
      throw new HttpException('Email này đã được sử dụng!', HttpStatus.BAD_REQUEST);
    }

    // 2. Mã hóa mật khẩu (Băm 10 vòng)
    const saltOrRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltOrRounds);

    // 3. Lưu vào Database
    const newUser = this.userRepository.create({
      email,
      password_hash: hashedPassword,
      fullname,
    });
    await this.userRepository.save(newUser);

    return { message: 'Đăng ký tài khoản thành công!' };
  }

  // --- HÀM ĐĂNG NHẬP ---
  async login(loginDto: LoginDto) {
    const { email, password } = loginDto;

    // 1. Tìm user theo email
    const user = await this.userRepository.findOne({ where: { email } });
    if (!user) {
      throw new HttpException('Email hoặc mật khẩu không đúng!', HttpStatus.UNAUTHORIZED);
    }

    // 2. Kiểm tra tài khoản có bị khóa không
    if (user.status === 'BANNED') {
      throw new HttpException('Tài khoản của bạn đã bị khóa!', HttpStatus.FORBIDDEN);
    }

    // 3. So sánh mật khẩu
    const isPasswordMatching = await bcrypt.compare(password, user.password_hash);
    if (!isPasswordMatching) {
      throw new HttpException('Email hoặc mật khẩu không đúng!', HttpStatus.UNAUTHORIZED);
    }

    // 4. Tạo JWT Token
    const payload = { sub: user.id, email: user.email, role: user.role };
    const accessToken = this.jwtService.sign(payload);

    return {
      message: 'Đăng nhập thành công!',
      access_token: accessToken,
      user: {
        id: user.id,
        email: user.email,
        fullname: user.fullname,
        balance: user.balance,
        role: user.role,
      }
    };
  }
}