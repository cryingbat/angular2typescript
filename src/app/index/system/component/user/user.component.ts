import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserValidators } from '../../valid/userValid';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.less']
})
export class UserComponent implements OnInit {
  
  constructor(private fb: FormBuilder) { }

  public userForm: FormGroup;
  public password: string;
  public confirmPwd: string;
  submitting: boolean; // 是否可以提交
  ngOnInit() {
    this.submitting = false;

    this.initValid();
  }
  initValid() {
    this.userForm = this.fb.group({
      password: ['', Validators.compose([
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(8),
        UserValidators.equalFor('confirmPwd')
      ])],
      confirmPwd: ['', Validators.compose([
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(8),
        UserValidators.equalTo('password')
      ])]
    });
  }
  save() {
    console.log(this.userForm.value)
    this.password = this.userForm.value.password;
    this.confirmPwd = this.userForm.value.confirmPwd;
  }
}
