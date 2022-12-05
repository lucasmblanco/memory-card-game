const Card = ({data, handleChange}) => {
    
    return (
        <div className="card-container animate__animated animate__bounce" onClick={() => handleChange(data)}>
            <div className="img-container"><img src={data.image} alt="card art" ></img></div> 
            <div className="card-name">{data.name}</div>
        </div>

    )
}

export default Card