import {Component} from '@angular/core';
import { Routes, RouteSegment, ROUTER_DIRECTIVES } from '@angular/router';

@Component({
    template : 'hello from fb!' 
})
export class FbComponent
{
    code: string;

    constructor(routeSegment: RouteSegment){
        this.code = routeSegment.getParam('code');
        console.log(this.code);
    }
}