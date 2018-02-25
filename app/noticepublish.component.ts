import {Component, OnInit, ViewChild} from "@angular/core";
import {Router} from '@angular/router';
import {NavigationManager} from "./services/NavigationManager";
import {ModalDirective} from 'ngx-bootstrap';

@Component({
    selector: 'app',
    templateUrl: 'app/html/noticepublish.component.html'
})

export class NoticePublishComponent {
    @ViewChild('noticeDeleteModal') public noticeDeleteModal: ModalDirective;
    private showNavBar: boolean = true;
    private activeMenu: string = "noticepublish";

    constructor(private router: Router, private navigationManager: NavigationManager) {
        this.navigationManager.showNavBarEmitter.subscribe((mode) => {
            // mode will be null the first time it is created, so you need to igonore it when null
            if (mode !== null) {
                this.showNavBar = mode;
            }
        });
        this.navigationManager.menuActivationEmitter.subscribe((menuName) => {
            // mode will be null the first time it is created, so you need to igonore it when null
            if (menuName !== null) {
                this.activeMenu = menuName;
            }
        });

    }

    ngOnInit() {

    }
    public hideNoticeDeleteModal(): void {
        this.noticeDeleteModal.hide();
    }
    deleteNotice(event: Event) {
        this.noticeDeleteModal.config.backdrop = false;
        this.noticeDeleteModal.show();
    }
    confirmNoticeDeleteModal(event: Event) {
         //
    }

}