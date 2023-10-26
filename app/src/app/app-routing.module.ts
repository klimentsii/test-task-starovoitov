import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogComponent } from './catalog/catalog.component';
import {
  CATALOG,
  CONTACTS,
  COOCKIES,
  PRIVACY,
  PROMOTIONS,
  SERVICES,
  THANKS
} from './consts/routes';
import { PromotionsComponent } from './promotions/promotions.component';
import { ServicesComponent } from './services/services.component';
import { ContactsComponent } from './contacts/contacts.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { ThanksComponent } from './thanks/thanks.component';
import { CoockiesComponent } from './coockies/coockies.component';

const routes: Routes = [
  {
    path: CATALOG.url,
    component: CatalogComponent
  },
  {
    path: PROMOTIONS.url,
    component: PromotionsComponent
  },
  {
    path: SERVICES.url,
    component: ServicesComponent
  },
  {
    path: CONTACTS.url,
    component: ContactsComponent
  },
  {
    path: PRIVACY.url,
    component: PrivacyComponent
  },
  {
    path: THANKS.url,
    component: ThanksComponent
  },
  {
    path: COOCKIES.url,
    component: CoockiesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
