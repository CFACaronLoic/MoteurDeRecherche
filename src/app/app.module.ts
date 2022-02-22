import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PopularComponent } from './components/popular/popular.component';
import { CircleImageComponent } from './components/circle-image/circle-image.component';
import { NewComponent } from './components/new/new.component';
import { BookService } from './services/book.service';
import { BookpageComponent } from './components/bookpage/bookpage.component';
import { SearchComponent } from './components/search/search.component';
import { HomeComponent } from './components/home/home.component';
import { BooksearchComponent } from './components/booksearch/booksearch.component';
import { BookresultComponent } from './components/bookresult/bookresult.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PopularComponent,
    CircleImageComponent,
    NewComponent,
    BookpageComponent,
    SearchComponent,
    HomeComponent,
    BooksearchComponent,
    BookresultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    NgbModule,
    HttpClientModule
    
  ],
  providers: [BookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
