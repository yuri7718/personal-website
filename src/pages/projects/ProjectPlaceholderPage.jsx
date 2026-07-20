import { useParams } from 'react-router-dom'
import ProjectPageLayout from '../../components/ProjectPageLayout'
import projects from '../../assets/projects.json'

function ProjectPlaceholderPage() {
  const { slug } = useParams()
  const project = projects.find((item) => item.slug === slug)

  return (
    <ProjectPageLayout project={project}>
      <p className="leading-7">
        This project page is ready for a custom case study.
      </p>
    </ProjectPageLayout>
  )
}

export default ProjectPlaceholderPage
