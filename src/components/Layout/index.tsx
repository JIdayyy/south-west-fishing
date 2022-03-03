/* eslint-disable react-hooks/exhaustive-deps */

import { ReactNode } from 'react';
import Body from './Body';
import Footer from './Footer';
import Header from './Header';

interface ILayoutProps {
    children: ReactNode;
}

function Layout({ children }: ILayoutProps): JSX.Element {
    return (
        <div className="w-full  bg-gray-200 scrollbar-thin flex flex-col items-center align-middle scrollbar-thumb-gray-400 scrollbar-track-gray-100 ">
            <Header />
            <Body>{children}</Body>
            <Footer />
        </div>
    );
}

export default Layout;
