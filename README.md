[![Build Status](https://travis-ci.org/KostyaTretyak/ts-di.svg?branch=master)](https://travis-ci.org/KostyaTretyak/ts-di)

Dependency injection library for JavaScript and TypeScript. It is an extraction of the Angular's dependency injection which means that it's feature complete, fast, reliable and well tested. Also - retrieve all API documentation with example code.

Up-to-date with Angular 4.4.7

## Install

```bash
npm i ts-di
# OR
yarn add ts-di
```

Also you need to install `reflect-metadata` module:

```bash
npm i reflect-metadata
# OR
yarn add reflect-metadata
```

Then, in `tsconfig.json` file, for `compilerOptions` you need set `experimentalDecorators` and `emitDecoratorMetadata` to `true`:

```json
{
  "compilerOptions": {
    // ...
    "experimentalDecorators": true,
    "emitDecoratorMetadata": true
  }
}
```

## Example usage

```ts
import 'reflect-metadata';
import { ReflectiveInjector, Injectable } from 'ts-di';

@Injectable()
class UsefulService {
}

@Injectable()
class NeedsService {
  constructor(public service: UsefulService) {}
}

const injector = ReflectiveInjector.resolveAndCreate([NeedsService, UsefulService]);
const needsService = injector.get(NeedsService);
expect(needsService instanceof NeedsService).toBe(true);
expect(needsService.service instanceof UsefulService).toBe(true);
```

For more examples, see the [tests for ts-di](test/reflective_injector.spec.ts).

## API

For full documentation check Angular DI docs:
- [Dependency Injection](https://v4.angular.io/guide/dependency-injection)
- [Hierarchical Dependency Injectors](https://v4.angular.io/guide/hierarchical-dependency-injection)
- [Dependency Injection in action](https://v4.angular.io/guide/dependency-injection-in-action)
