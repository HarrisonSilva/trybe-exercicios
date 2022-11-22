import React from "react";

class HelloJSX extends React.Component {
    render() {
        const textJSX = 'Hello, JSX';
        const ElementH1 = <h1>{textJSX}</h1>
        return (
            <div className='App'>{ElementH1}</div>
    )}
}

export default HelloJSX