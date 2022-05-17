import React from 'react';
import SkillCard from './skillCard';

const descriptions = [
    {
        id: '1',
        title: 'Float tube',
        description:
            'Venez découvrir cette approche de la pêche de façon ludique et sécurisé qui vous ouvrent les portes de  nouvelles zones de pêches inaccessibles du bord. C’est l’opportunité d’ une expérience de pêche unique, au plus près de la nature avec des émissions de co² proche de zéro. Ce type de stage est un bon moyen de vous faire une idée sur l’utilisation d’un float tube avant d’en acheter un.',
        image: '/images/skills/float.jpg',
    },
    {
        id: '2',
        title: 'Salmonidés',
        description:
            'Venez découvrir ou vous perfectionner aux leurres, au « toc » et à la mouche sur le bassin de la Nivelle et des Nives à la recherche des ses truites sauvages. Des stages de pêche sur les lacs de montagne de sont aussi envisageables sur demande. ',
        image: '/images/skills/trout.jpg',
    },
    {
        id: '3',
        title: 'Barque',
        description:
            'A quelques kilomètres de l’océan, non loin de Capbreton, se trouve l’étang blanc . Au milieu des Pins maritimes et  des tones de chasse je vous propose de venir à la recherche du « maître des lieux », le brochet les meilleurs périodes sont les mois de  mai, juin, fin septembre, octobre et novembre.',
        image: '/images/skills/pike.jpg',
    },
];

export default function Skills() {
    return (
        <div className="flex my-20 p-2 sm:p-5 md:px-20 w-full md:flex-row flex-col justify-between">
            {descriptions.map((skill) => (
                <SkillCard key={skill.id} skill={skill} />
            ))}
        </div>
    );
}
