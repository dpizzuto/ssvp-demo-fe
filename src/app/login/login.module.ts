import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { FlexLayoutModule } from '@angular/flex-layout';

import { CoreModule } from '@core';
import { SharedModule, LoaderComponent } from '@shared';
import { MaterialModule } from '@app/material.module';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';

import { AmplifyUIAngularModule } from '@aws-amplify/ui-angular';
import Amplify from 'aws-amplify';
import awsconfig from '../../aws-exports';

Amplify.configure(awsconfig);

@NgModule({
  imports: [
    CommonModule,
    AmplifyUIAngularModule,
    TranslateModule,
    CoreModule,
    SharedModule,
    FlexLayoutModule,
    MaterialModule,
    LoginRoutingModule,
  ],
  declarations: [LoginComponent],
})
export class LoginModule {}
