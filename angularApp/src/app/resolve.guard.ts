import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { DemoService } from './Services/demo.service';

@Injectable({
  providedIn: 'root'
})
export class ResolveGuard implements Resolve<any> {

  constructor(private demoService: DemoService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    return this.demoService.getUsers();

  }
  
}
