const path = require("path");
const tailwindConfigPath = path.join(__dirname, "../tailwind.config.js"); // or your own config file
require("storybook-tailwind-foundations/initialize.js").default(tailwindConfigPath);

module.exports = {
	stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
	addons: ["@storybook/addon-links", "@storybook/addon-essentials", "@storybook/addon-interactions", "@storybook/preset-create-react-app"],
	framework: "@storybook/react",
	core: {
		builder: "@storybook/builder-webpack5",
	},
};
