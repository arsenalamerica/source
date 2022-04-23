import {
  Toolbar,
  ToolbarItem,
  ToolbarSeparator,
  useToolbarState,
} from 'ariakit/toolbar';
import { ImTwitter, ImInstagram, ImFacebook } from 'react-icons/im';
import { trackGoal } from 'fathom-client';
import { motion } from 'framer-motion';

import styles from './SocialBar.module.scss';

const variants = {
  hidden: { opacity: 0, scale: 0.8 },
  enter: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.8 },
};

const SocialBar = () => {
  const toolbar = useToolbarState();

  const toolbarItemSharedProps = {
    as: 'a',
    className: styles.button,
    rel: 'noopener noreferrer',
    target: '_blank',
    onClick: () => trackGoal('LMVFQXLJ'),
  };

  return (
    <Toolbar
      animate='enter'
      exit='exit'
      initial='hidden'
      transition={{ ease: 'anticipate', duration: 1, delay: 0.5 }}
      variants={variants}
      state={toolbar}
      className={styles._}
      as={motion.div}
    >
      <ToolbarItem
        {...toolbarItemSharedProps}
        href='https://twitter.com/tacomagooners'
      >
        <ImTwitter />
      </ToolbarItem>
      <ToolbarItem
        {...toolbarItemSharedProps}
        href='https://www.instagram.com/tacomagooners/'
      >
        <ImInstagram />
      </ToolbarItem>
      <ToolbarItem
        {...toolbarItemSharedProps}
        href='https://www.facebook.com/groups/tacomagooners'
      >
        <ImFacebook />
      </ToolbarItem>
    </Toolbar>
  );
};

export default SocialBar;
