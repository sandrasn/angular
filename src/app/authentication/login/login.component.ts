import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthenticationService } from "../authentication.service";
import { UserService } from '../../shared/services/user.service';



@Component({
  selector: 'bc-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form:FormGroup;
  message:string;

  constructor(private fb: FormBuilder,
  private loginservice: AuthenticationService,
  private userService: UserService ) { }

  ngOnInit() {
    this.initForm();
  }
private initForm(){
  this.form = this.fb.group(
    {
      email: new FormControl('',[ 
        Validators.required,
        //Validators.pattern(/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/)
       ]),
      password:new FormControl('',[
        Validators.required,
        //Validators.pattern(/[a-zA-Z0-9]{8,}/)
      ])
    })
}
login () {
  if (this.form.invalid) {
    return;
  }
  this.loginservice.login(this.form.value).subscribe(
    (response: any) => {
      //alert(this.message = response.payload.message);
      this.userService.setToken(response.payload.token);
      this.userService.getUserProfile().subscribe();
      // this.router.navigate(['feed']);
     }
  );
}


}
