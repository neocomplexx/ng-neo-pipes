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
```

Once library is imported, you can use its pipes in your Angular application:

```xml
<!-- You can now use pipes in app.component.html -->
<h1>
  {{title}}
</h1>
<sampleComponent></sampleComponent>
```

## License

MIT © [Neocomplexx](mailto:info@neocomplexx.com)
