import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Alert, AlertType } from '../models/alert';
import { NavigationStart, Router } from '@angular/router';
import { NbToastrService } from '@nebular/theme';

@Injectable()
export class AlertService {
    private subject = new Subject<Alert>();
    private keepAfterRouteChange = false;

    constructor(private router: Router, private toastrService: NbToastrService) {
        // clear alert messages on route change unless 'keepAfterRouteChange' flag is true
        router.events.subscribe(event => {
            if (event instanceof NavigationStart) {
                if (this.keepAfterRouteChange) {
                    // only keep for a single route change
                    this.keepAfterRouteChange = false;
                } else {
                    // clear alert messages
                    this.clear();
                }
            }
        });
    }

    getAlert(): Observable<any> {
        return this.subject.asObservable();
    }

    success(message: string, title?: string, keepAfterRouteChange = false) {
        this.alert(AlertType.Success, title, message, keepAfterRouteChange);
        this.toastrService.success(message, title);
    }

    error(message: string, title?: string, keepAfterRouteChange = false) {
        this.alert(AlertType.Error, title, message, keepAfterRouteChange);
        this.toastrService.danger(message, title);
    }

    info(message: string, title?: string, keepAfterRouteChange = false) {
        this.alert(AlertType.Info, title, message, keepAfterRouteChange);
        this.toastrService.info(message, title);
    }

    warn(message: string, title?: string, keepAfterRouteChange = false) {
        this.alert(AlertType.Warning, title, message, keepAfterRouteChange);
        this.toastrService.warning(message, title);
    }

    alert(type: AlertType, message: string, title?: string, keepAfterRouteChange = false) {
        this.keepAfterRouteChange = keepAfterRouteChange;
        this.subject.next({ type, message } as Alert);
    }

    clear() {
        // clear alerts
        this.subject.next();
    }
}
