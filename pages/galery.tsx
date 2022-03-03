import { motion } from 'framer-motion';
import React from 'react';

function Galery() {
    return (
        <motion.div
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            className="w-full align-top h-full min-h-screen flex flex-col  justify-start"
        />
    );
}

export default Galery;
