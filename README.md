# Mercado Libre React Challenge

Author: Ramón José París González

## Tech stack

- NodeJS - v12
- Typescript - v4.2.2
- Jest - v26.6.3
- Next JS - v10.0.7
- Sass - v1.32.8

## Functional decisions clarifications

There were some assumptions by side during the development:

**Backend assumptions:**

- I did not have clarity of the structure for `price` so I decided to manage only integer values in `amount`
  and `decimals`. That means, that if I have the price `100.5` I will leave `amount` with 100 and decimals with `50`
- Since the Categories relations was not clear for me, I've decided to use the api
  of `https://api.mercadolibre.com/categories/:categoryId` and take from `path_from_root` the categories relations. This
  has been done for `/api/items/:id` endpoint also
  
**Frontend assumptions:**
- I did not have clarity of the use of the green icon in the title of the Items search, so I put a logic to render it only if the product has free shipping


## Architecture design

### Backend

It has been designed inspired in Clean Architecture and Hexagonal Architecture, taking main concepts for decoupling code
and another good practices of these patterns.

**Folder structure:**

```
 app
├──  core
│  ├──  domain
│  │  ├──  Category.ts
│  │  ├──  ItemDetail.ts
│  │  ├──  ItemResume.ts
│  │  └──  SearchResult.ts
│  ├──  ports
│  │  ├──  IProductDomainSystemPort.ts
│  │  └──  ISearchEngineSystemPort.ts
│  └──  useCases
│     ├──  GetItemDetailUseCase.ts
│     ├──  IGetItemDetailUseCase.ts
│     ├──  ISearchItemUseCase.ts
│     └──  SearchItemUseCase.ts
└──  infrastructure
   ├──  config
   │  ├──  ConfigGetItemDetailUseCase.ts
   │  ├──  ConfigSearchItemUseCase.ts
   │  ├──  EnvironmentVariables.ts
   │  └──  LoggerConfig.ts
   ├──  dto
   │  └──  AuthorDto.ts
   ├──  http
   │  ├──  __tests__
   │  │  └──  RestClientTemplate.test.ts
   │  ├──  BaseApi
   │  │  └──  BaseApiAdapter.ts
   │  ├──  MeLiApi
   │  │  ├──  MeLiApi.d.ts
   │  │  └──  MeLiApiRestAdapter.ts
   │  └──  RestClientTemplate.ts
   └──  mappers
      ├──  __tests__
      │  └──  DomainObjectMapper.test.ts
      └──  DomainObjectMapper.ts
pages
├── api
│  ├── index.d.ts
│  └── items
│     ├── [id].ts
│     └── index.ts
      

```

Important note: there are a few tests done, the idea was to make all of them but due of personal commitments that took
me some time, it was not possible

### Frontend

It has been built using Atomic Design patterns to make sure that all the components are as much reusable as possible.
There are also another patterns and concepts applied like:
- High Order Components 
- SubComponents / Dot componentes 
- Components Composition
- Slot Components
- React Hooks.

Also, since the requirement received does not change the data based in dynamic statuses, I decided to
use fetch data with `getServerSideProps` function as NextJS suggest it instead of use `useEffect`.

Regarding styling of the page, I used Sass and css-modules feature to build all the styles thinking in reusable design

**Folder structure:**

```
 components
├── atoms
│  ├── Badge
│  │  ├── Badge.module.scss
│  │  └── Badge.tsx
│  ├── Buttons
│  │  ├── Button.module.scss
│  │  ├── Button.tsx
│  │  └── IconButton.tsx
│  ├── Image
│  │  └── index.tsx
│  ├── Inputs
│  │  └── InputText.tsx
│  └── Text
│     ├── Currency.tsx
│     ├── Text.module.scss
│     └── Text.tsx
├── molecules
│  ├── Breacumb
│  │  ├── Breadcrumb.module.scss
│  │  └── Breadcrumb.tsx
│  ├── Card
│  │  ├── Card.tsx
│  │  ├── CardAction.tsx
│  │  ├── CardHeader.tsx
│  │  ├── CardPrice.tsx
│  │  └── CardTitle.tsx
│  ├── Item
│  │  ├── Item.tsx
│  │  ├── ItemBadge.tsx
│  │  ├── ItemDescription.tsx
│  │  ├── ItemImage.tsx
│  │  ├── ItemSubtitle.tsx
│  │  └── ItemTitle.tsx
│  └── SearchBar
│     └── index.tsx
├── organism
│  ├── Body
│  │  └── Body.tsx
│  ├── List
│  │  ├── List.module.scss
│  │  └── List.tsx
│  └── Navbar
│     └── Navbar.tsx
├── templates
│  ├── Layout
│  │  └── Layout.tsx
│  ├── ProductDetailTemplate
│  │  └── ProductDetailTemplate.tsx
│  └── SearchItemTemplate
│     └── SearchItemsTemplate.tsx
└── utils
   └── ChildrenComponentFinder.ts
styles
├── _base.scss
├── _borders.scss
├── _box.scss
├── _colors.scss
├── _flex.scss
├── _sizes.scss
├── _text.scss
└── globals.scss

```