import { Table } from "../components/Table";

export default {
  title: "Example/Table",
  component: Table,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    backgroundColor: { control: "color" },
    color: { control: "color" },
  },
};

export const Hello = {
  args: {
    label: "Card 1",
    label2: "Card 1",
    color: "red",
  },
};
