El comando **ng serve** buildea la app, inicia el server, mira los archivos fuente, y rebuildea la app a medida que se hacen cambios a esos archivos.
El flag **--open** abre el browser en **http://localhost:4200**.

Los **Components** son los bloques fundamentales de las aplicaciones de Angular.
Por default cuando se crea un componente, se crean:
...component.ts: la clase del componente en Typescript.
...component.html: El template del componente, en pseudo-HTML.
...component.css: los estilos del componente.

En NG2 la notación de doble corchete **{{algo}}** es la sintaxis de binding con las propiedades de la clase del componente.

Para generer un componente: **ng generate component name**. Siempre se debe importar **Component** de la librería core de angular, y se debe anotar el componente mediante el decorador **@Component**, que especifica la metadate del componente.
El método de clase **ngOnInit()** es un hook del lifecycle que Angular llama luego de crear un componente. Al final siempre debe exportarse el componente.

Para formatear los datos mostrados en el template, se usan los pipes, que actuan de igual manera que los filters de NG1 **{{something | pipename}}**.

Se dice que Angular hace un two way binding cuando los datos van de la clase del componente al template, y de vuelta a la clase. La sintaxis que permite esto va **[(ngModel)]="prop.name"**.

Angular también crea el archivo **...module.ts** que lo único que contiene es el decorador **ngModule**, que también incorpora metadata crítica pertinente al módulo, como otros módulos que usa para extender la funcionalidad, y los componentes, pipes y directivas pertenecientes al módulo, también pueden añadir servicios a la aplicación. Los módulos describen como encajan entre sí las distintas partes de la aplicación. Toda aplicación tiene al menos un módulo: el módulo root.

Para hacer binding con el CSS se usa la notación: **[class.class-name]="condition"**.

Para pasar propiedades de un componente a otro se usa el **Property Binding** con la notación: **< app-hero-detail [hero]="currentHero">< /app-hero-detail>** También conocido como property binding, los datos fluyen de una propiedad de un componente hacia la propiedad del elemento/componente/directiva. Solo se usa para meter datos y no leer.

Cuando el valor fluye hacia una propiedad en un property binding, ésta es una propiedad de **Input** seteable que se anota con el decorador **@Input**.
Una propiedad viaja hacia afuera de un componente mediante una propiedad de **Output** con el decorador **@Output**. Estas propiedades casi siempre retornan un EventEmitter de Angular mediante un **event biding**.

Para crear servicios se usa el comando **ng generate service name**. El .ts generado viene con el decorador **@Injectable** que indica que puede tener dependencias inyectables. Si un servicio debiera recibir datos de un servidor remoto de manera asincrónica, éste debería eperar a la respuesta del servidor para continuar. El método en sí que maneje el pedido debe tener una **firma asincrónica**, que puede ser una **Promise** o un **Observable**. Para este último, se usa la clase **Observable** de la librería **RxJS** que sirve para componer código asincrónico. Se usa esta librería en particular, porque los métodos de **HttpClient** de NG2 retornan Observables.

```javascript
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
```
Al servicio Observable se puede suscribir cualquiera, y el servicio notifica cuando termina la operación asincrónica.

En NG2 una buena práctica es cargar y configurar el router en un módulo separado en alto nivel. Por convención debería llamarse **AppRoutingModule**, y dentro del .ts generado, se importa:
```javascript
import { RouterModule, Routes } from '@angular/router';
@NgModule({
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
```

