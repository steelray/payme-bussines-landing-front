import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PreloaderComponent } from './preloader/preloader.component';
import { ErrorMessageComponent } from './error-message/error-message.component';
import { RouterModule } from '@angular/router';
import { SecondaryNavComponent } from './secondary-nav/secondary-nav.component';
import { PipesModule } from 'src/app/core/pipes/pipes.module';
import { DirectivesModule } from 'src/app/core/directives/directives.module';
import { MatIconModule } from '@angular/material/icon';

const COMPONENTS = [
  HeaderComponent,
  FooterComponent,
  MainMenuComponent,
  PageNotFoundComponent,
  PreloaderComponent,
  ErrorMessageComponent,
  SecondaryNavComponent
];

@NgModule({
  declarations: COMPONENTS,
  exports: COMPONENTS,
  imports: [
    CommonModule,
    RouterModule,
    PipesModule,
    DirectivesModule,
    MatIconModule
  ]
})
export class CommonComponentsModule { }
