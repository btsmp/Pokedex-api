import poisonbg from '../../assets/poisonbg.jpg'
import grassbg from '../../assets/grassbg.jpg'
import firebg from '../../assets/firebg.jpg'
import waterbg from '../../assets/waterbg.jpg'
import flyingbg from '../../assets/flyingbg.png'
import bugbg from '../../assets/bugbg.jpg'
import normalbg from '../../assets/normalbg.jpg'
import eletricbg from '../../assets/eletricbg.jpg'
import groundbg from '../../assets/groundbg.jpg'
import fairybg from '../../assets/fairybg.jpg'
import fightingbg from '../../assets/fightingbg.jpg'
import psychicbg from '../../assets/psychicbg.jpg'
import rockbg from '../../assets/rockbg.jpg'
import steelbg from '../../assets/steelbg.jpg'
import icebg from '../../assets/icebg.jpg'
import ghostbg from '../../assets/ghostbg.jpg'
import dragonbg from '../../assets/dragonbg.jpg'
import darkbg from '../../assets/darkbg.jpg'
import styled from "styled-components";


export const Container = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-between;
  align-items: center;
  height: 140px;
  border: none;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  border-radius: 15px;
  transition: all 0.2s;
  color: #111;

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
    transform: scale(1.02);
    filter: brightness(0.9);
    border: 1px solid black;
    background: white;
  }


`

export const ImgWrapper = styled.div`
  color: black;

  display: flex;
  height: 100%;

  img {
    height: 80%;
    width: 100px;
    margin: 10px
  }
`

export const Type = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 4px;
`
export const Names = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  text-transform: capitalize;

  > h1 {
    font-weight: bold;
    font-size: 24px;
  }
`

export const Right = styled.div`
    
    height: 80%;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;

    margin-right: 8px;

    > h1 {
      font-weight: bold;
      font-size: 24px;
    }

    > svg {
      cursor: pointer;
      font-size: 30px;
      color: #EF5350
    }
`

export const GrassType = styled.div`
background: url(${ grassbg });
background-size: cover;

padding: 8px;
border-radius: 99999px;

color: white;
font-weight: 800;
`

export const PoisonType = styled.div`
background: url(${ poisonbg });
background-size: cover;
padding: 8px;
border-radius: 99999px;

color: white;
font-weight: 800;
`

export const FireType = styled.div`
background: url(${ firebg });
background-size: cover;
padding: 8px;
border-radius: 99999px;

color: white;
font-weight: 800;

`
export const WaterType = styled.div`
background: url(${ waterbg });
background-size: cover;
padding: 8px;
border-radius: 99999px;

color: white;
font-weight: 800;
`

export const FlyingType = styled.div`
background: url(${ flyingbg });
background-size: cover;
padding: 8px;
border-radius: 99999px;

color: #111;
font-weight: 800;
`
export const BugType = styled.div`
background: url(${ bugbg });
background-size: cover;
padding: 8px;
border-radius: 99999px;

color: white;
font-weight: 800;
`

export const NormalType = styled.div`
background: url(${ normalbg });
background-size: cover;
padding: 8px;
border-radius: 99999px;

color: #111;
font-weight: 800;
`

export const ElectricType = styled.div`
background: url(${ eletricbg });
background-size: cover;
padding: 8px;
border-radius: 99999px;

color: white;
font-weight: 800;
`
export const GroundType = styled.div`
background: url(${ groundbg });
background-size: cover;
padding: 8px;
border-radius: 99999px;

color: white;
font-weight: 800;
`
export const FairyType = styled.div`
background: url(${ fairybg });
background-size: cover;
padding: 8px;
border-radius: 99999px;

color: white;
font-weight: 800;
`
export const FightingType = styled.div`
background: url(${ fightingbg });
background-size: cover;
padding: 8px;
border-radius: 99999px;

color: #111;
font-weight: 800;
`
export const PsychicType = styled.div`
background: url(${ psychicbg });
background-size: cover;
padding: 8px;
border-radius: 99999px;

color: white;
font-weight: 800;
`
export const RockType = styled.div`
background: url(${ rockbg });
background-size: cover;
padding: 8px;
border-radius: 99999px;

color: white;
font-weight: 800;
`
export const SteelType = styled.div`
background: url(${ steelbg });
background-size: cover;
padding: 8px;
border-radius: 99999px;

color: white;
font-weight: 800;
`
export const IceType = styled.div`
background: url(${ icebg });
background-size: cover;
padding: 8px;
border-radius: 99999px;

color: white;
font-weight: 800;
`
export const GhostType = styled.div`
background: url(${ ghostbg });
background-size: cover;
padding: 8px;
border-radius: 99999px;

color: white;
font-weight: 800;
`
export const DragonType = styled.div`
background: url(${ dragonbg });
background-size: cover;
padding: 8px;
border-radius: 99999px;

color: white;
font-weight: 800;
`
export const DarkType = styled.div`
background: url(${ darkbg });
background-size: cover;
padding: 8px;
border-radius: 99999px;

color: white;
font-weight: 800;
`
