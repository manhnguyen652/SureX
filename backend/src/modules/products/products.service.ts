import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product, ProductStatus } from './entities/product.entity';
import { CreateProductDto, UpdateProductDto } from './dto/product.dto';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private productRepository: Repository<Product>,
  ) {}

  // 1. Lấy danh sách tất cả sản phẩm đang bán (Code cũ)
  async findAll() {
    const products = await this.productRepository.find({
      where: { status: ProductStatus.AVAILABLE },
      select: [
        'id',
        'seller_id',
        'category_id',
        'title',
        'description',
        'price',
        'status',
        'created_at',
      ],
      order: { created_at: 'DESC' },
    });
    return { data: products };
  }

  // 2. Thêm mới một sản phẩm
  async create(createProductDto: CreateProductDto) {
    const newProduct = this.productRepository.create(createProductDto);
    await this.productRepository.save(newProduct);

    // Ẩn account_info trước khi trả về kết quả
    const { account_info, ...productWithoutSensitiveInfo } = newProduct;
    return { message: 'Đăng bán sản phẩm thành công!', data: newProduct };
  }

  // 3. Lấy chi tiết 1 sản phẩm
  async findOne(id: number) {
    const product = await this.productRepository.findOne({
      where: { id },
      // Tương tự, nếu người gọi API không phải người mua hoặc người bán, ta phải giấu account_info đi
      select: [
        'id',
        'seller_id',
        'category_id',
        'title',
        'description',
        'price',
        'status',
        'created_at',
      ],
    });

    if (!product) {
      throw new HttpException(
        'Không tìm thấy sản phẩm này!',
        HttpStatus.NOT_FOUND,
      );
    }
    return { data: product };
  }

  // 4. Cập nhật sản phẩm
  async update(id: number, updateProductDto: UpdateProductDto) {
    const product = await this.productRepository.findOne({ where: { id } });
    if (!product) {
      throw new HttpException(
        'Không tìm thấy sản phẩm để sửa!',
        HttpStatus.NOT_FOUND,
      );
    }

    await this.productRepository.update(id, updateProductDto);
    return { message: 'Cập nhật sản phẩm thành công!' };
  }

  // 5. Xóa sản phẩm
  async remove(id: number) {
    const product = await this.productRepository.findOne({ where: { id } });
    if (!product) {
      throw new HttpException(
        'Không tìm thấy sản phẩm để xóa!',
        HttpStatus.NOT_FOUND,
      );
    }

    await this.productRepository.delete(id);
    return { message: 'Xóa sản phẩm thành công!' };
  }
}
