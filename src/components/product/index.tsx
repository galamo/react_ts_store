import React from "react";


export default class Product extends React.Component<any, any>{

    render() {
        const { image, Price, Name } = this.props
        return (
            <div className="container">
                <div className="row" style={{ border: "1px solid black" }}>
                    <h2 style={{ color: "blue" }}> {`${Price}$`} </h2>
                    <h5> {Name} </h5>
                    <img height="100" width="100" src={image} style={{ float: "right" }} />
                </div>
            </div>
        )
    }
}





