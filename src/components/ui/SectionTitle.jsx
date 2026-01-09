import { motion } from 'framer-motion';

export default function SectionTitle({
    label,
    title,
    subtitle,
    centered = true,
    className = '',
}) {
    return (
        <motion.div
            className={`mb-12 md:mb-16 ${centered ? 'text-center' : ''} ${className}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
        >
            {label && (
                <span className="inline-block px-4 py-1.5 mb-4 text-sm font-semibold tracking-wider text-primary-600 bg-primary-50 rounded-full uppercase">
                    {label}
                </span>
            )}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 font-display leading-tight">
                {title}
            </h2>
            {subtitle && (
                <p className="mt-4 text-lg md:text-xl text-neutral-600 max-w-2xl mx-auto">
                    {subtitle}
                </p>
            )}
        </motion.div>
    );
}
