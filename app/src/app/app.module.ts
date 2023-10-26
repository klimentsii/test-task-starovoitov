import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PromotionsComponent } from './promotions/promotions.component';
import { ServicesComponent } from './services/services.component';
import { ContactsComponent } from './contacts/contacts.component';
import { CatalogComponent } from './catalog/catalog.component';
import { HeaderComponent } from './header/header.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormComponent } from './form/form.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { ThanksComponent } from './thanks/thanks.component';
import { CoockiesComponent } from './coockies/coockies.component';

@NgModule({
  declarations: [
    AppComponent,
    PromotionsComponent,
    ServicesComponent,
    ContactsComponent,
    CatalogComponent,
    HeaderComponent,
    FormComponent,
    PrivacyComponent,
    ThanksComponent,
    CoockiesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
