import React, { forwardRef, useContext, useEffect, useRef } from 'react'
import { Link, graphql, PageProps } from 'gatsby'

import { IGatsbyImageData } from 'gatsby-plugin-image'
import { useState } from 'reinspect'
import ItemLink from '../components/homepage/item-link'
import HomepageCta from '../components/header-cta'
import Button from '../components/button'
import Seo from '../components/seo'
import { CurrentClientContext } from '../context/current-client-provider'
import isVisible from '../helpers/is-visible'
import isInViewport from '../helpers/is-in-viewport'
import HeaderCta from '../components/header-cta'
import PageHeader from '../components/page-header'
import Study from '../types/study'

type PostProps = {
  slug: string
  timeToRead: number
  frontmatter: {
    title: string
    description: string
    order: number
  }
  fields: {
    url: string
    type: string
  }
}

type ProjectProps = {
  slug: string
  frontmatter: {
    title: string
    description: string
    url: string
  }
}

type DataProps = {
  site: {
    siteMetadata: {
      title: string
      description: string
    }
  }
  posts: {
    nodes: Array<PostProps>
  }
  studies: {
    nodes: Array<Study>
  }
  projects: {
    nodes: Array<ProjectProps>
  }
}

const Home: React.FC<PageProps<DataProps, Location>> = ({
  data,
  location,
}: PageProps<DataProps, Location>) => {
  const posts = data.posts.nodes.slice(0, 3)
  const studies = data.studies.nodes.slice(0, 3)
  const projects = data.projects.nodes.slice(0, 3)

  const [study, setStudy] = useState(studies[0], 'CTA Study')

  useEffect(() => {
    setStudy(studies[0])
  }, [studies])

  const pageHeader = useRef(null)

  const { setCurrentClient } = useContext(CurrentClientContext)
  useEffect(() => {
    setCurrentClient(null)
  }, [location])

  useEffect(() => {
    const setClient = () => {
      if (
        !pageHeader.cta ||
        !isVisible(pageHeader.cta) ||
        !isInViewport(pageHeader.cta, { x: 0, y: -50 })
      ) {
        setCurrentClient(null)

        return
      }

      setCurrentClient(study.slug)
    }

    setClient()

    window.addEventListener('scroll', setClient, { passive: true })

    return () => {
      window.removeEventListener('scroll', setClient)
    }
  }, [study])

  return (
    <>
      <Seo
        title={data.site.siteMetadata.title}
        description={data.site.siteMetadata.description}
      />

      <PageHeader ref={pageHeader} includeStudyLink study={study}>
        <h1 className="home__title">
          Hi, I&apos;m James.
          <br />I make websites.
        </h1>

        <p className="home__intro">
          I&apos;m currently leading the talented development team at{' '}
          <a href="https://superrb.com" target="_blank" rel="noreferrer">
            Superrb Studio
          </a>
          , where I build awesome websites and interactive experiences{' '}
          <Link to="/work">like these</Link>.
        </p>

        <div className="home__links">
          {studies.map(({ slug, fields, frontmatter }) => (
            <ItemLink
              key={slug}
              title={frontmatter.client}
              text={frontmatter.description}
              url={fields.url}
              linkText="Read case study"
              className="home__link"
            />
          ))}

          <Button url="/work" label="More case studies" />
        </div>

        <p className="home__intro">
          I write about design, development, and the web. Here are a few of my
          favourite articles.
        </p>

        <div className="home__links">
          {posts.map(({ slug, fields, frontmatter }) => (
            <ItemLink
              key={slug}
              title={frontmatter.title}
              text={frontmatter.description}
              url={fields.url}
              linkText="Read article"
              className="home__link"
            />
          ))}

          <Button url="/writing" label="More articles" />
        </div>

        <div className="home__links">
          {projects.map(({ slug, frontmatter }) => (
            <ItemLink
              key={slug}
              title={frontmatter.title}
              text={frontmatter.description}
              url={frontmatter.url}
              linkText="Read article"
              className="home__link"
            />
          ))}

          <Button url="/open-source" label="More projects" />
        </div>
      </PageHeader>
    </>
  )
}

export default Home

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
    posts: allMdx(
      sort: { fields: [frontmatter___order], order: ASC }
      filter: {
        frontmatter: { order: { gt: 0 } }
        fields: { type: { eq: "blog" } }
      }
    ) {
      nodes {
        slug
        timeToRead
        frontmatter {
          title
          description
          order
        }
        fields {
          url
          type
        }
      }
    }
    studies: allMdx(
      sort: { fields: [frontmatter___order], order: ASC }
      filter: {
        frontmatter: { order: { gt: 0 } }
        fields: { type: { eq: "study" } }
      }
    ) {
      nodes {
        slug
        timeToRead
        frontmatter {
          title
          client
          description
          thumbnail {
            childImageSharp {
              gatsbyImageData(layout: FIXED)
            }
          }
          order
          bgColor
          ctaFontSize
          ctaMaxWidth
          ctaButtonStyles
          headerModifier
          headerModifierMobile
        }
        fields {
          url
          type
        }
      }
    }
    projects: allMdx(
      sort: { fields: [frontmatter___order], order: ASC }
      filter: {
        frontmatter: { order: { gt: 0 } }
        fields: { type: { eq: "project" } }
      }
    ) {
      nodes {
        frontmatter {
          title
          description
          url
        }
      }
    }
  }
`
