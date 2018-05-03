import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {AuthService} from '../auth.service';
import {Observable} from 'rxjs/Observable';
import {UserRoleCheckService} from '../../user/service/user-role-check.service';
import {ErrorService} from '../../error/error.service';

@Injectable()
export class EventGuardService implements CanActivate {

    constructor(private router: Router,
                private authService: AuthService,
                private userRoleCheckService: UserRoleCheckService,
                private errorService: ErrorService) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        const isLoggedIn = this.authService.isLoggedIn();
        if (!isLoggedIn) {
            this.router.navigate(['login']);
            return isLoggedIn;
        }
        return this.userRoleCheckService.hasRoles(['ROLE_ADMIN', 'ROLE_OBSERVER']).flatMap((hasObserverRole) => {
            if (!hasObserverRole) {
                this.errorService.setError403();
                this.router.navigate(['error']);
            }
            return Observable.of(hasObserverRole);
        });
    }
}
