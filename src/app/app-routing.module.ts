import { UpdateBookComponent } from './update-book/update-book.component';
import { CreateBookComponent } from './create-book/create-book.component';
import { BookListComponent } from './book-list/book-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'book', component:BookListComponent },
  {path:'', redirectTo:'book',pathMatch:'full'},
  {path:'create-book' , component:CreateBookComponent},
  {path:'update-book/:id', component:UpdateBookComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
