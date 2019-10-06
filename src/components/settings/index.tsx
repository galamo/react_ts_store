import React from "react";
import { connect } from "react-redux";
import { saveUserAction } from "../../redux/actions";
class Settings extends React.Component<any, any>{

    constructor(props: any) {
        super(props)
        this.state = { user: null };
    }

    render() {
        const { onSaveUser } = this.props;
        return (
            <div>
                <input type="text" onChange={(e) => {
                    this.setState({ user: e.target.value })
                }} />
                <button onClick={
                    () => {
                        onSaveUser(this.state.user)
                    }
                }> Save User in Store</button>
            </div>
        )
    }
}

const mapStateToProps = (state: any) => {
    // return the state from the store to the component props
    return state;
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        onSaveUser: (user: any) => {
            dispatch(saveUserAction(user))
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Settings)