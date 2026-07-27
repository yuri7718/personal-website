import ProjectPageLayout from "../../components/ProjectPageLayout";
import projects from "../../assets/projects.json";

const project = projects.find(
  (item) => item.slug === "occlusion-type-classification",
);

function ResearchSurveyPlatformPage() {
  return (
    <ProjectPageLayout project={project}>
      <section>
        <h2 className="mb-3 text-2xl font-medium text-[var(--site-heading)]">
          Overview
        </h2>
        <p className="leading-7">
          This self-hosted computer vision labelling platform supports an
          ongoing research project conducted through Amazon Mechanical Turk.
          Participants review images and provide labels used to prepare
          research data. Because the project is still in progress, its specific
          research questions and results are not presented here.
        </p>
      </section>

      <section className="mt-12">
        <h2 className="mb-3 text-2xl font-medium text-[var(--site-heading)]">
          Technical Approach
        </h2>
        <p className="leading-7">
          The platform is deployed using AWS EC2 and S3, providing a
          self-managed workflow for presenting images, recording labels, and
          managing data collection outside a hosted survey service. Its image
          viewer includes a product-gallery-style zoom interaction, allowing
          participants to inspect fine visual details before assigning a label.
        </p>
      </section>
    </ProjectPageLayout>
  );
}

export default ResearchSurveyPlatformPage;
