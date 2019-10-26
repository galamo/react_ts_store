import React from "react";
import axios from "axios";
import AddComment from "../add-comment";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addComment } from "../../redux/actions";

class Country extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    console.log(props.match);
    this.state = { currentCountry: null };
  }

  // componentDidMount() {
  //     const { code } = this.props.match.params
  //     axios.get(`https://restcountries.eu/rest/v2/alpha/${code}`).then(res => {
  //         this.setState({
  //             currentCountry: res.data
  //         })
  //     }).catch(ex => {
  //         console.log(ex)
  //     })
  // }

  async componentDidMount() {
    const { code } = this.props.match.params;
    try {
      const { data } = await axios.get(
        `https://restcountries.eu/rest/v2/alpha/${code}`
      );
      this.setState({
        currentCountry: data
      });
    } catch (ex) {
      console.log(ex);
    }
  }

  render() {
    // const { currentCountry } = this.state;
    // if (!currentCountry) return <h1>Loading...</h1>;
    // const { name, flag, borders, currencies } = currentCountry;
    return (
      <div>
        {/* <h1> {name} </h1>
        <img src={flag} width={400} height={400} />
        {getBorders(borders)}
        <br></br> */}
        <AddComment addCommentAction={this.props.reduxActions.addComments} />
      </div>
    );
  }
}

function getBorders(borders: any) {
  return (
    <ol>
      {" "}
      {borders.map((border: string) => (
        <li>{border}</li>
      ))}
    </ol>
  );
}

const mapStateToProps = (state: any) => {
  return state;
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    //this object will be assigned to the component props
    reduxActions: {
      addComments: (comment: any) => {
        dispatch(addComment(comment));
      }
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Country);
