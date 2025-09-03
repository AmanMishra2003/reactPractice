export default function Header(){
    return <>
        <nav className="navigationBar">
            <div className="navcontainer">
                <div className="nameTag">Aman Mishra</div>
                <ul className="navSection">
                    <li className="Home"><a className="homeLink navlink" href="">Home</a></li>
                    <li className="Project"><a className="projectLink navlink" href="">Project</a></li>
                    <li className="Skills"><a className="skillLink navlink" href="">Skill</a></li>
                    <li className="About"><a className="aboutLink navlink" href="">About</a></li>
                </ul>
            </div>
                
           
        </nav>
    </>
}