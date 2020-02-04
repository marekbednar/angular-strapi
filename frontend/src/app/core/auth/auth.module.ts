import { NgModule, ModuleWithProviders, Injector } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgStrapiAuthService } from './auth.service';
import { NgStrapiJwtInterceptorService } from './jwt-interceptor.service';

import { NgStrapiAuthConfig } from './auth.config';

// using https://github.com/gilhardl/ng-strapi-auth/tree/master/projects/ng-strapi-auth

@NgModule({
	declarations: [ ],
	imports: [
		CommonModule
	],
	exports: [ ]
})
export class NgStrapiAuthModule {

	public static forRoot(config: NgStrapiAuthConfig): ModuleWithProviders {
		return {
			ngModule: NgStrapiAuthModule,
			providers: [
				NgStrapiAuthService,
				{ provide: 'config', useValue: config },
				NgStrapiJwtInterceptorService
			]
		};
	}

}

export function ngStrapiAuthFactory(injector: Injector): () => Promise<boolean> {
	const authSrv = injector.get(NgStrapiAuthService);
	return async() => {
		try {
			await authSrv.autoSignIn();
			return true;
		} catch (err) {
			return false;
		}
	}
}