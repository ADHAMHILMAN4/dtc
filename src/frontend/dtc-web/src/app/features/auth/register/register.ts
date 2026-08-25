import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';

@Component({
    selector: 'app-register',
    imports: [
        RouterLink,
        FormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        MatCheckboxModule,
        MatIconModule,
        MatCardModule,
    ],
    templateUrl: './register.html',
    styleUrl: './register.scss',
})
export class Register {
    hidePassword = true;
    hideConfirmPassword = true;

    username = '';
    email = '';
    password = '';
    confirmPassword = '';
    termsAccepted = false;

    onSubmit(): void {
        console.log({
            username: this.username,
            email: this.email,
            password: this.password,
            confirmPassword: this.confirmPassword,
            termsAccepted: this.termsAccepted,
        });
    }
}
