import { Container } from "./Container";



export function Nabvar() {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur bg-white/95 border-b border-[rgba(17,115,212,0.1)]">
            <Container className>
                <div className="h-16 flex items-center justify-between px-4">
                    <div className="flex gap-4 items-center">
                        <div className="bg-brand-600 flex items-center justify-center rounded-sm size-8">
                            <div className="size-[16.641px]">

                            </div>
                        </div>
                        <div className="font-semibold text-lg text-brand-600 ">
                            AT Climatización
                        </div>
                    </div>
                </div>
            </Container>
        </header>
    )
}