import Map from '@components/Map';
import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';

function Zone() {
    return (
        <motion.div
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            className="w-full max-w-5xl text-justify align-top h-full min-h-screen p-2 sm:p-4 md:p-20 flex flex-col bg-white justify-start"
        >
            <h1 className="font-semibold text-xl text-gray-500 my-10">
                Zone de pêche
            </h1>
            <div className="w-full">
                <div className="float-left mr-4 w-full transform translate-y-2 md:w-1/2 md:h-1/2 relative overflow-hidden   md:aspect-h-2 md:aspect-w-6">
                    <Map />
                </div>
                <span className="text-sm  font-normal sm:text-base text-gray-600 w-full">
                    Le secteur <strong>Pays Basque</strong> sud Landes est très
                    propice pour la pêche de tout type de carnassiers.
                    <br />
                    <br />
                    Le réseau hydrographique en{' '}
                    <strong>premère catégorie</strong> y est particulièrement
                    étendu avec pas moins de <strong>7000 km</strong> de cours
                    d’eau dont 5200 km de parcours de <strong>pêche</strong> en
                    1ère catégorie et 1800 km en 2ème catégorie.
                    <br />
                    <br />
                    En France on les appelles ririvières, ici on parle de{' '}
                    <strong>gave</strong>, <strong>nive</strong> et autre{' '}
                    <strong>nivelle</strong> ... Sur ce terrain de jeux évoluent
                    <strong> truites, saumons et anguilles</strong> qui vous
                    donneront du fils à retordre lors de vos sessions{' '}
                    <strong>pêche</strong> !
                </span>
            </div>

            <div className="my-10 w-full ">
                <div className="float-right ml-4 w-full transform translate-y-2 md:w-1/2 md:h-1/2 relative overflow-hidden   md:aspect-h-2 md:aspect-w-6">
                    <Image
                        src="/images/nive2.jpg"
                        width={430}
                        height={330}
                        quality={100}
                        priority
                    />
                </div>
                <span className="text-sm  font-normal sm:text-base text-gray-600 w-full">
                    La <strong>Nive</strong> Elle nait des torrents de{' '}
                    <strong>Béhérobie </strong>
                    (Estérençuby) auxquels viennent se greffer le{' '}
                    <strong>Laurhibar</strong> en rive droite ainsi que la Nive
                    d&apos;<strong>Arnéguy</strong> en rive gauche près de{' '}
                    <strong>St Jean Pied de Port</strong>.
                    <br />
                    <br />
                    Elle est ensuite rejointe par la Nive des{' '}
                    <strong>Aldudes à St Martin d&apos;Arrossa</strong>, le Laka
                    à Ossès, le Baztan à Bidarray, la Mouline à Louhossoa, le
                    Laxia à Itxassou, le Latsa à Espelette...
                    <br />
                    <br />
                    La Nive termine son périple à <strong>Bayonne</strong> pour
                    se jeter dans l&apos;
                    <strong>Adour</strong> D&apos;une longueur d&apos;environ
                    80km, La Nive est très prisée pour la pêche des{' '}
                    <strong>salmonidés</strong>.
                </span>
            </div>
        </motion.div>
    );
}

export default Zone;
