import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'

export default ({ data }) => (
  <Layout>
    <h1>About {data.site.siteMetadata.title} </h1>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      A corporis dicta doloribus dolorum earum exercitationem id
       illum ipsum iste maiores maxime neque odit sequi, soluta sunt
       tempora voluptatibus? Fuga, quod.
    </p>
  </Layout>
)

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
