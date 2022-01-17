import PillarsContainer from './PillarsContainer'
import PillarCard from '../PillarCard'
import { SectionTitle } from '../../shared-styled'
import { GiBookshelf } from 'react-icons/gi'
import { RiTeamFill } from 'react-icons/ri'
import { ImLab } from 'react-icons/im'
const Pillars = () => {

  return (
    <>
      <SectionTitle>Our Work</SectionTitle>
      <PillarsContainer>           
        <PillarCard
          title={'Education'}
          icon={<GiBookshelf/>}
          description={'We produce crypto-literate, self-sufficient learners \
          who have the tools to navigate the space and learn new concepts on their own \
          through a collection of blogs, tweets,\
          roundtable discussions, and educational events. '}
          pillar={'education'}
          cta={'Read Our Blog'}
          link={'https://medium.com/illiniblockchain'}
        />
        <PillarCard
          title={'Community'}
          icon={<RiTeamFill/>}
          description={'We foster the campus blockchain community by \
          bringing together students, faculty, alumni, and founders through \
          our discord server, guest speaker events, and meetups.'}
          pillar={'community'}
          cta={'Join Our Discord'}
          link={'https://discord.gg/3Zggf6eHqW'}
        />
        <PillarCard
          title={'Projects'}
          icon={<ImLab/>}
          description={'We stay ahead of a new paradigm of technology \
          by gaining technical experience on internal and external projects, helping \
          organizations innovate and exploring \
          new ideas enabled by blockchain.'}
          pillar={'projects'}
          cta={'Learn More'}
          link={'/projects'}
        />
      </PillarsContainer>
    </>
  )
}

export default Pillars