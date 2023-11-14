type GreetProps = {
    name: string
}

export const Greet = (props: GreetProps) =>{
    return(
        <div>
            <h2>Welcome {props.name}! You are learning React</h2>
        </div>
    )
}