import { Component, ChangeDetectionStrategy } from '@angular/core';

import { MatTableDataSource } from '@angular/material/table';

export interface PeriodicElement {
    name: string;
    position: number;
    weight: number;
    symbol: string;
}

@Component({
    selector: 'app-table',
    templateUrl: './table.component.html',
    styleUrls: ['./table.component.css'],
    // changeDetection: ChangeDetectionStrategy.OnPush
})
export class TableComponent {
    public displayedColumns: string[] = ['position', 'name', 'weight', 'symbol', 'heavy'];
    public dataSource = new MatTableDataSource<PeriodicElement>();

    public addMoreRows(): void {
        for (let i = 0; i < 100; i++) {
            const existingRows = this.dataSource.data;
            existingRows.push({
                position: existingRows.length + 1,
                name: 'TEST',
                weight: Math.random() * 10,
                symbol: 'test'
            });
            this.dataSource = new MatTableDataSource<PeriodicElement>(existingRows);
        }
    }

    public getHeavyLabel(row: PeriodicElement): string {
        console.log("getHeavyLabel Called!")
        return row.weight > 5 ? 'Yes' : 'No';
    }

    public getWeight(row: PeriodicElement): string {
        return row.weight.toFixed(3);
    }
}
