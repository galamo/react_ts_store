import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

import { getCountries, saveImageAction } from "../../redux/actions";
import css from "./style.module.css";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap"
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  }
}));

class AddImages extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = { current: "ISR", image: "" };
  }

  componentDidMount() {
    const { getCountries } = this.props.reduxActions;
    getCountries();
  }

  render() {
    const { countries, countriesLoading } = this.props;

    if (countriesLoading) return <div className={css.loader}></div>;
    if (!countries.length) return <h1> no data...</h1>;

    return (
      <div>
        <div>
          <FormControl>
            <InputLabel>Countries</InputLabel>
            <Select
              value={this.state.current}
              onChange={(e: any) => this.setState({ current: e.target.value })}
            >
              {genreateMenuItems(countries)}
            </Select>
            <input
              onChange={(e: any) => {
                this.setState({ image: e.target.value });
              }}
              type="text"
            />
            <button
              onClick={() => {
                const { saveImage } = this.props.reduxActions;
                saveImage(this.state);
              }}
              className="btn btn-success"
            >
              {" "}
              Save image{" "}
            </button>
          </FormControl>
        </div>
      </div>
    );
  }
}

function genreateMenuItems(countries: Array<Country>) {
  console.log(countries);
  return countries.map((country: Country) => {
    console.log(country.alpha3Code);
    return (
      <MenuItem key={country.code} value={country.code}>
        {country.name}
      </MenuItem>
    );
  });
}

interface Country {
  capital: string;
  name: string;
  alpha3Code: string;
  code: string;
  region: string;
  borders: Array<string>;
  flag: string;
}
const mapStateToProps = (state: any) => {
  const { countries, countriesLoading } = state;
  const mappedCountries = countries.map((country: Country) => {
    const { capital, name, alpha3Code, region, borders, flag } = country;
    return {
      capital: capital,
      name: name,
      code: alpha3Code,
      region: region,
      borders: borders,
      flag: flag
    };
  });
  return { countries: mappedCountries, countriesLoading };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    //this.props.reduxActions.getCountries?
    reduxActions: {
      getCountries: () => {
        dispatch(getCountries());
      },
      saveImage: (payload: any) => {
        dispatch(
          saveImageAction({ code: payload.current, image: payload.image })
        );
      }
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddImages);
