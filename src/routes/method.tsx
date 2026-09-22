import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/method")({
  beforeLoad: () => {
    throw redirect({
      to: "/",
      hash: "how-we-work",
    });
  },
  component: () => null,
});
