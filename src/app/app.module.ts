import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';

import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';

import { AppComponent } from './app.component';
import { RecipesModule } from 'src/app/recipes/recipes.module';
import { HeaderComponent } from './shared/components/header/header.component';
import { CartModule } from 'src/app/cart/cart.module';
@NgModule({
  declarations: [AppComponent, HeaderComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RecipesModule,
    CartModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatMenuModule,
    MatBadgeModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
