import { requireNativeView } from 'expo';
import * as React from 'react';

import { ExpoSqlViewProps } from './ExpoSql.types';

const NativeView: React.ComponentType<ExpoSqlViewProps> =
  requireNativeView('ExpoSql');

export default function ExpoSqlView(props: ExpoSqlViewProps) {
  return <NativeView {...props} />;
}
