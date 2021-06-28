import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-sign-uptems-page',
  templateUrl: './sign-uptems-page.component.html',
  styleUrls: ['./sign-uptems-page.component.scss']
})
export class SignUptemsPageComponent implements OnInit {

  signUpForm = new FormGroup({
    email: new FormControl('', [Validators.email, Validators.required ]),
    password: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(20)]),
});

  constructor() { }

  ngOnInit(): void {
  }

}
