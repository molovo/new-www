import React from 'react'
import EighteenFiftyFiveLogo from '../images/icons/1855'
import AnglepoiseLogo from '../images/icons/anglepoise'
import HaresfootLogo from '../images/icons/haresfoot'
import Logo from '../images/icons/logo'
import MatteLogo from '../images/icons/matte'
import RedistributeLogo from '../images/icons/redistribute'
import SuperrbLogo from '../images/icons/superrb'
import You from '../images/icons/you'

interface Props {
  client: string
  className?: string
}

const LOGOS = {
  1855: <EighteenFiftyFiveLogo />,
  anglepoise: <AnglepoiseLogo />,
  haresfoot: <HaresfootLogo />,
  matte: <MatteLogo />,
  redistribute: <RedistributeLogo />,
  superrb: <SuperrbLogo />,
  contact: <You />,
}

type Client = keyof typeof LOGOS

const StudyLogos = ({ client, className = '' }: Props): JSX.Element => (
  <figure className={`${className} study-logos study-logos--${client}`}>
    <Logo />
    <span className="study-logos__plus">+</span>
    {LOGOS[client as Client]}
  </figure>
)

export default StudyLogos
