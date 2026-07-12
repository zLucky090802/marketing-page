import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProccessComponent } from './proccess.component';

describe('ProccessComponent', () => {
  let component: ProccessComponent;
  let fixture: ComponentFixture<ProccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProccessComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
