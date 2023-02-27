import './App.css';
import ToolComp from './component/ToolComp';
import DropdownComp from './component/DropdownComp';
import MenuData from './Data/MenuData';
import {useState} from 'react'


function App() {
  const [name,setName] = useState(MenuData)

  const changeNameData =(e)=>{
    const category = e.target.value
    if (category === "All"){
      setName(MenuData)
    }else{
      const result = MenuData.filter((element)=> {
        return element.typeAnimal === category
      })
      // console.log(result)
      setName(result)
    }    
  }
 
  return (

    <div className='container'>
        <DropdownComp changeNameData={changeNameData}/>
        <div className='content'>
            {name.map((data,index)=>{
              return <ToolComp key={index}{...data}/>
            })}
        </div>
    </div>
  )
}

export default App;
