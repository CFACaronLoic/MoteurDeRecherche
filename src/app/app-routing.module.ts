import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { BookpageComponent } from './components/bookpage/bookpage.component';
import { SearchComponent } from './components/search/search.component';
import { BookresultComponent } from './components/bookresult/bookresult.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full' },
  {path: 'home', component: HomeComponent },
  {path: 'search', component: SearchComponent },
  {path: 'book', component: BookpageComponent },
  {path: 'bookresult', component: BookresultComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
