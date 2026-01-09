import { motion } from 'framer-motion';
import Button from '../ui/Button';

export default function CTA() {
    return (
        <section id="contact" className="section-padding relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-cta" />

            {/* Decorative Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-10 left-10 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
                <div className="absolute bottom-10 right-10 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
                <div className="absolute top-1/2 left-1/4 w-32 h-32 border-2 border-white/10 rounded-2xl rotate-12" />
                <div className="absolute bottom-1/4 right-1/4 w-24 h-24 border-2 border-white/10 rounded-full" />
            </div>

            <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white font-display mb-6">
                        Ready to Build Your Next Project?
                    </h2>
                    <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
                        Let's create something impactful together. Get in touch and let's discuss how we can help bring your vision to life.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button
                            href="mailto:hello@odithalabs.com"
                            className="bg-white text-primary-600 hover:bg-neutral-100 shadow-lg shadow-black/20"
                            size="lg"
                        >
                            Get in Touch
                        </Button>
                        <Button
                            href="#work"
                            variant="secondary"
                            className="border-white text-white hover:bg-white hover:text-primary-600"
                            size="lg"
                        >
                            View Our Work
                        </Button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
