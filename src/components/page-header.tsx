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
  headerModifier: string
  headerModifierMobile: string
  includeStudyLink: boolean
}

const PageHeader = forwardRef(
  (
    {
      study,
      children,
      headerModifier = 'white-red',
      headerModifierMobile = 'white',
      includeStudyLink = false,
    }: PropsWithChildren<Props>,
    ref: Ref<ReactElement>
  ) => {
    const section: Ref<ReactElement> = useRef(null)
    const cta: Ref<ReactElement> = useRef(null)

    useImperativeHandle(ref, () => ({
      get section() {
        return section.current
      },

      get cta() {
        cta.current
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
