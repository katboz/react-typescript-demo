
type Props = {
    color?:string
}

const Button = ({color}:Props)=>{
    const styles ={
        backgroundColor : color || 'black',
        borderRadius: '10px',
        height: '40px',
        width: '200px',
        color: 'white',
    }
    return (
        <div>
            <button style={styles}>click me</button>
        </div>
    )
}
export default Button;