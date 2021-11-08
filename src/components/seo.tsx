/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React, { MetaHTMLAttributes, useContext, useEffect } from 'react'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'
import { TitleContext } from '../context/title-context'
import SiteMetadata from '../types/site-metadata'

interface MetaAttributes extends MetaHTMLAttributes<HTMLMetaElement> {
  property?: string
}

interface Props {
  title: string
  description?: string
  lang?: string
  meta?: MetaAttributes[]
}

const Seo = ({
  title,
  description,
  lang = 'en',
  meta = [],
}: Props): JSX.Element => {
  const { site }: SiteMetadata = useStaticQuery(
    graphql`
      query {
        ...SiteMetadata
      }
    `
  )

  const { setTitle } = useContext(TitleContext)

  const metaDescription = description || site.siteMetadata.description
  const defaultTitle = site.siteMetadata?.title

  useEffect(() => {
    setTitle(title)
  }, [title, setTitle])

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={defaultTitle ? `%s | ${defaultTitle}` : undefined}
      meta={([
        {
          name: 'description',
          content: metaDescription,
        },
        {
          property: 'og:title',
          content: title,
        },
        {
          property: 'og:description',
          content: metaDescription,
        },
        {
          property: 'og:type',
          content: 'website',
        },
        {
          name: 'twitter:card',
          content: 'summary',
        },
        {
          name: 'twitter:creator',
          content: site.siteMetadata?.social?.twitter || '',
        },
        {
          name: 'twitter:title',
          content: title,
        },
        {
          name: 'twitter:description',
          content: metaDescription,
        },
      ] as MetaAttributes[]).concat(meta)}
    />
  )
}

export default Seo
