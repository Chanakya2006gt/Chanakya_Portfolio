import { createServerFn } from "@tanstack/react-start";

export const fetchContent = createServerFn({ method: "GET" }).handler(async () => {
  const { readContent } = await import("./content.server");
  return readContent();
});
