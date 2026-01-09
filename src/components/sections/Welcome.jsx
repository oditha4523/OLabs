import { motion } from 'framer-motion';
import Card from '../ui/Card';
import Button from '../ui/Button';
import SectionTitle from '../ui/SectionTitle';

const features = [
    {
        id: 1,
        title: 'Who We Are & What We Do',
        description: 'We are a passionate team of developers and designers dedicated to transforming your vision into powerful digital solutions that drive results.',
        icon: '🎯',
        cta: 'Learn More',
        href: '#about',
    },
    {
        id: 2,
        title: 'We Design & Develop Your Projects',
        description: 'From concept to launch, we craft custom websites and applications with cutting-edge technologies and pixel-perfect designs.',
        icon: '💻',
        cta: 'Our Services',
        href: '#services',
    },
    {
        id: 3,
        title: 'Drop Us Your Message',
        description: 'Have a project in mind? We\'d love to hear from you. Reach out and let\'s discuss how we can bring your ideas to life.',
        icon: '✉️',
        cta: 'Contact Us',
        href: '#contact',
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
};

export default function Welcome() {
    return (
        <section className="section-padding bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <SectionTitle
                    title="Welcome to OLabs"
                    subtitle="The people who turn ideas into powerful digital products"
                />

                <motion.div
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-100px' }}
                >
                    {features.map((feature) => (
                        <motion.div key={feature.id} variants={itemVariants}>
                            <Card className="p-8 h-full flex flex-col">
                                <div className="text-5xl mb-6">{feature.icon}</div>
                                <h3 className="text-xl font-bold text-neutral-900 mb-4 font-display">
                                    {feature.title}
                                </h3>
                                <p className="text-neutral-600 mb-6 flex-grow">
                                    {feature.description}
                                </p>
                                <Button href={feature.href} variant="ghost" size="sm" className="self-start">
                                    {feature.cta} →
                                </Button>
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
