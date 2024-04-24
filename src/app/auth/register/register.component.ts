import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  registerForm: FormGroup;
  // matcher = new ConfirmValidParentMatcher();
  
  constructor(private fb: FormBuilder) {
    this.registerForm = fb.group({
      username: ['', Validators.required], 
      password: ['', Validators.required], 
      confirmPassword: ['', [Validators.required, this.passwordsMatchValidator.bind(this)]], 
    })
  }

  onSubmit(form: FormGroup) {
    console.log(form.value)
  }

  // validator: matching passwords
  passwordsMatchValidator (control: FormControl) {
    return control.value === control.root.get('password')?.value ? null : {PasswordNoMatch: true}
  }

}
