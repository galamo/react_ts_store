import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./components/header"


class StoreInput extends React.Component<any, any> {

    constructor(props: any) {
        super(props)

    }

    render() {
        return <input value={this.props.input} />
    }
}
// string, number, boolean, any
// function StoreInput(props: any) {
//     return <input value={props.input} />
// }

const App: React.FC = () => {
    return (
        <div className="App">
            <Header title="Store" />
            <StoreInput input={"this is our input"} />

        </div>
    );
}

export default App;
