import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ListAllCountryComponent } from './listallcountry.component';
import { ListAllCountryModule } from './listallcountry.module';

describe('ListAllCountryComponent', () => {
  let component: ListAllCountryComponent;
  let fixture: ComponentFixture<ListAllCountryComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        imports: [
          ListAllCountryModule,
          RouterTestingModule,
          BrowserAnimationsModule,
        ],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(ListAllCountryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
