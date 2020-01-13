import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Injectable({ providedIn: 'root' })
export class SomeService {

	constructor(protected http: HttpClient) {}

	getData() {
		return this.http.get<any>('/path/to/api');
	}

}