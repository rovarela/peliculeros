import { CrudService } from './../../shared/crud-service';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { UserStoreService } from "../shared/user-store.service";

@Injectable()
export class SecurityService extends CrudService{

  constructor(private userStoreService: UserStoreService, http: Http, private router: Router) {
    super(http);
    this.apiEndPoint = 'pub/usuarios';
  }

}
