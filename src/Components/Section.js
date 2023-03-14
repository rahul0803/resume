
const Section = (props) => (
    // {heading: "Skills", description: "I am a full stack developer"}                                  props are basically objects
    // 'heading' & 'description' from 'callsection' will go inside 'props' as its keys

    <div className="section">
        <h1> {props.heading} </h1>
        <p> {props.description} </p>


        <hr />
    </div>
)



export default Section;