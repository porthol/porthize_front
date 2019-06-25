import { Component, OnDestroy, OnInit } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { AlertService } from '../../../services/alert.service';
import { Subscription } from 'rxjs';
import { FormControl, FormGroup } from '@angular/forms';
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
    private user: User;

    constructor(
        private userCurrentService: UserCurrentService,
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

        this.subscribeProfile = this.userCurrentService.getCurrentUser().subscribe((user: User) => {
            if (user !== this.user) {
                this.profileForm.patchValue(user);
            }
            this.user = user;
        });
    }

    ngOnInit() {}

    ngOnDestroy(): void {
        this.subscribeProfile.unsubscribe();
    }

    saveUser() {
        const resultForm = this.profileForm.getRawValue();
        Object.keys(resultForm).forEach(key => resultForm[key] == null && delete resultForm[key]);
        this.userService.updateCurrent(resultForm).subscribe((user: User) => {
            this.userCurrentService.setCurrentUser(user);
            this.alertService.success('User changes saved !', 'Success');
        });
    }
}
