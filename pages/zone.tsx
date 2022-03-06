import Map from '@components/Map';
import { motion } from 'framer-motion';
import React from 'react';

function Zone() {
    return (
        <motion.div
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            className="w-full max-w-5xl align-top h-full min-h-screen p-2 sm:p-4 md:p-20 flex flex-col bg-white justify-start"
        >
            <h1 className="font-semibold text-xl text-gray-500 my-10">
                Zone de pêche
            </h1>
            <div>
                <div className="float-left mr-2 w-full transform translate-y-2 md:w-1/2 md:h-1/2 relative overflow-hidden   md:aspect-h-2 md:aspect-w-6">
                    <Map />
                </div>
                <span className="text-sm font-light sm:text-xl text-gray-600 w-full">
                    Le secteur Pays Basque sud Landes est très propice pour la
                    pêche de tout type de carnassiers.
                    <br />
                    <br />
                    Le réseau hydrographique en premère catégorie y est
                    particulièrement étendu avec pas moins de 7000 km de cours
                    d’eau dont 5200 km de parcours de pêche en 1ère catégorie et
                    1800 km en 2ème catégorie.
                    <br />
                    <br />
                    En France on les appelles ririvières, ici on parle de gave,
                    nive et autre nivelle ... Sur ce terrain de jeux évoluent
                    truites, saumons et anguilles qui vous donneront du fils à
                    retordre lors de vos sessions pêche !
                </span>
            </div>
        </motion.div>
    );
}

export default Zone;
