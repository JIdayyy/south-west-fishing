import Image from 'next/image';
import React from 'react';

function Footer(): JSX.Element {
    return (
        <footer className="w-full flex items-center align-middle justify-around bg-indigo-dye p-5">
            <div className="max-w-5xl flex items-start align-top justify-between w-full">
                <div className="flex flex-col text-white font-bold">
                    <span>Mes titres :</span>
                    <div>
                        <span>n° diplôme: BP031120335</span>
                    </div>
                    <div>
                        <span>n° carte professionnelle: 03212ED0030</span>
                    </div>
                    <div>
                        <span>n° de SIRET: 790 268 452 00022</span>
                    </div>
                </div>
                <div className="flex flex-col text-white font-bold">
                    <span>Contact :</span>
                    <span>Tel: 06.45.34.23.12</span>
                    <span>Email: julien_abbadie@hotmail.fr</span>
                </div>
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
            </div>
        </footer>
    );
}

export default Footer;
