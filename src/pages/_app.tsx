import type { AppProps } from 'next/app'

import '../styles/global.css'
import '../styles/a11y-light.min.css'
import '../styles/stag.min.css'
import '../styles/stag-ext.min.css'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp;