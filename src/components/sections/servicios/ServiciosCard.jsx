export function ServiceCard({ icon, title, description }) {
    return (
        <article className="group bg-gradient-to-br from-white to-surface-soft border border-gray-200 rounded-2xl shadow-sm active:shadow-xl hover:shadow-xl active:shadow-brand-500/15 hover:shadow-brand-500/15 active:-translate-y-1 hover:-translate-y-1 
                 transition-all duration-300 ease-out 
                 cursor-pointer overflow-hidden relative">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-500 to-brand-400 origin-left scale-x-0  group-active:scale-x-100 group-hover:scale-x-100 transition-transform duration-500" />
            <div className="flex flex-col px-4 py-4 gap-5">
                <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-brand-500 to-brand-400 shadow-lg shadow-brand-500/25 group-hover:scale-110 group-active:scale-110 group-hover:rotate-3 group-active:rotate-3 transition-all duration-300">
                    {icon}
                </div>
            </div>
            <div className="flex flex-col gap-">
                <h3 className="font-bold text-xl text-text group-hover:text-brand-500 transition-colors duration-300 px-4 ">
                    {title}
                </h3>
                <p className="text-sm leading-relaxed text-text-muted px-4 py-4">
                    {description}
                </p>
            </div>
        </article>
    )
}