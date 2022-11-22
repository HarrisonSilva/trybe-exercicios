import React from "react";

class About extends React.Component {
    render() {
        const nome = <h1>Harrison</h1> 
        const sobre = <p>Estudante de Desenvolvimento</p> 
        return (
            <header>{nome} {sobre}</header>
        );
        
    }
}

export default About