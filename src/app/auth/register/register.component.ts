import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, ValidatorFn, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  registerForm: FormGroup;
  // matcher = new ConfirmValidParentMatcher();
  
  constructor(private fb: FormBuilder, private authService: AuthService) {
    this.registerForm = fb.group({
      username: ['', Validators.required], 
      password: ['', Validators.required], 
      confirmPassword: ['', [Validators.required, this.passwordsMatchValidator.bind(this)]], 
    })
  }

  onSubmit(form: FormGroup) {
    if (form.valid) {
      this.authService.register(form.value.username, form.value.password).subscribe((response) => {
        console.log(response);
      })
      console.log(form.value)
    }
  }

  // validator: matching passwords
  passwordsMatchValidator (control: FormControl) {
    return control.value === control.root.get('password')?.value ? null : {PasswordNoMatch: true}
  }

}
