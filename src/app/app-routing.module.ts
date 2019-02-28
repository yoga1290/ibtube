import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchComponent } from './search/search.component'
const routes: Routes = [{
  path: 'search', //?query
  component: SearchComponent
}, {
  path: 'channel/:channelId',
  component: SearchComponent
}, {
  path: 'video/:videoId',
  component: SearchComponent
}];

@NgModule({
  // useHash for a backend-free app (no need for ng serve)
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
