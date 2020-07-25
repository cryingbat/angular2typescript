import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-live-valid',
  templateUrl: './live-valid.component.html',
  styleUrls: ['./live-valid.component.less']
})
export class LiveValidComponent implements OnInit {

    constructor(private fb: FormBuilder) { }
    public info = null;
    public validForm: FormGroup;
    public firstName: string;
    public lastName: string;
    submitting: boolean; // 是否可以提交
    rule = 1;
    ngOnInit() {
      this.submitting = false;
  
      this.initValid();
      this.info = new Total()
      console.log(this.info);
      console.log(this.info.t2 instanceof Array);
    }
    initValid() {
      this.validForm = this.fb.group({
        firstName: ['', []],
        lastName: ['', []]
      });
    }
    save() {
      this.firstName = this.validForm.value.firstName;
      this.lastName = this.validForm.value.lastName;
    }

    changeRules() {
        if(this.rule === 1) {
            this.validForm.get('firstName').setValidators([Validators.pattern(/[A-Z]+$/g)])
            this.rule = 2;
        } else {
            this.validForm.get('firstName').setValidators([Validators.required, Validators.pattern(/[0-9a-z]+$/g)])
            this.rule = 1;
        }
    }

}

class Info1{
    constructor() {}
    public info = {
        age: 20,
        name: 'zhangsan'
    }
}

class Info2 {
    constructor() {}

    public info = [
        'xxx1',
       new optical()
    ] 
    public info2 = [
        'xxx2',
        new throe()
    ]
}

class Total{
    public t1 = null;
    public t2 = null;
    constructor() {
        this.t1 = ['x', new Info1()];
        this.t2 = ['xx', new Info2()];
    }
}

class optical {
    public in1 = 1;
    public in2 = 2;
    constructor() {}
}
class throe {
    public in1 = 3;
    public in2 = 5;
    constructor() {}
}