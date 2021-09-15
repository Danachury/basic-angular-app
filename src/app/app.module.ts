import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppComponent } from './app.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { ServerComponent } from "./servers/server/server.component"
import { ServersComponent } from './servers/servers.component'
import { AlertSuccessComponent } from './alerts/alert-success/alert-success.component'
import { AlertWarningComponent } from './alerts/alert-warning/alert-warning.component'
import { ToWayBindingComponent } from './to-way-binding/to-way-binding.component'
import { DirectivesExampleComponent } from './directives-example/directives-example.component'
import { GameControlComponent } from './game-control/game-control.component'
import { OddComponent } from './game-control/odd/odd.component'
import { EvenComponent } from './game-control/even/even.component';
import { ActiveUsersComponent } from './users/active-users/active-users.component';
import { InactiveUsersComponent } from './users/inactive-users/inactive-users.component';
import { TdFormComponent } from './forms/td-form/td-form.component';
import { RFormComponent } from './forms/r-form/r-form.component'

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    AlertSuccessComponent,
    AlertWarningComponent,
    ToWayBindingComponent,
    DirectivesExampleComponent,
    GameControlComponent,
    OddComponent,
    EvenComponent,
    ActiveUsersComponent,
    InactiveUsersComponent,
    TdFormComponent,
    RFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
