import { createFileRoute } from "@tanstack/react-router";
import { PortfolioHome } from "@/components/portfolio-home";
import { fetchContent } from "@/data/content-fn";

export const Route = createFileRoute("/")({
  loader: () => fetchContent(),
  component: Home,
});

function Home() {
  const data = Route.useLoaderData();
  return <PortfolioHome initialData={data} />;
}
