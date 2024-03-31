import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FileUploadModule } from 'primeng/fileupload';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { RadioButtonModule } from 'primeng/radiobutton';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { FloatLabelModule } from 'primeng/floatlabel';
import { CharacterdataComponent } from './characterdata/characterdata.component';
import { RouteErrorComponent } from './route-error/route-error.component';

@NgModule({
  declarations: [
    AppComponent,
    CharacterdataComponent,
    RouteErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    NgbModule,
    FileUploadModule,
    HttpClientModule,
    DropdownModule,
    RadioButtonModule,
    InputTextModule,
    TableModule,
    ButtonModule,
    FloatLabelModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
