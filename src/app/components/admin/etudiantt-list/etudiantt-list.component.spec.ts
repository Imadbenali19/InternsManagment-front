import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EtudianttListComponent } from './etudiantt-list.component';

describe('EtudianttListComponent', () => {
  let component: EtudianttListComponent;
  let fixture: ComponentFixture<EtudianttListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EtudianttListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EtudianttListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
