import { Component, OnDestroy, OnInit } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { AlertService } from '../../../services/alert.service';
import { Subscription } from 'rxjs';
import { FormControl, FormGroup } from '@angular/forms';
import { CompanyService } from '../../../services/company.service';
import { flatMap } from 'rxjs/operators';
import { UserCurrentService } from '../../../services/user-current.service';
import { User } from '../../../models/user';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit, OnDestroy {
    private subscribeProfile: Subscription;
    profileForm: FormGroup;
    companyForm: FormGroup;
    private user: User;
    private company = {} as any;

    constructor(
        private userCurrentService: UserCurrentService,
        private userService: UserService,
        private companyService: CompanyService,
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
            state: new FormControl(),
            city: new FormControl(),
            zip: new FormControl(),
            country: new FormControl()
        });

        this.subscribeProfile = this.userCurrentService.getCurrentUser()
            .pipe(
                flatMap((user: User) => {
                    if (user !== this.user) {
                        this.profileForm.patchValue(user);
                    }
                    this.user = user;
                    console.log('receiving user');
                    console.log(this.user);
                    return this.companyService.getCurrent();
                })
            ).subscribe((company: any) => {
                console.log(company);
                this.company = company;
                this.companyForm.patchValue(company);
            });
    }


    ngOnInit() {
    }

    ngOnDestroy(): void {
        this.subscribeProfile.unsubscribe();
    }

    saveUser() {
        const resultForm = this.profileForm.getRawValue();
        Object.keys(resultForm).forEach((key) => (resultForm[key] == null) && delete resultForm[key]);
        this.userService.updateCurrent(resultForm).toPromise()
            .then((user: User) => {
                this.userCurrentService.setCurrentUser(user);
                this.alertService.success('User changes saved !', 'Success');
            });
    }

    saveCompany() {
        const resultForm = this.companyForm.getRawValue();
        Object.keys(resultForm).forEach((key) => (resultForm[key] == null) && delete resultForm[key]);
        this.companyService.updateCurrent(resultForm).toPromise()
            .then(company => {
                this.company = company;
                this.alertService.success('Company changes saved !', 'Success');
            });
    }
}
