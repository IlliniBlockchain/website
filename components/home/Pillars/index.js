import PillarsContainer from './PillarsContainer'
import PillarCard from '../PillarCard'
import { SectionTitle } from '../../shared-styled'

const Pillars = () => {

  return (
    <>
      <SectionTitle>Our Work</SectionTitle>
      <PillarsContainer>           
        <PillarCard
          title={'Education'}
          description={'We produce crypto-literate, self-sufficient learners \
          who have the tools to navigate the space and learn new concepts on their own \
          through a collection of blogs, tweets,\
          roundtable discussions, and educational events. '}
          pillar={'education'}
        />
        <PillarCard
          title={'Community'}
          description={'We foster the campus blockchain community by \
          bringing together students, faculty, alumni, and founders through \
          our discord server, guest speaker events, and meetups.'}
          pillar={'community'}
        />
        <PillarCard
          title={'Projects'}
          description={'We stay ahead of a new paradigm of technology \
          by gaining technical experience on internal and external projects, helping \
          organizations innovate and exploring \
          new ideas enabled by blockchain.'}
          pillar={'projects'}
        />
      </PillarsContainer>
    </>
  )
}

export default Pillars