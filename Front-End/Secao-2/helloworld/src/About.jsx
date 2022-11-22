import React from "react";

class About extends React.Component {
    render() {
        const nome = <h1>Harrison</h1> 
        const sobre = <p>Estudante de Desenvolvimento</p>
        const minhashabilidades = <h1>Minhas Habilidades</h1>
        const tecnologias = <ul>
            <li>Unix</li>
            <li>Bash</li>
            <li>HTML</li>
            <li>Css</li>
            <li>Java Script</li>
        </ul>
        return (
            <>
            <header>{nome} {sobre}</header>
            <section>{minhashabilidades} {tecnologias}</section>
            </>
        );
        
    }
}

export default About