import Header from '@/components/Header/Header';
import TitleSubtitle from '@/components/TitleSubtitle/TitleSubtitle';


function about() {
  return (
    <div>
      <Header/>
      <TitleSubtitle
        title="About Me"
        subtitle="I design and code beautiful things, and I love what i do."
      />
    </div>
  )
}

export default about