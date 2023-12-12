import { BasicButton } from '../components/BasicButton';

export default {
  title: 'Basic Example/BasicButton',
  component: BasicButton,
  parameters: {
    layout: 'centered',
    info: "info"
  },
  tags: ['autodocs'],
};

export const Primary = {
  args: {
    label: 'Click Me'
  }
};