import * as React from "react";
import Layout from "../components/layout"
import Hero from '../components/sections/hero'
import TextSection from "../components/sections/text-section"
import TextImage from "../components/sections/text-image"


const PageComponent = () => {

  return (
    <Layout>
      <Hero />
      <TextSection />
      <TextImage />
    </Layout>

  )
}

export default PageComponent

