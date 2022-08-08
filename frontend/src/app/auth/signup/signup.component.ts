import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor(private auth: AuthService, private formbuilder: FormBuilder) { }

  form: FormGroup = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
  });

  ngOnInit(): void {
    this.form = this.formbuilder.group({
      name: ['',[Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.email, Validators.minLength(10), Validators.required]],
      password: ['', [
        Validators.required,
        Validators.minLength(6),
      ]],
    });
  }
  get f() {
    return this.form.controls;
  }

  exist: string = '';
  successfull: string = '';

  register(){
    let user = {
      name: this.form.value.name,
      email: this.form.value.email,
      password: this.form.value.password
    }
  

    console.log(user)
    if(this.form.invalid){
      return;
    }else {
      this.auth.register(user).subscribe(
        {
          next: (res: any)=>{
            console.log(res.message);
            this.successfull = res.message;
          }, error: (err: any)=>{
            console.log(err.error.exist);
            this.exist = err.error.exist;
          }
        }
      );
    }
  }

}
