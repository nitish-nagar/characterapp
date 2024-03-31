import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterdataComponent } from './characterdata.component';

describe('CharacterdataComponent', () => {
  let component: CharacterdataComponent;
  let fixture: ComponentFixture<CharacterdataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CharacterdataComponent]
    });
    fixture = TestBed.createComponent(CharacterdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
