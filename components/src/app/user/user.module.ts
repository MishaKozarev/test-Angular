import { NgModule } from '@angular/core';
import { UserCategoryCardComponent } from './components/user-category-card/user-category-card.component';
import { UserCategoriesComponent } from './components/user-categories/user-categories.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [UserCategoryCardComponent, UserCategoriesComponent],
  imports: [SharedModule],
  exports: [
    UserCategoriesComponent
  ]
})
export class UserModule { }
