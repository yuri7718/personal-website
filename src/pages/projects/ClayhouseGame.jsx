import ProjectPageLayout from '../../components/ProjectPageLayout'
import gameOneGif from '../../assets/ClayhouseGame/game1.gif'
import gameTwoGif from '../../assets/ClayhouseGame/game2.gif'
import projects from '../../assets/projects.json'

const project = projects.find((item) => item.slug === 'clayhouse-game')

function ClayhouseGame() {
  return (
    <ProjectPageLayout project={project}>
      <section>
        <h2 className="mb-3 text-2xl font-medium text-[var(--site-heading)]">
          Overview
        </h2>
        <p className="mb-6 leading-7">
          Clayhouse is a 2D mobile game prototype built in Godot. It began as a collaboration with an artist who developed the original concept, while I was the sole developer responsible for implementing the game systems and core interaction flow for the first version. The project ended before a public release, so a full demo is not available. I am no longer involved in the project, and any future version or final release may differ from the prototype shown here. This work helped me explore pottery-inspired mobile interactions and may inform a future game with a similar creative direction.
        </p>
      </section>

      <section className="mt-12">
        <h2 className="mb-3 text-2xl font-medium text-[var(--site-heading)]">
          Gameplay Preview
        </h2>
        <p className="mb-6 leading-7">
          These clips show early gameplay interactions from the prototype, including the pottery-making loop and touch-based mini game mechanics.
        </p>
        <div className="grid gap-5 md:grid-cols-2">
          <img
            className="w-full rounded-lg border border-[var(--site-border)]"
            src={gameOneGif}
            alt="Clayhouse gameplay preview showing one pottery-making mini game."
          />
          <img
            className="w-full rounded-lg border border-[var(--site-border)]"
            src={gameTwoGif}
            alt="Clayhouse gameplay preview showing another pottery-making mini game."
          />
        </div>
      </section>
    </ProjectPageLayout>
  )
}

export default ClayhouseGame
