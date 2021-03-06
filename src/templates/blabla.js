import React from "react"
import { graphql } from "gatsby"
import SEO from "components/SEO"
import Layout from "components/Layout"
import { Episode, EpisodesMenu } from "components/Blabla"
import { HiddenNotificationTrigger } from "../components/OneSignal"

export default ({ data: { mdx } }) => {
  const { fields, body, excerpt } = mdx
  return (
    <Layout withNextEpisode>
      <div className="container blablas">
        <SEO
          tags={fields.tags}
          isEpisode
          title={fields.title}
          postUrl={fields.slug}
          description={excerpt}
        />
        <EpisodesMenu />
        <Episode {...fields} description={body} excerpt={excerpt} />
      </div>
      <HiddenNotificationTrigger />
    </Layout>
  )
}

export const pageQuery = graphql`
  query($id: String!) {
    mdx(fields: { id: { eq: $id } }) {
      excerpt(pruneLength: 200)
      id
      fields {
        title
        slug
        date(formatString: "MMMM DD, YYYY")
        duration
        url
        video
        repoLink
        audio
        tags
      }
      body
    }
  }
`
