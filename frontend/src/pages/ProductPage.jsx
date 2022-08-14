import React from 'react'
import { useParams } from 'react-router-dom'

const ProductPage = () => {

  const { slug } = useParams()
  return (
    <div className="contenedor">
      ProductPage: {slug}
    </div>
  )
}

export default ProductPage
