import { Component, OnInit } from '@angular/core';
import { NbAuthJWTToken, NbAuthService } from '@nebular/auth';
import { FormControl, FormGroup } from '@angular/forms';
import { UserService } from '../../../services/user.service';
import { AlertService } from '../../../services/alert.service';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
    constructor(
        private authService: NbAuthService,
        private userService: UserService,
        private alertService: AlertService
    ) {
        this.authService.onTokenChange().subscribe((token: NbAuthJWTToken) => {
            if (token.isValid()) {
                this.user = token.getPayload().user;
                this.profileForm.patchValue(this.user);
            }
        });
    }

    user = {} as any;
    profileForm = new FormGroup({
        email: new FormControl(''),
        firstName: new FormControl(''),
        lastName: new FormControl(''),
        birthDate: new FormControl(''),
        emailing: new FormControl('')
    });

    ngOnInit() {}

    saveUser() {
        this.userService.updateCurrent(this.profileForm.getRawValue()).subscribe(user => {
            this.user = user;
            this.alertService.success('Changes saved !', '');
        });
    }
}
