import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  constructor(private auth: AuthService, private formbuilder: FormBuilder, private route: Router) { }

  form: FormGroup = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });
  
  ngOnInit(): void {
    this.form = this.formbuilder.group({
      email: ['', [Validators.email, Validators.minLength(10), Validators.required]],
      password: ['', [
        Validators.required,
        Validators.minLength(6),
      ]],
    });
  }

  successfull: string = '';
  password: string = '';

  get f() {
    return this.form.controls;
  }
  

  login(){
    let user = {
      email: this.form.value.email,
      password: this.form.value.password
    }


    if(this.form.invalid){
      return;
    }else {
      this.auth.login(user).subscribe(
        {
          next: (res: any)=>{
            this.successfull = res.message;
            // console.log(res.token);

            this.auth.isLoggIn = true;
            localStorage.setItem('token', res.token);

            setTimeout(() => {
              this.route.navigate(['/note'])
            }, 800);
          }, error: (err: any)=>{
            this.password = err.error.error;
            setTimeout(() => {
              this.password = '';
            }, 2000);
          }
        }
      );
    }
  }

}
