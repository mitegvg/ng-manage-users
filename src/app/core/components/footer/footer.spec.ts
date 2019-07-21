import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';

import { Footer } from './footer.component';

describe('Footer (inline template)', () => {
  let component: Footer;
  let fixture:   ComponentFixture<Footer>;
  let div:        HTMLElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ Footer ],
    });
    fixture = TestBed.createComponent(Footer);
    component = fixture.componentInstance; //
    div = fixture.nativeElement.querySelector('div');
  });


it('should contain the word Copyright', () => {
  expect(component.textContent).toContain('Copyright');
});

it('should display a different text if changed', () => {
  component.textContent = 'Test';
  fixture.detectChanges();
  expect(div.textContent).toContain('Test');
});

});
