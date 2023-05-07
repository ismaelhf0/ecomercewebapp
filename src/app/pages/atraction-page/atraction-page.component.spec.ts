import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtractionPageComponent } from './atraction-page.component';

describe('AtractionPageComponent', () => {
  let component: AtractionPageComponent;
  let fixture: ComponentFixture<AtractionPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtractionPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AtractionPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
