import {GridContainer} from "@/components/Grid";
import Image from "next/image";

import IconFile from "../../public/icon-file.svg"
import IconHand from "../../public/icon-hand.svg"
import IconHand02 from "../../public/icon-hand-02.svg"
import Mockup from "../../public/mockup.svg"

export function SectionHero() {
    return (
        <section className="relative w-full h-sectionHero bg-primary-color bg-[url(../../public/bg-hero.svg)]
         bg-no-repeat bg-top border-t border-t-green-border pt-16 overflow-hidden">
            <GridContainer className="flex flex-col items-center justify-center gap-16">
                <div className="w-full max-w-text-hero text-center">
                    <h3 className="text-xl font-medium text-green-activity mb-4">Novo curso focado em instagram</h3>
                    <h1 className="text-white text-7xl/normal font-semibold mb-2">Destrave as suas habilidades</h1>
                    <div className="flex items-center justify-center gap-10">
                        <button className="flex items-center gap-2">
                            <Image src={IconFile} alt="icon file" />
                            <span className="text-white font-medium">Assinar lista de espera</span>
                        </button>
                        <button className="py-4 px-5 bg-green-btn text-primary-color
                        font-bold rounded-full cursor-pointer">
                            Começe agora
                        </button>
                    </div>
                </div>

                <div className="relative w-full h-28 max-w-area-item mt-4">
                    <Image className="absolute left-0 bottom-12" src={IconHand} alt="icon hand"/>
                    <Image className="absolute -top-10 right-0" src={IconHand02} alt="icon hand"/>
                </div>
                <div className="flex justify-between absolute -bottom-44 w-full max-w-area-mockups">
                    <Image className="-rotate-12 relative top-[1.1rem] left-[3.3rem]" src={Mockup} alt="mockup"/>
                    <Image className="rotate-12 relative top-[1.1rem] right-[3.3rem]" src={Mockup} alt="mockup"/>
                </div>
            </GridContainer>
        </section>
    )
}