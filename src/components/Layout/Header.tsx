/* eslint-disable @next/next/no-html-link-for-pages */
import MenuPortal from '@components/Menu/CartPortal';
import navLinks from '@src/config/navlinks';
import useAppState from '@src/hooks/useAppState';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { motion } from 'framer-motion';

function Header(): JSX.Element {
    const router = useRouter();
    const { isMenu, dispatchToggleMenu } = useAppState();

    const PathIndicator = () => (
        <motion.div
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            className="bg-blue-500 -bottom-2 rounded-sm h-1 w-10 absolute"
        />
    );

    return (
        <header className="p-2 w-full z-10 flex flex-col items-center align-middle justify-center  shadow-xl bg-white ">
            <div className="max-w-5xl w-full flex items-center align-middle justify-between">
                <Image
                    src="/icons/logoswfsvg.svg"
                    width={50}
                    height={50}
                    priority
                    quality={100}
                />
                <div className="font-bold flex flex-col justify-center align-middle items-center ">
                    <span className=" md:text-4xl text-base text-gray-500">
                        Mathieu Bazard
                    </span>
                    <span className="text-sm md:text-2xl text-gray-400">
                        Guide de pêche
                    </span>
                </div>
                <div className="block md:invisible">
                    <Image
                        onClick={() => dispatchToggleMenu()}
                        src="/icons/burger.svg"
                        width={25}
                        height={25}
                        priority
                        quality={100}
                    />
                </div>
                {isMenu && <MenuPortal />}
            </div>
            <div className="w-full hidden md:flex border-t p-2 mt-4  justify-between align-middle items-center max-w-5xl">
                {navLinks.map((link) => (
                    <Link href={link.url} passHref>
                        <a
                            href="/"
                            className="text-base flex items-center align-middle justify-center relative text-gray-400 font-bold"
                        >
                            {link.name}
                            {router.pathname === link.url && <PathIndicator />}
                        </a>
                    </Link>
                ))}
            </div>
        </header>
    );
}

export default Header;
