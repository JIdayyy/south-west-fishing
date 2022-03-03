/* eslint-disable react/jsx-props-no-spreading */
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import NProgress from 'nprogress';
import router from 'next/router';
import store from 'src/redux/store';
import { Provider as ReduxProvider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import ErrorBoundary from '@components/Error/ErrorBoundary';
import ErrorFallback from '@components/Error/ErrorFallback';
import 'react-toastify/dist/ReactToastify.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import Layout from '../src/components/Layout';

NProgress.configure({ showSpinner: false });
router.events.on('routeChangeStart', () => NProgress.start());
router.events.on('routeChangeComplete', () => NProgress.done());
router.events.on('routeChangeError', () => NProgress.done());

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <ReduxProvider store={store}>
                <Layout>
                    <ErrorBoundary ErrorFallback={ErrorFallback}>
                        <Component {...pageProps} />
                    </ErrorBoundary>
                    <ToastContainer autoClose={3000} />
                </Layout>
            </ReduxProvider>
        </>
    );
}

export default MyApp;
