import { userLoginCriteria } from './../models/employe.model';
import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { CommonModule, NgIf, NgIfContext } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports: [ReactiveFormsModule, NgIf, CommonModule],
  standalone: true,
})
export class LoginComponent {


  loginForm = this.fb.group({
    email: [undefined, [Validators.required, Validators.email]],
    password: [undefined, [Validators.required]],
  });

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}


  hasError(controlName: string, errorName: string): boolean {
    const control = this.loginForm.get(controlName);
    return control?.touched && control?.errors?.[errorName] ? true : false;
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const rawValues = this.loginForm.value;
      const criteria: userLoginCriteria = {
        email: rawValues.email ?? undefined, // Convert `null` to `undefined`
        password: rawValues.password ?? undefined, // Convert `null` to `undefined`
      };

      this.router.navigate(['/dashboard']);

      // this.authService.login(criteria).subscribe({
      //   next: (employe) => {
      //     console.log('Login successful', employe);
      //     this.router.navigate(['/dashboard']);
      //   },
      //   error: (error) => {
      //     console.error('Login failed', error);
      //   },
      // });
    }
  }
}
