import Image from 'next/image';
import { Carousel } from 'react-responsive-carousel';
import useWindowDimensions from '@jidayyy/usewindowdimension';

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
        <div className="relative">
            <Carousel
                swipeable
                showThumbs={false}
                showIndicators
                infiniteLoop
                showArrows
            >
                <div className="flex w-full h-full items-center align-middle justify-center z-10">
                    <div className="z-50">
                        <Image
                            layout="fill"
                            width={1000}
                            src="/icons/swflogo.svg"
                            priority
                            quality={100}
                        />
                    </div>
                    <Image
                        src="/images/background.jpg"
                        layout="fill"
                        width={1000}
                        height={height()}
                    />
                </div>

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
        </div>
    );
};

export default MyCaroussel;
