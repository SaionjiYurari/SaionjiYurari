import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from '../pages/about/about.component';
import { LinksComponent } from '../pages/links/links.component';
import { InterestsComponent } from '../pages/interests/interests.component';
import { CharactersComponent } from '../pages/characters/characters.component';

const routes: Routes = [
  { path: '', redirectTo: 'about', pathMatch: 'full' },
  { path: 'about', component: AboutComponent},
  { path: 'links', component: LinksComponent },
  { path: 'interest/:id', component: InterestsComponent},
  { path: 'characters/:page', component: CharactersComponent},
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }