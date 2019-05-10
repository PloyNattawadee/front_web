import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

//declarations
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms'; 
import { IonicStorageModule } from '@ionic/storage';
import { AuthGuard } from '../auth/guards/auth.guard';
import { AuthenticationService } from '../service/authentication.service';

// import { LocalNotifications } from '@ionic-native/local-notifications/ngx';

@NgModule({
  //เมื่อมี/สร้าง Component อื่นๆให้ประกาศเข้ามาตรงส่วนนี้
  declarations: [AppComponent],
  entryComponents: [],
  //เมื่อมี/สร้าง Module อื่นๆให้ประกาศเข้ามาตรงส่วนนี้
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    //import declarations
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    IonicStorageModule.forRoot()
    // LocalNotifications
  ],
  //สร้าง service อื่นๆให้ประกาศเข้ามาตรงส่วนนี้
  providers: [
    StatusBar,
    SplashScreen,
    AuthGuard,
    AuthenticationService,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
