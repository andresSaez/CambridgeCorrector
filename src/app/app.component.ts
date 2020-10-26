import { Component, OnInit } from '@angular/core';

import { NavController, Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

export interface AppPage {
  title: string;
  url: string;
  color: string;
}
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedIndex = null;
  public appPages = [
    {
      title: 'A2 (KET)',
      url: '/folder/a2',
      color: 'primary'
    },
    {
      title: 'B1 (PET)',
      url: '/folder/b1',
      color: 'success'
    },
    {
      title: 'B2 First',
      url: '/folder/b2',
      color: 'warning'
    },
    {
      title: 'C1 Advanced',
      url: '/folder/c1',
      color: 'danger'
    },
    {
      title: 'C2 Proficiency',
      url: '/folder/c2',
      color: 'medium'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private navController: NavController
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit() {
  }

  navToPage(appPage): void {
    this.navController.navigateForward(`${appPage.url}`, {state: { appPage }});
  }
}
