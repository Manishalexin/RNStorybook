Install dependencies
Yarn or npm

Install Storybook
npx -p @storybook/cli sb init --type react_native

Add react native Add-ons
yarn add -D @storybook/addon-ondevice-knobs @storybook/addon-ondevice-notes @storybook/addon-ondevice-backgrounds


Add Storybook Server & babel loader
--
yarn add -D @storybook/react-native-server babel-loader