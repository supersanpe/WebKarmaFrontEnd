import { Injectable } from '@angular/core';
import { AuthConfig, OAuthService } from 'angular-oauth2-oidc';
import { Subject } from 'rxjs';

const oAuthConfig: AuthConfig = {
  issuer: 'https://accounts.google.com',
  strictDiscoveryDocumentValidation: false,
  redirectUri: window.location.origin,
  clientId: '737094244190-5ht7pthr3emehj5u7q1fqctfbm9p6mjd.apps.googleusercontent.com',
  scope: 'openid profile email'
}

export interface UserInfo {
  info: {
    sub: string,
    email: string,
    given_name: string,
    family_name: string,
    picture: string,
    locale: string,
  }
}

@Injectable({
  providedIn: 'root'
})

export class GoogleApiService {

  userProfileSubject = new Subject<UserInfo>()

  constructor(private readonly oAuthService: OAuthService) {
    oAuthService.configure(oAuthConfig)
    oAuthService.logoutUrl = window.location.origin /*'https://www.google.com/accounts/Logout'*/
    this.oAuthService.loadDiscoveryDocument().then(() => {
      this.oAuthService.tryLoginImplicitFlow().then(() => {
        if (this.oAuthService.hasValidAccessToken()) {
          this.oAuthService.loadUserProfile().then((userProfile) => {
            this.userProfileSubject.next(userProfile as UserInfo)
          })
        }
      })
    })
  }

  signIn() {
    this.oAuthService.loadDiscoveryDocument().then(() => {
      this.oAuthService.tryLoginImplicitFlow().then(() => {
        if (!this.oAuthService.hasValidAccessToken()) {
          this.oAuthService.initLoginFlow()
        }
      })
    })
  }

  isLoggedIn(): boolean {
    return this.oAuthService.hasValidAccessToken()
  }

  signOut() {
    this.oAuthService.logOut()
  }
  
}
