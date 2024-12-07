import * as React from 'react';

import { ExpoSqlViewProps } from './ExpoSql.types';

export default function ExpoSqlView(props: ExpoSqlViewProps) {
  return (
    <div>
      <iframe
        style={{ flex: 1 }}
        src={props.url}
        onLoad={() => props.onLoad({ nativeEvent: { url: props.url } })}
      />
    </div>
  );
}
