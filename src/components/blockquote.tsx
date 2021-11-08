import { Link } from 'gatsby'
import React, { ReactElement, useContext, useEffect } from 'react'
import { useState } from 'reinspect'
import { TitleContext } from '../context/title-context'

interface Props {
  children: ReactElement<{ children: string }>[]
}

const Blockquote = ({ children = [] }: Props): JSX.Element => {
  const [paragraph, author]: ReactElement<{ children: string }>[] = children
  const text = paragraph.props.children

  const [tweetUrl, setTweetUrl] = useState<string | null>(null, 'Tweet URL')

  const { title } = useContext(TitleContext)

  useEffect(() => {
    setTweetUrl(
      `https://twitter.com/intent/tweet?text=${encodeURIComponent(
        text
      )}%0A%0AFrom ${title as string} by @molovo. ${encodeURIComponent(
        window.location.toString()
      )}`
    )
  }, [text, title])

  return (
    <blockquote className="quote">
      {paragraph}

      <div className="quote__footer">
        {author}.&nbsp;
        <Link
          to={tweetUrl as string}
          className="text-link text-link--inline quote__tweet"
        >
          Tweet this
        </Link>
      </div>
    </blockquote>
  )
}

export default Blockquote
