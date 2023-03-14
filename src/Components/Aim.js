
const Aim = (props) => {
    return (
        <div>
            <h1 className="aim"> {props.heading} </h1>
            <p className="aim-para"> {props.details} </p>

            {props.children}
        </div>
    )
}


export default Aim