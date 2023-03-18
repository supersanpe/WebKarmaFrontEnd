import { Component } from '@angular/core';
import { GoogleApiService, UserInfo } from './services/google-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'WebKarma';

  userInfo?: UserInfo;

  constructor(private readonly googleApi: GoogleApiService) {
    googleApi.userProfileSubject.subscribe((info) => {
      this.userInfo = info;
    });
  }

  isLoggedIn(): boolean {
    return this.googleApi.isLoggedIn();
  }

  login() {
    this.googleApi.signIn();
  }

  logout() {
    this.googleApi.signOut();
  }
}
