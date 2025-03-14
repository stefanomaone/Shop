import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AutenticationService {

  constructor() { }


  autenticazione =(userId: string, password:string) : boolean =>{
    var retVal = (userId==='' && password ==='') ? true:false;

    if(retVal){
      sessionStorage.setItem("Utente", userId  )
    }
    return retVal;
  }
}
