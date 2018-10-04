import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validator, Validators} from '@angular/forms';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    message: string;
    loginForm: FormGroup;

    constructor(private fb: FormBuilder) {
    }

    ngOnInit() {
        this.createForm();
    }

    onSubmit() {

    }

    createForm() {
        this.loginForm = this.fb.group({
            login: ['admin', Validators.required],
            password: ['12345', Validators.required],
        });
    }

}
