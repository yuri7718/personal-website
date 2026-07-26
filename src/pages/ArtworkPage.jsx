import ArtworkGrid from "../components/ArtworkGrid";
import SectionHeader from "../components/SectionHeader";
import { contentLayoutClass } from "../styles/layout";

function ArtworkPage() {
  return (
    <main className={contentLayoutClass}>
      <SectionHeader
        title="All Artwork"
        description="A complete collection of oil paintings, illustrations, and sketches"
      />

      <ArtworkGrid />
    </main>
  );
}

export default ArtworkPage;
