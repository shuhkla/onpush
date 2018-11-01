import { Component, ChangeDetectionStrategy, Renderer2 } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent {
    public constructor(private renderer: Renderer2) {
        this.renderer.listen('window', 'scroll', () => {
        });
    }
}
