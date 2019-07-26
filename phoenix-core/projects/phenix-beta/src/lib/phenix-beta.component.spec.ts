import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhenixBetaComponent } from './phenix-beta.component';

describe('PhenixBetaComponent', () => {
  let component: PhenixBetaComponent;
  let fixture: ComponentFixture<PhenixBetaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhenixBetaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhenixBetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
