const variants = {
    primary: 'bg-primary-100 text-primary-700 border-primary-200',
    secondary: 'bg-secondary-100 text-secondary-700 border-secondary-200',
    accent: 'bg-accent-100 text-accent-700 border-accent-200',
    neutral: 'bg-neutral-100 text-neutral-700 border-neutral-200',
    white: 'bg-white text-neutral-700 border-neutral-200 shadow-md',
};

export default function Badge({
    children,
    variant = 'primary',
    className = '',
    ...props
}) {
    const baseStyles = 'inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium border';

    return (
        <span className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
            {children}
        </span>
    );
}
