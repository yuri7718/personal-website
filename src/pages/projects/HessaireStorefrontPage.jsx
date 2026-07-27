import ProjectPageLayout from "../../components/ProjectPageLayout";
import demoImage from "../../assets/HessaireStorefront/demo.png";
import projects from "../../assets/projects.json";

const project = projects.find((item) => item.slug === "hessaire-storefront");

function HessaireStorefrontPage() {
  return (
    <ProjectPageLayout project={project}>
      <section>
        <h2 className="mb-3 text-2xl font-medium text-[var(--site-heading)]">
          Overview
        </h2>
        <p className="leading-7">
          This project is an e-commerce storefront for browsing and purchasing
          Hessaire products. It provides a modern web experience connected to
          the company’s BigCommerce catalog and commerce services.
        </p>
        <img
          className="mt-6 w-full rounded-lg border border-[var(--site-border)]"
          src={demoImage}
          alt="Hessaire e-commerce storefront interface."
        />
      </section>

      <section className="mt-12">
        <h2 className="mb-3 text-2xl font-medium text-[var(--site-heading)]">
          Technical Approach
        </h2>
        <p className="leading-7">
          The storefront is built with BigCommerce Catalyst and Next.js,
          combining Catalyst’s composable commerce foundation with a responsive
          React-based frontend.
        </p>
      </section>
    </ProjectPageLayout>
  );
}

export default HessaireStorefrontPage;
