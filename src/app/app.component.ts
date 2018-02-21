import {
    Component,
    OnInit,
    ElementRef,
    ViewChild
} from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/observable/timer';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    @ViewChild('logo')
    private logo: ElementRef;

    ngOnInit() {
        this.imgHover();
    }

    imgHover() {
        Observable.fromEvent(this.logo.nativeElement, 'mousemove')
            .switchMap(event => {
                console.log('mousemove');
                return Observable.timer(500).map(e => event);
            })
            .subscribe((event) => {
                alert(event);
            });
    }
}
