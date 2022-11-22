import React from "react";

class About extends React.Component {
    render() {
        const nome = <h1>Harrison</h1> 
        const sobre = <p>Estudante de Desenvolvimento</p> 
        const tecnologias = <ol>
            <li>Unix</li>
            <li>Bash</li>
            <li>HTML</li>
            <li>Css</li>
            <li>Java Script</li>
        </ol>
        return (
            <header>{nome} {sobre} {tecnologias}</header>
        );
        
    }
}

export default About