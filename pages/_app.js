import '../styles/globals.css'
import {Toaster} from "react-hot-toast"

import { Laoyout, Layout } from '../components'
import { StateContext } from '../context/StateContext'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <StateContext>
      <Layout>
        <Toaster />
        <Component {...pageProps} />
      </Layout>
    </StateContext>

  )
}

export default MyApp
