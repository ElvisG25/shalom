import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoorporativosComponent } from './coorporativos.component';

describe('CoorporativosComponent', () => {
  let component: CoorporativosComponent;
  let fixture: ComponentFixture<CoorporativosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoorporativosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CoorporativosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
