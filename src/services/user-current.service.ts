import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Observable, Subject } from 'rxjs';
import { NbAuthJWTToken, NbAuthService } from '@nebular/auth';
import { UserService } from './user.service';

@Injectable()
export class UserCurrentService {

    private currentUser: User;
    private userEvent = new Subject<User>();
    private _userEvent = this.userEvent.asObservable();

    constructor(
        private authService: NbAuthService,
        private userService: UserService
    ) {
        this.authService.onTokenChange()
            .subscribe((token: NbAuthJWTToken) => {
                if (token.isValid()) {
                    this.setCurrentUser(token.getPayload().user);
                }
            });

    }

    getCurrentUser(forceReload = false): Observable<User> {
        if (this.currentUser != null && !forceReload) {
            return new Observable(subscriber => subscriber.next(this.currentUser));
        }
        return this.userService.getCurrent();
    }

    setCurrentUser(user: User) {
        this.currentUser = user;
        this.userEvent.next(user);
    }

    get onUserChange(): Observable<User> {
        return this._userEvent;
    }
}
