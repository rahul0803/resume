import Navbar from "./Components/Navbar";
import AboutMe from "./Components/AboutMe";
// import Section from "./Components/Section";                                       // no need of this after 'callSection'
import CallSection from "./Components/CallSection";
import Aim from "./Components/Aim";


const App = () => {
    return (
        <div>
            <Navbar>
                <pre>Hello</pre>
            </Navbar>
            <AboutMe />
            <CallSection />

            <Aim
                heading="My Aim"
                details="I want to become the best software engineer ever.">

                <hr />
            </Aim>


        </div>
    )
}



export default App