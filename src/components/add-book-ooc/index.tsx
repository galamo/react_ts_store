import React from "react"

interface IAddBookState {
    title: string | null;
    language: string;
}

export default class AddBook extends React.Component<any, any>{

    constructor(props: any) {
        super(props)
        this.state = { title: null, language: "" }
    }

    onChangeInput = (e: any) => {
        console.log(e.target.name, e.target.value)
        this.setState({ [e.target.name]: e.target.value })
    }


    render() {
        const { title: _color } = this.state
        return (<div>
            <form style={{ maxWidth: "400px" }}>
                <div className="form-group">
                    <label >Title</label>
                    <input onChange={this.onChangeInput} type="text" className="form-control" name="title" aria-describedby="emailHelp" placeholder="Title" />
                </div>
                <div className="form-group">
                    <label>language</label>
                    <input onChange={this.onChangeInput} type="text" className="form-control" name="language" aria-describedby="emailHelp" placeholder="Language" />
                </div>
                <div className="form-group form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" >Check me out</label>
                </div>
                <button style={{ color: _color }} onClick={() => { this.props.addBook(this.state) }} className="btn btn-success" type="button"> Add </button>
            </form>
            <br>
            </br>
            <h2 style={{ color: _color }}>{_color}</h2>
            <h2>{this.state.language}</h2>
        </div>)
    }


}