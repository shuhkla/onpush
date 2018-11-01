import { Component, ChangeDetectorRef, Input, ChangeDetectionStrategy } from '@angular/core';

export interface User {
    name: string;
    number: number;
}

@Component({
    selector: 'app-detail-1-sub',
    templateUrl: './detail-1-sub.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class Detail1SubComponent {
    constructor(
        public changeDetectorRef: ChangeDetectorRef,
    ) {
    }

    @Input()
    public progressIndicator: string;
    @Input()
    public user: User;

    public getFormattedUser(): string {
        return !!this.user ? `${this.user.name} - ${this.user.number}` : '';
    }
}
