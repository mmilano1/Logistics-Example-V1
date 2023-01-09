import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OverviewComponent } from './features/overview/overview.component';
import { TraceService } from './services/trace.service';
import { SharedModule } from './shared/shared.module';
import { UserProfileComponent } from './features/user-profile/user-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    OverviewComponent,
    UserProfileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [
    TraceService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
