export function PokeDetail(props) {
  const { pokemon, loading } = props
  const abilities = pokemon.abilities

  return (

    <div className="mt-5 flex flex-col items-center justify-center ">

      <div className="bg-[#30A7D7] rounded-lg text-white grid grid-cols-2 gap-9 justify-items-start text-left px-9 py-3">
        <div >
          <h1 className="text-3xl font-bold  ">Habilidades</h1>
          <div>
            {abilities.map((ability, index) => {
              return (
                <span className="capitalize text-black flex items-start" key={index}>
                  {ability.ability.name}
                </span>
              )
            })}
          </div>
        </div>
        <div>
          <h1 className="text-3xl font-bold  ">Altura</h1>
          <span className="text-black">{pokemon.height / 10} m</span>
        </div>
        <div>
          <h1 className="text-3xl font-bold  ">Peso</h1>
          <span className="text-black">{pokemon.weight / 10} kg</span>
        </div>
        <div>
          <h1 className="text-3xl font-bold  ">XP base</h1>
          <span className="text-black">{pokemon.base_experience} xp</span>
        </div>
      </div>
    </div >
  )
}