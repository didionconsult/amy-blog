import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

// define component
const AboutPage = () => {
  return (
  <main>
    <Layout pageTitle="About Me">
    <p>🍓 I am Amy Hendrix, open-sourcerer and keen googler.</p>
    <StaticImage
    alt="profile in black and white"
    src="../images/profile-pic.jpeg"
    />

    <p>Hello, I am Amy Hendrix, a software developer from Texas. 
      You can contact me @</p>
      </Layout>
  </main>
  )
}

// export component
export default AboutPage
