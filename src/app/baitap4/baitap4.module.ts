import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Baitap4Component } from './baitap4.component';
import { Baitap4HeaderComponent } from './baitap4-header/baitap4-header.component';
import { Baitap4CarouselComponent } from './baitap4-carousel/baitap4-carousel.component';
import { Baitap4SmartphoneComponent } from './baitap4-smartphone/baitap4-smartphone.component';
import { Baitap4LaptopComponent } from './baitap4-laptop/baitap4-laptop.component';
import { Baitap4FooterComponent } from './baitap4-footer/baitap4-footer.component';
import { SmartphoneCardComponent } from './baitap4-smartphone/smartphone-card/smartphone-card.component';
import { LaptopCardComponent } from './baitap4-laptop/laptop-card/laptop-card.component';
import { LaptopCardImgComponent } from './baitap4-laptop/laptop-card/laptop-card-img/laptop-card-img.component';
import { LaptopCardBodyComponent } from './baitap4-laptop/laptop-card/laptop-card-body/laptop-card-body.component';
import { SmartphoneCardImgComponent } from './baitap4-smartphone/smartphone-card/smartphone-card-img/smartphone-card-img.component';
import { SmartphoneCardBodyComponent } from './baitap4-smartphone/smartphone-card/smartphone-card-body/smartphone-card-body.component';
import { FooterContentComponent } from './baitap4-footer/footer-content/footer-content.component';
import { FooterContentImgComponent } from './baitap4-footer/footer-content/footer-content-img/footer-content-img.component';



@NgModule({
  declarations: [Baitap4Component, Baitap4HeaderComponent, Baitap4CarouselComponent, Baitap4SmartphoneComponent, Baitap4LaptopComponent, Baitap4FooterComponent, SmartphoneCardComponent, LaptopCardComponent, LaptopCardImgComponent, LaptopCardBodyComponent, SmartphoneCardImgComponent, SmartphoneCardBodyComponent, FooterContentComponent, FooterContentImgComponent],
  exports: [Baitap4Component],
  imports: [
    CommonModule
  ]
})
export class Baitap4Module { }
