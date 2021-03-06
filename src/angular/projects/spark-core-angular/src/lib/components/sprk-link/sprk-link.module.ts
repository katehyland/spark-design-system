import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SparkLinkComponent } from './sprk-link.component';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [SparkLinkComponent],
  exports: [SparkLinkComponent]
})
export class SparkLinkModule {}
