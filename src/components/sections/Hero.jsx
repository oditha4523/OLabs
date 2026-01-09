import { motion } from 'framer-motion';
import Button from '../ui/Button';

const skillBadges = [
    { name: 'React', color: 'bg-blue-400 text-white' },
    { name: 'Next.js', color: 'bg-neutral-900 text-white' },
    { name: 'WordPress', color: 'bg-sky-400 text-white' },
    { name: 'UI/UX Design', color: 'bg-pink-400 text-white' },
    { name: 'SEO Ready', color: 'bg-green-400 text-white' },
    { name: 'Performance Optimized', color: 'bg-orange-400 text-white' },
];

export default function Hero() {
    return (
        <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-gradient-hero">
            

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
                <div className="text-center max-w-4xl mx-auto">
                    {/* Welcome Text */}
                    <motion.span
                        className="inline-block px-4 py-2 mb-6 text-sm font-semibold tracking-widest text-primary-600 bg-primary-50 rounded-full uppercase border border-primary-100"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        Welcome to OLabs
                    </motion.span>

                    {/* Main Headline */}
                    <motion.h1
                        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-display leading-tight mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        We Build{' '}<br />
                        <span className="text-purple-500">High-Performance</span>
                        <br />
                        Digital Experiences
                    </motion.h1>

                    {/* Subheading */}
                    <motion.p
                        className="text-lg md:text-xl text-neutral-600 max-w-2xl mx-auto mb-10 leading-relaxed"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        A modern web development agency crafting fast, scalable, and user-focused websites using React, Next.js, and WordPress.
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                    >
                        <Button href="#work" size="lg">
                            View Our Work
                        </Button>
                        <Button href="#contact" variant="secondary" size="lg">
                            Let's Talk
                        </Button>
                    </motion.div>

                    {/* Floating Skill Badges */}
                    <motion.div
                        className="flex flex-wrap justify-center gap-3"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    >
                        {skillBadges.map((badge, index) => (
                            <motion.span
                                key={badge.name}
                                className={`skill-badge px-4 py-2 rounded-full text-sm font-medium border ${badge.color}`}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                            >
                                {badge.name}
                            </motion.span>
                        ))}
                    </motion.div>
                </div>

                {/* Scroll Indicator */}
                <motion.div
                    className="absolute bottom-10 left-1/2 -translate-x-1/2"
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                >
                    <svg className="w-6 h-6 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                </motion.div>
            </div>
        </section>
    );
}
