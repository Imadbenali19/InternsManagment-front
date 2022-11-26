import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmplacemntComponent } from './emplacemnt.component';

describe('EmplacemntComponent', () => {
  let component: EmplacemntComponent;
  let fixture: ComponentFixture<EmplacemntComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmplacemntComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmplacemntComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
