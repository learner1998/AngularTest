import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GooglecaptchaComponent } from './components/googlecaptcha/googlecaptcha.component';
import { DropDownTestComponent } from './components/drop-down-test/drop-down-test.component';
import { NgxCaptchaModule } from 'ngx-captcha';
import { HttpClientModule } from '@angular/common/http';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatTreeModule } from '@angular/material/tree';
import { ExampleTreeComponent } from './components/example-tree/example-tree.component';
import { MaterialModule } from './Material.Module';

@NgModule({
  declarations: [
    AppComponent,
    GooglecaptchaComponent,
    DropDownTestComponent,
    ExampleTreeComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    NgxCaptchaModule,
    HttpClientModule,
    MatSelectModule,
    MatFormFieldModule,
    MatTreeModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
