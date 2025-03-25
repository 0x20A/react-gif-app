import { useState } from "react"
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {
  
  const [categories, setCategories] = useState(['One Piece']);

  const onAddCategory = ( newCategory ) => {
    if ( categories.includes(newCategory) ) return;

    setCategories([ newCategory, ...categories]);
  }

  const onDeleteCategory = () => {
    setCategories((prevCategory) => prevCategory.slice(1));
  }

  return (
    <>
      <h1>GifExpertApp</h1>
      <AddCategory 
        onNewCategory={ (newCategory) => {
          onAddCategory(newCategory)
        }}
      />
      {
        categories.map( (category) => (
          <GifGrid 
            key={ category }
            category={ category }
            onDeleteCategory={ onDeleteCategory }
          />
        ))
      }
    </>
  )
}
