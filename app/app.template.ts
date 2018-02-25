import {Component} from '@angular/core';

@Component({
    selector: 'app',
    template: '<navbar></navbar>' +
    '<app-leftmenubar></app-leftmenubar><router-outlet></router-outlet>'+
    '<app-footer></app-footer>',

})
export class AppTemplate {
    constructor() {}
}
