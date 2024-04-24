import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuinceanerasComponent } from './quinceaneras.component';

describe('QuinceanerasComponent', () => {
  let component: QuinceanerasComponent;
  let fixture: ComponentFixture<QuinceanerasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuinceanerasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(QuinceanerasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
