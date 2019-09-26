import React from "react";


export default class StoreTable extends React.Component<any, any>{

    // simple component 
    // input props, headers and data
    // render table with data

    render() {
        const { headers, data } = this.props
        if (!Array.isArray(headers) || !Array.isArray(data)) return <h2> No Data In table</h2>
        return (
            <div>
                <table className="table table-striped table-dark">
                    <thead>
                        {headers}
                    </thead>
                    <tbody>
                        {data}
                    </tbody>
                </table>
            </div>
        )
    }
}





