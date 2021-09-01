import React from 'react'
import EighteenFiftyFiveLogo from '../images/icons/1855'
import AnglepoiseLogo from '../images/icons/anglepoise'
import HaresfootLogo from '../images/icons/haresfoot'
import Logo from '../images/icons/logo'
import RedistributeLogo from '../images/icons/redistribute'
import SuperrbLogo from '../images/icons/superrb'

interface Props {
  className: string
  client: string
}

const logos: object = {
  anglepoise: <AnglepoiseLogo />,
  haresfoot: <HaresfootLogo />,
  1855: <EighteenFiftyFiveLogo />,
  superrb: <SuperrbLogo />,
  redistribute: <RedistributeLogo />,
}

const StudyLogos = ({ client, className = '' }: Props) => (
  <figure className={`${className} study-logos study-logos--${client}`}>
    <Logo />
    <span className="study-logos__plus">+</span>
    {logos[client]}
  </figure>
)

export default StudyLogos
