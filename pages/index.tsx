import Image from 'next/image';
import { Carousel } from 'react-responsive-carousel';
import useWindowDimensions from '@jidayyy/usewindowdimension';
import Gallery from 'react-photo-gallery';
import { motion } from 'framer-motion';

const MyCaroussel = () => {
    const { width } = useWindowDimensions();
    const height = () => {
        if (width > 1200) {
            return 300;
        }
        if (width > 800) {
            return 400;
        }
        if (width > 500) {
            return 500;
        }
        return 500;
    };
    return (
        <Carousel swipeable showIndicators infiniteLoop showArrows>
            <Image
                src="/images/background.jpg"
                layout="responsive"
                width={1000}
                height={height()}
            />
            <Image
                src="/images/main_float.jpg"
                layout="responsive"
                width={1000}
                height={height()}
            />
            <Image
                src="/images/blackbass.jpg"
                layout="responsive"
                width={1000}
                height={height()}
            />
        </Carousel>
    );
};

const Home = () => {
    const { width } = useWindowDimensions();
    const photos = [
        {
            src: '/images/blackbass.jpg',
            width: width < 500 ? 0.5 : 1,
            height: 1,
        },
        {
            src: '/images/background.jpg',
            width: width < 500 ? 1 : 2,
            height: 1,
        },
        {
            src: '/images/blackbass.jpg',
            width: width < 500 ? 0.5 : 1,
            height: 1,
        },
        {
            src: '/images/background.jpg',
            width: 2,
            height: 1,
        },
        {
            src: '/images/blackbass.jpg',
            width: width < 500 ? 0.5 : 1,
            height: 1,
        },
        {
            src: '/images/blackbass.jpg',
            width: 1,
            height: 1,
        },
        {
            src: '/images/background.jpg',
            width: 2,
            height: 1,
        },
        {
            src: '/images/background.jpg',
            width: width < 500 ? 0.5 : 1,
            height: 1,
        },
    ];
    return (
        <motion.div
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            className="w-full align-top h-full  flex flex-col  justify-start"
        >
            <MyCaroussel />

            <div className="w-full h-full  sm:p-0 relative flex flex-col items-center align-middle justify-center">
                <div className="w-full bg-white absolute -top-10 max-w-5xl transform h-10" />
                <div className="max-w-5xl bg-white p-2 sm:p-5 md:px-20 transform ">
                    <h1 className="font-semibold my-4 text-xl md:text-2xl text-gray-600 ">
                        Bienvenue sur le site south west fishing !
                    </h1>
                    <div className="text-sm sm:text-xl text-gray-600 w-full">
                        <div className="float-left  mt-2 mr-4 rounded-sm overflow-hidden">
                            <Image
                                className="float-left"
                                src="/images/main_float.jpg"
                                width={width < 1000 ? 200 : 350}
                                height={width < 1000 ? 180 : 300}
                                quality={100}
                                priority
                            />
                        </div>
                        <div className="p-0 w-full text-justify">
                            Depuis 2020 <strong>South West Fishing</strong> vous
                            propose des stages et séjours de pêches dans la
                            région <strong>Pays Basque </strong>
                            sud <strong> Landes</strong>. Découvrez la pêche
                            dans le sud ouest avec un guide diplômé expérimenté.
                            Partir en séjour guidage ou initiation s’est
                            s’assurer une journée de pêche dans les meilleures
                            conditions, et la certitude de se faire accompagner
                            par un{' '}
                            <strong>encadrant passionné et expérimenté</strong>.
                            Que vous soyez{' '}
                            <strong>débutant ou pêcheur chevroné</strong>, nos
                            guidages s’adaptent à vos besoins. Vous êtes plûtot{' '}
                            <strong>truite</strong> ? Enfillez vos{' '}
                            <strong>wadders</strong> et embarquez sur les nives
                            qui nous offiront de splendides paysages et des{' '}
                            <strong>poissons</strong> joueurs. Plutot
                            <strong> carnassiers</strong> ?{' '}
                            <strong>L’étang blanc</strong> et ses 183 Hectares
                            abrite
                            <strong> Black-Bass Brochet Perches</strong> et plus
                            encore ...
                        </div>
                    </div>
                    <div className="my-20">
                        <Gallery photos={photos} />
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default Home;
