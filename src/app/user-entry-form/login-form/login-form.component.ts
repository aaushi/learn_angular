import { HttpClient } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { UserInterface } from '../user.interface';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent implements OnInit {
  loginForm: FormGroup;
  authService = inject(AuthService);
  router = inject(Router);

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required]),
    });
  }
  onLogin() {
    console.log('on login button clicked');
    this.http
      .post<{ user: UserInterface }>('https://api.realworld.io/api/users/login', {
        user: this.loginForm.getRawValue(),
      })
      .subscribe((res) => {
        console.log(res);
        localStorage.setItem('token', res.user.token);
        this.authService.currentUserSignal.set(res.user);
        this.router.navigateByUrl('/welcome');
      });
  }
}
