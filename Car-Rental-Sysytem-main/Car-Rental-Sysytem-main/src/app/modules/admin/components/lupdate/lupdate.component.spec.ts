import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LupdateComponent } from './lupdate.component';

describe('LupdateComponent', () => {
  let component: LupdateComponent;
  let fixture: ComponentFixture<LupdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LupdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
