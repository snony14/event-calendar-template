import { configure } from '@storybook/react';
// import '../src/index.scss'
const req = require.context('../src', true, /.stories.tsx$/);
 
function loadStories() {
  req.keys().forEach((filename) => {
    return req(filename)})
}
 
configure(loadStories, module);