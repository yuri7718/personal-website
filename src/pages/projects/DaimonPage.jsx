import { MonitorPlay } from 'lucide-react'
import ProjectPageLayout from '../../components/ProjectPageLayout'
import ResourceLink from '../../components/ResourceLink'
import demoImage from '../../assets/Daimon/demo.png'
import projects from '../../assets/projects.json'

const project = projects.find((item) => item.slug === 'daimon')

function DaimonPage() {
  return (
    <ProjectPageLayout
      project={project}
      actions={
        <div className="flex flex-wrap gap-3">
          <ResourceLink href="https://dev.daimon.panoloom.com/" icon={MonitorPlay}>
            Demo
          </ResourceLink>
        </div>
      }
    >
      <section>
        <h2 className="mb-3 text-2xl font-medium text-[var(--site-heading)]">
          Overview
        </h2>
        <p className="mb-6 leading-7">
          Daimon is a responsive web application from PatternLoom that lets users upload images or video and inspect a generated 3D reconstruction directly in the browser within minutes. I was one of two developers responsible for building the product, contributing across the upload flow, reconstruction algorithm integration, model processing pipeline, preview experience, and user-facing interface.
        </p>
        <p className="mb-6 leading-7">
          The demo is currently hosted in an external environment in Asia, so
          access from North America may be slower than usual. Availability may
          also be temporary or intermittently unavailable.
        </p>
        <img
          className="w-full rounded-lg border border-[var(--site-border)]"
          src={demoImage}
          alt="Daimon web interface showing a generated 3D reconstruction preview."
        />
      </section>
    </ProjectPageLayout>
  )
}

export default DaimonPage
