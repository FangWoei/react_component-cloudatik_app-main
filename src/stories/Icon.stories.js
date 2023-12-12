import { WaterIcon } from "../components/Icon";

export default {
  title: "Example/Icon",
  component: WaterIcon,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    color: { control: "color" },
  },
};

export const Electric = {
  args: {
    shape: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        style={{ color: white }}
        viewBox="0 0 448 512">
        <path d="M349.4 44.6c5.9-13.7 1.5-29.7-10.6-38.5s-28.6-8-39.9 1.8l-256 224c-10 8.8-13.6 22.9-8.9 35.3S50.7 288 64 288H175.5L98.6 467.4c-5.9 13.7-1.5 29.7 10.6 38.5s28.6 8 39.9-1.8l256-224c10-8.8 13.6-22.9 8.9-35.3s-16.6-20.7-30-20.7H272.5L349.4 44.6z" />
      </svg>
    ),
    label: "electric",
  },
};

export const pH = {
  args: {
    shape: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        style={{ color: white }}
        viewBox="0 0 448 512">
        <path d="M349.4 44.6c5.9-13.7 1.5-29.7-10.6-38.5s-28.6-8-39.9 1.8l-256 224c-10 8.8-13.6 22.9-8.9 35.3S50.7 288 64 288H175.5L98.6 467.4c-5.9 13.7-1.5 29.7 10.6 38.5s28.6 8 39.9-1.8l256-224c10-8.8 13.6-22.9 8.9-35.3s-16.6-20.7-30-20.7H272.5L349.4 44.6z" />
      </svg>
    ),
    label: "pH",
  },
};

export const Thermometer = {
  args: {
    shape: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        baseProfile="tiny"
        style={{ color: white }}
        version="1.2"
        viewBox="0 0 24 24"
        id="thermometer">
        <path d="M13 15.071V9.5c0-.275-.225-.5-.5-.5s-.5.225-.5.5v5.571c-.86.224-1.5 1-1.5 1.929 0 1.103.896 2 2 2s2-.897 2-2c0-.929-.64-1.705-1.5-1.929zm3-1.612V5.5C16 3.57 14.43 2 12.5 2S9 3.57 9 5.5v7.959A4.937 4.937 0 0 0 7.5 17c0 2.757 2.243 5 5 5s5-2.243 5-5c0-1.39-.578-2.639-1.5-3.541zM12.5 20c-1.654 0-3-1.346-3-3a2.99 2.99 0 0 1 1.5-2.583V5.5c0-.827.673-1.5 1.5-1.5s1.5.673 1.5 1.5v8.917A2.99 2.99 0 0 1 15.5 17c0 1.654-1.346 3-3 3z"></path>
      </svg>
    ),
    label: "thermometer",
  },
};
