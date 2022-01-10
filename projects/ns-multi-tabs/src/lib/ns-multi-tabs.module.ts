import { NgModule } from '@angular/core';
import { NsMultiTabsComponent } from './ns-multi-tabs.component';
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";

@NgModule({
  declarations: [
    NsMultiTabsComponent
  ],
  imports: [
    FontAwesomeModule
  ],
  exports: [
    NsMultiTabsComponent
  ]
})
export class NsMultiTabsModule { }
