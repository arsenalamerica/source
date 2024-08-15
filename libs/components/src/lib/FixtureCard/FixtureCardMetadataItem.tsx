import styles from './FixtureCard.module.scss';

import { Entity } from './types';

export function FixtureCardMetadataItem({ name, image }: Entity) {
  return (
    <div className={styles.MetadataItem}>
      {image}
      {name}
    </div>
  );
}
