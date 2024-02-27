import { Icon } from "../components/Icon";

export default {
  title: "Example/Icon",
  component: Icon,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    color: { control: "color" },
  },
};

export const home_vpd = {
  args: {
    sprite: "#home_water",
  },
};

export const home_water = {
  args: {
    sprite: "#home_water",
  },
};


export const cloud_temp = {
  args: {
    sprite: "#cloud_temp",
  },
};

export const cloud_water = {
  args: {
    sprite: "#cloud_water",
  },
};

export const cloud_vpd = {
  args: {
    sprite: "#cloud_vpd",
  },
};

export const sun = {
  args: {
    sprite: "#icon-sun",
  },
};

export const total_radiation = {
  args: {
    sprite: "#total_radiation",
  },
};

export const water_ec = {
  args: {
    sprite: "#water_ec",
  },
};

export const water_ph = {
  args: {
    sprite: "#water_ph",
  },
};

export const water_temp = {
  args: {
    sprite: "#water_temp",
  },
};

export const pump_state = {
  args: {
    sprite: "#pump_state",
  },
};
