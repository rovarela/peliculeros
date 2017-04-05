import { CrudService } from './../shared/crud-service';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { UserStoreService } from "../shared/user-store.service";
import {UserData} from "../shared/model/data.class";

@Injectable()

export class SecurityService extends CrudService {

  constructor(private userStoreService: UserStoreService, http: Http, private router: Router) {
    super(http);
    this.apiEndPoint = 'pub/usuarios';
  }


  public postSesion$(credenciales) {
    return this.http
      .post('pub/sesiones', credenciales)
      .map(r => {
        const token = r.json();
        this.userStoreService.logIn({email: credenciales.email }, token);
        this.router.navigate(['']);
      });
  }


  public postUser$(credenciales) {
    return this.http
      .post('pub/usuarios', credenciales)
      .map(r => {
        const token = r.json();
        this.userStoreService.logIn({email: credenciales.email }, token);
        this.router.navigate(['']);
      });
  }


  public getProfile(): UserData {
    return this.userStoreService.getProfile();
  }

}
