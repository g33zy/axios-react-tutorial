import React from 'react' 


function BeerCard(props) {
    return (
        <li style={{ listStyle: "none", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}} >
            <h3 style={{ color: "#61DAFB", background: "black", width: "fit-content", textAlign: "center" }}>{props.name}</h3>
            <span>{props.first_brewed}</span>
            <h4>{props.tagline}</h4>
            <p style={{ color: "red"}} >abv: <span name='abv' >{props.abv}</span>%</p>
            <p>{props.description}</p>
            <img style={{ height: "200px", width: "200px", objectFit: "contain" }} src={props.image_url} alt='beer'></img>
           
            {/* <div onClick={props.handleClick}>
            {props.isClicked ? <i class="fa-solid fa-heart"></i> : <i class="fa-regular fa-heart"></i>}
            
            </div> */}
            <i onClick={props.handleClick} className={props.isClicked ? "fa-solid fa-heart" : "fa-regular fa-heart"}></i>
          
            <hr style={{width: "100%"}}></hr>
            <div>
                <p></p>
            </div>
            
        </li>
    )
}

export default BeerCard