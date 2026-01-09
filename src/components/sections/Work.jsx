import { motion } from 'framer-motion';
import Card from '../ui/Card';
import Button from '../ui/Button';
import Badge from '../ui/Badge';
import SectionTitle from '../ui/SectionTitle';
import { projects } from '../../data/projects';

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

// Gradient backgrounds for project cards (since we don't have actual images)
const gradients = [
    'from-primary-400 to-primary-600',
    'from-secondary-400 to-secondary-600',
    'from-accent-400 to-accent-600',
    'from-blue-400 to-blue-600',
    'from-purple-400 to-purple-600',
    'from-pink-400 to-pink-600',
];

export default function Work() {
    return (
        <section id="work" className="section-padding bg-neutral-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <SectionTitle
                    label="Our Work"
                    title="Our Recent Work"
                    subtitle="Projects crafted with precision and purpose"
                />

                <motion.div
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-100px' }}
                >
                    {projects.map((project, index) => (
                        <motion.div key={project.id} variants={itemVariants}>
                            <Card className="overflow-hidden h-full flex flex-col group">
                                {/* Project Image/Gradient */}
                                <div className={`h-48 bg-gradient-to-br ${gradients[index % gradients.length]} relative overflow-hidden`}>
                                    {/* Decorative Pattern */}
                                    <div className="absolute inset-0 opacity-20">
                                        <div className="absolute top-4 right-4 w-20 h-20 border-4 border-white rounded-full" />
                                        <div className="absolute bottom-4 left-4 w-12 h-12 bg-white/30 rounded-lg" />
                                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 border-2 border-white/50 rounded-2xl rotate-12" />
                                    </div>

                                    {/* Hover Overlay */}
                                    <div className="absolute inset-0 bg-neutral-900/0 group-hover:bg-neutral-900/40 transition-all duration-300 flex items-center justify-center">
                                        <Button
                                            href={project.link}
                                            variant="secondary"
                                            size="sm"
                                            className="opacity-0 group-hover:opacity-100 -translate-y-4 group-hover:translate-y-0 transition-all duration-300 bg-white text-neutral-900 border-white hover:bg-primary-500 hover:text-white hover:border-primary-500"
                                        >
                                            View Project
                                        </Button>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-6 flex flex-col flex-grow">
                                    <h3 className="text-xl font-bold text-neutral-900 mb-2 font-display">
                                        {project.title}
                                    </h3>
                                    <p className="text-neutral-600 mb-4 flex-grow">
                                        {project.description}
                                    </p>

                                    {/* Tags */}
                                    <div className="flex flex-wrap gap-2">
                                        {project.tags.map((tag) => (
                                            <Badge key={tag} variant="neutral" className="text-xs">
                                                {tag}
                                            </Badge>
                                        ))}
                                    </div>
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>

                {/* View All Button */}
                <motion.div
                    className="text-center mt-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                >
                    <Button href="#contact" variant="secondary">
                        Start Your Project →
                    </Button>
                </motion.div>
            </div>
        </section>
    );
}
