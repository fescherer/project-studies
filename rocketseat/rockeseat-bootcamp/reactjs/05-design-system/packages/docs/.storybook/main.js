/** @type { import('@storybook/react-vite').StorybookConfig } */
const config = {
  stories: [
    '../src/pages/**/*.mdx',
    '../src/stories/**/*.stories.@(js|jsx|ts|tsx)'
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-a11y'
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {}
  }
}
export default config
