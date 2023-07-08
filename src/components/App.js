// create your App component here

import React, {useState, useEffect} from "react"


function App() {

   const [dogImage, setDogImage] = useState(null)

  useEffect( ()=> {
      fetch("https://dog.ceo/api/breeds/image/random")
      .then(resp => resp.json())
      .then(data => {setDogImage(data.message)})
   },[] )
   
   if (!dogImage) {
      return <h2>Loading...</h2>
   }


 console.log(dogImage)
   return (
      <div>
         <h1>App says hi</h1>
         <img src={dogImage} alt="A Random Dog"></img>
      </div>
      
     
   )
}

export default App