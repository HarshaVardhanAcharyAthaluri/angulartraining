import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InboxComponent } from './inbox/inbox.component';
import { Product } from './product/product';
import { SentComponent } from './sent/sent.component';

const routes: Routes = [
  {path:'demobox',component:InboxComponent},
  {path:'sent',component:SentComponent},
  {path:'pr',component:Product}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
