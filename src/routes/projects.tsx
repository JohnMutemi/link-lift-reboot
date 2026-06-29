import { createFileRoute } from "@tanstack/react-router";
import { ProjectsPage } from "@/components/site/ProjectsPage";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Link Freight Logistics Ltd" },
      {
        name: "description",
        content:
          "Explore Link Freight's flagship Oil & Gas logistics project delivering specialist containerization, crew transport and supply chain resilience.",
      },
      { property: "og:title", content: "Projects — Link Freight Logistics" },
      {
        property: "og:description",
        content: "Discover our Oil & Gas freight and logistics project on East Africa's most demanding corridors.",
      },
    ],
  }),
  component: ProjectsPage,
});
