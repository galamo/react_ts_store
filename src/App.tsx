import React from 'react';
import './App.css';
import Header from "./components/header"
import { productsWithImages, images } from "./images/imagesLoader";
import ProductList from './components/product-list';
import Product from './components/product';
class StoreInput extends React.Component<any, any> {

    constructor(props: any) {
        super(props)

    }

    render() {
        return <input value={this.props.input} />
    }
}
// string, number, boolean, any
function StoreInput1(props: { input: number }) {
    return <input value={props.input} />
}

const productOfTheWeek = productsWithImages[Math.round(Math.random() * 4)]

const App: React.FC = () => {

    return (
        <div className="App">
            <Header title="Store" />
            <Header title="Products" />

            <ProductList products={productsWithImages} />
            <Header title="Product of the week!" />
            <Product {...productOfTheWeek} />
            {images.map((p: string) => <img src={p} />)}
        </div>
    );
}
//     const props = { products: [...products] }
// <ProductList {...props} />

export default App;
