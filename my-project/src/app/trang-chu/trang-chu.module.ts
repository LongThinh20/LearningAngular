import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SliderComponent } from './slider/slider.component';
import { LoaiPhimComponent } from './loai-phim/loai-phim.component';
import { PhimDangChieuComponent } from './phim-dang-chieu/phim-dang-chieu.component';
import { PhimSapChieuComponent } from './phim-sap-chieu/phim-sap-chieu.component';
import { TinTucComponent } from './tin-tuc/tin-tuc.component';
import { ItemPhimComponent } from './item-phim/item-phim.component';
import { DienAnhComponent } from './dien-anh/dien-anh.component';
import { ReviewComponent } from './review/review.component';
import { KhuyenMaiComponent } from './khuyen-mai/khuyen-mai.component';
import { LienHeComponent } from './lien-he/lien-he.component';
import { FormlienheComponent } from './formlienhe/formlienhe.component';
import { ThongTinLienHeComponent } from './thong-tin-lien-he/thong-tin-lien-he.component';
import { TrangchuComponent } from './trangchu/trangchu.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { ItemTinTucComponent } from './item-tin-tuc/item-tin-tuc.component';

@NgModule({
  declarations: [
    HeaderComponent,
    SliderComponent,
    LoaiPhimComponent,
    PhimDangChieuComponent,
    PhimSapChieuComponent,
    TinTucComponent,
    ItemPhimComponent,
    DienAnhComponent,
    ReviewComponent,
    KhuyenMaiComponent,
    LienHeComponent,
    FormlienheComponent,
    ThongTinLienHeComponent,
    TrangchuComponent,
    ItemTinTucComponent,
  ],
  exports: [
    HeaderComponent,
    SliderComponent,
    LoaiPhimComponent,
    PhimDangChieuComponent,
    PhimSapChieuComponent,
    TinTucComponent,
    ItemPhimComponent,
    DienAnhComponent,
    ReviewComponent,
    KhuyenMaiComponent,
    LienHeComponent,
    FormlienheComponent,
    ThongTinLienHeComponent,
    TrangchuComponent,
    ItemTinTucComponent,
  ],
  imports: [CommonModule, CarouselModule],
})
export class TrangChuModule {}
