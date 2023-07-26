import Header from '@/components/Header/Header';
import TitleSubtitle from '@/components/TitleSubtitle/TitleSubtitle';
import React from 'react'

function portfolio() {
  return (
    <div>
      <Header/>

      <TitleSubtitle
        title="My portfolio"
        subtitle="A few recent design and coding projects. Want to see more? Email me."
      />
    </div>
  )
}

export default portfolio

