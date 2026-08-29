import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';

@Component({
    selector: 'app-login',
    imports: [
        FormsModule,
        RouterLink,
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        MatIconModule,
        MatCheckboxModule,
    ],
    templateUrl: './login.html',
    styleUrl: './login.scss',
})
export class Login {
    protected readonly hidePassword = signal(true);

    protected togglePasswordVisibility(): void {
        this.hidePassword.update((value) => !value);
    }

    protected onSubmit(): void {
        console.log('Login submitted');
    }
}
