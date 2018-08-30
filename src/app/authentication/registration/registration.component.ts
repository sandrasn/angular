import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthenticationService } from "../authentication.service";
import { PasswordValidation } from '../../shared/validators/password.validator';

@Component({
  selector: 'bc-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})

export class RegistrationComponent implements OnInit {
  form:FormGroup;
  message:string;

  constructor(private fb: FormBuilder,
  private authenticationService: AuthenticationService ) { }

  ngOnInit() {
    this.initForm();
  }
private initForm(){
  this.form = this.fb.group(
    {
      username: new FormControl('',[
        Validators.required,
        Validators.pattern(/^(?=^.{8,}$)[a-zA-Z][a-zA-Z0-9]/) // must be 8 character long
      ]),
      email: new FormControl('',[ 
        Validators.required,
       Validators.pattern(/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/)
       ]),
      password:new FormControl('',[
        Validators.required,
        Validators.pattern(/[a-zA-Z0-9]{8,}/) //must be 8 chars
      ]),
      conf_password:new FormControl('',[
        Validators.required,
       Validators.pattern(/[a-zA-Z0-9]{8,}/)
      ])
    },
    {
    validator: PasswordValidation.MatchPassword
    });
}
register () {
  if (this.form.invalid) {
    return;
  }
  this.authenticationService.register(this.form.value).subscribe(
    (response) => { 
      alert(this.message = response.payload.message);
    }
  );
}
}
