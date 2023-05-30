import type { Meta, StoryObj } from "@storybook/react";
import { Header } from "../component/molecules/Header";
import { MemoryRouter } from "react-router-dom";
import React from "react";

const mata: Meta<typeof Header> = {
  title: "Header",
  component: Header,
  parameters: {
    layout: "fullscreen",
  },
  decorators: [],
};

export default mata;
type Story = StoryObj<typeof Header>;

export const TopPage: Story = {
  decorators: [
    (Story) => (
      <MemoryRouter initialEntries={["/"]}>
        <Story />
      </MemoryRouter>
    ),
  ],
};

export const OtherPage: Story = {
  decorators: [
    (Story) => (
      <MemoryRouter initialEntries={["/Flowers", "/Earrings"]}>
        <Story />
      </MemoryRouter>
    ),
  ],
};
