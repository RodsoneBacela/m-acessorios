import Hero from './../components/Sections/Hero';
import ListaProdutos from './../components/Sections/ListaProdutos';

export default function Home() {
  return (
    <main className='bg-neutral-50'>
      <Hero/>

      <h2 className='w-full text-center text-black text-2xl md:text-4xl font-semibold py-6'>Todos Produtos</h2>
      <ListaProdutos/>
    </main>
  );
}
