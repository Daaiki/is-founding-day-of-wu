import React from 'react'
import { SearchDate } from '../components/SearchDate'
import { SEO } from '../components/Layouts/SEO'
import { Footer } from '../components/Layouts/Footer'

export const English: React.FC = () => {
  return (
    <>
      <SEO
        title="Is founding day of wakayama university?"
        description="This is the site where you can check if today is the anniversary of Wakayama University's founding."
        lang="en"
        path="/en"
      />
      <SearchDate isJapan={false} />
      <Footer isJapan={false} />
    </>
  )
}
