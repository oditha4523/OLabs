import { motion } from 'framer-motion';
import Card from '../ui/Card';
import Button from '../ui/Button';
import SectionTitle from '../ui/SectionTitle';
import { pricingPlans, pricingNote } from '../../data/pricing';

export default function Pricing() {
    return (
        <section id="pricing" className="section-padding bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <SectionTitle
                    label="Pricing"
                    title="Simple, Transparent Pricing"
                    subtitle="Choose a plan that fits your business needs"
                />

                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {pricingPlans.map((plan, index) => (
                        <motion.div
                            key={plan.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <Card
                                className={`p-8 h-full flex flex-col relative ${plan.popular
                                        ? 'border-2 border-primary-500 shadow-xl shadow-primary-500/10'
                                        : 'border border-neutral-200'
                                    }`}
                                hover={false}
                            >
                                {/* Popular Badge */}
                                {plan.popular && (
                                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                                        <span className="bg-gradient-to-r from-primary-600 to-secondary-500 text-white text-sm font-semibold px-4 py-1 rounded-full">
                                            Most Popular
                                        </span>
                                    </div>
                                )}

                                {/* Plan Name */}
                                <h3 className="text-xl font-bold text-neutral-900 font-display mb-2">
                                    {plan.name}
                                </h3>

                                {/* Price */}
                                <div className="mb-4">
                                    <span className="text-sm text-neutral-500">{plan.priceNote}</span>
                                    <div className="flex items-baseline gap-1">
                                        <span className="text-4xl font-bold text-neutral-900 font-display">
                                            {plan.price}
                                        </span>
                                    </div>
                                </div>

                                {/* Description */}
                                <p className="text-neutral-600 mb-6">
                                    {plan.description}
                                </p>

                                {/* Delivery Time */}
                                <div className="flex items-center gap-2 mb-6 py-3 px-4 bg-neutral-50 rounded-lg">
                                    <svg className="w-5 h-5 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <span className="text-sm font-medium text-neutral-700">
                                        Delivery: {plan.delivery}
                                    </span>
                                </div>

                                {/* Features */}
                                <ul className="space-y-3 mb-8 flex-grow">
                                    {plan.features.map((feature) => (
                                        <li key={feature} className="flex items-start gap-3">
                                            <svg className="w-5 h-5 text-primary-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span className="text-neutral-600">{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                {/* CTA Button */}
                                <Button
                                    href="#contact"
                                    variant={plan.popular ? 'primary' : 'secondary'}
                                    className="w-full"
                                >
                                    {plan.cta}
                                </Button>
                            </Card>
                        </motion.div>
                    ))}
                </div>

                {/* Pricing Note */}
                <motion.p
                    className="text-center text-sm text-neutral-500 mt-8 max-w-xl mx-auto"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                >
                    {pricingNote}
                </motion.p>
            </div>
        </section>
    );
}
