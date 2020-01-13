import {SomeService} from "./some.service";
import {HttpClient} from "@angular/common/http";

export function SOME_SERVICE_FACTORY(parentService: SomeService, http: HttpClient) {
	return parentService || new SomeService(http);
}

import {NgModule} from "@angular/core";

@NgModule({
	providers: [
		{
		provide: SomeService,
		deps: [[SomeService]],
		useFactory: SOME_SERVICE_FACTORY
		}
	]
})
export class UiModule {

}