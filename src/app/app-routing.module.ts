import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OverviewComponent } from './features/overview/overview.component';
import { UserProfileComponent } from './features/user-profile/user-profile.component';
import { UserProfileResolver } from './resolvers/user-profile-resolver.service';

const routes: Routes = [
  { path: 'overview', component: OverviewComponent },
  { 
    path: 'user-profile', 
    component: UserProfileComponent,
    resolve: { dataForUserProfile: UserProfileResolver } 
   },
  { path: '',   redirectTo: '/overview', pathMatch: 'full' },
  { path: '**', component: OverviewComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
