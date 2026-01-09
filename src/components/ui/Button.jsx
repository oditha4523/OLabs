import { motion } from 'framer-motion';

const variants = {
    primary: 'bg-gradient-to-r from-primary-600 to-primary-500 text-white shadow-lg shadow-primary-500/30 hover:shadow-xl hover:shadow-primary-500/40 hover:-translate-y-0.5',
    secondary: 'bg-transparent border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white',
    outline: 'bg-transparent border-2 border-neutral-300 text-neutral-700 hover:border-primary-600 hover:text-primary-600',
    ghost: 'bg-transparent text-primary-600 hover:bg-primary-50',
};

const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
};

export default function Button({
    children,
    variant = 'primary',
    size = 'md',
    className = '',
    onClick,
    href,
    ...props
}) {
    const baseStyles = 'inline-flex items-center justify-center font-semibold rounded-full transition-all duration-300 cursor-pointer';
    const combinedStyles = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

    if (href) {
        return (
            <motion.a
                href={href}
                className={combinedStyles}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                {...props}
            >
                {children}
            </motion.a>
        );
    }

    return (
        <motion.button
            className={combinedStyles}
            onClick={onClick}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            {...props}
        >
            {children}
        </motion.button>
    );
}
