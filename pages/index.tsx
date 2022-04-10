import Image from 'next/image';
import useWindowDimensions from '@jidayyy/usewindowdimension';
import { motion } from 'framer-motion';
import MyCaroussel from '@components/Caroussel';
import Skills from '@components/Skills';

const Home = () => {
    const { width } = useWindowDimensions();

    return (
        <motion.div
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            className="w-full align-top   flex flex-col  justify-start"
        >
            <MyCaroussel />

            <div className="w-full sm:p-0 relative flex flex-col items-center align-middle justify-center">
                <div className="w-full bg-white   max-w-5xl  h-10" />
                <div className="max-w-5xl bg-white  transform ">
                    <h1 className="font-semibold my-4 p-2 sm:p-5 md:px-20 text-xl md:text-2xl text-gray-600 ">
                        Bienvenue sur le site south west fishing ! 🐟 🎣
                    </h1>
                    <div className="text-sm sm:text-xl p-2 sm:p-5 md:px-20 text-gray-600 w-full  pb-48">
                        <div className="float-left  mt-2 mr-4 rounded-sm overflow-hidden">
                            <Image
                                className="float-left"
                                src="/images/main_float.jpg"
                                width={width < 1000 ? 200 : 250}
                                height={width < 1000 ? 180 : 200}
                                quality={100}
                                priority
                            />
                        </div>
                        <div className="p-0 w-full  font-normal text-justify text-base">
                            Depuis 2020 <strong>South West Fishing</strong> vous
                            propose des stages et séjours de pêches dans la
                            région <strong>Pays Basque </strong>
                            sud <strong> Landes</strong>. <br />
                            <br />
                            Découvrez la pêche dans le sud ouest avec un guide
                            diplômé expérimenté. Partir en séjour guidage ou
                            initiation s’est s’assurer une journée de pêche dans
                            les meilleures conditions, et la certitude de se
                            faire accompagner par un{' '}
                            <strong>encadrant passionné et expérimenté</strong>.
                            <br />
                            <br />
                            <br />
                            <br />
                            Que vous soyez débutant ou pêcheur chevroné, nos
                            guidages s’adaptent à vos besoins. <br />
                            Vous êtes plûtot <strong>truite</strong> ? Enfillez
                            vos <strong>wadders</strong> et embarquez sur les
                            nives qui nous offiront de splendides paysages et
                            des <strong>poissons</strong> joueurs.
                            <br />
                            <br />
                            Plutot
                            <strong> carnassiers</strong> ?{' '}
                            <strong>L’étang blanc</strong> et ses 183 Hectares
                            abrite
                            <strong> Black-Bass Brochet Perches</strong> et plus
                            encore ...
                        </div>
                    </div>
                    <div className="w-full my-20 h-56 relative flex flex-col items-center align-middle justify-center">
                        <Image src="/images/bg.jpg" layout="fill" />
                        <div className="text-white z-50 text-2xl my-2">
                            “Convivialité partage et aventure !”
                        </div>
                        <div className="text-white z-50 my-2">
                            “Les valeurs qui nous animent”
                        </div>
                    </div>
                    <Skills />
                </div>
            </div>
        </motion.div>
    );
};

export default Home;
