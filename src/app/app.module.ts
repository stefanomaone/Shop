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
import { LoginFormComponent } from './pages/login-form/login-form.component';
import { AppRoutingModule } from './app-routing.module';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { ErrorComponent } from './pages/error/error.component';
import { RegistrationComponent } from './pages/registration/registration.component';
import { ArticoliService } from '../app/services/articoli.service'; // Importa ArticoliService
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FormErrorDirective } from './directives/form-error.directive';



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
    CardCategoriesComponent,
    LoginFormComponent,
    WelcomeComponent,
    ErrorComponent,
    RegistrationComponent,
    FormErrorDirective,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
    
  ],
  providers: [ArticoliService],
  bootstrap: [AppComponent]
})
export class AppModule { }
