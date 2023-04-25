
import './card.css'
import { Link } from 'react-router-dom'

const productos = [
    {
        id: 1,
        nombre: "Café",
        img: "https://djftrby1k8irl.cloudfront.net/s3fs-public/2022-03%2FCaramel%20Frapp%20425x425%20sin%20fondo%20(1).png?auto=format,compress&q=70&crop=focalpoint&ar=1:1.0&w=180&fit=crop"
    },
    {
        id: 2,
        nombre: "Té",
        img: "https://djftrby1k8irl.cloudfront.net/s3fs-public/2022-03%2FChocolate%20Caliente%20425x425%20sin%20fondo%20(1).png?auto=format,compress&q=70&crop=focalpoint&ar=1:1.0&w=180&fit=crop"
    },
    {
        id: 3,
        nombre: "Bebidas Frías",
    
        img: "https://djftrby1k8irl.cloudfront.net/s3fs-public/2022-03%2FTe%20Verde%20Frutilla%20425x425%20sin%20fondo.png?auto=format,compress&q=70&crop=focalpoint&ar=1:1.0&w=180&fit=crop"
    },
    {
        id: 4,
        nombre: "Bebidas Calientes",
      
        img: "https://djftrby1k8irl.cloudfront.net/s3fs-public/2022-03%2FSkinny%20Vainilla%20Latte%20425x425%20sin%20fondo.png?auto=format,compress&q=70&crop=focalpoint&ar=1:1.0&w=180&fit=crop"
    },
    {
        id: 5,
        nombre: "Bebidas Frappuccino",
     
        img: "https://djftrby1k8irl.cloudfront.net/s3fs-public/2022-03%2FFrutilla%20A%C3%A7ai%20425x425%20sin%20fondo.png?auto=format,compress&q=70&crop=focalpoint&ar=1:1.0&w=180&fit=crop"
    },
    {
        id: 6,
        nombre: "Bebidas de Temporada",
        img: "https://djftrby1k8irl.cloudfront.net/s3fs-public/2022-03%2FChai%20425x425%20sin%20fondo.png?auto=format,compress&q=70&crop=focalpoint&ar=1:1.0&w=180&fit=crop"
    },
   
]



function card() {
  return (
    <div className="grid">
        {productos.map((producto) => (
            <Link to={`${producto.nombre}`}>
            <div className="card" key={producto.id}>
                <img src={producto.img} alt="" />
                <div className="info">
                    <h3>{producto.nombre}</h3>
                </div>
            </div>
            </Link>
        ))}

      </div>
  )
}

export default card