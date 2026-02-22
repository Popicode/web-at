const POSITIONS = {
    "top-right": "absolute top-[-4px] right-[-4px]",
    "bottom-left": "absolute bottom-[-4px] left-[-4px]",
};

export function ParticlePing({ position = "top-right", delay = "0s", className = "" }) {
    return (
        <span
            className={`${POSITIONS[position]} w-3 h-3 bg-white/40 rounded-full motion-safe:animate-ping motion-reduce:hidden ${className}`}
            style={{ animationDelay: delay }}
            aria-hidden="true"
        />
    );
}