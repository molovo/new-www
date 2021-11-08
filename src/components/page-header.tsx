import React, {
  forwardRef,
  PropsWithChildren,
  ReactElement,
  Ref,
  useImperativeHandle,
  useRef,
} from 'react'
import Study from '../types/study'
import HeaderCta from './header-cta'

interface Props {
  study: Study
  children: Array<ReactElement>
  headerModifier?: string
  headerModifierMobile?: string
  includeStudyLink?: boolean
  title?: string | null
}

export interface PageHeaderRef {
  readonly section?: HTMLElement | null
  readonly cta?: HTMLElement | null
}

const PageHeader = forwardRef(
  (
    {
      study,
      children,
      headerModifier = 'white-red',
      headerModifierMobile = 'white',
      includeStudyLink = false,
      title = null,
    }: PropsWithChildren<Props>,
    ref: Ref<PageHeaderRef>
  ) => {
    const section = useRef<HTMLElement | null>(null)
    const cta = useRef<HTMLElement | null>(null)

    useImperativeHandle(ref, () => ({
      get section() {
        return section.current
      },

      get cta() {
        return cta.current
      },
    }))

    return (
      <section
        ref={section}
        className="page-header"
        data-header-modifier={headerModifier}
        data-header-modifier-mobile={headerModifierMobile}
      >
        <HeaderCta
          ref={cta}
          className="page-header__cta"
          includeLink={includeStudyLink}
          title={title}
          study={study}
        />

        <div
          className="page-header__content"
          data-header-modifier={headerModifier}
          data-header-modifier-mobile="white"
        >
          {children}
        </div>
      </section>
    )
  }
)

export default PageHeader
