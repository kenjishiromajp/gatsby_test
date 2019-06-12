import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'

export default ({ data: { allFile: { edges } } }) => (
  <Layout>
    <h1>My files</h1>
    <p>List of my files</p>
    <table style={{ width: `100%`, overflow: `auto`, display: `block` }}>
      <thead>
        <tr>
          <th>publicURL</th>
          <th>blocks</th>
          <th>extension</th>
          <th>size</th>
          <th>name</th>
          <th>prettySize</th>
          <th>modifiedTime</th>
        </tr>
      </thead>
      <tbody>
        { edges.map(({ node }) => (
          <tr>
            <td>{node.publicURL}</td>
            <td>{node.blocks}</td>
            <td>{node.extension}</td>
            <td>{node.size}</td>
            <td>{node.name}</td>
            <td>{node.prettySize}</td>
            <td>{node.modifiedTime}</td>
          </tr>
        )) }
      </tbody>
    </table>
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
     allFile {
      edges {
        node {
          publicURL
          blocks
          extension
          size
          name
          prettySize
          modifiedTime(fromNow: true)
        }
      }
    }
  }
`
