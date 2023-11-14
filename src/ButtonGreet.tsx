type Props = {
    greeting:{
        greeting:string,
        counter:number
    }
    changeGreeting: ()=>void
}
const ButtonGreet = ({greeting, changeGreeting}:Props) =>{

    return(
    <>
      <button onClick={changeGreeting}>click me</button>
      {greeting.greeting}
      <h1>{greeting.counter}</h1>
    </>

    )
}

export default ButtonGreet