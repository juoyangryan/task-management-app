import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;
  
  constructor(private fb: FormBuilder, private router: Router, private authService: AuthService, private _snackbar: MatSnackBar) {
    this.loginForm = fb.group({
      username: ['', Validators.required], 
      password: ['', Validators.required]
    })
  }

  onSubmit(form: FormGroup) {
    if (form.value.username && form.value.password) {
      this.authService.login(form.value.username, form.value.password)
        .subscribe({
          next: (response) => {
            this.router.navigateByUrl('/home');
            this._snackbar.open("Login Successful!", "Close", {
              horizontalPosition: "end" as MatSnackBarHorizontalPosition, 
              verticalPosition: "top" as MatSnackBarVerticalPosition
            })
          }, 
          error: (error) => {
            this._snackbar.open("Login Failed!", "Close", {
              horizontalPosition: "end" as MatSnackBarHorizontalPosition, 
              verticalPosition: "top" as MatSnackBarVerticalPosition
            })
          }
        })
    }
  }
}
