import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [product, setProduct] = useState([])
  const [search,setsearch]=useState("");
   async function ApiFetch(){
    const API = await fetch('https://dummyjson.com/products');
    const data = await API.json();
    setProduct(data.products);
   }  

   const filtered =product.filter((data)=>{
    return data.title.toLowerCase().includes(search.toLowerCase());
   })

   useEffect(()=>{
      ApiFetch();
   },[]);

  return (
    <>
    <div className="container">
   
<input class="form-control" list="datalistOptions" id="exampleDataList" onInput={(e)=>setsearch(e.target.value)} placeholder="Type to search..."/>
</div>
    <div className="container">
     {filtered.map((item)=>(
    
      <div className="card" style={{width: "18rem"}}>
  <img src={item.thumbnail} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5>{item.title}</h5>
    <p className="card-text">{item.description.slice(0,50)}...</p>
  </div>
</div>
     ))}
     </div>
    </>
  )
}

export default App
