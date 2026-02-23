export function PulsingDot({ className = "bg-brand-600" }) {
    return (
        <span
            className={`w-2 h-2 rounded-full motion-safe:animate-pulse motion-reduce:animate-none ${className}`}
            aria-hidden="true"
        />
    );
}