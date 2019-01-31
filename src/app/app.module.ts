import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InstructorsService } from './service/instructors-service.service';
import { InstructorComponent } from './component/instructor/instructor.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormControlDirective, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    InstructorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [InstructorsService, HttpClient, FormControlDirective, FormControlDirective],
  bootstrap: [AppComponent]
})
export class AppModule { }
