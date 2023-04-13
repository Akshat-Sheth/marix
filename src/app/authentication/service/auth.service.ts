import { Injectable } from "@angular/core";

import { BehaviorSubject, Observable } from "rxjs";
import { User } from "src/app/model/user.model";


@Injectable({ providedIn:'root'})
export class AuthService {

    private userSubject!: BehaviorSubject<User | null>;
    public user!: Observable<User | null>;
    constructor(){}

    login(username:string, password:string){
        
    }
}