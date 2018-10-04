import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

import 'rxjs/add/operator/map';

@Injectable()
export class AuthentificationService {

    url = 'http://192.168.99.100:2403/users';

    constructor(private http: Http) {
    }

    login(username: string, password: string) {
        this.url += '?usrname=' + username + '&password=' + password;
        return this.http.get(this.url).map(resp => {
            let user: {};
            if (resp.json().length > 0) {
                user = resp.json()[0];
                localStorage.setItem('currentUser', JSON.stringify(user));
            } else {
                throw new Error('Auth Error');
            }
        });
    }

}
