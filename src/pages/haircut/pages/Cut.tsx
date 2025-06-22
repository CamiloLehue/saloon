import { useHaircuts } from "../hooks/useHairCut"

function Cut() {

  const haircuts = useHaircuts();
  return (
    <div>

      {
        haircuts.map((haircut) => (
          <div key={haircut.id}>
            <h1>{haircut.nombre}</h1>
            <p>{haircut.descripcion}</p>
            <p>${haircut.precio}</p>
          </div>
        ))
      }
    </div>
  )
}

export default Cut