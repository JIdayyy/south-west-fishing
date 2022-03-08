import CustomGridGalery from '@components/PhotoGrid';
import { motion } from 'framer-motion';
import React from 'react';

function Galery() {
    return (
        <motion.div
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            className="w-full  h-full  flex flex-col items-center justify-start"
        >
            <div className="max-w-5xl bg-white p-2 sm:p-5 md:px-20 transform ">
                <CustomGridGalery />
            </div>
        </motion.div>
    );
}

export default Galery;
