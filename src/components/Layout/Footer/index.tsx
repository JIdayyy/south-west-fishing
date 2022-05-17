import Image from 'next/image';
import React from 'react';

function Footer(): JSX.Element {
    return (
        <footer className="w-full text-xs flex  items-center align-middle justify-around bg-indigo-dye">
            <div className="max-w-5xl md:flex-row flex-col  flex items-start align-top justify-between w-full p-5">
                <div className="flex flex-col text-white my-2 md:my-0">
                    <span>Mes titres :</span>
                    <div>
                        <span>n° diplôme: BPALP190299</span>
                    </div>
                    <div>
                        <span>n° carte professionnelle: 06420ED0154</span>
                    </div>
                    <div>
                        <span>n° de SIREN: 889 895 876</span>
                    </div>
                </div>
                <div className="flex flex-col text-white my-2 md:my-0">
                    <span>Contact :</span>
                    <span>Tel: 06.16.74.02.11</span>
                    <span>Email: southwestfishing64@gmail.com</span>
                </div>
                <div className="flex flex-col items-start align-middle justify-between my-2 md:my-0">
                    <div className="flex flex-col text-white ">
                        Partenaires :
                    </div>

                    <div className="flex items-center align-middle justify-between">
                        <span className="mx-2">
                            <Image
                                src="/images/logoesf.png"
                                width={50}
                                height={50}
                                quality={100}
                            />
                        </span>
                        <span className="mx-2">
                            <Image
                                src="/images/logostcroix.png"
                                width={100}
                                height={45}
                                quality={100}
                            />
                        </span>
                        <span className="mx-2">
                            <Image
                                src="/images/aappma-nivelle.png"
                                width={50}
                                height={50}
                                quality={100}
                            />
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
