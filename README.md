<p align="center">
  <img src="https://simpleicons.org/icons/nextdotjs.svg" style="filter:invert(1);" width="100" alt="project-logo">
</p>
<p align="center">
    <h1 align="center">TESLO-SHOP</h1>
</p>
<p align="center">
  <em>¡Sin interrupciones, seguro y completamente personalizable! Con la arquitectura modular de Teslo-Shop impulsada por NextAuth.js, cada interacción es un paso más hacia un compromiso de usuario sin interrupciones. El corazón de nuestra autenticación late dentro del [nextauth].ts, fortaleciendo tu viaje con registro seguro, inicio de sesión y mucho más, todo para una experiencia enriquecida. Construido sobre capacidades de integración versátiles, el nextauth.d.ts de Teslo-Shop ajusta la estructura de la sesión de NextAuth, permitiendo una mezcla perfecta de datos de usuario personalizados con datos de usuario predeterminados. ¡De esta manera, tienes las llaves para un sistema de autenticación verdaderamente dinámico y flexible! Prepárate para la secuencia de lanzamiento. Teslo-Shop no es solo una solución de comercio electrónico, es una puerta de entrada al mañana. Únete a nosotros ahora, mientras navegamos juntos a través de posibilidades infinitas.</em>
</p>
<p align="center">
	<img src="https://img.shields.io/github/license/juansdev/teslo-shop?style=default&logo=opensourceinitiative&logoColor=white&color=0080ff" alt="license">
	<img src="https://img.shields.io/github/last-commit/juansdev/teslo-shop?style=default&logo=git&logoColor=white&color=0080ff" alt="last-commit">
	<img src="https://img.shields.io/github/languages/top/juansdev/teslo-shop?style=default&color=0080ff" alt="repo-top-language">
	<img src="https://img.shields.io/github/languages/count/juansdev/teslo-shop?style=default&color=0080ff" alt="repo-language-count">
<p>
<p align="center">
	<!-- default option, no dependency badges. -->
</p>

<br><!-- TABLA DE CONTENIDOS -->
<details>
  <summary>Tabla de Contenidos</summary><br>

- [Visión General](#-visión-general)
- [Estructura del Repositorio](#-estructura-del-repositorio)
- [Módulos](#-módulos)
- [Comenzando](#-comenzando)
  - [Instalación](#-instalación)
  - [Uso](#-uso)
</details>
<hr>

##  Visión General

Teslo-shop es una aplicación de comercio electrónico de vanguardia desarrollada en una arquitectura moderna y escalable, destacada por su sólida y modular base de código. En su núcleo se encuentra un sistema de autenticación dedicado, evidente en el archivo `src/pages/api/auth/[...nextauth].ts`, que utiliza NextAuth.js, una biblioteca de código abierto diseñada para manejar la autenticación en aplicaciones de Next.js. Esta implementación de autenticación proporciona funcionalidades de registro e inicio de sesión de usuario sin interrupciones, mejorando significativamente la seguridad, la funcionalidad y la experiencia general del usuario.

Además, el archivo nextauth.d.ts dentro de teslo-shop extiende la estructura de sesión predeterminada para fusionar fácilmente los datos personalizados del usuario, fortaleciendo la versatilidad y las capacidades de integración de nuestro sistema de autenticación.

El centro de control de este repositorio es el archivo package.json, que organiza los flujos de trabajo de desarrollo, scripts y dependencias, incluido NextAuth.js, asegurando una experiencia de desarrollo optimizada para los contribuyentes y manteniendo la reproducibilidad en diferentes entornos. Al optimizar los aspectos de autenticación, teslo-shop tiene como objetivo ofrecer una experiencia de compra de primer nivel, priorizando la seguridad, la funcionalidad y la satisfacción del usuario.

---

##  Estructura del Repositorio

```sh
└── teslo-shop/
    ├── docker-compose.yml
    ├── next.config.mjs
    ├── nextauth.d.ts
    ├── package-lock.json
    ├── package.json
    ├── postcss.config.mjs
    ├── prisma
    │   ├── migrations
    │   └── schema.prisma
    ├── public
    │   ├── imgs
    │   ├── next.svg
    │   ├── products
    │   └── vercel.svg
    ├── src
    │   ├── actions
    │   ├── app
    │   ├── auth.config.ts
    │   ├── components
    │   ├── config
    │   ├── interfaces
    │   ├── lib
    │   ├── middleware.ts
    │   ├── seed
    │   ├── store
    │   └── utils
    ├── tailwind.config.ts
    └── tsconfig.json
```

---

##  Módulos

<details closed><summary>.</summary>

| Archivo                                                                                        | Resumen                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| ---                                                                                            | ---                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| [package-lock.json](https://github.com/juansdev/teslo-shop/blob/master/package-lock.json)      | El archivo de código proporcionado es parte del repositorio "teslo-shop", una aplicación web orientada a soluciones de comercio electrónico. Su estructura demuestra una arquitectura modular y escalable, típica de las aplicaciones modernas. En relación con esto, el archivo crítico bajo consideración es `src/pages/api/auth/[...nextauth].ts`, que implementa funcionalidades de autenticación para el registro de usuarios, inicio de sesión y otras operaciones relacionadas. El repositorio principal depende de NextAuth.js (como se menciona en `nextauth.d.ts`), una biblioteca de código abierto para manejar la autenticación en aplicaciones de Next.js. Este archivo de código específico sirve para mejorar la seguridad, funcionalidad y experiencia general del usuario de la aplicación teslo-shop al optimizar varios aspectos de la autenticación, permitiendo así que los usuarios registrados naveguen y se involucren sin problemas con las funciones de comercio electrónico de la tienda. |
| [nextauth.d.ts](https://github.com/juansdev/teslo-shop/blob/master/nextauth.d.ts)              | La extensión nextauth.d.ts dentro del repositorio `teslo-shop` modifica la estructura de sesión de NextAuth para fusionar sin problemas los datos personalizados del usuario con los datos predeterminados del usuario, mejorando la versatilidad y las capacidades de integración de nuestro sistema de autenticación.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| [package.json](https://github.com/juansdev/teslo-shop/blob/master/package.json)                | El archivo `package.json` dentro del repositorio `teslo-shop` sirve como su centro de control, proporcionando instrucciones para scripts como desarrollo, compilación y linting. Gestiona dependencias y devDependencies, como Next.js, React, NextAuth, TailwindCSS y Zod, para garantizar el funcionamiento sin problemas de una aplicación de comercio electrónico versátil y de código abierto que utiliza Cloudinary para imágenes y PayPal para transacciones.                                                                                                                                                                                                                                                                                                                                                                                                                       |
| [docker-compose.yml](https://github.com/juansdev/teslo-shop/blob/master/docker-compose.yml)    | Configura un contenedor persistente de base de datos PostgreSQL llamado todos-db con el mismo nombre que la base de datos de nuestra aplicación (configurado en las variables .env). Proporciona fácil acceso a través del puerto 5432 y se inicia automáticamente al reiniciar el contenedor. Sincroniza los datos en tu máquina local utilizando volúmenes.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| [tsconfig.json](https://github.com/juansdev/teslo-shop/blob/master/tsconfig.json)              | Configura los ajustes de TypeScript en todo el proyecto teslo-shop. Habilita la verificación estricta de tipos, el soporte para JSX, la resolución de módulos y la integración con Next.js. Mapea alias `@` al directorio `src`, asegurando rutas de importación consistentes. Facilita una experiencia de desarrollo fluida dentro de esta aplicación web progresiva.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| [tailwind.config.ts](https://github.com/juansdev/teslo-shop/blob/master/tailwind.config.ts)    | El archivo de configuración de Tailwind CSS establece parámetros de tema y el alcance del contenido, permitiendo que la aplicación aplique dinámicamente clases de utilidad basadas en archivos del proyecto y mantenga la consistencia del diseño en todos los componentes, páginas y estructura de la aplicación.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| [postcss.config.mjs](https://github.com/juansdev/teslo-shop/blob/master/postcss.config.mjs)    | Optimiza la consistencia del estilo en teslo-shop configurando PostCSS con plugins de Tailwind CSS, asegurando interfaces de usuario visualmente atractivas y accesibles en toda la aplicación.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| [next.config.mjs](https://github.com/juansdev/teslo-shop/blob/master/next.config.mjs)          | Configura Cloudinary como fuente de imágenes predeterminada y activa el compilador de styled-components para una estilización eficiente de CSS-in-JS dentro de la arquitectura del proyecto Teslo-Shop.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |

</details>

<details closed><summary>src</summary>

| Archivo                                                                                    | Resumen                                                                                                                                                                                                                                                                                                                                                       |
| ---                                                                                        | ---                                                                                                                                                                                                                                                                                                                                                           |
| [middleware.ts](https://github.com/juansdev/teslo-shop/blob/master/src/middleware.ts)      | Potencia la autenticación en toda la aplicación Teslo-shop al gestionar sesiones de usuario y accesos. Utiliza el paquete next-auth y configuraciones de ./auth.config. El middleware proporcionado refuerza la seguridad al emparejar rutas, excluyendo API específicas, archivos estáticos e imágenes para garantizar una experiencia de usuario fluida y segura. |
| [auth.config.ts](https://github.com/juansdev/teslo-shop/blob/master/src/auth.config.ts)    | Configura NextAuth para teslo-shop definiendo reglas y callbacks de autenticación. Asegura rutas específicas según el rol del usuario y verifica las credenciales contra una base de datos Prisma, mejorando la seguridad general de la aplicación.                                                                                                            |

</details>

<details closed><summary>src.seed</summary>

| Archivo                                                                                               | Resumen                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| ---                                                                                                   | ---                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| [seed.ts](https://github.com/juansdev/teslo-shop/blob/master/src/seed/seed.ts)                        | El archivo de código proporcionado, `src/seed/seed.ts`, es parte del repositorio teslo-shop, que sirve como una aplicación frontend para una tienda en línea de vehículos eléctricos (EV). Este archivo en particular inserta datos iniciales para el sistema durante el proceso de configuración de la base de datos, utilizando específicamente la biblioteca bcryptjs para hashear y almacenar contraseñas de manera segura. El uso de este script asegura la consistencia de los datos al proporcionar elementos predefinidos dentro del sistema cuando se despliega o reinicia por primera vez. En el contexto de la arquitectura de teslo-shop, este archivo se integra con Prisma, una poderosa herramienta de base de datos que permite una gestión eficiente del esquema e interacción fluida con la base de datos en toda la aplicación. |
| [tsconfig.json](https://github.com/juansdev/teslo-shop/blob/master/src/seed/tsconfig.json)            | Habilita una verificación de tipos más estricta: `strict` configurado en `true` asegura un examen minucioso de los tipos. Refuerza las comprobaciones de nulos: `strictNullChecks`, `strictFunctionTypes`, y otros, mantienen un manejo adecuado de `null` y `undefined`. Fortalece el soporte de interoperabilidad: `esModuleInterop` ayuda a importar módulos CommonJS sin problemas. Promueve una nomenclatura consistente en los nombres de archivos: `forceConsistentCasingInFileNames` asegura compatibilidad. Garantiza una inferencia de tipos precisa: varias configuraciones opcionales de estricta precisión en los tipos, como `exactOptionalPropertyTypes`, mejoran la precisión.                                                                                                                                                 |
| [seed-database.ts](https://github.com/juansdev/teslo-shop/blob/master/src/seed/seed-database.ts)      | Este script **elimina** los registros existentes de la base de datos de TesloShop (productos, categorías, usuarios, etc.). Luego **puebla** la base de datos con datos de muestra para crear un entorno de usuario simulado con fines de prueba. El código es parte del directorio `seed` dentro de la arquitectura del repositorio, utilizando Prisma, una herramienta de base de datos eficiente para aplicaciones TypeScript y Node.js.                                                                                                                                                                                                                                                                                                     |
| [seed-countries.ts](https://github.com/juansdev/teslo-shop/blob/master/src/seed/seed-countries.ts)    | Visita destinos caribeños como San Vicente y las Granadinas, explora Senegal y Sudáfrica en África, recorre Suecia, Suiza o España en Europa, atraviesa Tailandia, Timor-Leste o Vietnam en Asia. Descubre culturas únicas en cada país. ¡El viaje te espera!                                                                                                                                                                                                                                                                                                                                                                                                            |

</details>

<details closed><summary>src.lib</summary>

| Archivo                                                                                      | Resumen                                                                                                                                                                                                                                  |
| ---                                                                                          | ---                                                                                                                                                                                                                                      |
| [prisma.ts](https://github.com/juansdev/teslo-shop/blob/master/src/lib/prisma.ts)            | Potencia las interacciones con la base de datos dentro de la plataforma Teslo-shop creando una instancia del cliente Prisma y haciéndola globalmente accesible para un acceso sin problemas a los modelos de datos definidos en `schema.prisma` a lo largo de la arquitectura de la aplicación. |

</details>

<details closed><summary>src.config</summary>

| Archivo                                                                           | Resumen                                                                                                                                                                                                          |
| ---                                                                               | ---                                                                                                                                                                                                              |
| [fonts.ts](https://github.com/juansdev/teslo-shop/blob/master/src/config/fonts.ts) | Importa fuentes personalizadas de Google (Inter & Montserrat_Alternates) para controlar los estilos de visualización y encabezado de texto en toda la aplicación, asegurando una experiencia de usuario consistente y atractiva en toda la plataforma. |

</details>

<details closed><summary>src.store</summary>

| Archivo                                                                              | Resumen                                                                                                                                                                                                                                    |
| ---                                                                                  | ---                                                                                                                                                                                                                                        |
| [index.ts](https://github.com/juansdev/teslo-shop/blob/master/src/store/index.ts)    | Gestiona el estado en los componentes de la interfaz de usuario, la funcionalidad del carrito y la gestión de direcciones en esta aplicación de comercio electrónico, consolidando los módulos de la tienda relevantes dentro del centro de la tienda centralizada para un flujo de datos eficiente y una mejor experiencia del usuario. |

</details>

<details closed><summary>src.store.ui</summary>

| Archivo                                                                                       | Resumen                                                                                                                                                                                                        |
| ---                                                                                           | ---                                                                                                                                                                                                            |
| [ui.store.ts](https://github.com/juansdev/teslo-shop/blob/master/src/store/ui/ui.store.ts)    | Una tienda crucial para manejar la funcionalidad del menú lateral, ofreciendo acciones de abrir/cerrar, manteniendo la persistencia del estado en nuestra aplicación Teslo-shop, contribuyendo a una experiencia de navegación fluida y un diseño coherente. |

</details>

<details closed><summary>src.store.cart</summary>

| Archivo                                                                                               | Resumen                                                                                                                                                                                                                                                                                                                                                          |
| ---                                                                                                   | ---                                                                                                                                                                                                                                                                                                                                                              |
| [cart.store.ts](https://github.com/juansdev/teslo-shop/blob/master/src/store/cart/cart.store.ts)      | Gestiona y rastrea los artículos en el carrito de usuario dentro del repositorio Teslo Shop. Esta tienda permite agregar, actualizar la cantidad, eliminar productos del carrito y vaciar el carrito entero utilizando funcionalidades limpias, ofreciendo así datos del carrito en tiempo real a los usuarios. Mejora la experiencia de compra del usuario proporcionando un resumen del costo total que incluye subtotal, impuestos y cantidad de artículos. |

</details>

<details closed><summary>src.store.address</summary>

| Archivo                                                                                                      | Resumen                                                                                                                                                                                                                                                                                            |
| ---                                                                                                          | ---                                                                                                                                                                                                                                                                                                |
| [address.store.ts](https://github.com/juansdev/teslo-shop/blob/master/src/store/address/address.store.ts)    | Gestiona las direcciones de los usuarios. Implementado a través de `zustand`, una solución de gestión de estado para aplicaciones React dentro de Teslo-shop, el proyecto de comercio electrónico de código abierto. El archivo, `src/store/address/address.store.ts`, persiste y maneja el estado actual de la dirección para un procesamiento de pago simplificado. |

</details>

<details closed><summary>src.actions</summary>

| Archivo                                                                              | Resumen                                                                                                                                                                                                                                                                                                       |
| ---                                                                                  | ---                                                                                                                                                                                                                                                                                                           |
| [index.ts](https://github.com/juansdev/teslo-shop/blob/master/src/actions/index.ts)  | Este archivo de acciones sirve como un centro para manejar varias operaciones, desde la autenticación de usuarios y la obtención de productos, hasta el procesamiento de pedidos, la actualización de direcciones de usuario y el manejo de transacciones usando métodos de pago populares como PayPal. También facilita la gestión de roles para el panel de usuario. |

</details>

<details closed><summary>src.actions.auth</summary>

| Archivo                                                                                           | Resumen                                                                                                                                                                                                                                                                  |
| ---                                                                                                | ---                                                                                                                                                                                                                                                                      |
| [login.ts](https://github.com/juansdev/teslo-shop/blob/master/src/actions/auth/login.ts)           | Autentica el inicio de sesión de usuario en la plataforma teslo-shop, utilizando la función signIn definida en la configuración de autenticación. Los errores se manejan para mostrar mensajes de error apropiados a los usuarios, promoviendo un proceso de autenticación fluido dentro de nuestra arquitectura web. |
| [register.ts](https://github.com/juansdev/teslo-shop/blob/master/src/actions/auth/register.ts)     | Este archivo de acción maneja las solicitudes entrantes para el registro de usuarios creando y encriptando una contraseña para un nuevo usuario a través de la base de datos Prisma y la biblioteca bcryptjs, asegurando la creación segura de cuentas en nuestra tienda en línea de próxima generación.                    |
| [logout.ts](https://github.com/juansdev/teslo-shop/blob/master/src/actions/auth/logout.ts)         | Potenciando el cierre de sesión de usuario sin problemas, esta acción desencadena el cierre de sesión en todos los servicios de autenticación dentro de la plataforma Teslo-shop. El código reside en el archivo `src/actions/auth/logout.ts` de la estructura del repositorio, fomentando una experiencia de usuario segura y conveniente. |

</details>

<details closed><summary>src.actions.users</summary>

| Archivo                                                                                                                      | Resumen                                                                                                                                                                                                                                                                                                    |
| ---                                                                                                                           | ---                                                                                                                                                                                                                                                                                                        |
| [change-user-role.ts](https://github.com/juansdev/teslo-shop/blob/master/src/actions/users/change-user-role.ts)               | En el repositorio central de teslo-shop, la función changeUserRole (src/actions/users/change-user-role.ts) facilita la modificación de los roles de los usuarios en tiempo real, requiriendo autenticación como administrador. Esta acción también actualiza la lista de usuarios en la página /admin/users para reflejar los cambios de inmediato. |
| [get-paginater-users.ts](https://github.com/juansdev/teslo-shop/blob/master/src/actions/users/get-paginater-users.ts)         | Implementa la API para obtener listas paginadas de usuarios, asegurando el acceso seguro a través de la verificación de roles utilizando el ORM Prisma para consultar y ordenar los datos en Teslo-Shop.                                                                                                                                          |

</details>

<details closed><summary>src.actions.payments</summary>

| Archivo                                                                                                                         | Resumen                                                                                                                                                                                                                                                                                                                                                   |
| ---                                                                                                                              | ---                                                                                                                                                                                                                                                                                                                                                       |
| [paypal-check-payment.ts](https://github.com/juansdev/teslo-shop/blob/master/src/actions/payments/paypal-check-payment.ts)       | Verifica los pagos de PayPal llamando a los endpoints relevantes de la API de PayPal para la verificación de transacciones, actualiza el estado de los pedidos como pagados utilizando la base de datos Prisma, y actualiza las cachés afectadas en la aplicación Next.js para asegurar la integridad de los datos y la re-renderización oportuna de la página después de transacciones exitosas. |
| [set-transaction-by-id.ts](https://github.com/juansdev/teslo-shop/blob/master/src/actions/payments/set-transaction-by-id.ts)     | En el proyecto Teslo-Shop, este archivo (src/actions/payments/set-transaction-by-id.ts) permite actualizaciones de transacciones para pedidos específicos comunicándose con la capa de base de datos Prisma para asociar cada pedido con su respectivo ID de transacción. Este proceso optimizado asegura una gestión fluida de las transacciones financieras dentro de la aplicación. |

</details>

<details closed><summary>src.actions.order</summary>

| Archivo                                                                                                                | Resumen                                                                                                                                                                                                                                                                                                                                                                               |
| ---                                                                                                                     | ---                                                                                                                                                                                                                                                                                                                                                                                   |
| [place-order.ts](https://github.com/juansdev/teslo-shop/blob/master/src/actions/order/place-order.ts)                   | La acción PlaceOrder permite a los usuarios completar transacciones creando nuevos pedidos dentro de la aplicación Teslo Shop. Calcula subtotales, impuestos y totales para los artículos seleccionados, asegura la disponibilidad de stock y guarda los detalles del pedido junto con la dirección del usuario. Esta acción también gestiona los productos asociados al pedido y sus cantidades de stock actualizadas dentro de la base de datos Prisma. |
| [get-order-by-id.ts](https://github.com/juansdev/teslo-shop/blob/master/src/actions/order/get-order-by-id.ts)           | Valida la autenticación del usuario antes de recuperar un pedido por su ID único, incluyendo los elementos relacionados del pedido, detalles de la dirección e imágenes de los productos asociados, además de verificar si el usuario solicitante tiene derechos de propiedad sobre el pedido en cuestión, asegurando la integridad de los datos en esta aplicación de comercio electrónico. |
| [get-order-by-user.ts](https://github.com/juansdev/teslo-shop/blob/master/src/actions/order/get-order-by-user.ts)       | Esta función de acción, `getOrdersByUser`, obtiene y organiza los pedidos pasados de un usuario junto con su información de envío dentro de la arquitectura de backend de Teslo Shop utilizando la interacción con la base de datos Prisma y la autenticación NextAuth. |
| [get-paginated-orders.ts](https://github.com/juansdev/teslo-shop/blob/master/src/actions/order/get-paginated-orders.ts) | Gestiona solicitudes autenticadas de usuarios para listas de pedidos paginados en teslo-shop. Utilizando NextAuth y la base de datos Prisma, esta acción recupera pedidos ordenados por fecha de creación desde el backend y devuelve la página especificada junto con el total de páginas y todos los elementos de la página actual. Asegura la seguridad de los datos ya que solo los administradores tienen acceso a este endpoint. |

</details>

<details closed><summary>src.actions.country</summary>

| Archivo                                                                                                      | Resumen                                                                                                                                                                                                                                                  |
| ---                                                                                                           | ---                                                                                                                                                                                                                                                      |
| [get-countries.ts](https://github.com/juansdev/teslo-shop/blob/master/src/actions/country/get-countries.ts)   | Esta acción `getCountries` obtiene todos los detalles de los países ordenados por nombre desde la base de datos (Prisma) en la aplicación Teslo-shop, asegurando un orden amigable para el usuario para una experiencia de compra sin interrupciones. |

</details>

<details closed><summary>src.actions.category</summary>

| Archivo                                                                                                           | Resumen                                                                                                                                                                       |
| ---                                                                                                               | ---                                                                                                                                                                           |
| [get-categories.ts](https://github.com/juansdev/teslo-shop/blob/master/src/actions/category/get-categories.ts)     | GetCategories(). Aprovecha la base de datos Prisma para recuperar todos los nombres de las categorías, ordenados alfabéticamente, asegurando una navegación fluida para los clientes en las páginas de productos. |

</details>

<details closed><summary>src.actions.products</summary>

| Archivo                                                                                                                   | Resumen                                                                                                                                                                                                                                                                                                                                                                                    |
| ---                                                                                                                       | ---                                                                                                                                                                                                                                                                                                                                                                                        |
| [get-stock-by-slug.ts](https://github.com/juansdev/teslo-shop/blob/master/src/actions/products/get-stock-by-slug.ts)      | Potencia la gestión de inventario. La función `getStockBySlug` en el directorio `src/actions/products` verifica la disponibilidad de un producto específico utilizando la base de datos Prisma por su slug único y devuelve el nivel de stock o predetermina a cero si ocurre un error. Contribuye significativamente a la experiencia de compra del usuario en la aplicación Teslo Shop. |
| [delete-product-image.ts](https://github.com/juansdev/teslo-shop/blob/master/src/actions/products/delete-product-image.ts)| Elimina la imagen especificada de Cloudinary usando las credenciales proporcionadas. Simultáneamente elimina el registro de la imagen asociada de la base de datos del repositorio y desencadena la revalidación de la caché en las páginas relevantes, optimizando el rendimiento en las interfaces de administración y usuario para productos. |
| [get-product-by-slug.ts](https://github.com/juansdev/teslo-shop/blob/master/src/actions/products/get-product-by-slug.ts)  | Recupera y procesa un producto por su slug único desde la base de datos utilizando Prisma en un entorno serverless de Next.js. La funcionalidad mejorada devuelve un objeto de producto formateado que incluye las imágenes asociadas del producto para una visualización fluida en el frontend de Teslo-shop. |
| [product-pagination.ts](https://github.com/juansdev/teslo-shop/blob/master/src/actions/products/product-pagination.ts)    | Recopila, formatea y devuelve productos paginados junto con sus imágenes en miniatura dentro del repositorio Teslo-Shop. Utilizando el ORM Prisma para las operaciones de la base de datos, sirve eficientemente listados de productos manteniendo una experiencia de usuario fluida. |
| [create-update-product.ts](https://github.com/juansdev/teslo-shop/blob/master/src/actions/products/create-update-product.ts) | Acepta FormData para la creación/actualización de productos. Integra Cloudinary para manejar las imágenes de los productos. Impone transacciones en la base de datos utilizando Prisma. Revalida las URLs afectadas después de una actualización de producto. |

</details>

<details closed><summary>src.actions.address</summary>

| Archivo                                                                                                              | Resumen                                                                                                                                                                                                                                                                                                                                                                                              |
| ---                                                                                                                  | ---                                                                                                                                                                                                                                                                                                                                                                                                  |
| [get-user-address.ts](https://github.com/juansdev/teslo-shop/blob/master/src/actions/address/get-user-address.ts)    | Esta acción `getUserAddress`, que reside en el directorio actions/address del repositorio teslo-shop, es responsable de recuperar la dirección de envío asociada con un usuario dado en la base de datos de la aplicación utilizando el ORM Prisma a través de la importación @/lib/prisma. Si se encuentra una dirección, devuelve los detalles anonimizados de la dirección junto con los datos del país correspondiente, asegurando operaciones de entrega sin interrupciones. |
| [set-user-address.ts](https://github.com/juansdev/teslo-shop/blob/master/src/actions/address/set-user-address.ts)    | Gestiona la dirección del usuario en teslo-shop creando, actualizando o reemplazando los registros con los detalles proporcionados. Asegura la consistencia de los datos del usuario verificando si ya existe una entrada antes de crearla o actualizarla utilizando la base de datos Prisma en esta arquitectura de plataforma de comercio electrónico de código abierto. |
| [delete-user-address.ts](https://github.com/juansdev/teslo-shop/blob/master/src/actions/address/delete-user-address.ts)| Elimina las direcciones de usuario de la base de datos a través de la capa `prisma`, mejorando la consistencia de los datos dentro del sistema de gestión de usuarios de la plataforma Teslo-shop. |

</details>

<details closed><summary>src.app</summary>

| Archivo                                                                                 | Resumen                                                                                                                                                                                                                                                       |
| ---                                                                                     | ---                                                                                                                                                                                                                                                           |
| [globals.css](https://github.com/juansdev/teslo-shop/blob/master/src/app/globals.css)   | Personaliza los estilos globales para la aplicación Teslo-Shop, aprovechando el marco de trabajo utility-first de Tailwind CSS para simplificar la creación de componentes UI mientras ofrece visuales adaptables y responsivos a través de diferentes esquemas de color, animaciones y transiciones. |
| [layout.tsx](https://github.com/juansdev/teslo-shop/blob/master/src/app/layout.tsx)     | Inicializa y personaliza el diseño base para la aplicación Teslo Shop, integrando su tipografía elegida (inter) con el flujo de contenido dinámico impulsado por la base de datos Prisma a través de los proveedores de NextAuth. |

</details>

<details closed><summary>src.app.auth</summary>

| Archivo                                                                                     | Resumen                                                                                                                                                                                                                                                                                                |
| ---                                                                                          | ---                                                                                                                                                                                                                                                                                                    |
| [layout.tsx](https://github.com/juansdev/teslo-shop/blob/master/src/app/auth/layout.tsx)     | En esta arquitectura de aplicación Next.js, el archivo `auth/layout.tsx` sirve como un envoltorio protegido para todos los demás componentes. Verifica de manera segura si el usuario ha iniciado sesión y, de ser así, lo redirige a la página de inicio, asegurando que los usuarios no autorizados solo puedan acceder a áreas permitidas de Tesla Shop. |

</details>

<details closed><summary>src.app.auth.login</summary>

| Archivo                                                                                         | Resumen                                                                                                                                                                                                |
| ---                                                                                             | ---                                                                                                                                                                                                    |
| [page.tsx](https://github.com/juansdev/teslo-shop/blob/master/src/app/auth/login/page.tsx)       | Facilita el inicio de sesión de los usuarios dentro de la aplicación Teslo Shop al renderizar el componente LoginForm como parte del diseño del frontend, asegurando una experiencia de usuario fluida. |

</details>

<details closed><summary>src.app.auth.login.ui</summary>

| Archivo                                                                                                      | Resumen                                                                                                                                                                                                                                                                                                                                                                                                 |
| ---                                                                                                           | ---                                                                                                                                                                                                                                                                                                                                                                                                     |
| [LoginForm.tsx](https://github.com/juansdev/teslo-shop/blob/master/src/app/auth/login/ui/LoginForm.tsx)       | Este componente `LoginForm` maneja la autenticación del usuario recolectando los inputs de email y contraseña, validándolos con una acción (authenticate), y proporcionando mensajes de error relevantes o redirigiendo al usuario al dashboard después de una autenticación exitosa. También cuenta con una funcionalidad secundaria para la creación de cuentas mediante la navegación por enlaces y una gestión del estado de carga para el botón de inicio de sesión. |

</details>

<details closed><summary>src.app.auth.new-account</summary>

| Archivo                                                                                              | Resumen                                                                                                                                                                                                                                                                                                                                                                              |
| ---                                                                                                  | ---                                                                                                                                                                                                                                                                                                                                                                                  |
| [page.tsx](https://github.com/juansdev/teslo-shop/blob/master/src/app/auth/new-account/page.tsx)     | Este archivo de código, ubicado en `src/app/auth/new-account/page.tsx`, presenta una página de registro de usuario para la aplicación web Teslo Shop al importar y renderizar un componente RegisterForm mientras aplica un estilo específico con `titleFont` de la carpeta config. ¿El objetivo final? Proporcionar un proceso de creación de nuevas cuentas intuitivo para los visitantes en este proyecto de código abierto. |

</details>

<details closed><summary>src.app.auth.new-account.ui</summary>

| Archivo                                                                                                              | Resumen                                                                                                                                                                                                                                                                                                                                                                                                                 |
| ---                                                                                                                   | ---                                                                                                                                                                                                                                                                                                                                                                                                                     |
| [RegisterForm.tsx](https://github.com/juansdev/teslo-shop/blob/master/src/app/auth/new-account/ui/RegisterForm.tsx)   | Registra nuevas cuentas de usuario en la aplicación TesloShop. El componente `RegisterForm.tsx` facilita la recopilación de información del usuario a través de campos de formulario y realiza acciones de autenticación usando `registerUser()` y `login()`. Muestra mensajes de error durante el registro, ofrece un enlace de inicio de sesión para usuarios ya registrados y asegura la validación de los inputs del usuario a través de `react-hook-form` y reglas de validación personalizadas. |

</details>

<details closed><summary>src.app.(shop)</summary>

| Archivo                                                                                         | Resumen                                                                                                                                                                                                                                                                                                                |
| ---                                                                                             | ---                                                                                                                                                                                                                                                                                                                    |
| [layout.tsx](https://github.com/juansdev/teslo-shop/blob/master/src/app/(shop)/layout.tsx)      | Un enfoque de diseño modular para el componente ShopLayout envuelve el contenido del usuario dentro de una estructura optimizada, integrando la navegación superior, la barra lateral y los elementos del pie de página.                                                                                                                                         |
| [page.tsx](https://github.com/juansdev/teslo-shop/blob/master/src/app/(shop)/page.tsx)          | El componente `Home` page, ubicado en `src/app/(shop)/page.tsx`, obtiene una lista paginada de productos desde la API y los muestra con la navegación adecuada. Al implementar una paginación eficiente, proporciona una experiencia de carga optimizada para los usuarios, permitiendo una navegación fluida a través de grandes colecciones de productos. |

</details>

<details closed><summary>src.app.(shop).product</summary>

| Archivo                                                                                                       | Resumen                                                                                                                                                                                                                                                                                                                                              |
| ---                                                                                                           | ---                                                                                                                                                                                                                                                                                                                                                  |
| [not-found.tsx](https://github.com/juansdev/teslo-shop/blob/master/src/app/(shop)/product/not-found.tsx)      | Mejora la experiencia del usuario al manejar páginas de productos inexistentes. Importando y renderizando el componente PageNotFound de componentes personalizados, este archivo asegura que cuando un cliente accede a un producto inexistente, se le informe adecuadamente. Esto se integra de manera fluida con el resto de la estructura y arquitectura del repositorio TesloShop. |

</details>

<details closed><summary>src.app.(shop).product.[slug]</summary>

| Archivo                                                                                                | Resumen                                                                                                                                                                                                                                                                                                                                 |
| ---                                                                                                     | ---                                                                                                                                                                                                                                                                                                                                     |
| [page.tsx](https://github.com/juansdev/teslo-shop/blob/master/src/app/(shop)/product/[slug]/page.tsx)   | Genera páginas de productos dinámicas para el Teslo Shop. Obtiene detalles del producto usando funciones de acción basadas en el slug proporcionado. Los metadatos se generan dinámicamente para optimizar el SEO. La página muestra las imágenes del producto, el título, el precio y la descripción con una función de añadir al carrito. También se muestra la etiqueta de stock para cada producto. |

</details>

<details closed><summary>src.app.(shop).product.[slug].ui</summary>

| Archivo                                                                                                               | Resumen                                                                                                                                                                                                                                 |
| ---                                                                                                                    | ---                                                                                                                                                                                                                                     |
| [AddToCart.tsx](https://github.com/juansdev/teslo-shop/blob/master/src/app/(shop)/product/[slug]/ui/AddToCart.tsx)     | Mejora la experiencia de compra en el comercio electrónico al permitir que los clientes añadan productos de tamaño y cantidad seleccionados a su carrito. Este componente React interactúa con la tienda global del carrito para un proceso de pago fluido en nuestro Teslo-Shop. |

</details>

<details closed><summary>src.app.(shop).orders</summary>

| Archivo                                                                                       | Resumen                                                                                                                                                                                                                                                                                                                                                  |
| ---                                                                                            | ---                                                                                                                                                                                                                                                                                                                                                      |
| [page.tsx](https://github.com/juansdev/teslo-shop/blob/master/src/app/(shop)/orders/page.tsx)  | Muestra una lista de pedidos para usuarios autenticados en formato de tabla. Recupera los datos de los pedidos a través de una función de acción y verifica la autenticación antes de renderizar la página, mostrando el ID único de cada pedido, nombre, estado y un botón "Ver pedido" para ver más detalles. Este archivo mejora la experiencia del usuario en la gestión de sus pedidos dentro de Teslo Shop. |

</details>

<details closed><summary>src.app.(shop).orders.[id]</summary>

| Archivo                                                                                                | Resumen                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| ---                                                                                                     | ---                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| [page.tsx](https://github.com/juansdev/teslo-shop/blob/master/src/app/(shop)/orders/[id]/page.tsx)      | Este componente renderiza una página de pedido con información detallada del pedido. Muestra los detalles del producto, dirección de entrega, subtotales del pedido, impuestos y costo total. Utiliza hooks personalizados para obtener el pedido según su ID. También incluye un botón de PayPal para el pago del pedido. Esto está integrado en la arquitectura más amplia de la aplicación Teslo-Shop que abarca next.js, Prisma para operaciones de base de datos y varios paquetes de código abierto para componentes UI y estilo. |

</details>

<details closed><summary>src.app.(shop).admin</summary>

| Archivo                                                                                       | Resumen                                                                                                                                                                                                                                                                                                    |
| ---                                                                                          | ---                                                                                                                                                                                                                                                                                                        |
| [page.tsx](https://github.com/juansdev/teslo-shop/blob/master/src/app/(shop)/admin/page.tsx)  | Gestiona el panel de administración de Teslo Shop, ofreciendo una interfaz de control simplificada. Simplifica las tareas de administración y ofrece una visión general para gestionar eficazmente el funcionamiento de la plataforma. Parte de una arquitectura de repositorio integral que incluye configuración Docker, Next.js, Prisma y estilo con Tailwind CSS. |

</details>

<details closed><summary>src.app.(shop).admin.product.[slug]</summary>

| Archivo                                                                                                         | Resumen                                                                                                                                                                                                                                                                                                                                                                            |
| ---                                                                                                             | ---                                                                                                                                                                                                                                                                                                                                                                                |
| [page.tsx](https://github.com/juansdev/teslo-shop/blob/master/src/app/(shop)/admin/product/[slug]/page.tsx)     | Gestiona y edita productos dentro del panel administrativo de TesloShop. Este archivo de código permite la creación y edición de entradas de productos nuevos y existentes, permitiendo una integración fluida con la estructura general de la tienda. La funcionalidad se logra a través del componente `ProductForm` que se comunica con los controladores de acción para obtener y actualizar los datos del producto desde el backend. |

</details>

<details closed><summary>src.app.(shop).admin.product.[slug].ui</summary>

| Archivo                                                                                                                         | Resumen                                                                                                                                                                                                                                                                                                                                                                                   |
| ---                                                                                                                            | ---                                                                                                                                                                                                                                                                                                                                                                                       |
| [ProductForm.tsx](https://github.com/juansdev/teslo-shop/blob/master/src/app/(shop)/admin/product/[slug]/ui/ProductForm.tsx)   | El código renderiza un formulario para actualizar detalles del producto. Tiene campos para título, precio y etiquetas (con validación), género, categoría (selección de un desplegable basado en las opciones disponibles), inventario (con entrada numérica y validación min=0), tamaños (opciones clicables que se rellenan dinámicamente), entrada de imágenes con soporte múltiple, y vistas previas de las imágenes del producto con botones de eliminación. |

</details>

<details closed><summary>src.app.(shop).admin.orders</summary>

| Archivo                                                                                                      | Resumen                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| ---                                                                                                           | ---                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| [page.tsx](https://github.com/juansdev/teslo-shop/blob/master/src/app/(shop)/admin/orders/page.tsx)           | Este archivo fuente es un componente React llamado `OrdersPage` dentro de la sección administrativa de la aplicación Teslo-Shop. Muestra listados de pedidos paginados, cada uno con información esencial como ID, nombre del cliente y estado, obtenidos a través de la acción `getPaginatedOrders`. Los usuarios pueden ver información detallada del pedido haciendo clic en los enlaces. La navegación al inicio de sesión se redirige si el acceso no está autorizado. Este componente mejora la experiencia administrativa en la gestión de pedidos de Teslo-Shop. |

</details>

<details closed><summary>src.app.(shop).admin.users</summary>

| Archivo                                                                                               | Resumen                                                                                                                                                                                                                                                                                    |
| ---                                                                                                   | ---                                                                                                                                                                                                                                                                                        |
| [page.tsx](https://github.com/juansdev/teslo-shop/blob/master/src/app/(shop)/admin/users/page.tsx)    | Gestiona los listados de usuarios para los administradores dentro del ecosistema Teslo Shop. Utilizando paginación, muestra una tabla completa de usuarios. Asegura el acceso seguro redirigiendo a los usuarios no autenticados a la página de inicio de sesión. Interactúa con acciones y componentes para una organización óptima. |

</details>

<details closed><summary>src.app.(shop).admin.users.ui</summary>

| Archivo                                                                                                              | Resumen                                                                                                                                                                                                                                                                         |
| ---                                                                                                                   | ---                                                                                                                                                                                                                                                                             |
| [UsersTable.tsx](https://github.com/juansdev/teslo-shop/blob/master/src/app/(shop)/admin/users/ui/UsersTable.tsx)     | Gestión de roles de usuario dentro de la interfaz de administración de Teslo Shop. **Características clave:** Muestra usuarios con su correo electrónico, nombre completo y roles actuales en formato de tabla; permite a los administradores modificar los roles de usuario a través de un menú de selección. Esto promueve un control eficiente sobre los niveles de acceso de los usuarios. |

</details>

<details closed><summary>src.app.(shop).admin.products</summary>

| Archivo                                                                                                      | Resumen                                                                                                                                                                                                                                                                          |
| ---                                                                                                           | ---                                                                                                                                                                                                                                                                            |
| [page.tsx](https://github.com/juansdev/teslo-shop/blob/master/src/app/(shop)/admin/products/page.tsx)         | Este archivo forma parte de un panel de administración dentro de la aplicación Teslo Shop. Obtiene datos paginados de productos y los renderiza en formato de tabla, incluyendo imágenes, título, precio, género, estado del inventario y tamaños. También se incluyen acciones para crear un nuevo producto. |

</details>

<details closed><summary>src.app.(shop).empty</summary>

| Archivo                                                                                       | Resumen                                                                                                                                                                                                                                    |
| ---                                                                                          | ---                                                                                                                                                                                                                                        |
| [page.tsx](https://github.com/juansdev/teslo-shop/blob/master/src/app/(shop)/empty/page.tsx)  | Gestiona la presentación de la página de carrito vacío en la arquitectura de la aplicación Teslo-Shop. La interfaz personalizada muestra un ícono que indica un carrito vacío e invita a los usuarios a regresar a la página principal, asegurando una experiencia de compra amigable. |

</details>

<details closed><summary>src.app.(shop).checkout.(checkout)</summary>

| Archivo                                                                                                       | Resumen                                                                                                                                                                                                                                                                                                 |
| ---                                                                                                            | ---                                                                                                                                                                                                                                                                                                     |
| [page.tsx](https://github.com/juansdev/teslo-shop/blob/master/src/app/(shop)/checkout/(checkout)/page.tsx)    | Navega por el proceso de pago de TesloShop. Muestra la verificación del pedido y el carrito editable. Renderiza componentes de ProductInCart y la función PlaceOrder para facilitar la experiencia de compra. Interactúa con NextAuth y Prisma para gestionar la autenticación de usuarios y las operaciones de la base de datos respectivamente. |

</details>

<details closed><summary>src.app.(shop).checkout.(checkout).ui</summary>

| Archivo                                                                                                                               | Resumen                                                                                                                                                                                                                                                                                                                                                                                             |
| ---                                                                                                                                    | ---                                                                                                                                                                                                                                                                                                                                                                                                 |
| [ProductsInCart.tsx](https://github.com/juansdev/teslo-shop/blob/master/src/app/(shop)/checkout/(checkout)/ui/ProductsInCart.tsx)     | Gestiona la presentación UI de los productos en el carrito de compras de los clientes. Carga productos dinámicamente utilizando hooks de React, obtiene datos de la tienda (`useCartStore`) y proporciona el total para cada artículo en formato de moneda. Asegura que el usuario sea redirigido a la página principal si el carrito está vacío, optimizando la experiencia del usuario.                                                                                 |
| [PlaceOrder.tsx](https://github.com/juansdev/teslo-shop/blob/master/src/app/(shop)/checkout/(checkout)/ui/PlaceOrder.tsx)             | Simplifica el proceso de pago para los usuarios de TesloShop. Este componente PlaceOrder recopila los detalles del pedido, presenta el costo total, muestra los términos y condiciones, e inicia la colocación del pedido cuando se hace clic en el botón Place Order. La funcionalidad forma parte de la arquitectura más amplia de Next.js, aprovechando varias bibliotecas, tiendas y hooks personalizados para integrarse sin problemas en la aplicación de comercio electrónico. |

</details>

<details closed><summary>src.app.(shop).checkout.address</summary>

| Archivo                                                                                                    | Resumen                                                                                                                                                                                                                                                                                                              |
| ---                                                                                                         | ---                                                                                                                                                                                                                                                                                                                  |
| [page.tsx](https://github.com/juansdev/teslo-shop/blob/master/src/app/(shop)/checkout/address/page.tsx)    | Facilita una experiencia de pago sin problemas para los usuarios de Teslo-Shop. Este script rellena una lista dinámica de países y obtiene la dirección guardada del usuario de la base de datos cuando sea necesario. Aprovecha un componente AddressForm para recopilar de manera segura los detalles de envío del usuario, mejorando la comodidad del cliente durante el proceso de compra. |

</details>

<details closed><summary>src.app.(shop).checkout.address.ui</summary>

| Archivo                                                                                                                      | Resumen                                                                                                                                                                                                                                                                                                                                                                                                  |
| ---                                                                                                                           | ---                                                                                                                                                                                                                                                                                                                                                                                                      |
| [AddressForm.tsx](https://github.com/juansdev/teslo-shop/blob/master/src/app/(shop)/checkout/address/ui/AddressForm.tsx)     | Este componente de React recopila datos del usuario, incluyendo ciudad, país, teléfono y una opción de casilla de verificación para recordar la dirección, utilizando la biblioteca yup. 2. Botón Siguiente: El botón de envío permite el progreso del usuario, activándose condicionalmente según la validez del formulario. 3. Opción de casilla de verificación: Una casilla que permite a los usuarios optar por que su dirección sea recordada, mostrando un icono SVG opcional y texto de etiqueta. |

</details>

<details closed><summary>src.app.(shop).profile</summary>

| Archivo                                                                                           | Resumen                                                                                                                                                                                                                                                          |
| ---                                                                                                 | ---                                                                                                                                                                                                                                                              |
| [page.tsx](https://github.com/juansdev/teslo-shop/blob/master/src/app/(shop)/profile/page.tsx)    | La función `ProfilePage`, dentro de la arquitectura del repositorio de `teslo-shop`, ofrece a los usuarios una visión general de la información de su perfil recuperando datos del usuario a través de sesiones autenticadas y mostrándolos en formato JSON legible para facilitar su comprensión. |

</details>

<details closed><summary>src.app.(shop).gender</summary>

| Archivo                                                                                                     | Resumen                                                                                                                                                                                                                                                                                                                         |
| ---                                                                                                          | ---                                                                                                                                                                                                                                                                                                                             |
| [not-found.tsx](https://github.com/juansdev/teslo-shop/blob/master/src/app/(shop)/gender/not-found.tsx)     | Gestiona el manejo de errores para categorías de productos faltantes dentro de nuestra aplicación Teslo Shop. Este archivo importa un componente personalizado PageNotFound para mostrar un mensaje de error cuando no se puede encontrar una categoría. Integrado con la estructura integral de nuestra aplicación NextJS-Prisma, asegura una navegación y experiencia de usuario fluida. |
| [error.tsx](https://github.com/juansdev/teslo-shop/blob/master/src/app/(shop)/gender/error.tsx)             | Mejora la experiencia del usuario en Teslo-Shop gestionando problemas de navegación imprevistos. La página de error en `src/app/(shop)/gender/` captura rutas desconocidas y redirige de manera elegante a un mensaje de error personalizado con la ayuda del componente PageNotFound, asegurando una experiencia de compra consistente. |

</details>

<details closed><summary>src.app.(shop).gender.[gender]</summary>

| Archivo                                                                                                    | Resumen                                                                                                                                                                                                                                                                                                     |
| ---                                                                                                         | ---                                                                                                                                                                                                                                                                                                         |
| [page.tsx](https://github.com/juansdev/teslo-shop/blob/master/src/app/(shop)/gender/[gender]/page.tsx)     | Navega por páginas de productos dinámicos en Teslo Shop. Este archivo de código gestiona la generación de páginas basadas en género para categorías específicas, como hombres, mujeres, y más. Obtiene y muestra productos relevantes en varias páginas utilizando paginación, asegurando una experiencia de usuario fluida en la cuadrícula de productos de cada categoría. |

</details>

<details closed><summary>src.app.(shop).cart</summary>

| Archivo                                                                                        | Resumen                                                                                                                                                                                                                                                                                      |
| ---                                                                                             | ---                                                                                                                                                                                                                                                                                          |
| [page.tsx](https://github.com/juansdev/teslo-shop/blob/master/src/app/(shop)/cart/page.tsx)    | Una combinación perfecta de conveniencia y eficiencia en las compras. Muestra los artículos del carrito y ofrece una opción para que los usuarios continúen navegando o procedan al pago con el resumen del pedido a mano. Facilita una transición rápida de la navegación al pago, simplificando la experiencia de compra en el ecosistema de Teslo-Shop. |

</details>

<details closed><summary>src.app.(shop).cart.ui</summary>

| Archivo                                                                                                               | Resumen                                                                                                                                                                                                                                                                          |
| ---                                                                                                                    | ---                                                                                                                                                                                                                                                                              |
| [ProductsInCart.tsx](https://github.com/juansdev/teslo-shop/blob/master/src/app/(shop)/cart/ui/ProductsInCart.tsx)    | Muestra los artículos del carrito de los usuarios en Teslo Shop, cada artículo mostrando su imagen del producto, nombre, precio y un selector de cantidad para la personalización. Este componente interactúa con la tienda para actualizar cantidades o eliminar productos, asegurando una gestión fluida del carrito en tiempo real. |
| [OrderSummary.tsx](https://github.com/juansdev/teslo-shop/blob/master/src/app/(shop)/cart/ui/OrderSummary.tsx)        | Calcula y muestra los detalles del resumen del pedido para el usuario en esta aplicación de comercio electrónico Teslo Shop, incluyendo el número total de artículos, subtotal, impuestos y total general, haciendo que las interacciones de compra sean más convenientes al ofrecer una visión rápida de los detalles de la compra.                    |

</details>

<details closed><summary>src.app.(shop).products</summary>

| Archivo                                                                                            | Resumen                                                                                                                                                                                                        |
| ---                                                                                                 | ---                                                                                                                                                                                                            |
| [page.tsx](https://github.com/juansdev/teslo-shop/blob/master/src/app/(shop)/products/page.tsx)    | El componente **ProductsPage** dentro de **teslo-shop**. Este archivo muestra el diseño central de la página de productos para el frontend de Teslo-shop, proporcionando un diseño organizado para listar varios productos en nuestra plataforma de comercio electrónico. |

</details>

<details closed><summary>src.app.api.auth.[...nextauth]</summary>

| Archivo                                                                                                   | Resumen                                                                                                                                                                                                     |
| ---                                                                                                    | ---                                                                                                                                                                                                         |
| [route.ts](https://github.com/juansdev/teslo-shop/blob/master/src/app/api/auth/[...nextauth]/route.ts) | Simplifica la autenticación en todas las rutas de usuario importando los controladores necesarios del archivo de configuración de auth. Esto ayuda a mantener controles de acceso seguros en la arquitectura de la aplicación de Teslo-shop. |

</details>

<details closed><summary>src.utils</summary>

| Archivo                                                                                                                      | Resumen                                                                                                                                                                                                                                                                                                |
| ---                                                                                                                       | ---                                                                                                                                                                                                                                                                                                    |
| [generatePaginationNumbers.ts](https://github.com/juansdev/teslo-shop/blob/master/src/utils/generatePaginationNumbers.ts) | Genera números de paginación para la interfaz de usuario, optimizado para hasta 7 páginas o más cuando sea necesario, asegurando una experiencia de navegación eficiente dentro de TesloShop.                                                                                                                          |
| [currencyFormat.ts](https://github.com/juansdev/teslo-shop/blob/master/src/utils/currencyFormat.ts)                       | Implementa una función de utilidad `currencyFormat` para convertir valores numéricos en cadenas de texto formateadas en USD siguiendo el estilo de moneda del inglés estadounidense con hasta dos decimales. Ayuda a mantener una experiencia de usuario consistente y amigable al mostrar precios en la aplicación frontend de Teslo Shop.  |
| [sleep.ts](https://github.com/juansdev/teslo-shop/blob/master/src/utils/sleep.ts)                                         | Simplifica las funciones de la aplicación con una sencilla función de pausa, mejorando la capacidad de respuesta y el flujo de Teslo Shop al pausar la ejecución durante un número especificado de segundos (1 por defecto). Permite interacciones más suaves entre varios componentes de la aplicación y servicios externos en la arquitectura. |
| [index.ts](https://github.com/juansdev/teslo-shop/blob/master/src/utils/index.ts)                                         | Generación de números de paginación, ejecución retardada a través de la función de pausa y formato de moneda. Esto optimiza la experiencia del usuario y simplifica el desarrollo en toda la aplicación.                                                                                                                          |

</details>

<details closed><summary>src.interfaces</summary>

| Archivo                                                                                                                 | Resumen                                                                                                                                                                                                                                                                                                                                                                                                                       |
| ---                                                                                                                  | ---                                                                                                                                                                                                                                                                                                                                                                                                                           |
| [category.interface.ts](https://github.com/juansdev/teslo-shop/blob/master/src/interfaces/category.interface.ts)     | La interfaz `ICategoryWithId` en `src/interfaces/category.interface.ts` proporciona una estructura para organizar datos relacionados con las categorías de productos de la tienda con ID y nombres únicos, facilitando la interacción entre diferentes componentes dentro de la aplicación Teslo-Shop.                                                                                                                                                     |
| [user.interface.ts](https://github.com/juansdev/teslo-shop/blob/master/src/interfaces/user.interface.ts)             | Esta interfaz, ubicada dentro de la jerarquía de archivos fuente del proyecto `teslo-shop` (`src/interfaces/user.interface.ts`), establece una estructura para los datos del usuario dentro de nuestra aplicación. Define atributos esenciales del usuario como ID, nombre, correo electrónico, rol e información opcional de imagen, asegurando un manejo uniforme de los datos de usuario en todo el sistema.                                                                              |
| [country.interface.ts](https://github.com/juansdev/teslo-shop/blob/master/src/interfaces/country.interface.ts)       | El `src/interfaces/country.interface.ts` define un tipo (ICountry) para gestionar entidades geográficas. Al estandarizar la estructura de datos, asegura una comunicación fluida entre componentes, contribuyendo a una arquitectura limpia y escalable en esta plataforma de comercio electrónico.                                                                                                                                               |
| [address.interface.ts](https://github.com/juansdev/teslo-shop/blob/master/src/interfaces/address.interface.ts)       | Estructura las direcciones de los clientes dentro de teslo-shop, estandarizando datos con campos requeridos incluyendo nombre, apellido, dirección, código postal, ciudad, país y teléfono. Permite un campo adicional opcional para una mayor personalización de los datos de dirección.                                                                                                                                                            |
| [pagination.interface.ts](https://github.com/juansdev/teslo-shop/blob/master/src/interfaces/pagination.interface.ts) | Implementa opciones de paginación personalizables para las respuestas de la API Características: Soporta la especificación de parámetros de página y toma para optimizar la recuperación de datos. Encapsula estas configuraciones dentro de un sistema de consulta de datos más amplio, asegurando una ejecución de consultas flexible y eficiente en la arquitectura del proyecto TesloShop.                                                                                                                       |
| [index.ts](https://github.com/juansdev/teslo-shop/blob/master/src/interfaces/index.ts)                               | Coordina las interacciones de datos de la aplicación definiendo interfaces compartidas en `src/interfaces/index.ts`. Estas interfaces actúan como planos para las estructuras de producto, país, dirección, PayPal, usuario, categoría y objetos de paginación en todo TesloShop, asegurando una comunicación consistente dentro de la arquitectura.                                                                                                      |
| [product.interface.ts](https://github.com/juansdev/teslo-shop/blob/master/src/interfaces/product.interface.ts)       | La interfaz IProduct describe las propiedades de los productos individuales, incluyendo descripciones, tamaños, etiquetas y géneros (hombres, mujeres, niños, unisex). * ICartProduct especifica los detalles necesarios para los artículos en el carrito de compras de un cliente. * IProductImage define atributos para las imágenes de productos. Al estandarizar estas interfaces, nuestra aplicación asegura una representación de datos consistente en diferentes funcionalidades de Teslo-Shop. |
| [paypal.interface.ts](https://github.com/juansdev/teslo-shop/blob/master/src/interfaces/paypal.interface.ts)         | Transforma y valida las respuestas de estado de los pedidos de PayPal, definiendo atributos esenciales como el ID del pedido, estado, fuente de pago, unidades de compra, información del pagador, montos y más. Alineado con la arquitectura de teslo-shop, enriquece el flujo de pago escalable de la plataforma de comercio electrónico.                                                                                                                                |

</details>

<details closed><summary>src.components</summary>

| Archivo                                                                                   | Resumen                                                                                                                                                                                                                                                                                                     |
| ---                                                                                    | ---                                                                                                                                                                                                                                                                                                         |
| [index.ts](https://github.com/juansdev/teslo-shop/blob/master/src/components/index.ts) | Este archivo fuente exporta varios componentes reutilizables del repositorio teslo-shop, como TopMenu, Footer, ProductGrid y ProductSlideshow entre otros. Cada componente contribuye a la creación de una interfaz intuitiva y fácil de usar para la aplicación de comercio electrónico en la arquitectura del proyecto. |

</details>

<details closed><summary>src.components.product.slideshow</summary>

| Archivo                                                                                                                                         | Resumen                                                                                                                                                                                                                                                                                                                                                                 |
| ---                                                                                                                                          | ---                                                                                                                                                                                                                                                                                                                                                                     |
| [slideshow.css](https://github.com/juansdev/teslo-shop/blob/master/src/components/product/slideshow/slideshow.css)                           | Adopta la biblioteca Swiper para una experiencia de carrusel de imágenes suave e interactiva. Optimiza las imágenes para llenar sus contenedores mientras preserva la relación de aspecto. Permite transparencia parcial en miniaturas no activas para mejorar la legibilidad. Configura la altura, anchura y el relleno del contenedor de la presentación de diapositivas. En esencia, mejora el atractivo visual de las galerías de productos dentro de teslo-shop. |
| [ProductMobileSlideshow.tsx](https://github.com/juansdev/teslo-shop/blob/master/src/components/product/slideshow/ProductMobileSlideshow.tsx) | Presenta un componente deslizante de imágenes de productos adaptable para dispositivos móviles, optimizando la visualización y la funcionalidad de desplazamiento dentro de la arquitectura del repositorio Teslo-shop. Implementa la biblioteca Swiper, aprovechando características como paginación, reproducción automática y modo libre para ofrecer una experiencia de usuario fluida y atractiva al navegar por los productos.                                     |
| [ProductSlideshow.tsx](https://github.com/juansdev/teslo-shop/blob/master/src/components/product/slideshow/ProductSlideshow.tsx)             | Ofrece un componente de presentación de diapositivas de productos personalizable para mostrar múltiples imágenes de un producto. Permite a los usuarios desplazarse por las imágenes con botones de navegación y proporciona una opción de vista en miniatura. Adopta sin esfuerzo varios módulos de Swiper para asegurar una experiencia de usuario receptiva y fluida. Los estilos se pueden modificar fácilmente usando las clases CSS proporcionadas.         |

</details>

<details closed><summary>src.components.product.product-image</summary>

| Archivo                                                                                                                         | Resumen                                                                                                                                                                                                                                                         |
| ---                                                                                                                          | ---                                                                                                                                                                                                                                                             |
| [ProductImage.tsx](https://github.com/juansdev/teslo-shop/blob/master/src/components/product/product-image/ProductImage.tsx) | Personaliza la visualización de imágenes de productos en teslo-shop. Características clave: Proporciona ancho, altura, estilos y nombres de clase adaptables para cada imagen de producto mientras gestiona eventos de hover del mouse, manejando de manera fluida fuentes de URL tanto internas como externas a la aplicación. |

</details>

<details closed><summary>src.components.product.quantity-selector</summary>

| Archivo                                                                                                                                     | Resumen                                                                                                                                                                                                                                                                                                                                                                                |
| ---                                                                                                                                      |----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [QuantitySelector.tsx](https://github.com/juansdev/teslo-shop/blob/master/src/components/product/quantity-selector/QuantitySelector.tsx) | Aumenta el control del usuario dentro de Teslo Shop implementando un componente interactivo QuantitySelector que ajusta la cantidad de productos antes de la compra. Este componente React facilita la adición y eliminación de artículos en el carrito de compras, utilizando un diseño de interfaz de usuario limpio y iconos reutilizables de Ionic para una interacción intuitiva. |

</details>

<details closed><summary>src.components.product.stock-label</summary>

| Archivo                                                                                                                   | Resumen                                                                                                                                                                                                                                                                                            |
| ---                                                                                                                    | ---                                                                                                                                                                                                                                                                                                |
| [StockLabel.tsx](https://github.com/juansdev/teslo-shop/blob/master/src/components/product/stock-label/StockLabel.tsx) | Monitorea la disponibilidad de productos en la aplicación teslo-shop obteniendo niveles de stock para productos específicos usando una acción personalizada. El componente StockLabel actualiza dinámicamente el conteo de stock basado en los datos obtenidos. Esto mejora la experiencia del usuario proporcionando información de stock en tiempo real a los compradores. |

</details>

<details closed><summary>src.components.product.size-selector</summary>

| Archivo                                                                                                                         | Resumen                                                                                                                                                                                                                                                                        |
| ---                                                                                                                          | ---                                                                                                                                                                                                                                                                            |
| [SizeSelector.tsx](https://github.com/juansdev/teslo-shop/blob/master/src/components/product/size-selector/SizeSelector.tsx) | Introduce un selector de tallas dinámico para productos en teslo-shop. Recibe tallas disponibles, talla seleccionada y actualiza la selección en eventos de clic. Se alinea con la arquitectura existente aprovechando interfaces compartidas para la definición de tipos y utilizando convenciones de nombres de componentes. |

</details>

<details closed><summary>src.components.paypal</summary>

| Archivo                                                                                                          | Resumen                                                                                                                                                                                                                                                                                                                             |
| ---                                                                                                           | ---                                                                                                                                                                                                                                                                                                                                 |
| [PayPalButton.tsx](https://github.com/juansdev/teslo-shop/blob/master/src/components/paypal/PayPalButton.tsx) | Implementa un componente personalizado de PayPalButton (src/components/paypal/PayPalButton.tsx), conectándose a la biblioteca @paypal/react-paypal-js, y gestiona el flujo de transacciones creando pedidos y manejando eventos de aprobación. Se integra con acciones, utilidades y archivos de configuración a lo largo de la estructura del proyecto para asegurar transacciones seguras y fluidas. |

</details>

<details closed><summary>src.components.orders</summary>

| Archivo                                                                                                        | Resumen                                                                                                                                                                                                                      |
| ---                                                                                                         | ---                                                                                                                                                                                                                          |
| [OrderStatus.tsx](https://github.com/juansdev/teslo-shop/blob/master/src/components/orders/OrderStatus.tsx) | El componente `OrderStatus` muestra elegantemente el estado de las órdenes, ya sea "Compra Pendiente" o "Compra Confirmada", utilizando íconos y etiquetas intuitivos con códigos de color que contribuyen a la experiencia de usuario fluida de Teslo-shop. |

</details>

<details closed><summary>src.components.ui.sidebar</summary>

| Archivo                                                                                                        | Resumen                                                                                                                                                                                                                                                                                                                                                                        |
| ---                                                                                                         | ---                                                                                                                                                                                                                                                                                                                                                                            |
| [MenuByRol.tsx](https://github.com/juansdev/teslo-shop/blob/master/src/components/ui/sidebar/MenuByRol.tsx) | Este componente `ItemMenuByFilter`, ubicado dentro de la estructura del frontend de TesloShop (`src/components/ui/sidebar/MenuByRol.tsx`), sirve para renderizar condicionalmente elementos de menú dinámicos según el rol del usuario autenticado y el estado de la sesión. Al implementar un sistema flexible de props, asegura una visualización adecuada de la interfaz para diferentes estados de usuario en el diseño de la aplicación. |
| [Sidebar.tsx](https://github.com/juansdev/teslo-shop/blob/master/src/components/ui/sidebar/Sidebar.tsx)     | Este archivo Sidebar.tsx agiliza la navegación gestionando los elementos del menú según la autenticación del usuario y sus roles. Incluye opciones para iniciar sesión, cerrar sesión, perfil, órdenes y funcionalidades de administrador como productos, órdenes de administrador y gestión de usuarios dentro de la aplicación Teslo-shop.                                                                                          |

</details>

<details closed><summary>src.components.ui.title</summary>

| Archivo                                                                                              | Resumen                                                                                                                                                                                                                                                                                                                                  |
| ---                                                                                               | ---                                                                                                                                                                                                                                                                                                                                      |
| [Title.tsx](https://github.com/juansdev/teslo-shop/blob/master/src/components/ui/title/Title.tsx) | Mejora la interfaz de usuario al definir el componente Title para encabezados y subtítulos de páginas. Permite a los desarrolladores configurar fácilmente títulos con subtítulos opcionales usando las props proporcionadas, mientras hereda la fuente del título especificada desde la configuración. Personalizable mediante la prop className, contribuyendo a la consistencia en el diseño de Teslo-shop. |

</details>

<details closed><summary>src.components.ui.top-menu</summary>

| Archivo                                                                                                     | Resumen                                                                                                                                                                                                                                                                                                                |
| ---                                                                                                      | ---                                                                                                                                                                                                                                                                                                                    |
| [TopMenu.tsx](https://github.com/juansdev/teslo-shop/blob/master/src/components/ui/top-menu/TopMenu.tsx) | Muestra el logo de la marca Teslo con el subtítulo de la tienda. Proporciona acceso a las principales categorías de productos (Hombres, Mujeres, Niños). Incluye funcionalidades de búsqueda y carrito (con recuento de artículos en tiempo real). Colapsa/expande el menú en pantallas más pequeñas usando diseño responsivo. Abre un menú lateral al hacer clic en el botón del menú. |

</details>

<details closed><summary>src.components.ui.footer</summary>

| Archivo                                                                                                 | Resumen                                                                                                                                                                                                                                                                        |
| ---                                                                                                  | ---                                                                                                                                                                                                                                                                            |
| [Footer.tsx](https://github.com/juansdev/teslo-shop/blob/master/src/components/ui/footer/Footer.tsx) | El componente Footer dentro del marco de interfaz de usuario (UI) de Teslo Shop. Este archivo asegura la visualización adecuada y el enlace del texto del pie de página, presentando el nombre de la marca e información de copyright. Aprovecha configuraciones de estilo para mantener una tipografía consistente en toda la interfaz. |

</details>

<details closed><summary>src.components.ui.not-found</summary>

| Archivo                                                                                                                | Resumen                                                                                                                                                                                                                                                                           |
| ---                                                                                                                 | ---                                                                                                                                                                                                                                                                               |
| [PageNotFound.tsx](https://github.com/juansdev/teslo-shop/blob/master/src/components/ui/not-found/PageNotFound.tsx) | Este archivo contiene el componente React `PageNotFound`. Presenta un llamativo código 404 junto con mensajes descriptivos y un enlace a la página de inicio. Se muestra una imagen de un astronauta en un lado, creando una experiencia de usuario atractiva dentro de la arquitectura de la aplicación Teslo-Shop. |

</details>

<details closed><summary>src.components.ui.pagination</summary>

| Archivo                                                                                                             | Resumen                                                                                                                                                                                                                                                                                                                                                                   |
| ---                                                                                                              | ---                                                                                                                                                                                                                                                                                                                                                                       |
| [Pagination.tsx](https://github.com/juansdev/teslo-shop/blob/master/src/components/ui/pagination/Pagination.tsx) | Genera enlaces de paginación personalizables para la aplicación de comercio electrónico, permitiendo a los usuarios navegar por las páginas de manera efectiva al generar dinámicamente URLs y renderizar números de página según los recuentos actuales y totales de páginas disponibles. El componente utiliza características de Next.js como `usePathname`, `useSearchParams`, y se adhiere a la guía de estilo de Tailwind CSS del proyecto. |

</details>

<details closed><summary>src.components.providers</summary>

| Archivo                                                                                                       | Resumen                                                                                                                                                                                                                           |
| ---                                                                                                        | ---                                                                                                                                                                                                                               |
| [Providers.tsx](https://github.com/juansdev/teslo-shop/blob/master/src/components/providers/Providers.tsx) | Mejora la experiencia del usuario en teslo-shop al integrar de manera fluida los pagos con PayPal dentro de la aplicación a través del uso de `PayPalScriptProvider` y next-auth para la autenticación, asegurando transacciones seguras para los clientes. |

</details>

<details closed><summary>src.components.products.product-grid</summary>

| Archivo                                                                                                                               | Resumen                                                                                                                                                                                                                                                                                                                                                            |
| ---                                                                                                                                | ---                                                                                                                                                                                                                                                                                                                                                                |
| [ProductGridItem.tsx](https://github.com/juansdev/teslo-shop/blob/master/src/components/products/product-grid/ProductGridItem.tsx) | Mejora la visualización de productos al renderizar elementos de lista interactivos y enfocados en imágenes dentro del diseño del frontend de teslo-shop. El componente aprovecha las capacidades de Next.js Link y gestión de estado, utilizando una interfaz externa para datos de productos y un componente de imagen de producto personalizado para una integración sin problemas con múltiples imágenes de productos y efectos de hover. |
| [ProductGrid.tsx](https://github.com/juansdev/teslo-shop/blob/master/src/components/products/product-grid/ProductGrid.tsx)         | Manipula el componente ProductGrid para teslo-shop. Renderiza una lista de productos en las páginas web, ajustando inteligentemente el diseño según el tamaño de la pantalla. Al emplear una estructura modular, permite una integración sin problemas con otros componentes y APIs relacionados con productos. Mejora la experiencia del usuario al organizar los elementos de manera ordenada y mejorar los tiempos de carga.                             |

</details>

<details closed><summary>prisma</summary>

| Archivo                                                                                     | Resumen                                                                                                                                                                                                                                                                                                                                                              |
| ---                                                                                      | ---                                                                                                                                                                                                                                                                                                                                                                  |
| [schema.prisma](https://github.com/juansdev/teslo-shop/blob/master/prisma/schema.prisma) | En este archivo de esquema de Prisma, defines modelos de base de datos para teslo-shop, incluyendo productos, categorías, usuarios, órdenes y direcciones. Mapea las relaciones entre estos modelos, permitiendo una interacción fluida de datos en la aplicación. Esta configuración asegura un almacenamiento, recuperación y consulta eficientes de los datos cruciales de teslo-shop dentro de su base de datos PostgreSQL. |

</details>

<details closed><summary>prisma.migrations</summary>

| Archivo                                                                                                            | Resumen                                                                                                                                                                                                                                                                                                                                                                                                   |
| ---                                                                                                             | ---                                                                                                                                                                                                                                                                                                                                                                                                       |
| [migration_lock.toml](https://github.com/juansdev/teslo-shop/blob/master/prisma/migrations/migration_lock.toml) | En este código, encontrarás el archivo `migration_lock.toml` bajo `prisma/migrations`, que sirve como un bloqueo de configuración para los archivos de migración de Prisma cuando se utiliza PostgreSQL como proveedor de la base de datos dentro de nuestro proyecto teslo-shop. Este archivo de bloqueo asegura que solo una instancia aplique migraciones en un momento dado, evitando conflictos y preservando la consistencia a lo largo de la arquitectura de datos de nuestra aplicación. |

</details>

<details closed><summary>prisma.migrations.20240616170517_user_address</summary>

| Archivo                                                                                                                            | Resumen                                                                                                                                                                                                                                                     |
| ---                                                                                                                             | ---                                                                                                                                                                                                                                                         |
| [migration.sql](https://github.com/juansdev/teslo-shop/blob/master/prisma/migrations/20240616170517_user_address/migration.sql) | Construye la estructura del modelo de datos para las entidades UserAddress en el repositorio teslo-shop. Este archivo de migración define las relaciones con las tablas Country y User, asegurando un flujo de datos fluido entre las direcciones de los usuarios, los países y los usuarios dentro de la aplicación. |

</details>

<details closed><summary>prisma.migrations.20240616175033_user_address_city</summary>

| Archivo                                                                                                                                 | Resumen                                                                                                                                                                                                                        |
| ---                                                                                                                                  | ---                                                                                                                                                                                                                            |
| [migration.sql](https://github.com/juansdev/teslo-shop/blob/master/prisma/migrations/20240616175033_user_address_city/migration.sql) | Extiende el modelo `UserAddress` añadiendo el atributo city al esquema de la base de datos. Esta modificación permite un seguimiento geográfico más detallado dentro de los datos de dirección de usuario de Teslo Shop, mejorando la eficiencia de entrega y logística. |

</details>

<details closed><summary>prisma.migrations.20240614230445_product_image</summary>

| Archivo                                                                                                                             | Resumen                                                                                                                                                                                                                                                                                                                  |
| ---                                                                                                                              | ---                                                                                                                                                                                                                                                                                                                      |
| [migration.sql](https://github.com/juansdev/teslo-shop/blob/master/prisma/migrations/20240614230445_product_image/migration.sql) | En este repositorio, se implementa un script de migración SQL para el marco de trabajo Prisma para establecer una conexión de la tabla ProductImage con una tabla Product existente. Esto asegura una organización eficiente de las imágenes de los productos, vinculando cada imagen con su producto correspondiente dentro de la arquitectura de la aplicación teslo-shop. |

</details>

<details closed><summary>prisma.migrations.20240614225831_product_category</summary>

| Archivo                                                                                                                                | Resumen                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| ---                                                                                                                                 | ---                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| [migration.sql](https://github.com/juansdev/teslo-shop/blob/master/prisma/migrations/20240614225831_product_category/migration.sql) | En este código, el archivo `prisma/migrations/20240614225831_product_category/migration.sql` configura categorías de productos y productos con varios atributos como nombre, género, tamaño, niveles de stock, etiquetas, descripciones y más en el repositorio de Teslo-shop. Se definen las enumeraciones para los tipos Size y Gender, junto con una tabla para almacenar la información de los productos, un índice de slug único y un índice para optimizar las búsquedas por género. Además, establece relaciones de clave externa para la categoría asociada a un producto. |

</details>

<details closed><summary>prisma.migrations.20240616155211_country</summary>

| Archivo                                                                                                                       | Resumen                                                                                                                                                                                                                                                           |
| ---                                                                                                                        | ---                                                                                                                                                                                                                                                               |
| [migration.sql](https://github.com/juansdev/teslo-shop/blob/master/prisma/migrations/20240616155211_country/migration.sql) | Gestiona el esquema de la base de datos para la aplicación de comercio electrónico teslo-shop definiendo una tabla Country con un identificador único y atributos relacionados. El archivo SQL impone una clave primaria y un índice único para un manejo y validación de datos eficientes en la capa backend. |

</details>

<details closed><summary>prisma.migrations.20240615220346_user_role</summary>

| Archivo                                                                                                                         | Resumen                                                                                                                                                                                                                                                                                                                                |
| ---                                                                                                                          | ---                                                                                                                                                                                                                                                                                                                                    |
| [migration.sql](https://github.com/juansdev/teslo-shop/blob/master/prisma/migrations/20240615220346_user_role/migration.sql) | Este archivo de migración dentro del repositorio teslo-shop establece la entidad User y sus propiedades asociadas como id, name, email, emailVerified, password, role, e image. También introduce un enum Role para los roles de usuario (admin o user). El índice único en email asegura que cada usuario tenga una dirección de correo única en el sistema. |

</details>

<details closed><summary>prisma.migrations.20240616211254_orderaddress_optionaladdress_nullable</summary>

| Archivo                                                                                                                                                     | Resumen                                                                                                                                                                                                                       |
| ---                                                                                                                                                      | ---                                                                                                                                                                                                                           |
| [migration.sql](https://github.com/juansdev/teslo-shop/blob/master/prisma/migrations/20240616211254_orderaddress_optionaladdress_nullable/migration.sql) | Elimina la restricción de valor nulo de la columna `optionalAddress` en la tabla OrderAddress, proporcionando flexibilidad para aceptar valores nulos. Componente clave en asegurar la personalización de la experiencia de usuario dentro del modelo de datos de la aplicación Teslo Shop. |

</details>

<details closed><summary>prisma.migrations.20240617200107_transaction_id_in_order</summary>

| Archivo                                                                                                                                       | Resumen                                                                                                                                                                                                                           |
| ---                                                                                                                                        | ---                                                                                                                                                                                                                               |
| [migration.sql](https://github.com/juansdev/teslo-shop/blob/master/prisma/migrations/20240617200107_transaction_id_in_order/migration.sql) | Mejora la gestión de transacciones añadiendo una nueva columna transactionId a la tabla Order en el esquema de la base de datos de la aplicación, permitiendo un seguimiento fluido de transacciones dentro de este proyecto de comercio electrónico de código abierto (teslo-shop). |

</details>

<details closed><summary>prisma.migrations.20240616202559_order_address_items</summary>

| Archivo                                                                                                                                   | Resumen                                                                                                                                                                                                             |
| ---                                                                                                                                    | ---                                                                                                                                                                                                                 |
| [migration.sql](https://github.com/juansdev/teslo-shop/blob/master/prisma/migrations/20240616202559_order_address_items/migration.sql) | Tablas Order, OrderItem y OrderAddress, así como la definición de relaciones con las entidades User, Product, Country y Address, asegurando un flujo de datos consistente e integridad a lo largo de nuestra plataforma de comercio electrónico. |

</details>

<details closed><summary>prisma.migrations.20240616205803_ispaid_default</summary>

| Archivo                                                                                                                              | Resumen                                                                                                                                                                                         |
| ---                                                                                                                               | ---                                                                                                                                                                                             |
| [migration.sql](https://github.com/juansdev/teslo-shop/blob/master/prisma/migrations/20240616205803_ispaid_default/migration.sql) | Establece el valor predeterminado de la columna isPaid en la tabla Order a `false` dentro del esquema de la base de datos, agilizando la creación de nuevas órdenes en el ecosistema de teslo-shop al simplificar la entrada de datos para órdenes no pagadas. |

</details>

---

##  Comenzando

**Requerimientos del Sistema:**

* **NodeJS**: `version 20.13.1`

###  Instalación

<h4>Desde <code>source</code></h4>

> 1. Clone el repositorio teslo-shop:
>
> ```console
> $ git clone https://github.com/juansdev/teslo-shop
> ```
>
> 2. Cambia al directorio del proyecto:
> ```console
> $ cd teslo-shop
> ```
>
> 3. Instala las dependencias:
> ```console
> $ npm install
> ```
> 
> 4. Duplica el archivo .env.template, y renombralo por .env, editalo rellenando los campos requeridos.
> 
> 5. Ejecuta las migraciones mediante el comando:
> ```console
> $ npx prisma migrate deploy
> ```
> 
> 5. Ejecuta los Seeds mediante el comando:
> ```console
> $ npm run seed
> ```

###  Uso

<h4>Desde <code>source</code></h4>

> Levanta teslo-shop usando el comando debajo:
> ```console
> $ npm run build && npm start
> ```