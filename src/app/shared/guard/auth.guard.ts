import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {AuthService} from "../services/auth.service";
import { UserManager } from '../manager/users.manager';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  userData?: firebase.default.User | null;
  myUser?: any

  constructor(
    private router: Router,
    private authService: AuthService,
    private userManager: UserManager
  ) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    if (!this.authService.isLoggedIn()) {
      this.router.navigate(['login']);
    }

    return true;

  }

}
