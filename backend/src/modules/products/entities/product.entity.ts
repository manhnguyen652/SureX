import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

export enum ProductStatus {
  AVAILABLE = 'AVAILABLE',
  PENDING_BUYER = 'PENDING_BUYER',
  SOLD = 'SOLD',
  HIDDEN = 'HIDDEN',
}

@Entity('products')
export class Product {
  @PrimaryGeneratedColumn('increment', { type: 'bigint' })
  id: number;

  @Column({ type: 'bigint' })
  seller_id: number;

  @Column()
  category_id: number;

  @Column()
  title: string;

  @Column({ type: 'text', nullable: true })
  description: string;

  @Column({ type: 'bigint' })
  price: number;

  @Column({ type: 'text' })
  account_info: string;

  @Column({ type: 'enum', enum: ProductStatus, default: ProductStatus.AVAILABLE })
  status: ProductStatus;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}