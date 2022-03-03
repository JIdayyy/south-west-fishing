import useOnClickOutside from '@jidayyy/useonclickoutside';
import React, { useRef } from 'react';
import ReactDOM from 'react-dom';
import { motion } from 'framer-motion';
import useAppState from '@hooks/useAppState';
import Cart from '.';

export default function MenuPortal(): JSX.Element {
    const cartRef = useRef(null);

    const { dispatchToggleMenu } = useAppState();

    const handleClickOutside = () => {
        dispatchToggleMenu();
    };

    useOnClickOutside(cartRef, handleClickOutside);

    return ReactDOM.createPortal(
        <motion.div
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            className="w-screen h-screen bg-black bg-opacity-75 z-50 flex justify-end fixed top-0 right-0"
        >
            <motion.div
                animate={{ opacity: 1, x: 0 }}
                initial={{ opacity: 1, x: 300 }}
                transition={{ default: { duration: 0.1 } }}
                ref={cartRef}
                className=" bg-white w-1/2 sm:w-auto absolute overflow-y-hidden top-0 right-0 h-full"
            >
                <Cart />
            </motion.div>
        </motion.div>,
        document.body,
    );
}
