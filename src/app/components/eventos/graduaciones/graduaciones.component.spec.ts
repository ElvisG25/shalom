import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraduacionesComponent } from './graduaciones.component';

describe('GraduacionesComponent', () => {
  let component: GraduacionesComponent;
  let fixture: ComponentFixture<GraduacionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GraduacionesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GraduacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
