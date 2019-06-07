import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable()
export class UserService {
    private resourceUrl = environment.apiUrl + '/users';

    constructor(private httpClient: HttpClient) {}

    get(id: string, criteria = {} as any) {
        return this.httpClient.get(this.resourceUrl + '/' + id, { params: criteria });
    }

    getCurrent(id: string, criteria = {} as any) {
        return this.httpClient.get(this.resourceUrl + '/current', { params: criteria });
    }

    getAll(criteria = {} as any) {
        return this.httpClient.get(this.resourceUrl, { params: criteria });
    }

    create(user) {
        return this.httpClient.post(this.resourceUrl, user);
    }

    update(id: string, user: any) {
        return this.httpClient.put(this.resourceUrl + '/' + id, user);
    }

    updateCurrent(user) {
        return this.httpClient.put(this.resourceUrl + '/current', user);
    }
}
