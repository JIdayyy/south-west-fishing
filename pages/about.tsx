/* eslint-disable no-irregular-whitespace */
import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';

function About() {
    return (
        <motion.div
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            className="w-full max-w-5xl align-top h-full min-h-screen p-2 sm:p-4 md:p-20 flex flex-col bg-white justify-start"
        >
            <h1 className="font-semibold text-xl text-gray-500 my-10">
                Qui suis je ?
            </h1>
            <div>
                <div className="float-left mr-2 mb-2  transform translate-y-2 w-1/2 h-1/2 relative overflow-hidden aspect-h-1 aspect-w-3">
                    <Image src="/images/pike.jpg" layout="fill" priority />
                </div>
                <span className="text-sm py-8 font-light sm:text-base text-gray-600 w-full">
                    Pêcheur depuis l’enfance, j’ai commencé la pêche grâce à mon
                    grand père.
                    <br />
                    <br /> Depuis cette époque j’ai gardé la passion de la pêche
                    et je n’ai jamais cessé de pêcher et de parcourirs les cours
                    d’eau du pays basque à la recherche de truites black basset
                    plus encore...! <br /> <br />
                    Je me suis aussi naturellement impliqué dans une association
                    de pêche dans laquelle j’évolu depuis plusieurs années.
                    <br />
                    <br /> Je me suis essayé à toute sortes de techniques et
                    toute sorte de pêche aussi j’ai su piocher dans chaque
                    approche de l’eau le meilleur de la technique pour affiner
                    mon savoir faire. <br /> <br /> Après une carrière dans la
                    mécanique, et lors de ma participation à l’école de pêche de
                    l’aappma Nivelle Côte Basque ( APN ) j’ai ouvert les yeux et
                    j’ai choisis de me reconvertir et de faire de ma passion mon
                    métier en transmettant le gout et le respect de la pêche.
                    <br />
                    Une véritable révélation pour moi, car j’y ai trouvé une
                    seconde passion, celle de transmettre et d’apprendre l’art
                    et la manière de capturer des poissons tout en gardant une
                    approche respectueuse de la nature.
                </span>
            </div>
        </motion.div>
    );
}

export default About;
