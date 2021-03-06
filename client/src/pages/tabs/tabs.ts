import { AuthService } from './../../app/services/authService';
import { Component } from '@angular/core';

import { LoginPage } from '../login/login';
import { RegisterPage } from '../register/register';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html',
  providers: [AuthService]
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = LoginPage;
  tab3Root = RegisterPage;

  constructor(
    public auth: AuthService) {
    }
  }

