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
                <div className="float-left mb-10 md:mb-0 mr-4 w-full transform translate-y-2 md:w-1/2  relative overflow-hidden   md:aspect-h-2 md:aspect-w-6">
                    <Map />
                </div>
                <span className="text-sm my-10 md:my-0 font-normal sm:text-base text-gray-600 w-full">
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
                <div className="float-right ml-4 my-4 w-full transform translate-y-2 md:w-1/2  relative overflow-hidden   ">
                    <Image
                        src="/images/nive2.jpg"
                        width={430}
                        height={330}
                        quality={100}
                        priority
                    />
                </div>
                <span className="text-sm my-4  font-normal sm:text-base text-gray-600 w-full">
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
            <div className=" w-full ">
                <div className="float-left mr-4 mb-4 w-full transform translate-y-2 md:w-1/2  relative overflow-hidden  ">
                    <Image
                        src="/images/nive2.jpg"
                        width={430}
                        height={330}
                        quality={100}
                        priority
                    />
                </div>
                <span className="text-sm  font-normal sm:text-base text-gray-600 w-full">
                    <strong>Secteur sud Landes</strong>
                    <br />
                    <br />
                    L’étang Blanc est un des lieux mythique de la pêche du
                    brochet dans le sud ouest. <br />
                    Ce lac naturel d’1,8 km² offre un cadre exceptionnel.
                    Typique du littoral landais, il est peut profond, ses fonds
                    sablonneux et la végétation aquatique y est abondante.
                    <br />
                    On y retrouve les pins et chênes lièges de la foret Landaise
                    en arrière plan. Des tonnes de chasse sont réparties sur
                    quasiment toute la superficie du lac.
                    <br />
                    L’étang blanc déverse ses eaux dans l’étang de Hardy, son
                    voisin, par un petit canal. Ce second plan d’eau, aux
                    caractéristiques semblables, est également un très bon site
                    pour la pêche du brochet. Un peut plus au nord se trouve
                    l’étang de Souston, toutes les espèces de carnassiers y sont
                    représentés dans ce lac de 3,8km².
                    <br />
                    Son biotope est lui aussi typique des lacs côtiers landais
                    (fonds sablonneux, peu profond…) cet étang est parfait pour
                    l’apprentissage de la pêche du Black-Bass, tous les modes de
                    pêches y sont réalisables, la pêche en surface à la « frog »
                    au « Texas Rig » etc ...
                </span>
            </div>
        </motion.div>
    );
}

export default Zone;
