import Button from '@components/UI/Button';
import Image from 'next/image';
import React, { ReactElement } from 'react';
import useAppState from '@hooks/useAppState';

export default function CloseButton(): ReactElement {
    const { dispatchToggleMenu } = useAppState();

    return (
        <Button
            handleClick={() => dispatchToggleMenu()}
            className="font-extrabold absolute top-5 left-5"
        >
            <Image src="/icons/Close.svg" width={25} height={25} />
        </Button>
    );
}
