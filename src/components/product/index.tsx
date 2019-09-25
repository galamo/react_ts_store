import React from "react";


export default class Product extends React.Component<any, any>{

    constructor(props: any) {
        super(props)
        this.state = { quantity: props.quantity || 1 }
    }

    onChangeInput = (e: any) => {
        this.setState({ quantity: e.target.value || 1 })
    }


    render() {
        const { image, Price, Name, addToCart, deleteButton } = this.props
        const { quantity } = this.state;
        return (
            <div className="container">
                <div className="row" style={{ border: "1px solid black" }}>
                    <h2 style={{ color: "blue" }}> {`${Price * quantity}$`} </h2>
                    <h5> {Name} </h5>
                    <img height="100" width="100" src={image} style={{ float: "right" }} />
                    {addToCart && <div>quantity<input onChange={this.onChangeInput} type="number" /></div>}
                    {addToCart && <button className="btn btn-primary" onClick={() => { addToCart({ ...this.props, addToCart: false, deleteButton: true, quantity: this.state.quantity }) }}  > Buy  </button>}
                    {deleteButton && <button className="btn btn-danger" onClick={() => { console.log("del") }}  > Delete  </button>}

                </div>
            </div >
        )
    }
}





