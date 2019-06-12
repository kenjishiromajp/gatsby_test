import React from 'react'
import { graphql, Link } from 'gatsby'
import { Card } from '@material-ui/core'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import Layout from '../components/Layout'

export default ({ data: { allMarkdownRemark: { edges } } }) => (
  <Layout>
    <h1>My Posts</h1>
    <p>List of my Posts</p>
    { edges.map(({
      node: {
        fields: { slug }, id, frontmatter: { title, date }, excerpt
      }
    }) => (
      <Card key={id}>
        <CardHeader title={<Link to={slug}>{title}</Link>} subheader={date} />
        <CardContent>
          <p>{excerpt}</p>
        </CardContent>
      </Card>
    )) }

  </Layout>
)

export const query = graphql`
  query {
    allMarkdownRemark {
      totalCount,
      edges {
        node {
          id
          html
          fields {
            slug
          }
          frontmatter {
            date(formatString: "DD MMMM, YYYY")
            title
          }
          excerpt
        }
      }
    }
  }
`
