import { Component, Input } from '@angular/core';

@Component({
  selector: 'sprk-icon',
  template: `
    <svg [ngClass]="getClasses()" viewBox="0 0 64 64">
      <use [attr.xlink:href]="icon" />
    </svg>
  `
})
export class SparkIconComponent {
  @Input()
  iconType: string;
  @Input()
  additionalClasses: string;

  public icon: string;

  getClasses(): string {
    const classArray: string[] = ['sprk-c-Icon'];

    this.icon = `#${this.iconType}`;

    if (this.additionalClasses) {
      this.additionalClasses.split(' ').forEach(className => {
        classArray.push(className);
      });
    }

    return classArray.join(' ');
  }
}
