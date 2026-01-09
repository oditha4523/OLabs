import { motion } from 'framer-motion';

export default function Card({
    children,
    className = '',
    hover = true,
    glass = false,
    ...props
}) {
    const baseStyles = 'rounded-2xl';
    const hoverStyles = hover ? 'card-hover' : '';
    const glassStyles = glass
        ? 'glass'
        : 'bg-white shadow-lg shadow-neutral-200/50';

    return (
        <motion.div
            className={`${baseStyles} ${hoverStyles} ${glassStyles} ${className}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5 }}
            {...props}
        >
            {children}
        </motion.div>
    );
}
