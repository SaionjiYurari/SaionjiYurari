import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./pages/app/app.component";
import { InterestsComponent } from "./pages/interests/interests.component";
import { AppRoutingModule } from "./routing/app-routing.module";
import { PersonService } from "./services/person.service";
import { AboutComponent } from "./pages/about/about.component";
import { LinksComponent } from "./pages/links/links.component";
import { InterestComponent } from "./components/interest/interest.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { ClickOutsideDirective } from './directives/click-outside.directive';
import { CharactersComponent } from './pages/characters/characters.component';

@NgModule({
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  declarations: [
    AppComponent,
    InterestsComponent,
    AboutComponent,
    LinksComponent,
    InterestComponent,
    NavbarComponent,
    ClickOutsideDirective,
    CharactersComponent
  ],
  bootstrap: [AppComponent],
  providers: [PersonService]
})
export class AppModule {}
