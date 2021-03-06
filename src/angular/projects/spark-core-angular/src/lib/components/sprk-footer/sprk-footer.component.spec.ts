import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { SparkIconComponent } from '../sprk-icon/sprk-icon.component';
import { SparkFooterComponent } from './sprk-footer.component';

import { SparkSecondaryNavigationItemComponent } from '../sprk-secondary-navigation-item/sprk-secondary-navigation-item.component';
import { SparkSecondaryNavigationComponent } from '../sprk-secondary-navigation/sprk-secondary-navigation.component';
import { SparkStackComponent } from '../sprk-stack/sprk-stack.component';
import { SparkToggleComponent } from '../sprk-toggle/sprk-toggle.component';

describe('SparkFooterComponent', () => {
  let component: SparkFooterComponent;
  let fixture: ComponentFixture<SparkFooterComponent>;
  let element: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [
        SparkStackComponent,
        SparkIconComponent,
        SparkToggleComponent,
        SparkSecondaryNavigationComponent,
        SparkSecondaryNavigationItemComponent,
        SparkFooterComponent
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SparkFooterComponent);
    component = fixture.componentInstance;
    element = fixture.nativeElement.querySelector('footer');
  });

  it('should create itself', () => {
    fixture.detectChanges();
    expect(element).toBeTruthy();
  });

  it('getClasses should match what gets set on the footer', () => {
    fixture.detectChanges();
    expect(element.classList.toString()).toEqual(component.getClasses());
  });

  it('should add the correct classes if additionalClasses has a value', () => {
    component.additionalClasses = 'sprk-u-pam sprk-u-man';
    fixture.detectChanges();
    expect(component.getClasses()).toEqual(
      'sprk-o-Stack sprk-u-pam sprk-u-man'
    );
  });
});
