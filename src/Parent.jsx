import Home from './Components/Home/Home.jsx'
import About from './Components/About/About.jsx'
import Skills from './Components/Skills/Skills.jsx'
import Projects from './Components/Projects/Projects.jsx'
import Contact from './Components/Contact/Contact.jsx'
import Education from './Components/Education/Education.jsx'
import FloatingButton from './Components/FloatingButton/FloatingButton.jsx'

function Parent() {
    return (
        <>
            <div id="home"><Home /></div>
            <div id="about"><About /></div>
            <div id="skills"><Skills /></div>
            <div id="projects"><Projects /></div>
            <div id="education"><Education /></div>
            <div id="contact"><Contact /></div>
            <FloatingButton />
        </>
    )
}

export default Parent