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

  async register(registerDto: RegisterDto) {
    const { email, password, fullname } = registerDto;

    const existingUser = await this.userRepository.findOne({ where: { email } });
    if (existingUser) {
      throw new HttpException('Email này đã được sử dụng!', HttpStatus.BAD_REQUEST);
    }

    const saltOrRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltOrRounds);

    const newUser = this.userRepository.create({
      email,
      password_hash: hashedPassword,
      fullname,
    });
    await this.userRepository.save(newUser);

    return { message: 'Đăng ký tài khoản thành công!' };
  }

  async login(loginDto: LoginDto) {
    const { email, password } = loginDto;

    const user = await this.userRepository.findOne({ where: { email } });
    if (!user) {
      throw new HttpException('Email hoặc mật khẩu không đúng!', HttpStatus.UNAUTHORIZED);
    }

    if (user.status === 'BANNED') {
      throw new HttpException('Tài khoản của bạn đã bị khóa!', HttpStatus.FORBIDDEN);
    }

    const isPasswordMatching = await bcrypt.compare(password, user.password_hash);
    if (!isPasswordMatching) {
      throw new HttpException('Email hoặc mật khẩu không đúng!', HttpStatus.UNAUTHORIZED);
    }

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