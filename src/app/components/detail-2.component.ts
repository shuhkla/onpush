import { Component, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { delay, finalize } from 'rxjs/operators';

export interface User {
    name: string;
    number: number;
}

@Component({
    selector: 'app-detail-2',
    templateUrl: './detail-2.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class Detail2Component {
    constructor(
        public changeDetectorRef: ChangeDetectorRef,
    ) {

    }
    public progressIndicatorSubject: Subject<string> = new Subject<string>();
    public progressIndicatorObservable: Observable<string> = this.progressIndicatorSubject.asObservable();
    public user: User;

    public simulate(): void {
        this.progressIndicatorSubject.next('Simulating HTTP Request...');
        of(
            {
                name: 'Test',
                number: (Math.random() * 10)
            }
        )
        .pipe(
            delay(1000)
        )
        .subscribe(data => {
            this.user = data;
            this.progressIndicatorSubject.next('Success');
        });
    }

    public getFormattedUser(): string {
        return !!this.user ? `${this.user.name} - ${this.user.number}` : '';
    }
}
