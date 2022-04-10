import useWindowSize from '@jidayyy/usewindowdimension';
import Image from 'next/image';
import React from 'react';

type Props = {
    skill: {
        title: string;
        description: string;
        image: string;
    };
};

export default function SkillCard({ skill }: Props) {
    const { width } = useWindowSize();

    return (
        <div className="flex flex-col w-full md:w-64">
            <div className="float-left  mt-2 mr-4 rounded-sm overflow-hidden">
                <Image
                    src={skill.image}
                    width={width < 740 ? 500 : 250}
                    layout="responsive"
                    height={width < 740 ? 400 : 250}
                    quality={100}
                    priority
                />
            </div>

            <span className="font-bold my-3 text-gray-500">{skill.title}</span>
            <span className="my-3 tesxt-base">{skill.description}</span>
        </div>
    );
}
