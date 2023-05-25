import { Meta, StoryObj } from "@storybook/react";
import { BackButton } from "../component/atoms/BackButton";
import { MemoryRouter } from "react-router-dom";

// eslint-disable-next-line storybook/story-exports
const meta: Meta<typeof BackButton> = {
  title: "BackButton",
  component: BackButton,
  parameters: {
    react: {
      appDirectory: true,
      navigation: {
        pathname: "/",
      },
    },
  },
  decorators: [
    (Story) => (
      <MemoryRouter initialEntries={["/"]}>
        <Story />
      </MemoryRouter>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof BackButton>;

export const Primary: Story = {
  args: {
    primary: true,
    label: "back",
  },
};
