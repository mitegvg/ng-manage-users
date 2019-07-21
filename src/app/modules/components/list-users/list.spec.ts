import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { UsersList } from './list.component';

describe('List users ', () => {
  let component: UsersList
  let fixture: ComponentFixture<UsersList>
  let listTable: HTMLElement
  let pagination: HTMLElement

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ UsersList ],
      imports: [HttpClientModule]
    })
    fixture = TestBed.createComponent(UsersList)
    component = fixture.componentInstance
    listTable = fixture.nativeElement.querySelector('.users-list-table')
    pagination = fixture.nativeElement.querySelector('.pagination')
  })

  it('should have initial values set for page and users', () => {
    expect(component.page).toEqual(1)
    expect(component.users).toEqual([])
  })

  it('should have a table with appropriate headers', () => {
    window.console.log("listTable",pagination);
    expect(listTable.textContent).toContain('First name')
    expect(listTable.textContent).toContain('Last name')
    expect(listTable.textContent).toContain('Email')
    expect(listTable.textContent).toContain('Delete')
  })

  it('should display a different text if changed', () => {
    component.users = [
      {
        first_name: "John",
        last_name: "Smith",
        email: "js@yahoo.com"
      }
    ]
    fixture.detectChanges()
    expect(listTable.textContent).toContain('John')
    expect(listTable.textContent).toContain('Smith')
    expect(listTable.textContent).toContain('js@yahoo.com')
  })

})
