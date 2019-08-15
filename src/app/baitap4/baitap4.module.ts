import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Baitap4Component } from './baitap4.component';
import { Baitap4HeaderComponent } from './baitap4-header/baitap4-header.component';
import { Baitap4CarouselComponent } from './baitap4-carousel/baitap4-carousel.component';
import { Baitap4SmartphoneComponent } from './baitap4-smartphone/baitap4-smartphone.component';
import { Baitap4LaptopComponent } from './baitap4-laptop/baitap4-laptop.component';
import { Baitap4FooterComponent } from './baitap4-footer/baitap4-footer.component';
import { FooterContentComponent } from './baitap4-footer/footer-content/footer-content.component';
import { FooterContentImgComponent } from './baitap4-footer/footer-content/footer-content-img/footer-content-img.component';
import { Baitap4CardComponent } from './baitap4-card/baitap4-card.component';
import { ModalComponent } from './modal/modal.component';



@NgModule({
  declarations: [Baitap4Component, Baitap4HeaderComponent, Baitap4CarouselComponent, Baitap4SmartphoneComponent, Baitap4LaptopComponent, Baitap4FooterComponent, FooterContentComponent, FooterContentImgComponent, Baitap4CardComponent, ModalComponent],
  exports: [Baitap4Component],
  imports: [
    CommonModule
  ]
})
export class Baitap4Module { }
