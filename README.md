Install dependencies
Yarn or npm

Install Storybook
npx -p @storybook/cli sb init --type react_native

Add react native Add-ons
yarn add -D @storybook/addon-ondevice-knobs @storybook/addon-ondevice-notes @storybook/addon-ondevice-backgrounds


Add Storybook loader
--
yarn add -D react-native-storybook-loader 

In Scripts add this "prestorybook": "rnstl",

Add  loadStories() in configure of storybook/index.js
& import { loadStories } from './storyLoader'

Add this config in package.json
"config": {
    "react-native-storybook-loader": {
      "searchDir": [
        "./app/components"
      ],
      "pattern": "**/*.stories.tsx",
      "outputFile": "./storybook/storyLoader.js"
    }
  }


Add Snapshot tests
--
Create storybook/storyshots.test.js
with

import initStoryshots from '@storybook/addon-storyshots'
initStoryshots({})

yarn add -D @storybook/addon-storyshots

Add 'json' file extension in jest config


Add Add-ons
--
Add dependencies
 yarn add -D @storybook/addon-knobs   