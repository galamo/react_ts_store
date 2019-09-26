import React from "react";
import Product from "../product";
import StoreTable from "../store-table";
import Header from "../header";
const _headers = [
    { key: "Price", active: true, isIcon: true }, { key: "Id", active: true }, { key: "Name", active: true },
]
// { buy: "button", CreatedAt: new Date().toISOString(), Category: "A", onSale: true, id: 1, "Name": "Raid", "Price": 2.50, "Location": "Refrigerated foods" },

export default class ProductList extends React.Component<any, any>{

    render() {
        const { products: data, addToCart } = this.props
        const headers = getHeaders(data) //_headers
        const tableBody = getTableBody(data)
        return (
            <div>
                <StoreTable headers={headers} data={tableBody} />
            </div>
        )
    }
}

function getHeaders(data: Array<any>) {
    if (!data.length) return;
    const [firstItemInArray] = data // const item = data[0]
    console.log(firstItemInArray, "firstItemInArray")
    return Object.keys(firstItemInArray).map((header: string) => <th> {header} </th>)
    // return data.filter(header => header.active).map((header: any) => <th> {header.isIcon && <span> &#129327;</span>} {header.key} </th>)
}


function getTableBody(data: Array<any>) {
    return data.map((dataItem: any) => {
        return <tr>
            {getTableRow(dataItem)}
        </tr>
    })
}

function getTableRow(row: any) {
    return Object.values(row).map((value: any) => {
        if (value === "button") return <td><button className="btn btn-success"> Buy me! </button></td>
        return <td> {value} </td>
    })
}
    // {products.map((prod: any) => <Product addToCart={addToCart} key={prod.id} {...prod} />)}