const Card = ({data, handleChange}) => {
    
    return (
        <div className="card-container" onClick={() => handleChange(data)}>
            <div className="img-container"><img src={data.image} alt="card art" ></img></div> 
            <div className="card-name">{data.name}</div>
        </div>

    )
}

export default Card