import React from 'react'
import { SearchDate } from '../components/Parts/SearchDate'
import { SEO } from '../components/Layouts/SEO'
import { Footer } from '../components/Layouts/Footer'

export const En: React.FC = () => {
  return (
    <div>
      <SEO
        title="Is founding day of wakayama university?"
        description="This is the site where you can check if today is the anniversary of Wakayama University's founding."
        lang="en"
        path="/en"
      />
      <SearchDate Yes="Yes" No="No" />
      <Footer />
    </div>
  )
}
