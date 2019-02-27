import { Component, ViewChild } from '@angular/core';
import { animate, group, query, style, transition, trigger } from '@angular/animations';
import { NbSidebarService } from '@nebular/theme';
import { NbSidebarComponent } from '@nebular/theme/components/sidebar/sidebar.component';

const slideLeft = [
    query(':leave', style({
        position: 'absolute',
        left: 0,
        right: 0,
        transform: 'translate3d(0%,0,0)'
    }), { optional: true }),
    query(':enter', style({
        position: 'absolute',
        left: 0,
        right: 0,
        transform: 'translate3d(-100%,0,0)'
    }), { optional: true }),
    group([
        query(':leave', group([
            animate('500ms cubic-bezier(.35,0,.25,1)', style({ transform: 'translate3d(100%,0,0)' })) // y: '-100%'
        ]), { optional: true }),
        query(':enter', group([
            animate('500ms cubic-bezier(.35,0,.25,1)', style({ transform: 'translate3d(0%,0,0)' }))
        ]), { optional: true })
    ])
];

const slideRight = [
    query(':leave', style({
        position: 'absolute',
        left: 0,
        right: 0,
        transform: 'translate3d(0%,0,0)'
    }), { optional: true }),
    query(':enter', style({
        position: 'absolute',
        left: 0,
        right: 0,
        transform: 'translate3d(100%,0,0)'
    }), { optional: true }),

    group([
        query(':leave', group([
            animate('500ms cubic-bezier(.35,0,.25,1)', style({ transform: 'translate3d(-100%,0,0)' })) // y: '-100%'
        ]), { optional: true }),
        query(':enter', group([
            animate('500ms cubic-bezier(.35,0,.25,1)', style({ transform: 'translate3d(0%,0,0)' }))
        ]), { optional: true })
    ])
];

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    animations: [
        trigger('routerAnimations', [
            transition('login => register', slideRight),
            transition('register => login', slideLeft)
        ])
    ]
})
export class AppComponent {
    @ViewChild('sideBar') sideBar: NbSidebarComponent;
    title = 'front';


    constructor() {
    }

    prepareRouteTransition(outlet) {
        const animation = outlet.activatedRouteData['animation'] || {};
        return animation['value'] || null;
    }

    toggle() {
        this.sideBar.toggle(true);
    }
}
