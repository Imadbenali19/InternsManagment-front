import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkeletonListLoaderComponent } from './skeleton-list-loader.component';

describe('SkeletonListLoaderComponent', () => {
  let component: SkeletonListLoaderComponent;
  let fixture: ComponentFixture<SkeletonListLoaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkeletonListLoaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkeletonListLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
