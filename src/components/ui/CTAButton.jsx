'use client'

export function CTAButton({ onClick, children = "COTIZAR AHORA" }) {
    return (
        <button onClick={onClick} className="bg-accent-500 rounded-xl shadow-lg shadow-orange-500/30 px-12 py-4 flex gap-2 items-center justify-center mt-4 hover:bg-accent-600 transition-colors cursor-pointer">
            <span className="font-inter-semi-bold font-bold text-xl text-white leading-7">
                {children}
            </span>
        </button>
    )
}