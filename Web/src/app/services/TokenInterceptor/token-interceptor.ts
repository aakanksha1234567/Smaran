import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router'; 
import swal from 'sweetalert2';

@Injectable()
export class RequestTokenInterceptor implements HttpInterceptor {
  constructor(private router: Router) { }
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let token = localStorage.getItem('token');

    request = request.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });

    return next.handle(request).pipe(catchError(err => { 
      if (err.status === 401 || err.status === 403 || err.status === 400) {
        swal.fire({title:"Error While login! Please check user name and password",timer:3000, toast: true,position: 'top-right',showCancelButton: false,showConfirmButton: false});  
        localStorage.removeItem('token'); 
        this.router.navigate(["/login"]);
      }

      const error = err.error.message || err.statusText;
      
      return throwError(error);
    }));
  }
}