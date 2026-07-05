// Barrel export — all components are now in components/* directories.
// Each page is in components/pages/, layout in components/layout/, shared in components/shared/.
// This file re-exports for backward compatibility during migration.

export { Shell } from "@/components/layout/Shell";
export { HomePage } from "@/components/pages/HomePage";
export { PortfolioPage } from "@/components/pages/PortfolioPage";
export { ServicesPage } from "@/components/pages/ServicesPage";
export { ProcessPage } from "@/components/pages/ProcessPage";
export { AboutPage } from "@/components/pages/AboutPage";
export { ContactPage } from "@/components/pages/ContactPage";
export { ProjectCard } from "@/components/shared/ProjectCard";
export { PageIntro } from "@/components/shared/PageIntro";
export { CallToAction } from "@/components/shared/CallToAction";
export { ServicesPreview } from "@/components/shared/ServicesPreview";
export { VideoCard } from "@/components/shared/VideoCard";