import Loader from "./Loader";

export default {
    title: 'Ui-Kit/Loader',
    component: Loader
}

const Template = (args) => <Loader {...args} />;

const props = {
  theme: 'black',
  isShadow: false,
  classes: ''
}

export const Black = Template.bind({});

Black.args = {
...props,
theme: 'black',
};

export const White = Template.bind({});

White.args = {
...props,
theme: 'white',
isShadow: true,
};

export const Blue = Template.bind({});

Blue.args = {
...props,
theme: 'blue',
};
