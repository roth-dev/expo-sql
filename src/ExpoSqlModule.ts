import { NativeModule, requireNativeModule } from "expo";

import { ExpoSqlModuleEvents } from "./ExpoSql.types";

export interface DatabaseConfig {
  host: string;
  user: string;
  password: string;
  database: string;
}

declare class ExpoSqlModule extends NativeModule<ExpoSqlModuleEvents> {
  connect: (
    host: string,
    user: string,
    password: string,
    database: string
  ) => Promise<string>;
}

// This call loads the native module object from the JSI.
export default requireNativeModule<ExpoSqlModule>("ExpoSql");
