import { motion } from 'framer-motion';
import Button from '../ui/Button';

export default function CTA() {
    return (
        <section id="contact" className="section-padding relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-purple-500" />

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
                            className="border-white text-white hover:bg-green-500 hover:text-purple-100"
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
