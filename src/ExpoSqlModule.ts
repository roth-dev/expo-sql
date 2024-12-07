import { NativeModule, requireNativeModule } from 'expo';

import { ExpoSqlModuleEvents } from './ExpoSql.types';

declare class ExpoSqlModule extends NativeModule<ExpoSqlModuleEvents> {
  PI: number;
  hello(): string;
  setValueAsync(value: string): Promise<void>;
}

// This call loads the native module object from the JSI.
export default requireNativeModule<ExpoSqlModule>('ExpoSql');
