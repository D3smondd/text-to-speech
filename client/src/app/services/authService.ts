import { Injectable } from '@angular/core';
import { HttpClient, HttpParams }  from  '@angular/common/http';
import { Observable } from 'rxjs/Observable';

export class User implements Authentication, Authorization {
    id: string = null;
    username: string = null;
    password: string = null;
    firstName: string = null;
    lastName: string = null;
    email: string = null;

    token: string = null;
    userId: string = null;
    ttl: number = null;
    created: string = null;

    constructor() {}
}
export interface Authentication {
    username: string,
    password: string
}
export interface Authorization {
    id: string,
    ttl: number,
    created: string,
    userId: string,
    token: string
}

@Injectable()
export class AuthService {
    currentUser: User = new User();
    userApi: string;
    loggedIn: boolean;
    authToken: string;

    constructor(public _http: HttpClient) {
        this.userApi = "http://localhost:3000/api/"
        this.authToken = 'foobar';

        try {
            let currentUser = JSON.parse(localStorage.getItem('auth')) as User;
            if (currentUser) {
                this.currentUser = currentUser;
                console.log('Retrieved user', this.currentUser);
            }
        } catch (err) {
            console.log('Failed to retrieve user', err);
            localStorage.removeItem('auth');
        }
    }

    // @returns boolean - Success?
    registerUser(user: User) {
        let params = new HttpParams();
        params.set('access_token', this.authToken);

        return this._http.post<User>(`${this.userApi}/appUsers`, user, {
            params: params
        }).subscribe(function(_user: User) {
            console.log('Registered user:', _user);

            this.currentUser = _user;
            localStorage.setItem('auth', JSON.stringify(this.currentUser));
        });
    }

    logIn(auth: Authentication) {
        let params = new HttpParams();
        params.set('access_token', this.authToken);

        return this._http.post(`${this.userApi}/appUsers/login`, {
            username: auth.username, 
            password: auth.password
        }, {
            params
        }).subscribe(function(user: Authorization) {
            console.log('Logged in user:', user);

            this.currentUser = Object.assign({ username: auth.username }, user);
            localStorage.setItem('auth', JSON.stringify(this.currentUser));
        });
    }

    isLoggedIn() {
        return this.currentUser.token
    }
}