import { IsNotEmpty, IsNumber, IsOptional, IsString, IsEnum } from 'class-validator';
import { ProductStatus } from '../entities/product.entity';

export class CreateProductDto {
  @IsNumber({}, { message: 'Category ID phải là số' })
  @IsNotEmpty()
  category_id: number;

  @IsString()
  @IsNotEmpty({ message: 'Tiêu đề không được để trống' })
  title: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsNumber({}, { message: 'Giá tiền phải là số' })
  @IsNotEmpty()
  price: number;

  @IsString()
  @IsNotEmpty({ message: 'Thông tin tài khoản không được để trống' })
  account_info: string;

  // Tạm thời cho phép gửi seller_id từ Postman để test.
  // Trong thực tế, ta sẽ lấy ID này từ Token của người dùng đang đăng nhập.
  @IsNumber()
  @IsNotEmpty()
  seller_id: number; 
}

export class UpdateProductDto {
  @IsOptional()
  @IsNumber()
  category_id?: number;

  @IsOptional()
  @IsString()
  title?: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsNumber()
  price?: number;

  @IsOptional()
  @IsString()
  account_info?: string;

  @IsOptional()
  @IsEnum(ProductStatus)
  status?: ProductStatus;
}