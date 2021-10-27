import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { ViewItemsComponent } from './view-items/view-items.component';
import { AddItemsComponent } from './add-items/add-items.component';
import { FormsModule } from '@angular/forms';
import{HttpClientModule} from '@angular/common/http'
import { RestorentService } from './restorent.service';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    ViewItemsComponent,
    AddItemsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [RestorentService],
  bootstrap: [AppComponent],
})
export class AppModule {}
