import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Slider from "@material-ui/core/Slider";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

export default class AddProduct extends React.Component<any, any> {
  constructor(props: any) {
    super(props);

    this.state = { product: {}, products: [], tabValue: 1 };
  }

  render() {
    const { tabValue } = this.state;

    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-4 align-self">
            <TextField
              id="standard-name"
              label="Name"
              onChange={e => {
                this.setState({
                  product: { ...this.state.product, name: e.target.value }
                });
              }}
              margin="normal"
              style={{ marginTop: "0px" }}
            />
          </div>
          <div className="col-lg-4 align-self">
            <h6> Price </h6>
            <Slider
              defaultValue={0}
              getAriaValueText={(va: any) => `${va}$`}
              aria-labelledby="discrete-slider"
              valueLabelDisplay="auto"
              step={10}
              marks
              min={0}
              max={1000}
              onChangeCommitted={(e: any, value) => {
                this.setState({
                  product: {
                    ...this.state.product,
                    price: value
                  }
                });
              }}
            />
          </div>
          <div className="col-lg-4 align-self">
            <Button
              onClick={() => {
                this.setState({
                  products: [...this.state.products, this.state.product]
                });
              }}
              variant="contained"
              color="primary"
            >
              Add product
            </Button>
          </div>
        </div>

        <div className="row">{this.state.product.name || "No Product"}</div>
        <div className="row">{this.state.product.price || "No Product"}</div>
        <div className="row">
          {this.state.products.map((p: any) => {
            return (
              <div>
                {" "}
                <h6>
                  {" "}
                  {p.name} {p.price}{" "}
                </h6>{" "}
              </div>
            );
          })}
        </div>

        <AppBar position="static">
          <Tabs
            value={tabValue}
            onChange={(e, value) => {
              this.setState({ tabValue: value });
            }}
            aria-label="simple tabs example"
          >
            <Tab label="Item One" {...a11yProps(0)} />
            <Tab label="Item Two" {...a11yProps(1)} />
            <Tab label="Item Three" {...a11yProps(2)} />
          </Tabs>
        </AppBar>
        <TabPanel value={tabValue} index={0}>
          Item!!!0000
        </TabPanel>
        <TabPanel value={tabValue} index={1}>
          Item!!!0000Item!!!0000Item!!!0000Item!!!0000Item!!!0000
        </TabPanel>
        <TabPanel value={tabValue} index={2}>
          Item!!!0000Item!!!0000Item!!!0000Item!!!0000Item!!!0000Item!!!0000Item!!!0000
        </TabPanel>
      </div>
    );
  }
}

function TabPanel(props: any) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      <Box p={3}>{children}</Box>
    </Typography>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`
  };
}
