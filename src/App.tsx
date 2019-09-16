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

class App extends React.Component<any, any>{

    constructor(props: any) {
        super(props)

        this.state = { connectedUser: "Gal", filteredProductList: productsWithImages, fullProductList: productsWithImages, pow: Math.round(Math.random() * 4) }
    }

    render() {
        const { connectedUser, productList, pow, filteredProductList, fullProductList } = this.state;
        return (
            <div className="App" >
                <Header title={"hello " + connectedUser} />
                <Header title="Add Product" />
                <Header title="Search" />
                <div>
                    <input onChange={(e) => {
                        const searchValue = e.target.value;
                        const filteredData = fullProductList.filter((product: any) => { return product.Name.toLowerCase().includes(searchValue) })
                        this.setState({ filteredProductList: filteredData })
                    }} />
                </div>
                <Header title="Products" />
                {filteredProductList.length ? <ProductList products={filteredProductList} /> : <h1> No Prodcuts Found</h1>}
                <Header title="Product of the week!" />
                <Product {...fullProductList[pow]} />
                {images.map((p: string) => <img key={p} src={p} />)}
            </div >
        );
    }

}
//     const props = { products: [...products] }
// <ProductList {...props} />

export default App;
