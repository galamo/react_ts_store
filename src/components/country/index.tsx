import React from "react";
import axios from "axios";
import { connect } from "react-redux";
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
    const { code } = this.props.match.params;
    const { imagesCountries } = this.props;
    if (!code || !imagesCountries) return;
    console.log(imagesCountries[code], "current code images");

    const { currentCountry } = this.state;
    if (!currentCountry) return <h1>Loading...</h1>;
    return (
      <span>
        <h1> {this.state.currentCountry.name} </h1>
        {Array.isArray(imagesCountries[code]) &&
          imagesCountries[code].map((item: string) => {
            return <img src={item} height="100" width="100" />;
          })}
      </span>
    );
  }
}

const mapStateToProps = (state: any) => {
  const { imagesCountries } = state;
  return { imagesCountries };
};

export default connect(
  mapStateToProps,
  null
)(Country);
