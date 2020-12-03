import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { TypingComponent } from './typing/typing.component';
import { FormComponent } from './form/form.component';
import { ConvertMilePipe } from './convert-mile.pipe';
import { ClassDirectiveDirective } from './class-directive.directive';
import { TimesDirective } from './times.directive';
import { TimerComponent } from './timer/timer.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    TypingComponent,
    FormComponent,
    ConvertMilePipe,
    ClassDirectiveDirective,
    TimesDirective,
    TimerComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
