import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InnoCommonLibComponent } from './inno-common-lib.component';

describe('InnoCommonLibComponent', () => {
  let component: InnoCommonLibComponent;
  let fixture: ComponentFixture<InnoCommonLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InnoCommonLibComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InnoCommonLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
