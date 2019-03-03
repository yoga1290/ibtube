import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchComponent } from './search/search.component';
import { VideoComponent } from './video/video.component';
import { ChannelComponent } from './channel/channel.component';
import { environment } from '@env'


let useHash = environment.useHash

export const ROUTES: Routes = [{
  path: 'search',
  component: SearchComponent
}, {
  path: 'channel/:channelId',
  component: ChannelComponent
}, {
  path: 'video/:videoId',
  component: VideoComponent
}, {
  path: '**',
  redirectTo: '/search',
  pathMatch: 'full'
}];

@NgModule({
  // useHash for a backend-free app (no need for ng serve)
  imports: [RouterModule.forRoot(ROUTES, { useHash })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
