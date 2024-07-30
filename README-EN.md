<p align="center">
  <img src="https://simpleicons.org/icons/nextdotjs.svg" style="filter:invert(1);" width="100" alt="project-logo">
</p>
<p align="center">
    <h1 align="center">TESLO-SHOP</h1>
</p>
<p align="center">
  <em>Seamless, Secure, and Infinitely Customizable!With Teslo-Shop's modular architecture powered by NextAuth.js, every interaction is a step closer to seamless user engagement. The heart of our authentication beats within the [nextauth].ts, fortifying your journey with secure registration, login, and much more, all for an enriched experience!Built upon versatile integration capabilities, Teslo-Shop's nextauth.d.ts fine-tunes the NextAuth session structure, allowing a perfect blend of custom User data with default user data. This way, you hold the keys to a truly dynamic and flexible authentication system!Get ready for the launch sequence. Teslo-Shop is not just an eCommerce solution, its a gateway to tomorrow. Join us now, as we navigate together through endless possibilities!</em>
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

<br><!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary><br>

- [ Overview](#-overview)
- [ Repository Structure](#-repository-structure)
- [ Modules](#-modules)
- [ Getting Started](#-getting-started)
  - [ Installation](#-installation)
  - [ Usage](#-usage)
</details>
<hr>

##  Overview

The teslo-shop is a cutting-edge eCommerce application developed in a modern and scalable architecture, showcased by its robust and modular codebase. At its core lies a dedicated authentication system, evident from the file `src/pages/api/auth/[...nextauth].ts`, which utilizes NextAuth.js – an open-source library tailored for handling authentication in Next.js applications. This authentication implementation provides seamless user registration and login functionalities, significantly enhancing security, functionality, and overall user experience.In addition, the nextauth.d.ts file within teslo-shop extends the default session structure to effortlessly merge custom User data, bolstering the versatility and integration capabilities of our authentication system.The command center for this repository is the package.json file, which organizes development workflows, scripts, and dependencies – including NextAuth.js – ensuring a streamlined development experience for contributors and maintaining reproducibility across different environments. By optimizing authentication aspects, teslo-shop aims to deliver a top-tier shopping experience while prioritizing security, functionality, and user satisfaction.

---

##  Repository Structure

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

##  Modules

<details closed><summary>.</summary>

| File                                                                                        | Summary                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| ---                                                                                         | ---                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| [package-lock.json](https://github.com/juansdev/teslo-shop/blob/master/package-lock.json)   | The provided code file is part of the teslo-shop" repository, a web application aimed at eCommerce solutions. Its structure demonstrates a modular and scalable architecture typical for modern applications.In relation to this, the critical file under consideration is `src/pages/api/auth/[...nextauth].ts`, which implements authentication functionalities for user registration, login, and other related operations. The parent repository relies on NextAuth.js (as referenced by `nextauth.d.ts`), an open-source library for handling authentication in Next.js applications.This specific code file serves to enhance the security, functionality, and overall user experience of the teslo-shop application by streamlining various authentication aspects, thereby allowing registered users to seamlessly navigate and engage with the shops eCommerce features. |
| [nextauth.d.ts](https://github.com/juansdev/teslo-shop/blob/master/nextauth.d.ts)           | The nextauth.d.ts extension within the `teslo-shop` repository modifies the NextAuth session structure to seamlessly merge custom User data with default user data, enhancing the versatility and integration capabilities of our authentication system.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| [package.json](https://github.com/juansdev/teslo-shop/blob/master/package.json)             | The `package.json` file within the `teslo-shop` repository serves as its command center, providing instructions for scripts like development, building, and linting. It manages dependencies and devDependencies, such as Next.js, React, NextAuth, TailwindCSS, and Zod, to ensure seamless functioning of a versatile, open-source eCommerce application using cloudinary for images and PayPal for transactions.                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| [docker-compose.yml](https://github.com/juansdev/teslo-shop/blob/master/docker-compose.yml) | Sets up a persistent PostgreSQL database container named todos-db with the same name as our application's database (configured in.env variables). Provides easy access through port 5432, and automatically starts upon container restart. Syncs the data on your local machine using volumes.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| [tsconfig.json](https://github.com/juansdev/teslo-shop/blob/master/tsconfig.json)           | Configures TypeScript settings across this teslo-shop project. Enables strict type-checking, JSX support, module resolution, and Next.js integration. Maps `@` aliases to the `src` directory, ensuring consistent import paths. Facilitates a smooth development experience within this progressive web app.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| [tailwind.config.ts](https://github.com/juansdev/teslo-shop/blob/master/tailwind.config.ts) | The Tailwind CSS config file establishes theme parameters and content scope, allowing the application to dynamically apply utility classes based on project files and streamline design consistency throughout components, pages, and app structure.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| [postcss.config.mjs](https://github.com/juansdev/teslo-shop/blob/master/postcss.config.mjs) | Streamlines style consistency across teslo-shop by configuring PostCSS with Tailwind CSS plugins, ensuring visually appealing and accessible user interfaces throughout the application.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| [next.config.mjs](https://github.com/juansdev/teslo-shop/blob/master/next.config.mjs)       | Sets up Cloudinary as default image source, and activates styled-components compiler for efficient CSS-in-JS styling within the Teslo-Shop project architecture.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |

</details>

<details closed><summary>src</summary>

| File                                                                                    | Summary                                                                                                                                                                                                                                                                                                                                      |
| ---                                                                                     | ---                                                                                                                                                                                                                                                                                                                                          |
| [middleware.ts](https://github.com/juansdev/teslo-shop/blob/master/src/middleware.ts)   | Empowers authentication across the Teslo-shop application by managing user sessions and access. It utilizes next-auth package and configuration settings from./auth.config. The provided middleware enforces security by matching routes, excluding specified API, static files, and images to ensure a seamless and secure user experience. |
| [auth.config.ts](https://github.com/juansdev/teslo-shop/blob/master/src/auth.config.ts) | Configures NextAuth for teslo-shop by defining authentication rules and callbacks. It secures specific routes based on user role and verifies credentials against a Prisma database, improving the overall applications security.                                                                                                            |

</details>

<details closed><summary>src.seed</summary>

| File                                                                                               | Summary                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| ---                                                                                                | ---                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| [seed.ts](https://github.com/juansdev/teslo-shop/blob/master/src/seed/seed.ts)                     | The given code file, `src/seed/seed.ts`, is a part of the teslo-shop repository which serves as a frontend application for an online electric vehicle (EV) shop. This particular file seeds initial data for the system during the database setup process, specifically utilizing the bcryptjs library to hash and store passwords securely.The use of this script ensures consistency in data by providing predefined items within the system when it is first deployed or reset. In the context of teslo-shops architecture, this file integrates with Prisma-a powerful database tool that enables efficient schema management and seamless database interaction throughout the application. |
| [tsconfig.json](https://github.com/juansdev/teslo-shop/blob/master/src/seed/tsconfig.json)         | Enable stricter type checking: strict' set to true ensures thorough examination of types.* Strengthen null checks: strictNullChecks, strictFunctionTypes, and others, maintain proper handling of null and undefined.* Fortify interop support: esModuleInterop, helps import CommonJS modules seamlessly.* Promote consistent casing in file names: forceConsistentCasingInFileNames ensures compatibility.* Ensure accurate type inferencing: Various optional type strictness settings, like exactOptionalPropertyTypes', enhance precision.                                                                                                                                                 |
| [seed-database.ts](https://github.com/juansdev/teslo-shop/blob/master/src/seed/seed-database.ts)   | This script **clears** existing records from the TesloShop database (products, categories, users, etc.). It then **populates** the database with sample data to create a simulated user environment for testing purposes. The code is part of the `seed` directory within the repository architecture, using Prisma, an efficient database toolkit for TypeScript and Node.js applications.                                                                                                                                                                                                                                                                                                     |
| [seed-countries.ts](https://github.com/juansdev/teslo-shop/blob/master/src/seed/seed-countries.ts) | Visit Caribbean destinations like Saint Vincent and the Grenadines, explore Africas Senegal and South Africa, journey through Europes Sweden, Switzerland, or Spain, traverse Asia's Thailand, Timor-Leste, or Vietnam. Discover unique cultures in each country. Travel awaits you!                                                                                                                                                                                                                                                                                                                                                                                                            |

</details>

<details closed><summary>src.lib</summary>

| File                                                                              | Summary                                                                                                                                                                                                                               |
| ---                                                                               | ---                                                                                                                                                                                                                                   |
| [prisma.ts](https://github.com/juansdev/teslo-shop/blob/master/src/lib/prisma.ts) | Empowers database interactions within the Teslo-shop platform by creating a Prisma client instance and making it globally accessible for seamless access to data models defined in schema.prisma across the application architecture. |

</details>

<details closed><summary>src.config</summary>

| File                                                                               | Summary                                                                                                                                                                                                   |
| ---                                                                                | ---                                                                                                                                                                                                       |
| [fonts.ts](https://github.com/juansdev/teslo-shop/blob/master/src/config/fonts.ts) | Imported custom Google fonts (Inter & Montserrat_Alternates) to control display and header text styles across the application, ensuring consistent and appealing user experience throughout the platform. |

</details>

<details closed><summary>src.store</summary>

| File                                                                              | Summary                                                                                                                                                                                                                                      |
| ---                                                                               | ---                                                                                                                                                                                                                                          |
| [index.ts](https://github.com/juansdev/teslo-shop/blob/master/src/store/index.ts) | Manages state across UI components, cart functionality, and address management in this e-commerce application by consolidating relevant store modules within the centralized store hub for efficient data flow and improved user experience. |

</details>

<details closed><summary>src.store.ui</summary>

| File                                                                                       | Summary                                                                                                                                                                                                            |
| ---                                                                                        | ---                                                                                                                                                                                                                |
| [ui.store.ts](https://github.com/juansdev/teslo-shop/blob/master/src/store/ui/ui.store.ts) | A crucial store for handling side menu functionality, offering open/close actions, maintaining state persistence in our Teslo-shop application, contributing to the seamless browsing experience and fluid design. |

</details>

<details closed><summary>src.store.cart</summary>

| File                                                                                             | Summary                                                                                                                                                                                                                                                                                                                                                        |
| ---                                                                                              | ---                                                                                                                                                                                                                                                                                                                                                            |
| [cart.store.ts](https://github.com/juansdev/teslo-shop/blob/master/src/store/cart/cart.store.ts) | Manages and tracks items in user cart within the Teslo Shop repository. This store enables adding, updating quantity, removing products from, and clearing entire cart using clean functionalities, thereby offering real-time cart data to users. Enhances user shopping experience by providing total cost summary including subtotal, tax, and items count. |

</details>

<details closed><summary>src.store.address</summary>

| File                                                                                                      | Summary                                                                                                                                                                                                                                                                                          |
| ---                                                                                                       | ---                                                                                                                                                                                                                                                                                              |
| [address.store.ts](https://github.com/juansdev/teslo-shop/blob/master/src/store/address/address.store.ts) | Manages user addresses. Implemented via `zustand`, a state management solution for React applications within Teslo-shop, the open-source e-commerce project. The file, `src/store/address/address.store.ts`, persists and handles the current address state for streamlined checkout processing. |

</details>

<details closed><summary>src.actions</summary>

| File                                                                                | Summary                                                                                                                                                                                                                                                                                                     |
| ---                                                                                 | ---                                                                                                                                                                                                                                                                                                         |
| [index.ts](https://github.com/juansdev/teslo-shop/blob/master/src/actions/index.ts) | This action file serves as a central hub for handling various operations, from authenticating users and fetching products, to processing orders, updating user addresses, and handling transactions using popular payment methods like PayPal. It also facilitates roles management for the user dashboard. |

</details>

<details closed><summary>src.actions.auth</summary>

| File                                                                                           | Summary                                                                                                                                                                                                                                                                |
| ---                                                                                            | ---                                                                                                                                                                                                                                                                    |
| [login.ts](https://github.com/juansdev/teslo-shop/blob/master/src/actions/auth/login.ts)       | Authenticates user login for teslo-shop platform, using the signIn function defined in the auth configuration. Errors are handled to display appropriate error messages to users, promoting a seamless authentication process within our web application architecture. |
| [register.ts](https://github.com/juansdev/teslo-shop/blob/master/src/actions/auth/register.ts) | This action file handles incoming requests for user registration by creating and encrypting a password for a new user via the Prisma database and bcryptjs library, ensuring secure account creation in our next-generation online store.                              |
| [logout.ts](https://github.com/juansdev/teslo-shop/blob/master/src/actions/auth/logout.ts)     | Empowering seamless user logout, this action triggers sign-out across authentication services within the Teslo-shop platform. The code resides in the `src/actions/auth/logout.ts` file of the repository structure, fostering secure and convenient user experience.  |

</details>

<details closed><summary>src.actions.users</summary>

| File                                                                                                                  | Summary                                                                                                                                                                                                                                                                                                  |
| ---                                                                                                                   | ---                                                                                                                                                                                                                                                                                                      |
| [change-user-role.ts](https://github.com/juansdev/teslo-shop/blob/master/src/actions/users/change-user-role.ts)       | In the core teslo-shop repository, the changeUserRole function (src/actions/users/change-user-role.ts) facilitates modifying the roles of users in real time, requiring authentication as an admin. This action also refreshes the user listing on the /admin/users page to reflect changes immediately. |
| [get-paginater-users.ts](https://github.com/juansdev/teslo-shop/blob/master/src/actions/users/get-paginater-users.ts) | Implements API for fetching paginated lists of users, ensuring secure access through role verification using the Prisma ORM to query and sort the data in Teslo-Shop.                                                                                                                                    |

</details>

<details closed><summary>src.actions.payments</summary>

| File                                                                                                                         | Summary                                                                                                                                                                                                                                                                                                                                                 |
| ---                                                                                                                          | ---                                                                                                                                                                                                                                                                                                                                                     |
| [paypal-check-payment.ts](https://github.com/juansdev/teslo-shop/blob/master/src/actions/payments/paypal-check-payment.ts)   | Verifies PayPal payments by calling relevant PayPal API endpoints for transaction verification, updates order statuses as paid using the Prisma database, and refreshes affected caches in the Next.js application to ensure data integrity and timely page re-rendering after successful transactions.                                                 |
| [set-transaction-by-id.ts](https://github.com/juansdev/teslo-shop/blob/master/src/actions/payments/set-transaction-by-id.ts) | In the Teslo-Shop project, this file (src/actions/payments/set-transaction-by-id.ts) enables transaction updates for specific orders by communicating with the Prisma database layer to associate each order with its respective transaction ID. This streamlined process ensures seamless management of financial transactions within the application. |

</details>

<details closed><summary>src.actions.order</summary>

| File                                                                                                                    | Summary                                                                                                                                                                                                                                                                                                                                                                           |
| ---                                                                                                                     | ---                                                                                                                                                                                                                                                                                                                                                                               |
| [place-order.ts](https://github.com/juansdev/teslo-shop/blob/master/src/actions/order/place-order.ts)                   | PlaceOrder action allows users to complete transactions by creating new orders within the Teslo Shop app. It calculates subtotals, taxes, and totals for items selected, ensures stock availability, and saves order details along with the users address. This action also manages the orders associated products and their updated stock quantities within the Prisma database. |
| [get-order-by-id.ts](https://github.com/juansdev/teslo-shop/blob/master/src/actions/order/get-order-by-id.ts)           | Validates user authentication before retrieving an order by its unique ID, complete with related order items, address details, and associated product images, while also checking if the requesting user has ownership rights for the order in question, ensuring data integrity in this e-commerce application.                                                                  |
| [get-order-by-user.ts](https://github.com/juansdev/teslo-shop/blob/master/src/actions/order/get-order-by-user.ts)       | This action function, `getOrdersByUser`, fetches and organizes a users past orders along with their shipping information within the Teslo Shops backend architecture using Prisma database interaction and NextAuth authentication.                                                                                                                                               |
| [get-paginated-orders.ts](https://github.com/juansdev/teslo-shop/blob/master/src/actions/order/get-paginated-orders.ts) | Manages user-authenticated requests for paginated order lists in teslo-shop. By utilizing NextAuth and the Prisma database, this action retrieves orders sorted by creation date from the backend and returns the specified page along with total pages and all items on the current page. It ensures data security as only administrators have access to this endpoint.          |

</details>

<details closed><summary>src.actions.country</summary>

| File                                                                                                        | Summary                                                                                                                                                                                            |
| ---                                                                                                         | ---                                                                                                                                                                                                |
| [get-countries.ts](https://github.com/juansdev/teslo-shop/blob/master/src/actions/country/get-countries.ts) | This `getCountries` action fetches all country details sorted by name from the database (Prisma) in the Teslo-shop application, ensuring a user-friendly order for a seamless shopping experience. |

</details>

<details closed><summary>src.actions.category</summary>

| File                                                                                                           | Summary                                                                                                                                                                 |
| ---                                                                                                            | ---                                                                                                                                                                     |
| [get-categories.ts](https://github.com/juansdev/teslo-shop/blob/master/src/actions/category/get-categories.ts) | GetCategories(). It leverages the Prisma database to retrieve all category names, sorted alphabetically, ensuring smooth navigation for customers across product pages. |

</details>

<details closed><summary>src.actions.products</summary>

| File                                                                                                                         | Summary                                                                                                                                                                                                                                                                                                                                                  |
| ---                                                                                                                          | ---                                                                                                                                                                                                                                                                                                                                                      |
| [get-stock-by-slug.ts](https://github.com/juansdev/teslo-shop/blob/master/src/actions/products/get-stock-by-slug.ts)         | Empowers inventory management. The `getStockBySlug` function in the `src/actions/products` directory checks the availability of a specific product using the Prisma database by its unique slug, and returns the stock level or defaults to zero if an error occurs. It contributes significantly to the user shopping experience in the Teslo Shop app. |
| [delete-product-image.ts](https://github.com/juansdev/teslo-shop/blob/master/src/actions/products/delete-product-image.ts)   | Deletes specified image from Cloudinary using provided credentials. Simultaneously removes the associated image record from the repositorys database and triggers caching revalidation on relevant pages, optimizing performance in admin and user interfaces for products.                                                                              |
| [get-product-by-slug.ts](https://github.com/juansdev/teslo-shop/blob/master/src/actions/products/get-product-by-slug.ts)     | Retrieves and processes a product by its unique slug from the database using Prisma in a serverless Next.js environment. The enhanced functionality returns a formatted product object that includes associated product images for seamless display on Teslo-shop frontend.                                                                              |
| [product-pagination.ts](https://github.com/juansdev/teslo-shop/blob/master/src/actions/products/product-pagination.ts)       | Gathers, formats, and returns paginated products along with their thumbnail images within the Teslo-Shop repository. Utilizing the Prisma ORM for database operations, it efficiently serves product listings while maintaining a seamless user experience.                                                                                              |
| [create-update-product.ts](https://github.com/juansdev/teslo-shop/blob/master/src/actions/products/create-update-product.ts) | Accepts FormData for creating/updating products.-Integrates Cloudinary to handle product images.-Enforces database transactions using Prisma.-Revalidates affected URLs after a product update.                                                                                                                                                          |

</details>

<details closed><summary>src.actions.address</summary>

| File                                                                                                                    | Summary                                                                                                                                                                                                                                                                                                                                                                                                           |
| ---                                                                                                                     | ---                                                                                                                                                                                                                                                                                                                                                                                                               |
| [get-user-address.ts](https://github.com/juansdev/teslo-shop/blob/master/src/actions/address/get-user-address.ts)       | This `getUserAddress` action, residing in the teslo-shop repositorys actions/address directory, is responsible for retrieving the shipping address associated with a given user in the applications database by utilizing the Prisma ORM via @/lib/prisma import. If an address is found, it returns anonymized address details along with the corresponding country data, ensuring seamless delivery operations. |
| [set-user-address.ts](https://github.com/juansdev/teslo-shop/blob/master/src/actions/address/set-user-address.ts)       | Manages users address in the teslo-shop by creating, updating, or replacing records with provided details. Ensures user data consistency by verifying if an entry already exists before creating or updating it using the Prisma database in this open-source e-commerce platform architecture.                                                                                                                   |
| [delete-user-address.ts](https://github.com/juansdev/teslo-shop/blob/master/src/actions/address/delete-user-address.ts) | Deletes user addresses from the database through the `prisma` layer, improving data consistency within the Teslo-shop platforms user management system.                                                                                                                                                                                                                                                           |

</details>

<details closed><summary>src.app</summary>

| File                                                                                  | Summary                                                                                                                                                                                                                                                    |
| ---                                                                                   | ---                                                                                                                                                                                                                                                        |
| [globals.css](https://github.com/juansdev/teslo-shop/blob/master/src/app/globals.css) | Customizes global styles for the Teslo-Shop application, leveraging Tailwind CSS utility-first framework to streamline UI components creation while offering responsive and adaptable visuals across different color schemes, animations, and transitions. |
| [layout.tsx](https://github.com/juansdev/teslo-shop/blob/master/src/app/layout.tsx)   | Bootstraps and customizes the base layout for the Teslo Shop application, integrating its chosen typography (inter) with Prismas database-driven dynamic content flow via NextAuth providers.                                                              |

</details>

<details closed><summary>src.app.auth</summary>

| File                                                                                     | Summary                                                                                                                                                                                                                                                                                            |
| ---                                                                                      | ---                                                                                                                                                                                                                                                                                                |
| [layout.tsx](https://github.com/juansdev/teslo-shop/blob/master/src/app/auth/layout.tsx) | In this Next.js application architecture, the `auth/layout.tsx` file serves as a guarded wrapper for all other components. It securely checks if the user is logged in and, if so, redirects them to the home page, ensuring unauthorized users can access only permitted areas of the Tesla Shop. |

</details>

<details closed><summary>src.app.auth.login</summary>

| File                                                                                       | Summary                                                                                                                                                                                                |
| ---                                                                                        | ---                                                                                                                                                                                                    |
| [page.tsx](https://github.com/juansdev/teslo-shop/blob/master/src/app/auth/login/page.tsx) | Facilitates user login within Teslo Shop application by rendering the LoginForm component as part of the frontend layout, ensuring seamless user experience. Aligns with overall project architecture. |

</details>

<details closed><summary>src.app.auth.login.ui</summary>

| File                                                                                                    | Summary                                                                                                                                                                                                                                                                                                                                                                                                |
| ---                                                                                                     | ---                                                                                                                                                                                                                                                                                                                                                                                                    |
| [LoginForm.tsx](https://github.com/juansdev/teslo-shop/blob/master/src/app/auth/login/ui/LoginForm.tsx) | This `LoginForm` component handles user authentication by collecting email and password inputs, validating them with an action (authenticate), and providing relevant error messages or redirecting the user to the dashboard upon successful authentication. It also features a secondary functionality for account creation via link navigation and a loading state management for the login button. |

</details>

<details closed><summary>src.app.auth.new-account</summary>

| File                                                                                             | Summary                                                                                                                                                                                                                                                                                                                                                                          |
| ---                                                                                              | ---                                                                                                                                                                                                                                                                                                                                                                              |
| [page.tsx](https://github.com/juansdev/teslo-shop/blob/master/src/app/auth/new-account/page.tsx) | This code file, located at src/app/auth/new-account/page.tsx, presents a user registration page for the Teslo Shop web application by importing and rendering a RegisterForm component while applying specific styling with the `titleFont` from the config folder. The end goal? To provide an intuitive new account creation process for visitors in this open-source project. |

</details>

<details closed><summary>src.app.auth.new-account.ui</summary>

| File                                                                                                                | Summary                                                                                                                                                                                                                                                                                                                                                                                                                |
| ---                                                                                                                 | ---                                                                                                                                                                                                                                                                                                                                                                                                                    |
| [RegisterForm.tsx](https://github.com/juansdev/teslo-shop/blob/master/src/app/auth/new-account/ui/RegisterForm.tsx) | Registers new user accounts in the TesloShop application. The `RegisterForm.tsx` component facilitates gathering user information via form fields and performs authentication actions using `registerUser()` and `login()`. It displays error messages during registration, offers a login link for users already registered, and ensures user-input validation through `react-hook-form` and custom validation rules. |

</details>

<details closed><summary>src.app.(shop)</summary>

| File                                                                                       | Summary                                                                                                                                                                                                                                                                                                              |
| ---                                                                                        | ---                                                                                                                                                                                                                                                                                                                  |
| [layout.tsx](https://github.com/juansdev/teslo-shop/blob/master/src/app/(shop)/layout.tsx) | A modular design approach for the ShopLayout component wraps user content within an optimized structure, integrating top navigation, sidebar, and footer elements.                                                                                                                                                   |
| [page.tsx](https://github.com/juansdev/teslo-shop/blob/master/src/app/(shop)/page.tsx)     | The `Home` page component, located at `src/app/(shop)/page.tsx`, fetches a paginated list of products from the API and displays them with proper navigation. By implementing efficient pagination, it provides optimized loading experience for users, allowing seamless browsing through large product collections. |

</details>

<details closed><summary>src.app.(shop).product</summary>

| File                                                                                                     | Summary                                                                                                                                                                                                                                                                                                                                             |
| ---                                                                                                      | ---                                                                                                                                                                                                                                                                                                                                                 |
| [not-found.tsx](https://github.com/juansdev/teslo-shop/blob/master/src/app/(shop)/product/not-found.tsx) | Enhances user experience by handling missing product pages. By importing and rendering the PageNotFound component from custom components, this file ensures that when a customer accesses a non-existent product, they are informed appropriately. This seamlessly integrates with the rest of the TesloShop repository structure and architecture. |

</details>

<details closed><summary>src.app.(shop).product.[slug]</summary>

| File                                                                                                  | Summary                                                                                                                                                                                                                                                                                                                               |
| ---                                                                                                   | ---                                                                                                                                                                                                                                                                                                                                   |
| [page.tsx](https://github.com/juansdev/teslo-shop/blob/master/src/app/(shop)/product/[slug]/page.tsx) | Generates dynamic product pages for the Teslo Shop. It fetches product details using action functions based on the slug provided. Metadata is generated dynamically to optimize SEO. The page renders the products images, title, price, and description with an add-to-cart feature. Stock label is also displayed for each product. |

</details>

<details closed><summary>src.app.(shop).product.[slug].ui</summary>

| File                                                                                                               | Summary                                                                                                                                                                                                                               |
| ---                                                                                                                | ---                                                                                                                                                                                                                                   |
| [AddToCart.tsx](https://github.com/juansdev/teslo-shop/blob/master/src/app/(shop)/product/[slug]/ui/AddToCart.tsx) | Enhances e-commerce shopping experience by enabling customers to add products of selected size and quantity to their cart. This React component interacts with the global cart store for seamless checkout process in our Teslo-Shop. |

</details>

<details closed><summary>src.app.(shop).orders</summary>

| File                                                                                          | Summary                                                                                                                                                                                                                                                                                                                                                     |
| ---                                                                                           | ---                                                                                                                                                                                                                                                                                                                                                         |
| [page.tsx](https://github.com/juansdev/teslo-shop/blob/master/src/app/(shop)/orders/page.tsx) | Displays a list of orders for authenticated users in a table format. It retrieves order data via an action function and checks authentication before rendering the page, displaying each orders unique ID, name, status, and See order" button to view more details. This file enhances the user experience in managing their orders within the Teslo Shop. |

</details>

<details closed><summary>src.app.(shop).orders.[id]</summary>

| File                                                                                               | Summary                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| ---                                                                                                | ---                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| [page.tsx](https://github.com/juansdev/teslo-shop/blob/master/src/app/(shop)/orders/[id]/page.tsx) | This component renders an order page with detailed order information. It displays product details, delivery address, order subtotals, taxes, and total cost. It uses custom hooks to fetch the order based on its ID. It also includes a PayPalButton for order payment. This is integrated in the broader Teslo-Shop applications architecture that encompasses next.js, Prisma for database operations, and several open-source packages for UI components and styling. |

</details>

<details closed><summary>src.app.(shop).admin</summary>

| File                                                                                         | Summary                                                                                                                                                                                                                                                                                                    |
| ---                                                                                          | ---                                                                                                                                                                                                                                                                                                        |
| [page.tsx](https://github.com/juansdev/teslo-shop/blob/master/src/app/(shop)/admin/page.tsx) | Manages admin panel for Teslo Shop, delivering streamlined control interface. Simplifies administration tasks and offers an overview to effectively manage the platforms operation. Part of a comprehensive repository architecture that includes Docker setup, Next.js, Prisma, and Tailwind CSS styling. |

</details>

<details closed><summary>src.app.(shop).admin.product.[slug]</summary>

| File                                                                                                        | Summary                                                                                                                                                                                                                                                                                                                                                                            |
| ---                                                                                                         | ---                                                                                                                                                                                                                                                                                                                                                                                |
| [page.tsx](https://github.com/juansdev/teslo-shop/blob/master/src/app/(shop)/admin/product/[slug]/page.tsx) | Manage and edit products within TesloShops administrative dashboard. This code file enables creation and editing of new and existing product entries, allowing seamless integration with the overall store structure. The functionality is achieved through the `ProductForm` component which communicates with action handlers to fetch and update product data from the backend. |

</details>

<details closed><summary>src.app.(shop).admin.product.[slug].ui</summary>

| File                                                                                                                         | Summary                                                                                                                                                                                                                                                                                                                                                                                 |
| ---                                                                                                                          | ---                                                                                                                                                                                                                                                                                                                                                                                     |
| [ProductForm.tsx](https://github.com/juansdev/teslo-shop/blob/master/src/app/(shop)/admin/product/[slug]/ui/ProductForm.tsx) | The code renders a form for updating product details. It has fields for title, price, and tags (with validation), gender, category (select from dropdown based on available options), inventory (with number input and min=0 validation), sizes (clickable options that are dynamically populated), images input with multiple support, and product image previews with delete buttons. |

</details>

<details closed><summary>src.app.(shop).admin.orders</summary>

| File                                                                                                | Summary                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| ---                                                                                                 | ---                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| [page.tsx](https://github.com/juansdev/teslo-shop/blob/master/src/app/(shop)/admin/orders/page.tsx) | This source file is a React component called `OrdersPage` within the admin section of the Teslo-Shop application. It displays paginated order listings, each with essential information like ID, customer name, and status, fetched via the `getPaginatedOrders` action. Users can view detailed order information by clicking on links. Navigation to login is redirected if access is unauthorized. This component enhances the admin experience in managing Teslo-Shop orders. |

</details>

<details closed><summary>src.app.(shop).admin.users</summary>

| File                                                                                               | Summary                                                                                                                                                                                                                                                                                  |
| ---                                                                                                | ---                                                                                                                                                                                                                                                                                      |
| [page.tsx](https://github.com/juansdev/teslo-shop/blob/master/src/app/(shop)/admin/users/page.tsx) | Manages user listings for administrators within the Teslo Shop ecosystem. Utilizing pagination, displays a comprehensive table of users. Ensures secure access by redirecting non-authenticated users to the login page. Interacts with actions and components for optimal organization. |

</details>

<details closed><summary>src.app.(shop).admin.users.ui</summary>

| File                                                                                                              | Summary                                                                                                                                                                                                                                                                        |
| ---                                                                                                               | ---                                                                                                                                                                                                                                                                            |
| [UsersTable.tsx](https://github.com/juansdev/teslo-shop/blob/master/src/app/(shop)/admin/users/ui/UsersTable.tsx) | User role management within Teslo Shops Admin interface. **Key Features:** Displays users with their email, full name, and current roles in a table format; allows Admins to modify user roles through a select menu. This promotes efficient control over user access levels. |

</details>

<details closed><summary>src.app.(shop).admin.products</summary>

| File                                                                                                  | Summary                                                                                                                                                                                                                                                                          |
| ---                                                                                                   | ---                                                                                                                                                                                                                                                                              |
| [page.tsx](https://github.com/juansdev/teslo-shop/blob/master/src/app/(shop)/admin/products/page.tsx) | This file is part of an admin dashboard within the Teslo Shop application. It fetches paginated data for products and renders them in a table format, including images, title, price, gender, inventory status, and sizes. Actions for creating a new product are also included. |

</details>

<details closed><summary>src.app.(shop).empty</summary>

| File                                                                                         | Summary                                                                                                                                                                                                                                    |
| ---                                                                                          | ---                                                                                                                                                                                                                                        |
| [page.tsx](https://github.com/juansdev/teslo-shop/blob/master/src/app/(shop)/empty/page.tsx) | Manages the empty cart page presentation in the teslo-shop app architecture. The customized interface displays an icon signifying an empty cart and prompts users to Return to the homepage, ensuring a user-friendly shopping experience. |

</details>

<details closed><summary>src.app.(shop).checkout.(checkout)</summary>

| File                                                                                                       | Summary                                                                                                                                                                                                                                                                                                 |
| ---                                                                                                        | ---                                                                                                                                                                                                                                                                                                     |
| [page.tsx](https://github.com/juansdev/teslo-shop/blob/master/src/app/(shop)/checkout/(checkout)/page.tsx) | Navigates through the checkout process for TesloShop. Displays order verification and editable cart. Renders ProductInCart components and PlaceOrder function to facilitate shopping experience. Interacts with NextAuth and Prisma to manage user authentication and database operations respectively. |

</details>

<details closed><summary>src.app.(shop).checkout.(checkout).ui</summary>

| File                                                                                                                              | Summary                                                                                                                                                                                                                                                                                                                                                                                               |
| ---                                                                                                                               | ---                                                                                                                                                                                                                                                                                                                                                                                                   |
| [ProductsInCart.tsx](https://github.com/juansdev/teslo-shop/blob/master/src/app/(shop)/checkout/(checkout)/ui/ProductsInCart.tsx) | Manages the UI presentation of products in the customers shopping cart. Loads products dynamically using React hooks, fetches data from the store (`useCartStore`) and provides currency-formatted total for each item. Ensures user is redirected to the main page if the cart is empty, optimizing user experience.                                                                                 |
| [PlaceOrder.tsx](https://github.com/juansdev/teslo-shop/blob/master/src/app/(shop)/checkout/(checkout)/ui/PlaceOrder.tsx)         | Streamlines user checkout process for TesloShop. This PlaceOrder component gathers order details, presents total cost, displays terms and conditions, and initiates order placement when Place Order button is clicked. The functionality is part of the larger Next.js architecture, leveraging various libraries, stores, and custom hooks to seamlessly integrate into the overall e-commerce app. |

</details>

<details closed><summary>src.app.(shop).checkout.address</summary>

| File                                                                                                    | Summary                                                                                                                                                                                                                                                                                                              |
| ---                                                                                                     | ---                                                                                                                                                                                                                                                                                                                  |
| [page.tsx](https://github.com/juansdev/teslo-shop/blob/master/src/app/(shop)/checkout/address/page.tsx) | Empowers seamless checkout experience for Teslo-Shop users. This script populates a dynamic country list and fetches the users saved address from the database when needed. It leverages an AddressForm component to securely gather users shipping details, enhancing customer convenience during purchase process. |

</details>

<details closed><summary>src.app.(shop).checkout.address.ui</summary>

| File                                                                                                                     | Summary                                                                                                                                                                                                                                                                                                                                                                                                     |
| ---                                                                                                                      | ---                                                                                                                                                                                                                                                                                                                                                                                                         |
| [AddressForm.tsx](https://github.com/juansdev/teslo-shop/blob/master/src/app/(shop)/checkout/address/ui/AddressForm.tsx) | This React component forms collect user data, including city, country, phone, and checkbox option for address remembering, using the yup library.2. Next Button: The submit button enables user progress, conditionally activated based on the form validity.3. Checkbox Option: A checkbox that allows users to opt in for their address to be remembered, displaying an optional SVG icon and label text. |

</details>

<details closed><summary>src.app.(shop).profile</summary>

| File                                                                                           | Summary                                                                                                                                                                                                                                                          |
| ---                                                                                            | ---                                                                                                                                                                                                                                                              |
| [page.tsx](https://github.com/juansdev/teslo-shop/blob/master/src/app/(shop)/profile/page.tsx) | The `ProfilePage` function, within the `teslo-shop` repositorys architecture, offers users an overview of their profile information by retrieving user data through authenticated sessions and displaying it in a readable JSON format for easier understanding. |

</details>

<details closed><summary>src.app.(shop).gender</summary>

| File                                                                                                    | Summary                                                                                                                                                                                                                                                                                                                         |
| ---                                                                                                     | ---                                                                                                                                                                                                                                                                                                                             |
| [not-found.tsx](https://github.com/juansdev/teslo-shop/blob/master/src/app/(shop)/gender/not-found.tsx) | Manages error handling for missing product categories within our Teslo Shop app. This file imports a custom PageNotFound component to display an error message when a category cannot be found. Integrated with the comprehensive structure of our NextJS-Prisma application, it ensures smooth navigation and user experience. |
| [error.tsx](https://github.com/juansdev/teslo-shop/blob/master/src/app/(shop)/gender/error.tsx)         | Amplifies user experience in Teslo-Shop by handling unforeseen navigation issues. The errorPage in src/app/(shop)/gender/ catches unknown paths and gracefully redirects to a custom error message with the help of the PageNotFound component, ensuring a consistent shopping experience.                                      |

</details>

<details closed><summary>src.app.(shop).gender.[gender]</summary>

| File                                                                                                   | Summary                                                                                                                                                                                                                                                                                                     |
| ---                                                                                                    | ---                                                                                                                                                                                                                                                                                                         |
| [page.tsx](https://github.com/juansdev/teslo-shop/blob/master/src/app/(shop)/gender/[gender]/page.tsx) | Navigate dynamic product pages in Teslo Shop. This codefile handles gender-based page generation for specific categories, such as men, women, and more. It fetches and displays relevant products across various pages using pagination, ensuring seamless user experience on each category's product grid. |

</details>

<details closed><summary>src.app.(shop).cart</summary>

| File                                                                                        | Summary                                                                                                                                                                                                                                                                                      |
| ---                                                                                         | ---                                                                                                                                                                                                                                                                                          |
| [page.tsx](https://github.com/juansdev/teslo-shop/blob/master/src/app/(shop)/cart/page.tsx) | A seamless blend of shopping convenience and efficiency. Display cart items and offer an option for users to continue browsing or checkout with order summary at hand. Empowering a swift transition from browsing to checkout, simplifying the shopping experience in Teslo-Shop ecosystem. |

</details>

<details closed><summary>src.app.(shop).cart.ui</summary>

| File                                                                                                               | Summary                                                                                                                                                                                                                                                                          |
| ---                                                                                                                | ---                                                                                                                                                                                                                                                                              |
| [ProductsInCart.tsx](https://github.com/juansdev/teslo-shop/blob/master/src/app/(shop)/cart/ui/ProductsInCart.tsx) | Displays users cart items in the Teslo Shop, each item showcasing its product image, name, price, and a quantity selector for customization. This component interacts with the store for updating quantities or removing products, ensuring smooth cart management in real-time. |
| [OrderSummary.tsx](https://github.com/juansdev/teslo-shop/blob/master/src/app/(shop)/cart/ui/OrderSummary.tsx)     | Calculates and displays order summary details for the user in this Teslo Shop e-commerce app, including total number of items, subtotal, tax, and overall total, making shopping interactions more convenient by offering a quick glance at purchase details.                    |

</details>

<details closed><summary>src.app.(shop).products</summary>

| File                                                                                            | Summary                                                                                                                                                                                                        |
| ---                                                                                             | ---                                                                                                                                                                                                            |
| [page.tsx](https://github.com/juansdev/teslo-shop/blob/master/src/app/(shop)/products/page.tsx) | ProductsPage** component within **teslo-shop**. This file showcases the core Products Page design for teslo-shops frontend, providing an organized layout to list various products on our e-commerce platform. |

</details>

<details closed><summary>src.app.api.auth.[...nextauth]</summary>

| File                                                                                                   | Summary                                                                                                                                                                                                     |
| ---                                                                                                    | ---                                                                                                                                                                                                         |
| [route.ts](https://github.com/juansdev/teslo-shop/blob/master/src/app/api/auth/[...nextauth]/route.ts) | Streamlines authentication across all user routes by importing necessary handlers from the auth configuration file. This helps maintain secure access controls in the Teslo-shops application architecture. |

</details>

<details closed><summary>src.utils</summary>

| File                                                                                                                      | Summary                                                                                                                                                                                                                                                                                                |
| ---                                                                                                                       | ---                                                                                                                                                                                                                                                                                                    |
| [generatePaginationNumbers.ts](https://github.com/juansdev/teslo-shop/blob/master/src/utils/generatePaginationNumbers.ts) | Generates pagination numbers for user-interface display, optimized for up to 7 pages or beyond when necessary, ensuring efficient navigation experience within the TesloShop.                                                                                                                          |
| [currencyFormat.ts](https://github.com/juansdev/teslo-shop/blob/master/src/utils/currencyFormat.ts)                       | Implements a utility function `currencyFormat` for converting numerical values into formatted USD strings following US English currency style with up to two decimal places. Helps maintain a consistent user-friendly experience when displaying prices within the Teslo Shops frontend application.  |
| [sleep.ts](https://github.com/juansdev/teslo-shop/blob/master/src/utils/sleep.ts)                                         | Streamlines app functions with a simple sleep utility function, improving the responsiveness and flow of the Teslo Shop by pausing execution for a specified number of seconds (1 by default). Enables smoother interactions between various app components and external services in the architecture. |
| [index.ts](https://github.com/juansdev/teslo-shop/blob/master/src/utils/index.ts)                                         | Pagination numbers generation, delay execution via sleep function, and currency formatting. This optimizes user experience and simplifies development across the application.                                                                                                                          |

</details>

<details closed><summary>src.interfaces</summary>

| File                                                                                                                 | Summary                                                                                                                                                                                                                                                                                                                                                                                                                       |
| ---                                                                                                                  | ---                                                                                                                                                                                                                                                                                                                                                                                                                           |
| [category.interface.ts](https://github.com/juansdev/teslo-shop/blob/master/src/interfaces/category.interface.ts)     | The `ICategoryWithId` interface in `src/interfaces/category.interface.ts` provides a structure for organizing data related to shop product categories with unique IDs and names, streamlining interaction between different components within the Teslo-Shop application.                                                                                                                                                     |
| [user.interface.ts](https://github.com/juansdev/teslo-shop/blob/master/src/interfaces/user.interface.ts)             | This interface, located within the `teslo-shop` projects source file hierarchy (`src/interfaces/user.interface.ts`), establishes a structure for user data within our application. It defines essential user attributes such as ID, name, email, role, and optional image information, ensuring uniform handling of user data across the system.                                                                              |
| [country.interface.ts](https://github.com/juansdev/teslo-shop/blob/master/src/interfaces/country.interface.ts)       | The `src/interfaces/country.interface.ts` defines a type (ICountry) for managing geographical entities. By standardizing the data structure, it ensures seamless communication among components, contributing to a clean and scalable architecture in this e-commerce platform.                                                                                                                                               |
| [address.interface.ts](https://github.com/juansdev/teslo-shop/blob/master/src/interfaces/address.interface.ts)       | Structures customer addresses within teslo-shop, standardizing data with required fields including firstName, lastName, address, postalCode, city, country, and phone. Allows for an optional additional address field for enhanced customization of address data.                                                                                                                                                            |
| [pagination.interface.ts](https://github.com/juansdev/teslo-shop/blob/master/src/interfaces/pagination.interface.ts) | Implementing customizable pagination options for API responses Features: Supports specifying page' and take parameters to optimize data retrieval. Encapsulates these settings within a wider data query system, ensuring flexible and efficient query execution in the TesloShop project architecture.                                                                                                                       |
| [index.ts](https://github.com/juansdev/teslo-shop/blob/master/src/interfaces/index.ts)                               | Coordinate application data interactions by defining shared interfaces in `src/interfaces/index.ts`. These interfaces act as blueprints for the structures of product, country, address, PayPal, user, category, and pagination objects across the TesloShop, ensuring consistent communication within the architecture.                                                                                                      |
| [product.interface.ts](https://github.com/juansdev/teslo-shop/blob/master/src/interfaces/product.interface.ts)       | IProduct interface outlines properties for individual products, including descriptions, sizes, tags, genders (men, women, kid, unisex).* ICartProduct specifies necessary details for items in a customer's shopping cart.* IProductImage defines attributes for product images.By standardizing these interfaces, our application ensures consistent data representation across different functionalities of the Teslo-Shop. |
| [paypal.interface.ts](https://github.com/juansdev/teslo-shop/blob/master/src/interfaces/paypal.interface.ts)         | Transforms and validates PayPal order status responses, defining essential attributes such as order ID, status, payment source, purchase units, payer information, amounts, and more. Aligned with the teslo-shop architecture, it enriches the eCommerce platforms scalable payment workflow.                                                                                                                                |

</details>

<details closed><summary>src.components</summary>

| File                                                                                   | Summary                                                                                                                                                                                                                                                                                                     |
| ---                                                                                    | ---                                                                                                                                                                                                                                                                                                         |
| [index.ts](https://github.com/juansdev/teslo-shop/blob/master/src/components/index.ts) | This source file exports various reusable components from the teslo-shop repository, such as TopMenu, Footer, ProductGrid and ProductSlideshow among others. Each component contributes to the creation of an intuitive, user-friendly interface for the eCommerce application in the project architecture. |

</details>

<details closed><summary>src.components.product.slideshow</summary>

| File                                                                                                                                         | Summary                                                                                                                                                                                                                                                                                                                                                                 |
| ---                                                                                                                                          | ---                                                                                                                                                                                                                                                                                                                                                                     |
| [slideshow.css](https://github.com/juansdev/teslo-shop/blob/master/src/components/product/slideshow/slideshow.css)                           | Adopts Swiper library for smooth, interactive image carousel experience. Optimizes images to fill their containers while preserving aspect ratio. Allows partial transparency on non-active thumbnails to improve readability. Configures height, width, and padding of slideshow container. In essence, enhances visual appeal of product galleries within teslo-shop. |
| [ProductMobileSlideshow.tsx](https://github.com/juansdev/teslo-shop/blob/master/src/components/product/slideshow/ProductMobileSlideshow.tsx) | Showcases responsive product image slider component for mobile devices, streamlining display and scrolling functionality within the Teslo-shop repository architecture. Implements Swiper library, leveraging features like pagination, autoplay, and Free Mode to deliver smooth, engaging user experience when browsing products.                                     |
| [ProductSlideshow.tsx](https://github.com/juansdev/teslo-shop/blob/master/src/components/product/slideshow/ProductSlideshow.tsx)             | Delivers a customizable product slideshow component for displaying multiple images of a product. Enables users to scroll through the images with navigation buttons and provides thumbnail view option. Effortlessly adopts various Swiper modules to ensure responsive and seamless user experience. Styles can be easily modified using provided CSS classes.         |

</details>

<details closed><summary>src.components.product.product-image</summary>

| File                                                                                                                         | Summary                                                                                                                                                                                                                                                         |
| ---                                                                                                                          | ---                                                                                                                                                                                                                                                             |
| [ProductImage.tsx](https://github.com/juansdev/teslo-shop/blob/master/src/components/product/product-image/ProductImage.tsx) | Customizes product images display on teslo-shop. Key Features: Provides adaptable width, height, styles, and classnames for each product image while managing mouse hover events, gracefully handling URL sources either within or external to the application. |

</details>

<details closed><summary>src.components.product.quantity-selector</summary>

| File                                                                                                                                     | Summary                                                                                                                                                                                                                                                                                                                  |
| ---                                                                                                                                      | ---                                                                                                                                                                                                                                                                                                                      |
| [QuantitySelector.tsx](https://github.com/juansdev/teslo-shop/blob/master/src/components/product/quantity-selector/QuantitySelector.tsx) | Increases user control within the Teslo Shop by implementing an interactive QuantitySelector component that adjusts product quantity before checkout. This React component facilitates the addition and removal of items in the shopping cart, using clean UI design and reusable Ionic icons for intuitive interaction. |

</details>

<details closed><summary>src.components.product.stock-label</summary>

| File                                                                                                                   | Summary                                                                                                                                                                                                                                                                                            |
| ---                                                                                                                    | ---                                                                                                                                                                                                                                                                                                |
| [StockLabel.tsx](https://github.com/juansdev/teslo-shop/blob/master/src/components/product/stock-label/StockLabel.tsx) | Monitors product availability in the teslo-shop app by fetching stock levels for specified products using a custom action. The StockLabel component dynamically updates the stock count based on data fetched. This enhances user experience by providing real-time stock information to shoppers. |

</details>

<details closed><summary>src.components.product.size-selector</summary>

| File                                                                                                                         | Summary                                                                                                                                                                                                                                                                        |
| ---                                                                                                                          | ---                                                                                                                                                                                                                                                                            |
| [SizeSelector.tsx](https://github.com/juansdev/teslo-shop/blob/master/src/components/product/size-selector/SizeSelector.tsx) | Introduces dynamic size selector for products in teslo-shop. Receives available sizes, selected size, and updates the selection on click events. Aligns with existing architecture by leveraging shared interfaces for type definition and using component naming conventions. |

</details>

<details closed><summary>src.components.paypal</summary>

| File                                                                                                          | Summary                                                                                                                                                                                                                                                                                                                             |
| ---                                                                                                           | ---                                                                                                                                                                                                                                                                                                                                 |
| [PayPalButton.tsx](https://github.com/juansdev/teslo-shop/blob/master/src/components/paypal/PayPalButton.tsx) | Implements custom PayPalButton component (src/components/paypal/PayPalButton.tsx), connecting to @paypal/react-paypal-js library, and manages transaction flow by creating orders & handling on-approve events. Integrates with actions, utils, and config files across projects structure to ensure secure, seamless transactions. |

</details>

<details closed><summary>src.components.orders</summary>

| File                                                                                                        | Summary                                                                                                                                                                                                                      |
| ---                                                                                                         | ---                                                                                                                                                                                                                          |
| [OrderStatus.tsx](https://github.com/juansdev/teslo-shop/blob/master/src/components/orders/OrderStatus.tsx) | The `OrderStatus` component elegantly showcases an orders status, whether its Purchase Pending or Purchase Confirmed, using intuitive color-coded icons and labels that contribute to Teslo-shop's seamless user experience. |

</details>

<details closed><summary>src.components.ui.sidebar</summary>

| File                                                                                                        | Summary                                                                                                                                                                                                                                                                                                                                                                        |
| ---                                                                                                         | ---                                                                                                                                                                                                                                                                                                                                                                            |
| [MenuByRol.tsx](https://github.com/juansdev/teslo-shop/blob/master/src/components/ui/sidebar/MenuByRol.tsx) | This `ItemMenuByFilter` component, residing within TesloShops frontend structure (`src/components/ui/sidebar/MenuByRol.tsx`), serves to conditionally render dynamic menu items based on the authenticated users role and session status. By implementing a flexible system of props, it ensures appropriate UI display for different user states in the application's layout. |
| [Sidebar.tsx](https://github.com/juansdev/teslo-shop/blob/master/src/components/ui/sidebar/Sidebar.tsx)     | This Sidebar.tsx file streamlines navigation by managing menu items based on user authentication and roles. It includes options for login, logout, profile, orders, and admin functionalities such as products, admin orders, and users management within the Teslo-shop application.                                                                                          |

</details>

<details closed><summary>src.components.ui.title</summary>

| File                                                                                              | Summary                                                                                                                                                                                                                                                                                                                                  |
| ---                                                                                               | ---                                                                                                                                                                                                                                                                                                                                      |
| [Title.tsx](https://github.com/juansdev/teslo-shop/blob/master/src/components/ui/title/Title.tsx) | Enhances user interface by defining Title component for page headings and subheadings. Allows developers to easily set titles with optional subtitles using the provided props while inheriting the specified titleFont from config. Customizable via the className prop, contributing to the consistency across the Teslo-shops design. |

</details>

<details closed><summary>src.components.ui.top-menu</summary>

| File                                                                                                     | Summary                                                                                                                                                                                                                                                                                                                |
| ---                                                                                                      | ---                                                                                                                                                                                                                                                                                                                    |
| [TopMenu.tsx](https://github.com/juansdev/teslo-shop/blob/master/src/components/ui/top-menu/TopMenu.tsx) | Display Teslo brand logo with shop subtitle 2. Provides access to main product categories (Men, Women, Kids) 3. Includes search and cart functionalities (with real-time cart item count) 4. Collapses/Expands the menu on smaller screens using responsive design 5. Opens a side menu upon clicking the Menu button. |

</details>

<details closed><summary>src.components.ui.footer</summary>

| File                                                                                                 | Summary                                                                                                                                                                                                                                                                        |
| ---                                                                                                  | ---                                                                                                                                                                                                                                                                            |
| [Footer.tsx](https://github.com/juansdev/teslo-shop/blob/master/src/components/ui/footer/Footer.tsx) | The Footer component within Teslo Shops user interface (UI) framework. This file ensures proper display and linking of the footer text, featuring the brand name and copyright information. It leverages style configurations to maintain consistent typography across the UI. |

</details>

<details closed><summary>src.components.ui.not-found</summary>

| File                                                                                                                | Summary                                                                                                                                                                                                                                                                           |
| ---                                                                                                                 | ---                                                                                                                                                                                                                                                                               |
| [PageNotFound.tsx](https://github.com/juansdev/teslo-shop/blob/master/src/components/ui/not-found/PageNotFound.tsx) | This file contains React component `PageNotFound`. It features an eye-catching 404 code along with descriptive messages and a link to homepage. An astronaut image is displayed on one side, creating an engaging user experience within the Teslo-Shop application architecture. |

</details>

<details closed><summary>src.components.ui.pagination</summary>

| File                                                                                                             | Summary                                                                                                                                                                                                                                                                                                                                                                   |
| ---                                                                                                              | ---                                                                                                                                                                                                                                                                                                                                                                       |
| [Pagination.tsx](https://github.com/juansdev/teslo-shop/blob/master/src/components/ui/pagination/Pagination.tsx) | Generates customizable pagination links for the e-commerce app, allowing users to navigate through pages effectively by dynamically generating URLs and rendering page numbers based on the current and total available page counts. The component utilizes Next.js features like `usePathname`, `useSearchParams`, and adheres to the projects Tailwind CSS style guide. |

</details>

<details closed><summary>src.components.providers</summary>

| File                                                                                                       | Summary                                                                                                                                                                                                                           |
| ---                                                                                                        | ---                                                                                                                                                                                                                               |
| [Providers.tsx](https://github.com/juansdev/teslo-shop/blob/master/src/components/providers/Providers.tsx) | Enhances teslo-shops user experience by seamlessly integrating PayPal payments within the application through the use of the `PayPalScriptProvider` and next-auth for authentication, ensuring secure transactions for customers. |

</details>

<details closed><summary>src.components.products.product-grid</summary>

| File                                                                                                                               | Summary                                                                                                                                                                                                                                                                                                                                                            |
| ---                                                                                                                                | ---                                                                                                                                                                                                                                                                                                                                                                |
| [ProductGridItem.tsx](https://github.com/juansdev/teslo-shop/blob/master/src/components/products/product-grid/ProductGridItem.tsx) | Enhances product display by rendering interactive, image-focused list items within the teslo-shops frontend layout. The component takes advantage of Next.js Link and state management capabilities, utilizing an external interface for product data and a custom ProductImage component for seamless integration with multiple product images and hover effects. |
| [ProductGrid.tsx](https://github.com/juansdev/teslo-shop/blob/master/src/components/products/product-grid/ProductGrid.tsx)         | Manipulates ProductGrid component for teslo-shop. Renders a list of products on webpages, intelligently adjusting layout based on screen size. By employing modular structure, enables seamless integration with other product-related components and APIs. Boosts user experience by arranging items neatly and improving load times.                             |

</details>

<details closed><summary>prisma</summary>

| File                                                                                     | Summary                                                                                                                                                                                                                                                                                                                                                              |
| ---                                                                                      | ---                                                                                                                                                                                                                                                                                                                                                                  |
| [schema.prisma](https://github.com/juansdev/teslo-shop/blob/master/prisma/schema.prisma) | In this Prisma schema file, you define database models for teslo-shop, including products, categories, users, orders, and addresses. It maps out relationships between these models, enabling seamless data interaction in the application. This setup ensures efficient storage, retrieval, and querying of crucial teslo-shop data within its PostgreSQL database. |

</details>

<details closed><summary>prisma.migrations</summary>

| File                                                                                                            | Summary                                                                                                                                                                                                                                                                                                                                                                                                   |
| ---                                                                                                             | ---                                                                                                                                                                                                                                                                                                                                                                                                       |
| [migration_lock.toml](https://github.com/juansdev/teslo-shop/blob/master/prisma/migrations/migration_lock.toml) | In this codebase, youll find the migration_lock.toml' file under prisma/migrations, which serves as a configuration lock for Prisma migration files when using PostgreSQL as database provider within our teslo-shop project. This lockfile ensures only one instance applies migrations at a given time, preventing conflicts and preserving consistency throughout our application's data architecture. |

</details>

<details closed><summary>prisma.migrations.20240616170517_user_address</summary>

| File                                                                                                                            | Summary                                                                                                                                                                                                                                                     |
| ---                                                                                                                             | ---                                                                                                                                                                                                                                                         |
| [migration.sql](https://github.com/juansdev/teslo-shop/blob/master/prisma/migrations/20240616170517_user_address/migration.sql) | Builds data model structure for UserAddress entities in the teslo-shop repository. This migration file defines relationships with Country and User tables, ensuring seamless data flow between user addresses, countries, and users within the application. |

</details>

<details closed><summary>prisma.migrations.20240616175033_user_address_city</summary>

| File                                                                                                                                 | Summary                                                                                                                                                                                                                        |
| ---                                                                                                                                  | ---                                                                                                                                                                                                                            |
| [migration.sql](https://github.com/juansdev/teslo-shop/blob/master/prisma/migrations/20240616175033_user_address_city/migration.sql) | Extends `UserAddress` model by adding city attribute to the database schema. This modification enables more detailed geographical tracking within Teslo Shop's user address data, enhancing delivery and logistics efficiency. |

</details>

<details closed><summary>prisma.migrations.20240614230445_product_image</summary>

| File                                                                                                                             | Summary                                                                                                                                                                                                                                                                                                                  |
| ---                                                                                                                              | ---                                                                                                                                                                                                                                                                                                                      |
| [migration.sql](https://github.com/juansdev/teslo-shop/blob/master/prisma/migrations/20240614230445_product_image/migration.sql) | In this repository, a SQL migration script is implemented for the Prisma framework to establish a ProductImage table connection with an existing Product table. This ensures efficient organization of product images, linking each image with its corresponding product within the teslo-shop application architecture. |

</details>

<details closed><summary>prisma.migrations.20240614225831_product_category</summary>

| File                                                                                                                                | Summary                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| ---                                                                                                                                 | ---                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| [migration.sql](https://github.com/juansdev/teslo-shop/blob/master/prisma/migrations/20240614225831_product_category/migration.sql) | In this codebase, the `prisma/migrations/20240614225831_product_category/migration.sql` file sets up product categories and products with various attributes like name, gender, size, stock levels, tags, descriptions, and more in the Teslo-shop repository. The enumerations for Size and Gender types are defined, along with a table to store product information, a unique slug index, and an index to optimize searches by gender. Additionally, it establishes foreign key relationships for a products associated category. |

</details>

<details closed><summary>prisma.migrations.20240616155211_country</summary>

| File                                                                                                                       | Summary                                                                                                                                                                                                                                                           |
| ---                                                                                                                        | ---                                                                                                                                                                                                                                                               |
| [migration.sql](https://github.com/juansdev/teslo-shop/blob/master/prisma/migrations/20240616155211_country/migration.sql) | Manages database schema for teslo-shop e-commerce application by defining a Country table with unique identifier and related attributes. The SQL file enforces a primary key and an unique index for efficient data handling and validation in the backend layer. |

</details>

<details closed><summary>prisma.migrations.20240615220346_user_role</summary>

| File                                                                                                                         | Summary                                                                                                                                                                                                                                                                                                                                |
| ---                                                                                                                          | ---                                                                                                                                                                                                                                                                                                                                    |
| [migration.sql](https://github.com/juansdev/teslo-shop/blob/master/prisma/migrations/20240615220346_user_role/migration.sql) | This migration file within the teslo-shop repository establishes the User entity and its associated properties such as id, name, email, emailVerified, password, role, and image. It also introduces a Role enum for user roles (admin or user). The unique index on email ensures each user has a unique email address in the system. |

</details>

<details closed><summary>prisma.migrations.20240616211254_orderaddress_optionaladdress_nullable</summary>

| File                                                                                                                                                     | Summary                                                                                                                                                                                                                       |
| ---                                                                                                                                                      | ---                                                                                                                                                                                                                           |
| [migration.sql](https://github.com/juansdev/teslo-shop/blob/master/prisma/migrations/20240616211254_orderaddress_optionaladdress_nullable/migration.sql) | Removes null constraint from `optionalAddress` column in OrderAddress table, providing flexibility to accept null values. Key component in ensuring user experience customization within Teslo Shop application's data model. |

</details>

<details closed><summary>prisma.migrations.20240617200107_transaction_id_in_order</summary>

| File                                                                                                                                       | Summary                                                                                                                                                                                                                           |
| ---                                                                                                                                        | ---                                                                                                                                                                                                                               |
| [migration.sql](https://github.com/juansdev/teslo-shop/blob/master/prisma/migrations/20240617200107_transaction_id_in_order/migration.sql) | Enhances transaction management by adding a new transactionId column to the Order table in the application's database schema, allowing for seamless transaction tracking within this open-source e-commerce project (teslo-shop). |

</details>

<details closed><summary>prisma.migrations.20240616202559_order_address_items</summary>

| File                                                                                                                                   | Summary                                                                                                                                                                                                             |
| ---                                                                                                                                    | ---                                                                                                                                                                                                                 |
| [migration.sql](https://github.com/juansdev/teslo-shop/blob/master/prisma/migrations/20240616202559_order_address_items/migration.sql) | Order, OrderItem, and OrderAddress tables, as well as defining relationships with the User, Product, Country, and Address entities, ensuring consistent data flow and integrity throughout our e-commerce platform. |

</details>

<details closed><summary>prisma.migrations.20240616205803_ispaid_default</summary>

| File                                                                                                                              | Summary                                                                                                                                                                                         |
| ---                                                                                                                               | ---                                                                                                                                                                                             |
| [migration.sql](https://github.com/juansdev/teslo-shop/blob/master/prisma/migrations/20240616205803_ispaid_default/migration.sql) | Sets default value for isPaid column in Order table to `false` within database schema, streamlining new order creation in the teslo-shop ecosystem by simplifying data entry for unpaid orders. |

</details>

---

##  Getting Started

**System Requirements:**

* **NodeJS**: `version 20.13.1`

###  Installation

<h4>From <code>source</code></h4>

> 1. Clone the teslo-shop repository:
>
> ```console
> $ git clone https://github.com/juansdev/teslo-shop
> ```
>
> 2. Change to the project directory:
> ```console
> $ cd teslo-shop
> ```
>
> 3. Install the dependencies:
> ```console
> $ npm install
> ```
> 
> 4. Duplicate the .env.template file, rename it to .env, and edit it by filling in the required fields.
>
> 5. Run the migrations using the command:
> ```console
> $ npx prisma migrate deploy
> ```
>
> 6. Run the Seeds using the command:
> ```console
> $ npm run seed
> ```

###  Usage

<h4>From <code>source</code></h4>

> Run teslo-shop using the command below:
> ```console
> $ npm run build && npm start
> ```