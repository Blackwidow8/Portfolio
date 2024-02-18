import Navbar from './component/Navbar/Navbar'
import Header from './component/Header/Header'
import Footer from './component/Footer/Footer'

function App () {
  return(
    <>
    <Navbar/>
    <Header/>
    <Footer/>
    </>
  )
};

export default App;




 //import { useState } from "react";

 //function App() {

   //const [count, setCount] = useState(0)

  //const increment = ()=>{
    // setCount(count+1)
//   }

//   const decrement = ()=>{
//     setCount(count - 1)
//   }


//   return (
//     <div className="w-full h-screen flex items-center justify-center flex-col"> 
    
//       {count > 5 ? (
//         <div className="w-1/3 h-2/4 bg-yellow-500 flex items-center justify"></div>
//       ):(
//         <div className="w-1/3 h-2/4 bg-blue-500 flex items-center justify "></div>
//       )}
//        <p className="text-5xl">{count}</p>
//     <div>
//       <button onClick={decrement} className= "w-20 h-20 bg-red-500">Decrement</button>
//       <button onClick={increment} className= "w-20 h-20 bg-green-500">Increment</button>
//     </div>
//     </div>
//   )
// }

// export default App;

// import { useState } from "react";

// function App(){
// const [name, setName] = useState('Dan')

// const toggleName = () => {
//   setName(name === 'Dan' ? 'Ania' : 'Dan');
// };

// return(
//   <>
    
    
      
//         <div className="w-full h-screen flex items-center justify-center flex-col"> 
//         {name ===  'Dan' ? <div className="w-1/3 h-2/4 bg-blue-500 flex items-center justify "></div>:<div className="w-1/3 h-2/4 bg-yellow-500 flex items-center justify "></div>}
//        <p className="text-5xl">{name}</p>
//     <div>
//       <button onClick={toggleName} className= "w-20 h-20 bg-red-500">Change Name</button>
  
//     </div>
//     </div>
//     </>
// )
//       }

// export default App;
// import { useState } from "react";

// function App(){
// const [name, setName] = useState('Dan')

// const toggleName = () => {
//   setName(name === 'Dan' ? 'Ania' : 'Dan');
// };

// return(
//   <>
    
    
      
//         <div className="w-full h-screen flex items-center justify-center flex-col"> 
//         {name ===  'Dan' ? <div className="w-1/3 h-2/4 bg-blue-500 flex items-center justify "></div>:<div className="w-1/3 h-2/4 bg-yellow-500 flex items-center justify "></div>}
//        <p className="text-5xl">{name}</p>
//     <div>
//       <button onClick={toggleName} className= "w-20 h-20 bg-red-500">Change Name</button>
  
//     </div>
//     </div>
//     </>
// )
//       }

// export default App;


