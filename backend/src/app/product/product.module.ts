import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { ProductSchema } from './schemas/product.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Product', schema: ProductSchema }]), // Registra el esquema de Product
  ],
  providers: [ProductService],
  controllers: [ProductController],
  exports: [ProductService], // Si lo necesitas exportar a otros módulos
})
export class ProductModule {}
