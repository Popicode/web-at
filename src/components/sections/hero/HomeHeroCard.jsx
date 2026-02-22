export function HomeHeroCard() {
    return (
        <div className="bg-transparent flex flex-col rounded-xl w-full overflow-hidden shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)]" >
            <div className=" h-56 w-full overflow-hidden relative">
                <img />
            </div>
            <div className="bg-white/95 border border-white rounded-xl mx-4 -mt-8 mb-4 flex gap-4 px-6.25 py-4.25">
                <div className="flex flex-col  gap-1 items-center flex-1">
                    <span className="font-bold text-sm text-brand-500 uppercase ">
                        Garantia 12 meses
                    </span>
                </div>
                <div className=" border-l border-r border-[#e2e8f0] flex flex-col  gap-1 items-center flex-1">
                    <span className="font-bold text-sm text-brand-500 uppercase  ">
                        Atención 24 horas
                    </span>
                </div>
                <div className="flex flex-col  gap-1 items-center flex-1">
                    <span className="font-bold text-xl text-brand-500 uppercase ">
                        24/7
                    </span>
                </div>
            </div>
        </div>
    )
}