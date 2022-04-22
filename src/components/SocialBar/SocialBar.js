import {
  Toolbar,
  ToolbarItem,
  ToolbarSeparator,
  useToolbarState,
} from 'ariakit/toolbar';
import { ImTwitter, ImInstagram, ImFacebook } from 'react-icons/im';
import { trackGoal } from 'fathom-client';
import styles from './SocialBar.module.scss';

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
    <Toolbar state={toolbar} className={styles._}>
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
