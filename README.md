# @stackra/nestjs-types

NestJS interfaces, types, enums, and constants extracted from the official
NestJS source packages.

## What's Included

- **Interfaces** — All public interfaces from `@nestjs/common` (modules,
  features, hooks, http, middleware, controllers, exceptions, websockets)
- **Enums** — `HttpStatus`, `RequestMethod`, `ShutdownSignal`, `VersioningType`,
  `RouteParamtypes`, `Transport`, `WsParamtype`
- **Constants** — Metadata keys, watermarks, module metadata constants
- **Microservices** — Client interfaces, transport strategy,
  serializer/deserializer
- **WebSockets** — Gateway metadata, server interfaces, WS response types

## Installation

```bash
pnpm add @stackra/nestjs-types
```

## Usage

```typescript
import {
  HttpStatus,
  RequestMethod,
  Type,
  DynamicModule,
  ModuleMetadata,
  Provider,
  INestApplication,
  OnModuleInit,
  PipeTransform,
  CanActivate,
  ExceptionFilter,
  NestInterceptor,
} from '@stackra/nestjs-types';
```

## Source

Extracted from [NestJS](https://github.com/nestjs/nest) v11 (`@nestjs/common`,
`@nestjs/microservices`, `@nestjs/websockets`).

## License

MIT
