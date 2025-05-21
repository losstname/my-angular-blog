import { Routes } from '@angular/router';
import {HomeComponent} from "./features/home/home.component";
import {PostDetailComponent} from "./features/post-detail/post-detail.component";

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'post/:id', component: PostDetailComponent },
  { path: '**', redirectTo: '' }
];
