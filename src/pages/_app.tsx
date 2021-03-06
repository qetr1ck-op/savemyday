import React from 'react';

import './global.sass';

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }): JSX.Element {
  return <Component {...pageProps} />;
}
