import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';

import { Header } from './header.component';

describe('Header ', () => {
  let component: Header;
  let fixture:   ComponentFixture<Header>;
  let menu:        HTMLElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ Header ],
    });
    fixture = TestBed.createComponent(Header);
    component = fixture.componentInstance; //
    menu = fixture.nativeElement.querySelector('.menu');
  });


it('should contain the words list and create', () => {
  expect(component.listTitle).toContain('List');
  expect(component.createNewTitle).toContain('Create');
});

it('should display a different text if changed', () => {
  component.listTitle = 'Test';
  fixture.detectChanges();
  expect(menu.textContent).toContain('Test');
});

});
