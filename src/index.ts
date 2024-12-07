// Reexport the native module. On web, it will be resolved to ExpoSqlModule.web.ts
// and on native platforms to ExpoSqlModule.ts
export { default } from './ExpoSqlModule';
export { default as ExpoSqlView } from './ExpoSqlView';
export * from  './ExpoSql.types';
