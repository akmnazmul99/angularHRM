import {Component, OnInit} from "@angular/core";
import {Router} from '@angular/router';
import {NavigationManager} from "./services/NavigationManager";

@Component({
     selector: "app-footer",
    templateUrl: 'app/html/footer.component.html'
})

export class FooterComponent {
    constructor(private router: Router) {

    }

    ngOnInit() {

    }

}