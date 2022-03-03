/* eslint-disable @next/next/no-html-link-for-pages */
/* This example requires Tailwind CSS v2.0+ */
import React from 'react';
import useAppState from '@src/hooks/useAppState';
import navLinks from '@src/config/navlinks';
import Link from 'next/link';
import CloseButton from './CloseButton';

export default function Menu(): React.ReactElement {
    const { dispatchToggleMenu } = useAppState();
    return (
        <div className="flex flex-col relative bg-white  h-full w-full overflow-y-hidden  scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100">
            <CloseButton />

            <div className="h-full w-full flex flex-col justify-start p-5 py-32">
                {navLinks.map((link) => (
                    <Link href={link.url} passHref>
                        <a
                            onClick={() => dispatchToggleMenu()}
                            href="/"
                            className="text-xl my-5 text-left w-full flex items-start align-middle justify-start  relative text-gray-600 font-bold"
                        >
                            {link.name}
                        </a>
                    </Link>
                ))}
            </div>
        </div>
    );
}
