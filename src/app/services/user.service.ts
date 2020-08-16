import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { IAddress, IUser } from '../modals/interfaces/user.interface';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import * as actionTypes from '../store/actions/action-types';
import { UpdateActiveAddress } from '../store/actions/user.actions';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private store:Store<{userState: IUser}>) { }

  getAddresses():Observable<IAddress[]>{
    return this.store.pipe(map(data => data.userState.addresses));
  }

  updateActiveAddress(adressId: string){
    this.store.dispatch(new UpdateActiveAddress(adressId));
  }

}
