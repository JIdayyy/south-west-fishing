import Image from 'next/image';
import React from 'react';

function Footer(): JSX.Element {
    return (
        <footer className="w-full flex items-center align-middle justify-around bg-indigo-dye p-2">
            <Image
                src="/images/logoesf.png"
                width={50}
                height={50}
                quality={100}
            />
            <Image
                src="/images/logostcroix.png"
                width={100}
                height={45}
                quality={100}
            />
        </footer>
    );
}

export default Footer;
