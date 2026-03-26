import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    // 1. Khai báo ConfigModule
    ConfigModule.forRoot({
      isGlobal: true, // Để có thể dùng ở mọi nơi mà không cần import lại
    }),
    
    // 2. Kết nối DB bất đồng bộ (Async)
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'mysql',
        host: configService.get<string>('DB_HOST'),
        port: configService.get<number>('DB_PORT'),
        username: configService.get<string>('DB_USERNAME'),
        password: configService.get<string>('DB_PASSWORD'),
        database: configService.get<string>('DB_DATABASE'),
        entities: [__dirname + '/**/*.entity{.ts,.js}'],
        synchronize: true, // Lưu ý: tắt khi lên Production
      }),
    }),
  ],
})
export class AppModule {}