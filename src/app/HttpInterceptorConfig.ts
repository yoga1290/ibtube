import { Injectable } from '@angular/core';
import {
    HttpInterceptor,
    HttpRequest,
    HttpResponse,
    HttpHandler,
    HttpEvent,
    HttpEventType,
    HttpErrorResponse
} from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

catchError((error: HttpErrorResponse) => {
    let data = {};
    data = {
        reason: error && error.error.reason ? error.error.reason : '',
        status: error.status
    };
    console.log('HttpErrorResponse', error)
    // this.errorDialogService.openDialog(data);
    return throwError(error);
})

@Injectable()
export class HttpInterceptorConfig implements HttpInterceptor {

    intercept(request: HttpRequest<any>, next: HttpHandler)
    : Observable<HttpEvent<any>> {

        console.log('HttpInterceptorConfig', request)
        // const token: string = localStorage.getItem('token');

        // if (token) {
        //     request = request.clone({ headers: request.headers.set('Authorization', 'Bearer ' + token) });
        // }

        // if (!request.headers.has('Content-Type')) {
        //     request = request.clone({ headers: request.headers.set('Content-Type', 'application/json') });
        // }

        // request = request.clone({ headers: request.headers.set('Accept', 'application/json') });
        

        return next.handle(request).pipe(
            map((event: HttpEvent<any>) => {

                console.log('-event--->>>', event);

                if (event instanceof HttpResponse) {
                    console.log('event--->>>', event);
                }

                if (event instanceof HttpErrorResponse) {
                    console.log('event(HttpErrorResponse)--->>>', event);
                }

                if (event.type === HttpEventType.Sent) {
                    console.log('event(HttpEventType.Sent)--->>>', event);
                }

                if (event.type === HttpEventType.ResponseHeader) {
                    console.log('event(HttpEventType.ResponseHeader)--->>>', event);
                }

                if (event.type === HttpEventType.Response) {
                    console.log('event(HttpEventType.Response)--->>>', event);
                }

                if (event.type === HttpEventType.User) {
                    console.log('event(HttpEventType.User)--->>>', event);
                }

                
                return event;
            }));
    }
}