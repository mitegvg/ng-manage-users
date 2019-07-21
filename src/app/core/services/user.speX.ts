/*
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

// Other imports
import { TestBed } from '@angular/core/testing';
import { HttpClient, HttpResponse, HttpErrorResponse } from '@angular/common/http';

import { UserService } from './user.service';

describe ('UserService (with spies)', () => {
  let httpClientSpy: { get: jasmine.Spy };


  beforeEach(() => {
    // TODO: spy on other methods too
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    userService = new UserService(<any> httpClientSpy);
  });

  it('should return expected heroes (HttpClient called once)', () => {
    const expectedUsers = {
      data: [{ id: 1, name: 'A' }, { id: 2, name: 'B' }]
    };

    httpClientSpy.get.and.returnValue(expectedUsers);

    userService.getUsers(1).subscribe(
      response => {
        window.console.log("response",response);
        expect((response || {})).toEqual(expectedUsers, 'expected users')
      },
      fail
    );
    expect(httpClientSpy.get.calls.count()).toBe(1, 'one call');
  });

  it('should return an error when the server returns a 404', () => {
    const errorResponse = new HttpErrorResponse({
      error: 'test 404 error',
      status: 404, statusText: 'Not Found'
    });

    httpClientSpy.get.and.returnValue(asyncError(errorResponse));

    heroService.getHeroes().subscribe(
      heroes => fail('expected an error, not heroes'),
      error  => expect(error.message).toContain('test 404 error')
    );
  });

});
*/
