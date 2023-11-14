const Card = ()=>{
const cardStyles = {
    borderRadius: '10px',
    border: 'solid',
    width: '400px',
    padding: '20px',
    display: 'flex',
}

    return (
        <div style={cardStyles}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEWtB28A5M0IthocBdUmz58vsOtUiBnEu2zg&usqp=CAU"/>
            <h1>Las Palmas</h1>
        </div>
    );
}

export default Card