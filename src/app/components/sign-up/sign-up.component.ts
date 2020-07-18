import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  confirmPasswordVisibleIcon:string = 'eye-slash';
  confirmPasswordType:string = 'password'

  constructor() { }

  ngOnInit() {
  }

  confirmPasswordVisibleIconToggle = () => {
    this.confirmPasswordVisibleIcon = (this.confirmPasswordVisibleIcon === 'eye-slash') ? 'eye' : 'eye-slash'
    this.confirmPasswordType = (this.confirmPasswordType === 'password') ? 'text' : 'password'
  }

}
