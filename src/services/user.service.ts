import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { User } from '../models/user';
import { Observable } from 'rxjs';

@Injectable()
export class UserService {
    private resourceUrl = environment.apiUrl + '/users';

    constructor(private httpClient: HttpClient) {}

    get(id: string, criteria = {} as any) {
        return this.httpClient.get(this.resourceUrl + '/' + id, { params: criteria }) as Observable<User>;
    }

    getCurrent() {
        return this.httpClient.get(this.resourceUrl + '/current') as Observable<User>;
    }

    getAll(criteria = {} as any) {
        return this.httpClient.get(this.resourceUrl, { params: criteria }) as Observable<User[]>;
    }

    create(user) {
        return this.httpClient.post(this.resourceUrl, user) as Observable<User>;
    }

    update(id: string, user: any) {
        return this.httpClient.put(this.resourceUrl + '/' + id, user) as Observable<User>;
    }

    updateCurrent(user) {
        return this.httpClient.put(this.resourceUrl + '/current', user) as Observable<User>;
    }
}
