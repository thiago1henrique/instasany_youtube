import Image from "next/image";
import Mockup from "../../public/mockup-main.png"

export function SectionCards() {
    return (
        <section className="w-full pb-20">
            <Image className="sticky mx-auto top-0 -mt-[32rem] mb-16" src={Mockup} alt="mockup main"/>

            <h2 className="text-center text-7xl font-semibold text-black mb-56">Faça
                <span className="text-green-title-cards">você</span> mesmo de casa</h2>

            <div>

            </div>
        </section>
    )
}