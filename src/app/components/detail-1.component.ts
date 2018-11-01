import { Component, ChangeDetectorRef } from '@angular/core';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';

export interface User {
    name: string;
    number: number;
}

@Component({
    selector: 'app-detail-1',
    templateUrl: './detail-1.component.html',
})
export class Detail1Component {
    constructor(
        public changeDetectorRef: ChangeDetectorRef,
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
        )
        .subscribe(data => {
            this.user = data;
            this.progressIndicator = 'Success';
        });
    }
}
