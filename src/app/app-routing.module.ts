import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ShowTokenComponent} from './cmps/show-token/show-token.component';

const routes: Routes = [{
  path: 'showToken',
  component: ShowTokenComponent,
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
