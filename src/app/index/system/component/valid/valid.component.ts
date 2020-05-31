import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DoubleValidators } from '../../valid/doubleValid';

@Component({
  selector: 'app-valid',
  templateUrl: './valid.component.html',
  styleUrls: ['./valid.component.less']
})
export class ValidComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  public validForm: FormGroup;
  public firstName: string;
  public lastName: string;
  submitting: boolean; // 是否可以提交
  ngOnInit() {
    this.submitting = false;

    this.initValid();
  }
  initValid() {
    this.validForm = this.fb.group({
      firstName: ['', Validators.compose([
        Validators.required,
        DoubleValidators.equalFor('lastName')
      ])],
      lastName: ['', Validators.compose([
        Validators.required,
        DoubleValidators.equalTo('firstName')
      ])]
    });
  }
  save() {
    console.log(this.validForm.value)
    this.firstName = this.validForm.value.firstName;
    this.lastName = this.validForm.value.lastName;
  }

}
