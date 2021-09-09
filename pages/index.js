import Layout from 'components/Layout/Layout';
import ThemeSwitch from 'components/ThemeSwitch/ThemeSwitch';

export default function Home() {
  return (
    <Layout>
      <ThemeSwitch />
      <section className='hero flex justify-center items-center h-screen w-screen bg-white dark:bg-gray-900'>
        <div className='hero__content dark:text-white'>
          <h1>Snow Wind Boilerplate</h1>
          <p>A NextJS + Tailwind Start Kit</p>
          <h2>Features</h2>
          <ul>
            <li>SEO-Ready Site Head</li>
            <li>Theme Switcher</li>
            <li>Layout with Site Info</li>
            <li>ES Lint</li>
            <li>Google Font pre-loaded</li>
            <li>Lighthouse 100%</li>
          </ul>
        </div>
      </section>
    </Layout>
  );
}
