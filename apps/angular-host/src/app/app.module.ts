import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [BrowserModule, RouterModule.forRoot([
    {
      path: '',
      loadChildren: () =>
        import('angular-remote/Module').then((m) => m.RemoteEntryModule),
    }
  ])],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
