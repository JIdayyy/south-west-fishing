import useWindowDimensions from '@jidayyy/usewindowdimension';
import Gallery from 'react-photo-gallery';

const photos = (width: number) => [
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

const CustomGridGalery = () => {
    const { width } = useWindowDimensions();

    return (
        <div className="my-20">
            <Gallery photos={photos(width)} />
        </div>
    );
};

export default CustomGridGalery;
