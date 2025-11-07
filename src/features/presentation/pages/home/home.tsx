import { PageLayoutComp } from "../../components/page_layout_comp";
import HomeHeroComp from "./components/home_hero_comp";
import HomeAboutComp from "./components/home_about_comp";
import HomeSkillsComp from "./components/home_skills_comp";
import HomeProjectsComp from "./components/home_projects_comp";
import HomeExperienceComp from "./components/home_experience_comp";
import HomeContactComp from "./components/home_contact_comp";

export default function HomePage() {
  return (
    <PageLayoutComp>
      {/* Hero Section */}
      <HomeHeroComp />

      {/* Skills Section */}
      <HomeSkillsComp />

      {/* About Section */}
      <HomeAboutComp />

      {/* Projects Section */}
      <HomeProjectsComp />

      {/* Experience Section */}
      <HomeExperienceComp />

      {/* Contact Section */}
      <HomeContactComp />
    </PageLayoutComp>
  );
}
