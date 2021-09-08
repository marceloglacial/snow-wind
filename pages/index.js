import Layout from '../components/Layout/Layout';
import { useTheme } from 'next-themes';

export default function Home() {
  const { theme, setTheme } = useTheme();

  return (
    <Layout>
      <section className='theme absolute top-5 right-10'>
        <button
          aria-label='Toggle Dark Mode'
          type='button'
          className='p-3 h-12 w-12 order-2 md:order-3'
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        >
          {theme}
        </button>
      </section>
      <section className='hero flex justify-center items-center h-screen w-screen bg-white dark:bg-gray-900'>
        <div className='hero__content dark:text-white'>
          <h1 className='text-5xl'>Snow Wind Boilerplate</h1>
          <p>A NextJS + Tailwind Start Kit</p>
        </div>
      </section>
    </Layout>
  );
}
