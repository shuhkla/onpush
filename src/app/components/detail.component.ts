import { Component } from '@angular/core';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';

export interface User {
    name: string;
    number: number;
}

@Component({
    selector: 'app-detail',
    templateUrl: './detail.component.html',
})
export class DetailComponent {
    constructor(
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
            delay(1000)
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
