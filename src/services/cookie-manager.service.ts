import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie';

@Injectable()
export class CookieManagerService {

    constructor(private cookieService: CookieService) {
    }

    getCookieStringByKey(cookieKey: string): string {
        return this.cookieService.get(cookieKey);
    }

    setCookieString(cookieKey: string, cookieStringValue: string) {
        this.cookieService.put(cookieKey, cookieStringValue);
    }

    getCookieObject(cookieKey: string): any {
        return this.cookieService.getObject(cookieKey);
    }

    setCookieObject(cookieKey: string, cookieObjectValue: any) {
        this.cookieService.putObject(cookieKey, cookieObjectValue);
    }

    removeCookie(cookieKey: string) {
        this.cookieService.remove(cookieKey);
    }

}
