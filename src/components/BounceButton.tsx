import React from 'react';
import { motion } from 'framer-motion';

type Content = {
    name: string;
    scale?: number;
}

const BounceButton: React.FC<Content> = ({ name, scale = 1.2 }) => {
    const currentScale = 1.2;

    return (
        <motion.button
            initial={{ scale: 1 }}
            whileTap={{ scale }}
        >
            {name}
        </motion.button>
    );
}

export default BounceButton;