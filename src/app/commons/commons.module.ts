import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [HeaderComponent, NavbarComponent, HomeComponent, NotfoundComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [HeaderComponent, NavbarComponent, HomeComponent, NotfoundComponent]
})
export class CommonsModule { }
