import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DirectiveComponent } from './directive/directive.component';
import { DirectiveIfelseComponent } from './directive-ifelse/directive-ifelse.component';

@NgModule({
  declarations: [DirectiveComponent, DirectiveIfelseComponent],
  imports: [CommonModule],
  exports: [DirectiveComponent,DirectiveIfelseComponent],
})
export class DirectiveModule {}
