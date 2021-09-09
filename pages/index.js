import Layout from 'components/Layout/Layout';
import ThemeSwitch from 'components/ThemeSwitch/ThemeSwitch';

export default function Home() {
  return (
    <Layout>
      <ThemeSwitch />
      <section className='hero flex justify-center items-center h-screen w-screen bg-white dark:bg-gray-900'>
        <div className='hero__content dark:text-white'>
          <h1>Snow Wind Boilerplateeee</h1>
          <p>A NextJS + Tailwind Start Kit</p>
          <h2>Features</h2>
          <ul>
            <li>
              <a href='https://nextjs.org/'>NextJS</a> ready
            </li>
            <li>
              <a href='https://tailwindcss.com'>Tailwind CSS</a> ready
            </li>
            <li>
              <a href='https://sass-lang.com/'>SASS</a> ready
            </li>
            <li>
              <a href='https://www.cypress.io/'>Cypress</a> ready
            </li>
            <li>
              <a href='https://nextjs.org/docs/basic-features/eslint'>ESLint</a>
              ready
            </li>
            <li>
              <a href='https://tailwindcss.com/docs/dark-mode'>
                Theme Switcher
              </a>
            </li>
            <li>Custom Header with SEO optimizations</li>
            <li>Google Font pre-connect</li>
          </ul>

          <h3>
            Created by <a href='https://marceloglacial.com'>Marcelo Glacial</a>
          </h3>
        </div>
      </section>
    </Layout>
  );
}
