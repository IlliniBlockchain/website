import PillarsContainer from './PillarsContainer'
import PillarCard from '../PillarCard'
import { SectionTitle } from '../../shared-styled'

const Pillars = () => {

  return (
    <>
      <SectionTitle>What do we do?</SectionTitle>
      <PillarsContainer>           
        <PillarCard
          title={'Education'}
          description={'Through a collection of medium articles, twitter posts,\
          notion pages, and educational blockchain events Illini Blockchain\
          educates people of all skill levels.'}
          pillar={'education'}
        />
        <PillarCard
          title={'Community'}
          description={'Through a collection of medium articles, twitter posts,\
          notion pages, and educational blockchain events Illini Blockchain\
          educates people of all skill levels.'}
          pillar={'community'}
        />
        <PillarCard
          title={'Projects'}
          description={'Through a collection of medium articles, twitter posts,\
          notion pages, and educational blockchain events Illini Blockchain\
          educates people of all skill levels.'}
          pillar={'projects'}
        />
      </PillarsContainer>
    </>
  )
}

export default Pillars