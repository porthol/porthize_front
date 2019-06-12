import { Component, OnDestroy, OnInit } from '@angular/core';
import { NbAuthJWTToken, NbAuthService } from '@nebular/auth';
import { UserService } from '../../../services/user.service';
import { AlertService } from '../../../services/alert.service';
import { Subscription } from 'rxjs';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit, OnDestroy {
    private subscribeUser: Subscription;
    profileForm: FormGroup;
    companyForm: FormGroup;
    private user = {} as any;

    constructor(
        private authService: NbAuthService,
        private userService: UserService,
        private alertService: AlertService
    ) {
        this.profileForm = new FormGroup({
            email: new FormControl(),
            firstName: new FormControl(),
            lastName: new FormControl(),
            birthDate: new FormControl(),
            emailing: new FormControl()
        });

        this.companyForm = new FormGroup({
            name: new FormControl(),
            numberId: new FormControl(),
            street: new FormControl(),
            street2: new FormControl(),
            city: new FormControl(),
            zip: new FormControl(),
            country: new FormControl(),
        });
        this.subscribeUser = this.authService.onTokenChange().subscribe((token: NbAuthJWTToken) => {
            if (token.isValid()) {
                this.user = token.getPayload().user;
                this.profileForm.patchValue(this.user);
            }
        });
    }


    ngOnInit() {
    }

    ngOnDestroy(): void {
        this.subscribeUser.unsubscribe();
    }

    saveUser() {
        const resultForm = this.profileForm.getRawValue();
        Object.keys(resultForm).forEach((key) => (resultForm[key] == null) && delete resultForm[key]);
        this.userService.updateCurrent(resultForm).toPromise()
            .then(user => {
                this.user = user;
                this.alertService.success('Changes saved !', '');
            });
    }

    saveCompany() {
    }
}
