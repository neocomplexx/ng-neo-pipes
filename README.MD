# ng-neo-pipes

## Installation

To install this library, run:

```bash
$ npm install ng-neo-pipes --save
```


and then from your Angular `AppModule`:

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// Import library
import { NeoPipesModule } from 'ng-neo-pipes';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,

    // Specify library as an import
    NeoPipesModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

// Import library in child modules to use pipes
import { NeoPipesModule } from 'ng-neo-pipes';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,

    // Specify library as an import
    NeoPipesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class ChildModule { }
```

## License

MIT © [Neocomplexx](mailto:info@neocomplexx.com)
