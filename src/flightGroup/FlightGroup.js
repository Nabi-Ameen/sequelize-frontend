import { TextField } from "@mui/material";
import { Form, Formik } from "formik";
import React from "react";

const FlightGroup = () => {
  return (
    <div className="">
      <Formik
        initialValues={{ fname: "", lname: "", address: "" }}
        onSubmit={(values) => {
          console.log("Values", values);
        }}
      >
        {({ values, setFieldValue }) => (
          <Form>
            <div className="container border mx-auto mt-10 p-5 flex items-center space-x-8">
              <div>
                <TextField
                  id="standard-basic"
                  label="first Name"
                  variant="standard"
                  name="fname"
                  value={values?.fname}
                  onChange={(e) => setFieldValue("fname", e.target.value)}
                />
              </div>
              <div>
                <TextField
                  id="standard-basic"
                  label="Last Name"
                  variant="standard"
                  name="lname"
                  value={values?.lname}
                  onChange={(e) => setFieldValue("lname", e.target.value)}
                />
              </div>
              <div>
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
            <button type="submit">save</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default FlightGroup;
