import useWindowDimensions from '@jidayyy/usewindowdimension';
import Gallery from 'react-photo-gallery';

const photos = (width: number) => [
    {
        src: '/images/trout2.jpg',
        width: width < 500 ? 0.5 : 1,
        height: 1,
    },
    {
        src: '/images/carr3.jpg',
        width: width < 500 ? 1 : 2,
        height: 1,
    },

    {
        src: '/images/gallery/photo4.jpg',
        width: 2,
        height: 1,
    },
    {
        src: '/images/gallery/photo3.jpg',
        width: width < 500 ? 0.5 : 1,
        height: 1,
    },
    {
        src: '/images/gallery/photo5.jpg',
        width: width < 500 ? 0.5 : 1,
        height: 1,
    },
    {
        src: '/images/gallery/photo4.jpg',
        width: 2,
        height: 1,
    },

    {
        src: '/images/gallery/photo4.jpg',
        width: 2,
        height: 1,
    },
    {
        src: '/images/gallery/photo5.jpg',
        width: width < 500 ? 0.5 : 1,
        height: 1,
    },
    {
        src: '/images/gallery/photo5.jpg',
        width: width < 500 ? 0.5 : 1,
        height: 1,
    },
    {
        src: '/images/gallery/photo4.jpg',
        width: 2,
        height: 1,
    },
    {
        src: '/images/gallery/photo5.jpg',
        width: width < 500 ? 0.5 : 1,
        height: 1,
    },
    {
        src: '/images/gallery/photo4.jpg',
        width: 2,
        height: 1,
    },
    {
        src: '/images/gallery/photo5.jpg',
        width: width < 500 ? 0.5 : 1,
        height: 1,
    },
];

const CustomGridGalery = () => {
    const { width } = useWindowDimensions();

    return (
        <div>
            <Gallery photos={photos(width)} />
        </div>
    );
};

export default CustomGridGalery;
