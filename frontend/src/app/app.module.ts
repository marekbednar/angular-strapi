import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

// Reactive Form
import {ReactiveFormsModule} from "@angular/forms";

// App routing modules
import {AppRoutingModule} from './app-routing.module';

// App components
import {AppComponent} from './app.component';
import {SignInComponent} from './components/sign-in/sign-in.component';
import {SignUpComponent} from './components/sign-up/sign-up.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {ForgotPasswordComponent} from './components/forgot-password/forgot-password.component';
import {VerifyEmailComponent} from './components/verify-email/verify-email.component';

// Auth service
import {AuthService} from "./shared/services/auth.service";
import {UsersService} from "./shared/services/users.service";
import {HeaderComponent} from './components/header/header.component';
import {NavigationComponent} from './components/navigation/navigation.component';
import {MembersComponent} from './components/members/members.component';
import {ArticlesComponent} from "./shared/ui/articles/articles.component";
import {ArticleComponent} from "./shared/ui/article/article.component";
import {CategoryComponent} from "./shared/ui/category/category.component";

@NgModule({
	declarations: [
		AppComponent,
		SignInComponent,
		SignUpComponent,
		DashboardComponent,
		ForgotPasswordComponent,
		VerifyEmailComponent,
		HeaderComponent,
		NavigationComponent,
		MembersComponent,
		ArticlesComponent,
		ArticleComponent,
		CategoryComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		ReactiveFormsModule,
		HttpClientModule
	],
	providers: [AuthService, UsersService],
	bootstrap: [AppComponent]
})

export class AppModule {}