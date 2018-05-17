import { configure } from '@storybook/react';
import { setOptions } from '@storybook/addon-options';
import { setDefaults } from '@storybook/addon-info';

setOptions({
  showAddonPanel: false,
});

setDefaults({
  header: false,
  inline: true,
});

function loadStories() {
  require('../stories/Path.js');
  require('../stories/Polygon.js');
  require('../stories/Polyline');
  // You can require as many stories as you need.
}

configure(loadStories, module);
