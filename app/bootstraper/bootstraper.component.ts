import {bootstrap} from '@angular/platform-browser-dynamic';
import {provide} from '@angular/core';
import {HTTP_PROVIDERS} from '@angular/http';
import {ROUTER_PROVIDERS} from '@angular/router';
import {APP_BASE_HREF} from '@angular/common';
import {Serializer} from 'serializer.ts/Serializer';
import {CookieService} from 'angular2-cookie/core';
import 'rxjs/Rx';

import {AppComponent} from '../app/app.component';

bootstrap(
    AppComponent, 
    [HTTP_PROVIDERS,
    ROUTER_PROVIDERS, 
    provide(APP_BASE_HREF, {useValue: '/'}),
    Serializer,
    CookieService]);