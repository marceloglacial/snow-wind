import Layout from '../components/Layout/Layout';

export default function Home() {
  return (
    <Layout>
      <section className='hero flex justify-center items-center h-screen w-screen'>
        <div className='hero__content'>
          <h1 className='text-5xl'>Snow Wind Boilerplate</h1>
          <p>A NextJS + Tailwind Start Kit</p>
        </div>
      </section>
    </Layout>
  );
}
