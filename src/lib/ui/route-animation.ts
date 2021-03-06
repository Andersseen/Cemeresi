import {
    trigger, animateChild, group,
    transition, animate, style, query
} from '@angular/animations';



// Routable animations
export const slideInAnimation =
    trigger('routeAnimations', [
        transition('HomePage => AboutPage, AboutPage => ContactPage, HomePage => ContactPage', [
            style({ position: 'relative' }),
            query(':enter, :leave', [
                style({
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%'
                })
            ]),
            query(':enter', [style({ left: '-100%' })]),
            query(':leave', animateChild()),
            group([
                query(':leave', [animate('1s ease-out', style({ left: '100%' }))]),
                query(':enter', [animate('1s ease-out', style({ left: '0%' }))])
            ]),
            query(':enter', animateChild())
        ]),
        transition('ContactPage => AboutPage, AboutPage => HomePage, ContactPage => HomePage', [
            style({ position: 'relative' }),
            query(':enter, :leave', [
                style({
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    width: '100%'
                })
            ]),
            query(':enter', [style({ right: '-100%' })]),
            query(':leave', animateChild()),
            group([
                query(':leave', [animate('1s ease-out', style({ right: '100%' }))]),
                query(':enter', [animate('1s ease-out', style({ right: '0%' }))])
            ]),
            query(':enter', animateChild())
        ])

    ]);

