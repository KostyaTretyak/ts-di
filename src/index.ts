/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

function fake() { /* unused function to prevent the license merging with comments */}

/**
 * @module
 * @description
 * The `di` module provides dependency injection container services.
 */

export * from './di/metadata';
export { forwardRef, resolveForwardRef, ForwardRefFn } from './di/forward_ref';
export { Injector } from './di/injector';
export { ReflectiveInjector } from './di/reflective_injector';
export { Provider, TypeProvider, ValueProvider, ClassProvider, ExistingProvider, FactoryProvider } from './di/provider';
export { ResolvedReflectiveFactory, ResolvedReflectiveProvider } from './di/reflective_provider';
export { ReflectiveKey } from './di/reflective_key';
export { InjectionToken } from './di/injection_token';

export { Class, TypeDecorator, makeDecorator } from './util/decorators';
export { Type } from './type';
