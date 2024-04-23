import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, ValidatorFn, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

export class ConfirmValidParentMatcher implements ErrorStateMatcher{
  isErrorState(control: AbstractControl<any, any> | null, form: FormGroupDirective | NgForm | null): boolean {
    return control && control.parent && control.parent.invalid && control.touched || false
  }
}

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
    }, { validators: this.passwordsMatchValidator })
  }

  onSubmit(form: FormGroup) {
    console.log(form.value)
  }

  // validator: matching passwords
  passwordsMatchValidator (control: FormControl) {
    return control.value === control.value.password ? null : {PasswordNoMatch: true}
  }

}
