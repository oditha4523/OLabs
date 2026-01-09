import { motion } from 'framer-motion';
import Card from '../ui/Card';
import SectionTitle from '../ui/SectionTitle';
import { services } from '../../data/services';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
};

export default function Services() {
    return (
        <section id="services" className="section-padding bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <SectionTitle
                    label="Our Services"
                    title="What We Do Best"
                    subtitle="Comprehensive web development solutions tailored to your business needs"
                />

                <motion.div
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-100px' }}
                >
                    {services.map((service, index) => (
                        <motion.div key={service.id} variants={itemVariants}>
                            <Card className="p-8 h-full group">
                                {/* Icon */}
                                <div className="w-16 h-16 bg-gradient-to-br from-primary-100 to-secondary-100 rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform duration-300">
                                    {service.icon}
                                </div>

                                {/* Title */}
                                <h3 className="text-xl font-bold text-neutral-900 mb-4 font-display">
                                    {service.title}
                                </h3>

                                {/* Description */}
                                <p className="text-neutral-600 mb-6">
                                    {service.description}
                                </p>

                                {/* Features */}
                                <ul className="space-y-2">
                                    {service.features.map((feature) => (
                                        <li key={feature} className="flex items-center gap-2 text-sm text-neutral-600">
                                            <svg className="w-4 h-4 text-primary-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
