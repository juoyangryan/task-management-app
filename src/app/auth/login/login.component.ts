import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;
  
  constructor(private fb: FormBuilder, private router: Router, private authService: AuthService) {
    this.loginForm = fb.group({
      username: ['', Validators.required], 
      password: ['', Validators.required]
    })
  }

  onSubmit(form: FormGroup) {
    if (form.value.username && form.value.password) {
      this.authService.login(form.value.username, form.value.password)
        .subscribe(
          () => {
            console.log("User is logged in");
            this.router.navigateByUrl('/home');
          }
        );
    }
  }
}
