import { AbstractControl } from '@angular/forms';

export class PasswordValidation {
  static MatchPassword(control: AbstractControl) {
    const
      password = control.get('password').value,
      confirmPassword = control.get('conf_password').value;
    if (password !== confirmPassword) {
      control.get('conf_password').setErrors({matchPassword: true});
    } else {
      return null;
    }
  }
}