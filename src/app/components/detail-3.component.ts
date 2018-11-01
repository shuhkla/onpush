import { Component, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { of } from 'rxjs';
import { delay, finalize } from 'rxjs/operators';

export interface User {
    name: string;
    number: number;
}

@Component({
    selector: 'app-detail-3',
    templateUrl: './detail-3.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class Detail3Component {
    constructor(
        public changeDetectorRef: ChangeDetectorRef
    ) {

    }
    public progressIndicator: string;
    public user: User;

    public simulate(): void {
        this.progressIndicator = 'Simulating HTTP Request...';
        of(
            {
                name: 'Test',
                number: (Math.random() * 10)
            }
        )
        .pipe(
            delay(1000),
            finalize(() => {
                this.changeDetectorRef.markForCheck();
            })
        )
        .subscribe(data => {
            this.user = data;
            this.progressIndicator = 'Success';
        });
    }

    public getFormattedUser(): string {
        return !!this.user ? `${this.user.name} - ${this.user.number}` : '';
    }
}

