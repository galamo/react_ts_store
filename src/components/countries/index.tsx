import React from "react"
import Header from "../header"
import axios from "axios";
import StoreTable from "../store-table";
import { Link } from "react-router-dom"
// statful component
// countries




export default class CountriesPage extends React.Component<any, any>{
    constructor(props: any) {
        super(props)
        this.state = { countries: [] }
    }

    componentDidMount() {
        console.log("component is ready!!!!")

        axios.get("https://restcountries.eu/rest/v2/all").then((res => {
            console.log("data resolved")
            console.log("set state")
            // i got information
            this.setState({
                countries: res.data.map((country: any) => {
                    const { capital, name, alpha3Code, region, borders, flag } = country
                    return {
                        capital: capital,
                        name: name,
                        code: alpha3Code,
                        region: region,
                        borders: borders,
                        flag: flag
                    }
                })
            })
        }))
    }

    render() {
        console.log("component is rendering!!!!", this.state.countries)
        const { countries } = this.state;
        if (!countries.length) return null;
        const headers = getHeaders(countries)
        const data = getTableBody(countries)
        return (
            <div>
                <Header title="Countries" />
                <StoreTable headers={headers} data={data} />
            </div>
        )
    }
}


function getHeaders(data: Array<any>) {
    if (!data.length) return;
    const [firstItemInArray] = data // const item = data[0]
    console.log(firstItemInArray, "firstItemInArray")
    return Object.keys(firstItemInArray).map((header: string) => {
        if (header === "code") return <th> <span>&#127921;</span> {header} </th>
        return <th> {header} </th>
    })
    // return data.filter(header => header.active).map((header: any) => <th> {header.isIcon && <span> &#129327;</span>} {header.key} </th>)
}


function getTableBody(data: Array<any>) {
    return data.map((dataItem: any) => {
        return <tr>
            {getTableRow(dataItem)}
        </tr>
    })
}

// &#127379;

function getTableRow(row: any) {
    // return Object.values(row).map((value: any) => {
    //     if (Array.isArray(value)) return <td>{value.join(",")}</td>
    //     return <td> {value} </td>
    // })

    return Object.entries(row).map(([key, value]) => {
        //switch case

        if (key === "region" && value === "Europe") return <td> <span>&#127379;</span> {value} </td>
        if (Array.isArray(value)) {
            const strBorders = value.join(",");
            return strBorders.includes("IRN") ? <td> <span>&#128013;</span> {strBorders} </td> : <td> {strBorders} </td>

        }
        if (key === "flag") return <td> <img src={value as string} height={100} width={100} /> </td>
        if (key === "code") return <td> <Link to={`/country/${value}`}>{value as string}</Link> </td>
        return <td> {value} </td>
    })
}



