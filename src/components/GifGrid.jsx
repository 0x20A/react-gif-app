import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";


export const GifGrid = ({ category, onDeleteCategory }) => {

  const { images, isLoading } = useFetchGifs( category );

  return (
    <>
      <div className="category">
        <h3>{ category }</h3>
        <button onClick={ onDeleteCategory } className="delete-button">Eliminar</button>
      </div>
      {
        isLoading && ( <h2>Cargando...</h2>)
      }
      <div className="card-grid">
        {
          images.map( img => ((
            <GifItem 
              key={ img.id }
              title={ img.title }
              url={ img.url }  
            />
          )))
        }
      </div>
    </>
  )
}
