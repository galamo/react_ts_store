import React from "react";


export default class Product extends React.Component<any, any>{

    render() {
        const { image, Price, Name } = this.props
        return (
            <div>
                <div><h5 style={{ color: "blue" }}> {`${Price}$`} </h5><h5> {Name} </h5>
                    <img height="100" width="100" src={image} /></div>
            </div>
        )
    }
}

