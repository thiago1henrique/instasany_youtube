import Image from "next/image";

import LogoImg from "../../public/logo.svg"
import SearchIcon from "../../public/icon-search.svg"
import IconUser from "../../public/icon-user.svg"
import Link from "next/link";
import {GridContainer} from "@/components/Grid";

const arrayMenu = [
    'Início',
    'Benefícios',
    'Para quem é o curso',
    'Preço promocionais',
    'Sobre nós'
]

export default function Header() {
  const activeStyle = 'bg-green-activity text-white/100 rounded-full';
  return (
    <header className="relative w-full h-24 bg-primary-color flex items-center">
      <GridContainer className="flex items-center justify-between">
        <Image src={LogoImg} alt="Instasany"/>

        <div className="flex items-center gap-20">
          <nav className="flex items-center gap-2">
            {
              arrayMenu.map((item, index) =>
                  <Link key={index} href="#" className={`px-3 py-1 text-white/40 hover:text-white/100 transition-all ${index === 0 ? activeStyle : ""}`}>
                    {item}
                  </Link>)
            }
            <div className="flex items-center gap-6">
              <button>
                <Image src={SearchIcon} alt="icon search"/>
              </button>

              <button className="flex items-center gap-2">
                <Image src={IconUser} alt="icon search"/>
                <span className="text-white font-medium text-base">Fazer login</span>
              </button>
            </div>
          </nav>
        </div>
      </GridContainer>
    </header>
  )
}