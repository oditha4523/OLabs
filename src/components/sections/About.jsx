import { motion } from 'framer-motion';
import SectionTitle from '../ui/SectionTitle';

const features = [
    {
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
        ),
        title: 'Modern Frontend Frameworks',
        description: 'Built with React, Next.js, and the latest web technologies',
    },
    {
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
        ),
        title: 'SEO-Friendly Architecture',
        description: 'Optimized for search engines from the ground up',
    },
    {
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
        ),
        title: 'High Performance & Scalability',
        description: 'Fast-loading websites that grow with your business',
    },
    {
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
        ),
        title: 'Clean & Maintainable Code',
        description: 'Well-structured codebase for easy updates and maintenance',
    },
];

export default function About() {
    return (
        <section id="about" className="section-padding bg-neutral-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Content Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="inline-block px-4 py-1.5 mb-4 text-sm font-semibold tracking-wider text-primary-600 bg-primary-50 rounded-full uppercase">
                            About Us
                        </span>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 font-display leading-tight mb-6">
                            We Are a Creative &{' '}
                            <span className="text-purple-500">Tech-Driven</span> Web Agency
                        </h2>
                        <p className="text-lg text-neutral-600 mb-8 leading-relaxed">
                            At Oditha Labs, we blend creativity with technical expertise to deliver exceptional digital experiences. Our team specializes in React, Next.js, and WordPress development, ensuring your website is not just beautiful but also fast, scalable, and optimized for success.
                        </p>

                        {/* Features Grid */}
                        <div className="grid sm:grid-cols-2 gap-6">
                            {features.map((feature, index) => (
                                <motion.div
                                    key={feature.title}
                                    className="flex gap-4"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: index * 0.1 }}
                                >
                                    <div className="w-12 h-12 bg-primary-100 text-primary-600 rounded-xl flex items-center justify-center shrink-0">
                                        {feature.icon}
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-neutral-900 mb-1">{feature.title}</h3>
                                        <p className="text-sm text-neutral-600">{feature.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Visual Side */}
                    <motion.div
                        className="relative"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="relative">
                            {/* Main Card */}
                            <div className="bg-purple-500 rounded-3xl p-8 text-white">
                                <div className="grid grid-cols-2 gap-6">
                                    <div className="text-center p-6 bg-white/10 rounded-2xl backdrop-blur-sm">
                                        <div className="text-4xl font-bold font-display mb-2">50+</div>
                                        <div className="text-sm opacity-90">Projects Completed</div>
                                    </div>
                                    <div className="text-center p-6 bg-white/10 rounded-2xl backdrop-blur-sm">
                                        <div className="text-4xl font-bold font-display mb-2">30+</div>
                                        <div className="text-sm opacity-90">Happy Clients</div>
                                    </div>
                                    <div className="text-center p-6 bg-white/10 rounded-2xl backdrop-blur-sm">
                                        <div className="text-4xl font-bold font-display mb-2">5+</div>
                                        <div className="text-sm opacity-90">Years Experience</div>
                                    </div>
                                    <div className="text-center p-6 bg-white/10 rounded-2xl backdrop-blur-sm">
                                        <div className="text-4xl font-bold font-display mb-2">100%</div>
                                        <div className="text-sm opacity-90">Client Satisfaction</div>
                                    </div>
                                </div>
                            </div>

                            {/* Decorative Elements */}
                            <div className="absolute -top-6 -right-6 w-24 h-24 bg-accent-400 rounded-2xl -z-10 opacity-50" />
                            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary-200 rounded-full -z-10 opacity-50" />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
