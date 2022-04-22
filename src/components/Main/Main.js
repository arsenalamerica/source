import clsx from 'clsx';
import styles from './Main.module.scss';

const Main = ({ children, ...rest }) => (
  <main {...rest} className={clsx(styles._, rest.className)}>
    {children}
  </main>
);

export default Main;
