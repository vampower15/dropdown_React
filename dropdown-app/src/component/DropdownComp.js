

const DropdownComp =({changeNameData})=>{
   
    return(
        <nav>
            <h1 className="ff">Animal will do !!</h1>
            <select className="menu" onChange={changeNameData}>
                <option value="All">All</option>
                <option value="Mammals">Mammals</option>
                <option value="Birds">Birds</option>
                <option value="Reptiles">Reptiles</option>
                <option value="Amphibians">Amphibians</option>           
                <option value="Insects">Insects</option>           
                <option value="Fish">Fish</option>           
            </select>
        </nav>
    )
}
export default DropdownComp