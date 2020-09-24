/*
 * Extra typings definitions
 */

// Allow .json files imports
declare module '*.json';

declare module 'graphql/language/ast' { export type DocumentNode = any }


// SystemJS module definition
declare var module: NodeModule;
interface NodeModule {
  id: string;
}
