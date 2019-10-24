import React from "react";
import Header from "../header";
import axios from "axios";
import StoreTable from "../store-table";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import store from "../../redux/store";
import { getCountries } from "../../redux/actions";
// statful component
// countries

class CountriesPage extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
    }

    componentDidMount() {
        const { getCountries } = this.props.reduxActions;
        getCountries();
    }

    render() {
        const { countries } = this.props;
        console.log(countries, "countries page....")
        if (!countries.length) return <h1> loading...</h1>;
        const headers = getHeaders(countries);
        const data = getTableBody(countries);

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

function getTableBody(data: Array<any>) {
    return data.map((dataItem: any) => {
        return <tr>{getTableRow(dataItem)}</tr>;
    });
}

function getTableRow(row: any) {
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
        return <td> {value} </td>;
    });
}

const mapStateToProps = (state: any) => {
    const { countries } = state;

    return state;
};


const mapDispatchToProps = (dispatch: any) => {
    return {
        //this.props.reduxActions.getCountries?
        reduxActions: {
            getCountries: () => {
                dispatch(getCountries())
            }
        }
    };
};
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CountriesPage);
