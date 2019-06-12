import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable()
export class CompanyService {
    private resourceUrl = environment.apiUrl + '/companies';

    constructor(private httpClient: HttpClient) {}

    get(id: string, criteria = {} as any) {
        return this.httpClient.get(this.resourceUrl + '/' + id, { params: criteria });
    }

    getCurrent() {
        return this.httpClient.get(this.resourceUrl + '/current');
    }

    getAll(criteria = {} as any) {
        return this.httpClient.get(this.resourceUrl, { params: criteria });
    }

    create(company) {
        return this.httpClient.post(this.resourceUrl, company);
    }

    update(id: string, company: any) {
        return this.httpClient.put(this.resourceUrl + '/' + id, company);
    }

    updateCurrent(company) {
        return this.httpClient.put(this.resourceUrl + '/current', company);
    }
}
