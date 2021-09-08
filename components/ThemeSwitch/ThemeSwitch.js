// @see https://www.npmjs.com/package/next-themes#avoid-hydration-mismatch

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

const ThemeSwitch = (props) => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return '...';

  return (
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
  );
};

export default ThemeSwitch;
