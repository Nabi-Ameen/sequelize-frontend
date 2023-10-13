import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { Form, Formik } from "formik";
import React from "react";

const FlightGroup = () => {
  return (
    <div className="border m-10">
      <Formik
        initialValues={{ title: "", fname: "", lname: "", address: "" }}
        onSubmit={(values) => {
          console.log("Values", values);
        }}
      >
        {({ values, setFieldValue }) => (
          <Form>
            <div className="container mx-auto mt-10 p-5 flex items-center space-x-8">
              <div className="flex-1">
                <FormControl>
                  <InputLabel id="demo-simple-select-label">title</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={values?.title}
                    label="title"
                    onChange={(e) => setFieldValue("title", e.target.value)}
                  >
                    <MenuItem value={10}>Mr</MenuItem>
                    <MenuItem value={20}>Mrs</MenuItem>
                    <MenuItem value={30}>Ms</MenuItem>
                  </Select>
                </FormControl>
              </div>
              <div className="flex-1">
                <TextField
                  id="standard-basic"
                  label="first Name"
                  variant="standard"
                  name="fname"
                  value={values?.fname}
                  onChange={(e) => setFieldValue("fname", e.target.value)}
                />
              </div>
              <div className="flex-1">
                <TextField
                  id="standard-basic"
                  label="Last Name"
                  variant="standard"
                  name="lname"
                  value={values?.lname}
                  onChange={(e) => setFieldValue("lname", e.target.value)}
                />
              </div>
              <div className="flex-1">
                <TextField
                  id="standard-basic"
                  label="Address"
                  variant="standard"
                  name="address"
                  value={values?.address}
                  onChange={(e) => setFieldValue("address", e.target.value)}
                />
              </div>
            </div>
            <div>
              <button type="submit">save</button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default FlightGroup;
