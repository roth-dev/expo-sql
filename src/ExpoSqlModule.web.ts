import { registerWebModule, NativeModule } from 'expo';

import { ExpoSqlModuleEvents } from './ExpoSql.types';

class ExpoSqlModule extends NativeModule<ExpoSqlModuleEvents> {
  PI = Math.PI;
  async setValueAsync(value: string): Promise<void> {
    this.emit('onChange', { value });
  }
  hello() {
    return 'Hello world! 👋';
  }
}

export default registerWebModule(ExpoSqlModule);
