import { HttpClient } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { UserInterface } from '../user.interface';
import { AuthService } from '../auth.service';
import { Router} from '@angular/router'

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.scss'],
})
export class RegistrationFormComponent implements OnInit {
  registrationForm: FormGroup;
  authService=inject(AuthService);
  router=inject(Router);

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.registrationForm = new FormGroup({
      username: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required]),
    });
  }

  onSignUp() {
    this.http
      .post<{ user: UserInterface }>('https://api.realworld.io/api/users', {
        user: this.registrationForm.getRawValue(),
      })
      .subscribe((res) => {
        console.log(res);
        localStorage.setItem('token', res.user.token);
        this.authService.currentUserSignal.set(res.user);
        this.router.navigateByUrl('/userAuthForm');
      });
  }
}
