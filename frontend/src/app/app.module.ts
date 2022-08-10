// =============modules===========================================================
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

// +==========================component==============================
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';

import { NoteComponent } from './note/note.component';
import { NavComponent } from './nav/nav.component';
import { NoteCardComponent } from './note-card/note-card.component';
import { CreateComponent } from './create/create.component';
import { AuthService } from './auth/auth.service';
import { SecurityGuard } from './guard/security.guard';
import { JwtInterceptor } from './interceptor/jwt.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SignupComponent,
    SigninComponent,
    NoteComponent,
    NavComponent,
    NoteCardComponent,
    CreateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule, 
    AngularEditorModule
  ],
  providers: [AuthService, SecurityGuard,{provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
