import React from "react";

export default class Search extends React.Component<any, any>{

    render() {
        const { onSale, searchValue, searchOperation } = this.props
        return (
            <div>
                <div>
                    <input value={searchValue} onChange={(e) => {
                        const search = e.target.value;
                        searchOperation(search, onSale);

                    }} />
                </div>
                <div>
                    OnSale ?
            <input type="checkbox" onChange={(e) => {
                        const onSale = e.target.checked;
                        searchOperation(searchValue, onSale);
                    }} />
                </div>
            </div>
        )
    }
}

