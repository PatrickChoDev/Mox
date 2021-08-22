import { addons } from '@storybook/addons';
import { create } from '@storybook/theming';

addons.setConfig({
  isFullscreen: false,
  showNav: true,
  showPanel: true,
  panelPosition: 'bottom',
  enableShortcuts: true,
  isToolshown: true,
  theme: create({
    base: 'dark',
    brandTitle: 'Mox',
    appBorderRadius: 8,
    brandUrl: 'https://gitlab.com/PatrickChoDev/mox-design',
    appBg: '#222',
    inputBorderRadius: 4,
  }),
  selectedPanel: 'sidebar',
  initialActive: 'sidebar',
  sidebar: {
    showRoots: true,
    collapsedRoots: ['other'],
  },
  toolbar: {
    title: { hidden: false, },
    zoom: { hidden: false, },
    eject: { hidden: false, },
    copy: { hidden: false, },
    fullscreen: { hidden: false, },
  },
});