import React from "react";
import Button from '@material-ui/core/Button';


export default class CreateProduct extends React.Component<any, any>{

    constructor(props: any) {
        super(props);

        this.state = { Name: "", Price: 0 }
    }

    render() {
        const { Name, Price } = this.state;
        const { addProductToList } = this.props;
        return (
            <div className="container">
                <div className="row">
                    Name: <input value={Name} onChange={(e: any) => {
                        this.setState({ Name: e.target.value })
                    }} className="col-lg-3" type="text" />

                    Price: <input value={Price} onChange={(e: any) => {
                        this.setState({ Price: e.target.value })
                    }} className="col-lg-3" type="number" />

                    <Button onClick={(r) => { addProductToList(this.state) }} className="col-lg-3" variant="contained" >
                        Create Product
                    </Button>
                </div>

            </div>
        )
    }
}

