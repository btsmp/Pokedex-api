import {
  Container,
  Type,
  Names,
  Right,
  GrassType,
  PoisonType,
  FireType,
  WaterType,
  FlyingType,
  BugType,
  NormalType,
  ElectricType,
  GroundType,
  FairyType,
  FightingType,
  PsychicType,
  RockType,
  SteelType,
  IceType,
  GhostType,
  DragonType,
  DarkType

} from "./styles";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { useFavorites } from "../../hooks/fav"


export function CardPokemon(props) {

  const { favorites, updateFavorites } = useFavorites()
  const { name, id, img, types } = props

  const favoriteHandlleClick = () => {
    updateFavorites(name)
  }

  const heart = favorites.includes(name) ? <AiFillHeart /> : <AiOutlineHeart />

  return (
    <Container>
      <div>
        <img src={img} alt={name} className='pokemon' />

        <Names>
          <h1>{name}</h1>

          <Type>
            {types.map((type, index) => {
              const pokeType = type.type.name
              if (pokeType == 'grass') {
                return <GrassType key={index}>{pokeType}</GrassType>
              }
              if (pokeType == 'poison') {
                return <PoisonType key={index}>{pokeType}</PoisonType>
              }
              if (pokeType == 'fire') {
                return <FireType key={index}>{pokeType}</FireType>
              }
              if (pokeType == 'flying') {
                return <FlyingType key={index}>{pokeType}</FlyingType>
              }
              if (pokeType == 'water') {
                return <WaterType key={index}>{pokeType}</WaterType>
              }
              if (pokeType == 'bug') {
                return <BugType key={index}>{pokeType}</BugType>
              }
              if (pokeType == 'normal') {
                return <NormalType key={index}>{pokeType}</NormalType>
              }
              if (pokeType == 'electric') {
                return <ElectricType key={index}>{pokeType}</ElectricType>
              }
              if (pokeType == 'ground') {
                return <GroundType key={index}>{pokeType}</GroundType>
              }
              if (pokeType == 'fairy') {
                return <FairyType key={index}>{pokeType}</FairyType>
              }
              if (pokeType == 'fighting') {
                return <FightingType key={index}>{pokeType}</FightingType>
              }
              if (pokeType == 'psychic') {
                return <PsychicType key={index}>{pokeType}</PsychicType>
              }
              if (pokeType == 'rock') {
                return <RockType key={index}>{pokeType}</RockType>
              }
              if (pokeType == 'steel') {
                return <SteelType key={index}>{pokeType}</SteelType>
              }
              if (pokeType == 'ice') {
                return <IceType key={index}>{pokeType}</IceType>
              }
              if (pokeType == 'ghost') {
                return <GhostType key={index}>{pokeType}</GhostType>
              }
              if (pokeType == 'dragon') {
                return <DragonType key={index}>{pokeType}</DragonType>
              }
              if (pokeType == 'dark') {
                return <DarkType key={index}>{pokeType}</DarkType>
              }
              console.log(pokeType)


            })}
          </Type>

        </Names>
      </div>

      <Right onClick={favoriteHandlleClick}>
        <h1>#{id}</h1>
        {heart}
      </Right>

    </Container >
  )
}