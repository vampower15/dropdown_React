const ToolComp = ({name,image}) =>{
    return(
       <div className="single-name">
            <h2 className="text-anm">{name}</h2>
            <img src={image} alt={name}/>
       </div>
    )
}

export default ToolComp;