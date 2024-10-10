import { Link } from 'react-router-dom';

function Button({ children, disabled, to, type }) {
  const base =
    'transion-colors text-sm disable:cursor-not-allowed inline-block rounded-full bg-yellow-400  font-semibold uppercase tracking-wide text-stone-800 duration-300 hover:bg-yellow-300 focus:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 ';
  const styles = {
    primary: base + ' md:px-6 md:py-4 px-4 py-3',
    small: base + ' px-4 py-2 md:px-5 md:py-2.5 text-xs ',
    secondary:
      'transion-colors text-sm disable:cursor-not-allowed border-2 border-stone-300 inline-block rounded-full font-semibold uppercase tracking-wide text-stone-400 duration-300 hover:text-stone-800 hover:bg-stone-300 focus:bg-stone-300 focus:outline-none focus:ring focus:ring-stone-200  focus:ring-offset-2 md:px-6 md:py-3.5 px-4 py-2.5',
  };
  if (to) {
    return (
      <Link className={styles[type]} to={to}>
        {children}
      </Link>
    );
  }
  return (
    <button className={styles[type]} disabled={disabled}>
      {children}
    </button>
  );
}

export default Button;
