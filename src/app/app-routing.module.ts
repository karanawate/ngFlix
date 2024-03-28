import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ShowDetailsComponent } from './pages/show-details/show-details.component';
import { ShowsListComponent } from './pages/shows-list/shows-list.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'list', component: ShowsListComponent },
  { path: 'detail/:id', component: ShowDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
