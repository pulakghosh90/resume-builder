import { configure, addDecorator } from '@storybook/react';
import { checkA11y } from '@storybook/addon-a11y';
import { withOptions } from '@storybook/addon-options';

withOptions({ addonPanelInRight: true });

const componentStoriesReq = require.context('../src', true, /.stories.js$/);

function loadStories() {
  componentStoriesReq.keys().forEach((filename) => componentStoriesReq(filename));
}
addDecorator(checkA11y);
configure(loadStories, module);
