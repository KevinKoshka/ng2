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

Para pasar propiedades de un componente a otro se usa el **Property Binding** con la notación: **< app-hero-detail [hero]="currentHero">< /app-hero-detail>**