
The awesome ToDo list! 😎

Hola 👋

- Este proyecto es parte de la prueba técnica para evaluar habilidades.
- Contiene buenas practicas de desarrollo como Clean Code


## Overview 👀

Tu como usuario podrás :
- Create tareas
- Listar tareas
- Completar tareas
- Eliminar tareas


## How to run

1. Necesitas las credenciales. Buscar en correo electrónico. [.env](.env.template)
2. Copia las credenciales en el root del proyecto
4. Ejecuta ```npm i``` para descargar las dependencias
3. Ejecuta ```npm run dev``` para correr en local el proyecto

- NOTE ⚠️  Checa el archivo [package.json](package.json) para ver otras configuraciones

## Architecture

- Este es la arquitectura de las archivos

![alt text](/DOCS/image.png)

### ToDo
- Es la entidad que se manipula

### Domain

- Contiene las entidades del modelo del negocio
    - [ToDo](src/usesCases/ToDo/domain/schema/ToDo.ts)
- Contiene las reglas de negocio
    - Para este caso ```title``` y ```description``` son necesarios para create un ToDo
- Contiene las validaciones para que esto se cumpla
    - [TodoTitleValueObject.ts](src/usesCases/utils/valuObjects/TodoTitleValueObject.ts)
    - [TodoDescriptionValueObject.ts](src/usesCases/utils/valuObjects/TodoDescriptionValueObject.ts)
    - [UUID.ValueObject.ts](src/usesCases/utils/valuObjects/UUID.ValueObject.ts)

### Infrastructure
- Contiene la implementaciones de la diferentes tecnologías empleadas.
- En este caso se uso ```fetch``` para realizar las peticiones
- Se utilizáramos servicios como ```firebase``` aquí se implementa las operaciones
- Aquí se implantan las operaciones crud
    - [createTodo.fetch.ts](src/usesCases/ToDo/infrastructure/fetch/createTodo.fetch.ts)
    - [deletedByUUID.fetch.ts](src/usesCases/ToDo/infrastructure/fetch/deletedByUUID.fetch.ts)
    - [getAllToDos.fetch.ts)](src/usesCases/ToDo/infrastructure/fetch/getAllToDos.fetch.ts)
    - [toggleToDo.fetch.ts](src/usesCases/ToDo/infrastructure/fetch/toggleToDo.fetch.ts)

### Application
- Se hacen uso de la *infraestructura*
- si quieres lanzar una request a AWS y a FireBase aquí se implantan estas operaciones ya definidas en la *infraestructura*


