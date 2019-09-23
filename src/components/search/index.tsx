import React from "react";

export default class Search extends React.Component<any, any>{

    render() {
        const { onSale, searchValue, searchOperation, categories, cat } = this.props
        return (
            <div>
                <div>
                    <input value={searchValue} onChange={(e) => {
                        const search = e.target.value;
                        searchOperation(search, onSale, cat);

                    }} />
                </div>
                <div>
                    OnSale ?
            <input type="checkbox" onChange={(e) => {
                        const onSale = e.target.checked;
                        searchOperation(searchValue, onSale, cat);
                    }} />
                </div>

                <div>
                    Category ?
                   <select value={this.props.cat} onChange={
                        (e) => {
                            const cat = e.target.value;
                            searchOperation(searchValue, onSale, cat);
                        }
                    }>
                        {categories.map((item: any) => <option> {item} </option>)}
                    </select>
                </div>


            </div>
        )
    }
}

