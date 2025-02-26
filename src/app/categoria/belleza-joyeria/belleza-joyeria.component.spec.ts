import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BellezaJoyeriaComponent } from './belleza-joyeria.component';

describe('BellezaJoyeriaComponent', () => {
  let component: BellezaJoyeriaComponent;
  let fixture: ComponentFixture<BellezaJoyeriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BellezaJoyeriaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BellezaJoyeriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
