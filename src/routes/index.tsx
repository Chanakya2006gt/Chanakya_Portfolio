import { createFileRoute } from "@tanstack/react-router";
import { PortfolioHome } from "@/components/portfolio-home";
import { getPortfolioData } from "@/data/store";

export const Route = createFileRoute("/")({
  loader: () => {
    return getPortfolioData();
  },
  component: Home,
});

function Home() {
  const data = Route.useLoaderData();
  return <PortfolioHome initialData={data} />;
}
