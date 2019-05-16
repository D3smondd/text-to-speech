import { Injectable } from '@angular/core';
import { HttpClient, HttpParams }  from  '@angular/common/http';
import { Observable } from 'rxjs/Observable';

export class User implements Auth {
    username: string = null;
    password: string = null;
    first_name: string = null;
    last_name: string = null;
    email: string = null;

    constructor() {}
}
export interface Auth {
    username: string,
    password: string
}

@Injectable()
export class AuthService {
    userApi: string;
    loggedIn: boolean;
    currentUser: User;
    authToken: string;

    constructor(public _http: HttpClient) {
        this.userApi = "http://localhost:3000/api/"
        this.authToken = 'foobarbaz';

        let auth: Auth;
        try {
            auth = JSON.parse(localStorage.getItem('auth')) as Auth;
            if (auth) {
                this.logIn(auth)
                    .subscribe((user: User) => {
                        if (user) {
                            // Logged in
                            localStorage.setItem('auth', JSON.stringify({
                                username: user.username,
                                password: user.password
                            }));
                            this.currentUser = user;
                        }
                        else {
                            // Did not log in
                            localStorage.removeItem('auth')
                        }
                    })
            }
        } catch (err) {
            console.log('Failed to retrieve auth', err);
            localStorage.removeItem('auth');
        }
    }

    // @returns boolean - Success?
    registerUser(user: User): Observable<User> {
        let params = new HttpParams();
        params.set('access_token', this.authToken);

        return this._http.post<User>(`${this.userApi}/User`, user, {
            params: params
        });
    }

    logIn(auth: Auth): Observable<User> {
        let params = new HttpParams();
        params.set('username', auth.username);
        params.set('password', auth.password);
        params.set('access_token', this.authToken);

        return this._http.get<User>(`${this.userApi}/Users`, {
            params: params
        });
    }
}