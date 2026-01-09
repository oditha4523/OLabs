import { motion } from 'framer-motion';
import Card from '../ui/Card';
import SectionTitle from '../ui/SectionTitle';
import { testimonials } from '../../data/testimonials';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
};

export default function Testimonials() {
    return (
        <section className="section-padding bg-neutral-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <SectionTitle
                    label="Testimonials"
                    title="What Our Clients Say"
                    subtitle="Don't just take our word for it — hear from our satisfied clients"
                />

                <motion.div
                    className="grid md:grid-cols-2 gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-100px' }}
                >
                    {testimonials.map((testimonial) => (
                        <motion.div key={testimonial.id} variants={itemVariants}>
                            <Card className="p-8 h-full">
                                {/* Rating */}
                                <div className="flex gap-1 mb-4">
                                    {[...Array(5)].map((_, i) => (
                                        <svg
                                            key={i}
                                            className={`w-5 h-5 ${i < testimonial.rating ? 'text-yellow-400' : 'text-neutral-300'
                                                }`}
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                        </svg>
                                    ))}
                                </div>

                                {/* Quote */}
                                <p className="text-neutral-600 mb-6 leading-relaxed italic">
                                    "{testimonial.content}"
                                </p>

                                {/* Client Info */}
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center text-white font-semibold">
                                        {testimonial.avatar}
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-neutral-900">{testimonial.name}</h4>
                                        <p className="text-sm text-neutral-500">{testimonial.role}</p>
                                    </div>
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
