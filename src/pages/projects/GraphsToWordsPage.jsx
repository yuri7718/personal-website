import { Code, FileText, MonitorPlay, Presentation } from "lucide-react";
import ProjectPageLayout from "../../components/ProjectPageLayout";
import ResourceLink from "../../components/ResourceLink";
import demoGif from "../../assets/GraphsToWords/demo.gif";
import teaserImage from "../../assets/GraphsToWords/teaser.png";
import projects from "../../assets/projects.json";

const project = projects.find((item) => item.slug === "from-graphs-to-words");

const projectLinks = [
  { label: "Paper", href: "https://arxiv.org/abs/2409.17494", icon: FileText },
  {
    label: "Code",
    href: "https://github.com/yuri7718/graphs2words",
    icon: Code,
  },
  { label: "Demo", href: "#", icon: MonitorPlay },
  { label: "Thesis Slides", href: "#", icon: Presentation },
];

const citation = `@inproceedings{xu2024fromgraphs,
  author = {Xu, Qiang and Hurtut, Thomas},
  title = {From Graphs to Words: A Computer-Assisted Framework for the Production of Accessible Text Descriptions},
  booktitle = {Proceedings of the 2024 IEEE Visualization and Visual Analytics (VIS)},
  year = {2024}
}`;

function GraphsToWordsPage() {
  return (
    <ProjectPageLayout
      project={project}
      actions={
        <div className="flex flex-wrap gap-3">
          {projectLinks.map((link) => {
            const Icon = link.icon;
            return (
              <ResourceLink key={link.label} href={link.href} icon={Icon}>
                {link.label}
              </ResourceLink>
            );
          })}
        </div>
      }
    >
      <section>
        <h2 className="mb-3 text-2xl font-medium text-[var(--site-heading)]">
          Overview
        </h2>
        <p className="leading-7">
          This work grew out of my research-based master's thesis and was
          published at IEEE VIS 2024. It explores how media authors can turn
          charts into accessible text descriptions through a web-based visual
          analytics system, using Datawrapper charts as input and helping
          authors create clearer textual alternatives for visual data.
        </p>
      </section>

      <figure className="mt-8">
        <img
          className="w-full rounded-lg border border-[var(--site-border)]"
          src={teaserImage}
          alt="Overview teaser for the From Graphs to Words framework."
        />
      </figure>

      <section className="mt-12">
        <h2 className="mb-3 text-2xl font-medium text-[var(--site-heading)]">
          Interactive Text Generation
        </h2>
        <p className="mb-6 leading-7">
          The system generates interactive text descriptions that stay connected
          to the original chart. When a reader hovers over a phrase or sentence,
          the corresponding visual element is highlighted, making it easier to
          understand how each part of the description maps back to the
          underlying data and visual encoding.
        </p>
        <img
          className="w-full rounded-lg border border-[var(--site-border)]"
          src={demoGif}
          alt="Demo of generated chart descriptions highlighting corresponding parts of the original chart on hover."
        />
      </section>

      <section className="mt-12">
        <h2 className="mb-3 text-2xl font-medium text-[var(--site-heading)]">
          Citation
        </h2>
        <pre className="overflow-x-auto rounded-lg border border-[var(--site-border)] bg-[var(--surface-secondary)] p-4 text-sm leading-6">
          <code>{citation}</code>
        </pre>
      </section>
    </ProjectPageLayout>
  );
}

export default GraphsToWordsPage;
