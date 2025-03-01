import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { NavBarComponent } from './core/nav-bar/nav-bar.component';
import { JumbotronComponent } from './core/jumbotron/jumbotron.component';
import { FooterComponent } from './core/footer/footer.component';
import { CardComponent } from './components/card/card.component';
import { GridArticoliComponent } from './core/grid-articoli/grid-articoli.component';
import { PrimoPianoComponent } from './core/primo-piano/primo-piano.component';
import { CardCategoriesComponent } from './components/card-categories/card-categories.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavBarComponent,
    JumbotronComponent,
    FooterComponent,
    CardComponent,
    GridArticoliComponent,
    PrimoPianoComponent,
    CardCategoriesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
