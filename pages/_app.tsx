import 'tailwindcss/tailwind.css';
import Layout from 'layouts/Layout'
import LayoutNotLogin from 'layouts/LayoutNotLogin'
import LayoutNoSidebar from 'layouts/LayoutNoSidebar';

function MyApp({ Component, pageProps }) {
  switch (pageProps.layout) {
    case 'notLogin': {
      return (
        <LayoutNotLogin>
          <Component {...pageProps} />
        </LayoutNotLogin>
      )
    }
    case 'noSidebar': {
      return (
        <LayoutNoSidebar>
          <Component {...pageProps} />
        </LayoutNoSidebar>
      );
    }
    default: {
      return (
        <Layout>
          <Component {...pageProps} />
        </Layout>
      )
    }
  }
}

export default MyApp;
