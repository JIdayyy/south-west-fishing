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
                <span className="text-sm font-light sm:text-base text-gray-600 w-full">
                    Le respect du poisson et de la nature sont des éléments
                    essentiels du savoir faire que je partage, aussi, tous les
                    poissons devront être remis à l’eau dans les meilleures
                    conditions possibles, le poisson avant, la photo après !
                </span>

                <h2 className="font-semibold text-xl text-gray-500 my-10">
                    Lors des demies journées, sont pris en compte :
                </h2>
                <ul className="flex flex-col w-full my-10">
                    <li>• l’enseignement </li>
                    <li>• l’accompagnement </li>
                    <li>• le prêt du matériel (sauf waders)</li>
                    <li>• l’assurance </li>
                </ul>
                <span className="text-green-500 font-semibold text-base my-10">
                    Les prestations ne comprennent ni l’hébergement, ni la carte
                    de pêche.
                </span>
                <h3 className="font-semibold text-xl text-gray-500 my-10">
                    Tarifs pour 1 personne
                </h3>
                <ul className="flex flex-col w-full my-10">
                    <li>
                        <strong>- 125 euros </strong>la demie journée de 5
                        heures (matinée ou après-midi)
                    </li>
                    <li>
                        <strong>- 190 euros</strong> la journée de 8 heures de
                        pêche)
                    </li>
                    <li>
                        <strong>- 345 euro</strong> pour 2 jours
                    </li>
                    <li>
                        <strong>- 60 euros </strong> pour le coup du soir (à
                        partir de 18h, 18h30, horaires variables), 30 euros si
                        pris en complément d’une demie journée (après-midi)
                    </li>
                    <li>
                        <strong>- 60 euros </strong> stage truite au toc jeunes
                    </li>
                    <li>
                        <strong>- 15 € / h </strong> initiation pêche au coup
                        (min 2 enfants )
                    </li>
                </ul>
                <span className="text-gray-600 text-sm">
                    ( horaires adaptable selon la demande, l’activité rencontrée
                    et la saison )
                </span>
            </div>
        </motion.div>
    );
}

export default Tarifs;
