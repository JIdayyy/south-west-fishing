/* eslint-disable react/self-closing-comp */
import { motion } from 'framer-motion';
import React from 'react';

function Tarifs() {
    return (
        <motion.div
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            className="w-full max-w-5xl align-top h-full min-h-screen p-2 sm:p-4 md:p-20 flex flex-col bg-white justify-start"
        >
            <h1 className="font-semibold text-xl text-gray-500 my-10">
                Tarifs Guidage 2022 !
            </h1>
            <div>
                <span className="text-sm font-light sm:text-xl text-gray-600 w-full">
                    Le respect du poisson et de la nature sont des éléments
                    essentiels du savoir faire que je partage, aussi, tous les
                    poissons devront être remis à l’eau dans les meilleures
                    conditions possibles, le poisson avant, la photo après !
                </span>
                <table className="grid overflow-hidden grid-cols-5 grid-rows-5 text-sm font-light sm:text-xl">
                    <div className="bg-gray-300 p-2" />
                    <div className="bg-gray-300 p-2">1 Personne</div>
                    <div className="bg-gray-300 p-2">2 Personnes</div>
                    <div className="bg-gray-300 p-2">Stages Enfants</div>
                    <div className="bg-gray-300 p-2">Initiation Enfants</div>
                    <div className="p-2">1/2 Journée</div>
                    <div className="p-2">130 </div>
                    <div className="p-2">190</div>
                    <div className="p-2">75</div>
                    <div className="p-2">65</div>
                    <div className="p-2 bg-gray-300">1 Journée</div>
                    <div className="p-2 bg-gray-300">190</div>
                    <div className="p-2 bg-gray-300">150</div>
                    <div className="p-2 bg-gray-300">120</div>
                    <div className="p-2 bg-gray-300">120</div>
                    <div className="p-2">2 Jours</div>
                    <div className="p-2">390</div>
                    <div className="p-2">280</div>
                    <div className="p-2">390</div>
                    <div className="p-2">280</div>
                    <div className="p-2 bg-gray-300">3 Jours</div>
                    <div className="p-2 bg-gray-300">570</div>
                    <div className="p-2 bg-gray-300">370</div>
                    <div className="p-2 bg-gray-300"></div>
                    <div className="p-2 bg-gray-300"></div>
                    <div className="p-2">Coup du soir / matin</div>
                    <div className="p-2">65</div>
                    <div className="p-2">45</div>
                    <div className="p-2"></div>
                    <div className="p-2"></div>
                </table>
            </div>
        </motion.div>
    );
}

export default Tarifs;
