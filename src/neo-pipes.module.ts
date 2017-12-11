// app.module.ts

import { NgModule } from '@angular/core';

import {
    NumberPipe, TextPipe, TextPipeTwoLevel, NumberPipeTwoLevel,
    BeautifyPipe, DatePipe, RangePipe, RangePipeTwoLevel
} from 'app/shared/pipes/filters.pipe';

@NgModule({
    imports: [],
    declarations: [NumberPipe, TextPipe, TextPipeTwoLevel, NumberPipeTwoLevel,
        BeautifyPipe, DatePipe, RangePipe, RangePipeTwoLevel],
    exports: [NumberPipe, TextPipe, TextPipeTwoLevel, NumberPipeTwoLevel,
        BeautifyPipe, DatePipe, RangePipe, RangePipeTwoLevel],
})

export class NeoPipesModule { }
