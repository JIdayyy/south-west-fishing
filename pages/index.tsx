import Image from 'next/image';
import useWindowDimensions from '@jidayyy/usewindowdimension';
import { motion } from 'framer-motion';
import MyCaroussel from '@components/Caroussel';

const Home = () => {
    const { width } = useWindowDimensions();

    return (
        <motion.div
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            className="w-full align-top h-full  flex flex-col  justify-start"
        >
            <MyCaroussel />

            <div className="w-full h-full  sm:p-0 relative flex flex-col items-center align-middle justify-center">
                <div className="w-full bg-white   max-w-5xl  h-10" />
                <div className="max-w-5xl bg-white p-2 sm:p-5 md:px-20 transform ">
                    <h1 className="font-semibold my-4 text-xl md:text-2xl text-gray-600 ">
                        Bienvenue sur le site south west fishing !
                    </h1>
                    <div className="text-sm sm:text-xl text-gray-600 w-full  pb-48">
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
                        <div className="p-0 w-full font-normal text-justify text-base">
                            Depuis 2020 <strong>South West Fishing</strong> vous
                            propose des stages et séjours de pêches dans la
                            région <strong>Pays Basque </strong>
                            sud <strong> Landes</strong>. <br />
                            Découvrez la pêche dans le sud ouest avec un guide
                            diplômé expérimenté. Partir en séjour guidage ou
                            initiation s’est s’assurer une journée de pêche dans
                            les meilleures conditions, et la certitude de se
                            faire accompagner par un{' '}
                            <strong>encadrant passionné et expérimenté</strong>.
                            <br />
                            <br />
                            Que vous soyez{' '}
                            <strong>débutant ou pêcheur chevroné</strong>, nos
                            guidages s’adaptent à vos besoins. <br />
                            Vous êtes plûtot <strong>truite</strong> ? Enfillez
                            vos <strong>wadders</strong> et embarquez sur les
                            nives qui nous offiront de splendides paysages et
                            des <strong>poissons</strong> joueurs.
                            <br />
                            Plutot
                            <strong> carnassiers</strong> ?{' '}
                            <strong>L’étang blanc</strong> et ses 183 Hectares
                            abrite
                            <strong> Black-Bass Brochet Perches</strong> et plus
                            encore ...
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default Home;
