import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  NumberPipe, TextPipe, TextPipeTwoLevel, NumberPipeTwoLevel,
  BeautifyPipe, DatePipe, RangePipe, RangePipeTwoLevel
} from './filters.pipe';

export * from './filters.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [NumberPipe, TextPipe, TextPipeTwoLevel, NumberPipeTwoLevel,
    BeautifyPipe, DatePipe, RangePipe, RangePipeTwoLevel],
exports: [NumberPipe, TextPipe, TextPipeTwoLevel, NumberPipeTwoLevel,
    BeautifyPipe, DatePipe, RangePipe, RangePipeTwoLevel],
})
export class NeoPipesModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: NeoPipesModule,
    };
  }
}
