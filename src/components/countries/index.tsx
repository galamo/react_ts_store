import React from "react";
import Header from "../header";
import axios from "axios";
import StoreTable from "../store-table";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addCountryToFavoritesAction } from "../../redux/actions";
// statful component
// countries

class CountriesPage extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = { countries: [] };
    }

    componentDidMount() {
        console.log("component is ready!!!!");

        axios.get("https://restcountries.eu/rest/v2/all").then(res => {
            console.log("data resolved");
            console.log("set state");
            // i got information
            this.setState({
                countries: res.data.map((country: any) => {
                    const { capital, name, alpha3Code, region, borders, flag } = country;
                    return {
                        capital: capital,
                        name: name,
                        code: alpha3Code,
                        region: region,
                        borders: borders,
                        flag: flag
                    };
                })
            });
        });
    }

    getTableBody = (data: Array<any>) => {
        return data.map((dataItem: any) => {
            return <tr>{this.getTableRow(dataItem)}</tr>;
        });
    }

    getTableRow = (row: any) => {
        return Object.entries(row).map(([key, value]) => {
            //switch case

            if (key === "region" && value === "Europe")
                return (
                    <td>
                        {" "}
                        <span>&#127379;</span> {value}{" "}
                    </td>
                );
            if (Array.isArray(value)) {
                const strBorders = value.join(",");
                return strBorders.includes("IRN") ? (
                    <td>
                        {" "}
                        <span>&#128013;</span> {strBorders}{" "}
                    </td>
                ) : (
                        <td> {strBorders} </td>
                    );
            }
            if (key === "flag")
                return (
                    <td>
                        {" "}
                        <img src={value as string} height={100} width={100} />{" "}
                    </td>
                );
            if (key === "code")
                return (
                    <td>
                        {" "}
                        <Link to={`/country/${value}`}>{value as string}</Link>{" "}
                    </td>
                );
            if (key === "name")
                return (
                    <td>
                        <button onClick={() => {
                            const { addToFavorites } = this.props.reduxAxtions;
                            addToFavorites(row)
                        }} className="btn btn-success"> {value} </button>
                    </td>
                );
            return <td> {value} </td>;
        });
    }

    // onChangeInput = (e: any) => {
    //     this.setState({ name: e.taget.value })
    // }

    render() {
        const { countries } = this.state;
        if (!countries.length) return null;
        const headers = getHeaders(countries);
        const data = this.getTableBody(countries);
        return (
            <div>
                <div>
                    <Header headerStyle={{ fontSize: "20px" }} title={this.props.user} />
                </div>
                <StoreTable headers={headers} data={data} />
            </div>
        );
    }
}

function getHeaders(data: Array<any>) {
    if (!data.length) return;
    const [firstItemInArray] = data; // const item = data[0]
    console.log(firstItemInArray, "firstItemInArray");
    return Object.keys(firstItemInArray).map((header: string) => {
        if (header === "code")
            return (
                <th>
                    {" "}
                    <span>&#127921;</span> {header}{" "}
                </th>
            );
        return <th> {header} </th>;
    });
}





const mapStateToProps = (state: any) => {
    // return the state from the store to the component props
    console.log("CountriesPage: state from redux after changing user", state);
    return state;
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        //this object will be assigned to the component props
        reduxAxtions: {
            addToFavorites: (country: any) => {
                dispatch(addCountryToFavoritesAction(country))
            }
        }
    };
};
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CountriesPage);
