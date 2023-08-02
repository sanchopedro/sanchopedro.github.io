import Header from "@/components/Header/Header";
import ProfileInfo from "@/components/ProfileInfo/ProfileInfo";
import TitleSubtitle from "@/components/TitleSubtitle/TitleSubtitle";

function about() {
  return (
    <div>
      <div>

      <Header />
      <TitleSubtitle
        title="About Me"
        subtitle="I design and code beautiful things, and I love what i do."
      />
      </div>

      <div>
        <ProfileInfo/>
      </div>
    </div>
  );
}

export default about;
