import type { Meta, StoryObj } from "@storybook/react";
import { Footer } from "../component/molecules/Footer";
import { MemoryRouter } from "react-router-dom";

const meta: Meta<typeof Footer> = {
  title: "Footer",
  component: Footer,
  decorators: [
    (Story) => (
      <MemoryRouter initialEntries={["/AboutAccessories", "/ProductionRecord"]}>
        <Story />
      </MemoryRouter>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Footer>;

export const Default: Story = {
  args: {
    primary: true,
    label: "Footer",
  },
};
