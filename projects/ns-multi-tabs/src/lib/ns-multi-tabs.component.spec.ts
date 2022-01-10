import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NsMultiTabsComponent } from './ns-multi-tabs.component';

describe('NsMultiTabsComponent', () => {
  let component: NsMultiTabsComponent;
  let fixture: ComponentFixture<NsMultiTabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NsMultiTabsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NsMultiTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
