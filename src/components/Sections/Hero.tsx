import Link from "next/link";
import React from "react";
import Image from 'next/image';

const Hero = () => {
    return (
        <div className="min-h-[70vh] md:min-h-[60vh] lg:min-h-[90vh] flex flex-col
        md:flex-row justify-center items-center bg-white px-4 md:px-12 text-black">
            <div className="max-w-2xl">
                <h1 className="text-5xl pt-6  md:pt-0 md:text-7xl leading-tight font-semibold">Detalhes Refinados, Estilo Elevado.</h1>
                <p className="text-neutral-500 mt-4">
                    Transforme o seu visual com a nossa gama exclusiva de acessórios premium. 
                    Desde declarações subtis a detalhes cativantes, encontre a peça perfeita 
                    para expressar o seu gosto sofisticado.
                </p>

                <Link href={"#produtos"}>
                    <button className="mt-8 bg-neutral-800 text-white px-3 py-2 rounded-md cursor-pointer">Veja nossa Coleccão</button>
                </Link>
            </div>
            <div>
                <Image
                    width={500}
                    height={500} src={"/images/hero.png"} alt="imagem hero"/>
            </div>
        </div>
    )
}

export default Hero