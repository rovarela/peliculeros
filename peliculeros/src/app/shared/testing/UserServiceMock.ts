import { Response, ResponseOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import { UserData } from './../model/data.class';

export class UserServiceMock {
  private token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9';

  public postSesion$(credenciales) {
    const options = new ResponseOptions({
      status: 200,
      body: this.token
    });
    return Observable.of(new Response(options));
  }

  public postUser$(credenciales) {
    const options = new ResponseOptions({
      status: 201,
      body: this.token
    });
    return Observable.of(new Response(options));
  }

  public getProfile(): UserData {
    const user: UserData = new UserData();
    user.user = 'testingUser';
    user.token = this.token;
    user.isLogged = false;
    return user;
  }

}