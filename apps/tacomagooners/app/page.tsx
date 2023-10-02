import styles from './page.module.scss';

import { Logo, SocialBar } from '@arsenalamerica/components';

export default async function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.scss file.
   */
  return (
    <main className={styles.page}>
      <Logo />
      <SocialBar />
    </main>
  );
}
