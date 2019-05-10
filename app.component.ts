import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { Pages } from './interface/page';

import { AuthenticationService } from '../service/authentication.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {

  public appPages: Array<Pages>;
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private authenticationService: AuthenticationService,
    private router: Router
  ) {
    this.appPages = [
      {
        title: 'Manager owners',
        url: '/manager',
        icon: 'md-contact',
      },
      {
        title: 'Update owners',
        url: '/update',
        icon: 'arrow-round-up',
      },
      {
        title: 'Delete owners',
        url: '/delete',
        icon: 'trash',
      },
      // {
      //   title: 'List',
      //   url: '/list',
      //   icon: 'list'
      // },
      {
        title: 'Search owners',
        url: '/owners',
        icon: 'search',
      },
      {
        title: 'Security',
        url: '/contact',
        icon: 'book',
      },
      {
        title: 'Report',
        url: '/corporation',
        icon: 'clipboard',
      },
    ];
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      // this.router.navigate(['/']);
      // this.authenticationService.authenticationState.subscribe(state => {
      //   if (state) {
      //     console.log(state)
      //     this.router.navigate(['/manager']);
      //   } else {
      //     this.router.navigate(['/']);
      //   }
      // })
    });
  }
}
