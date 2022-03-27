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
                        priority
                        src="/images/carr4.jpg"
                        layout="fill"
                        width={1000}
                        height={height()}
                    />
                </div>

                <Image
                    priority
                    src="/images/background.jpg"
                    layout="responsive"
                    width={1000}
                    height={height()}
                />
                <Image
                    priority
                    src="/images/carr3.jpg"
                    layout="responsive"
                    width={1000}
                    height={height()}
                />
                <Image
                    priority
                    src="/images/carr4.jpg"
                    layout="responsive"
                    width={1000}
                    height={height()}
                />
                <Image
                    priority
                    src="/images/trout2.jpg"
                    layout="responsive"
                    width={1000}
                    height={height()}
                />
                <Image
                    priority
                    src="/images/carr5.jpg"
                    layout="responsive"
                    width={1000}
                    height={height()}
                />
            </Carousel>
        </div>
    );
};

export default MyCaroussel;
