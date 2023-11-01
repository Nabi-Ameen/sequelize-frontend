import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { Form, Formik } from "formik";
import React from "react";

const OneToMany = () => {
  const initialValues = {
    total_seats: "",
    select_Supp: "",
    group_type: "",
    pnr: "",
  };
  const handleSubmit = (values) => {
    console.log("values", values);
  };

  const supplierList = [
    { id: 1, supp_name: "PIA" },
    { id: 2, supp_name: "Seriene" },
    { id: 3, supp_name: "Fly-jinnah" },
  ];

  const grouptype = [
    { id: 1, groupname: "Visa" },
    { id: 2, groupname: "Flight" },
    { id: 3, groupname: "Hotel" },
  ];
  return (
    <>
      <div className="p-4 bg-cyan-600 text-white text-lg font-semibold text-center">
        One-To-Many Relations
      </div>

      <div className="container mx-auto my-6">
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          enableReinitialize
        >
          {({ values, setFieldValue }) => (
            <Form>
              <div className="flex space-x-8 w-8/12">
                <div className="flex-1">
                  <TextField
                    id="total_seats"
                    label="total_seats"
                    variant="outlined"
                    name="total_seats"
                    value={values?.total_seats}
                    onChange={(e) =>
                      setFieldValue("total_seats", e.target.value)
                    }
                  />
                </div>
                <div className="flex-1">
                  <FormControl variant="outlined" fullWidth>
                    <InputLabel id="demo-simple-select-standard-label">
                      Select Supplier
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-standard-label"
                      id="demo-simple-select-standard"
                      onChange={(e) => {
                        setFieldValue("select_Supp", e.target.value);
                      }}
                      value={values?.select_Supp}
                    >
                      {supplierList?.map((option) => (
                        <MenuItem
                          value={option?.id}
                          sx={{ m: 1, bgcolor: "#fff" }}
                          key={option?.id}
                        >
                          {option?.supp_name}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </div>
                <div className="flex-1">
                  <FormControl variant="outlined" fullWidth>
                    <InputLabel id="demo-simple-select-standard-label">
                      Select Group Type
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-standard-label"
                      id="demo-simple-select-standard"
                      onChange={(e) => {
                        setFieldValue("group_type", e.target.value);
                      }}
                      value={values?.group_type}
                    >
                      {grouptype?.map((option) => (
                        <MenuItem
                          value={option?.id}
                          sx={{ m: 1, bgcolor: "#fff" }}
                          key={option?.id}
                        >
                          {option?.groupname}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </div>
                <div className="flex-1">
                  <TextField
                    id="pnr"
                    label="PNR"
                    variant="outlined"
                    name="pnr"
                    value={values?.pnr}
                    onChange={(e) => setFieldValue("pnr", e.target.value)}
                  />
                </div>
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="px-6 py-2 rounded-md my-5 bg-cyan-600 text-white text-lg font-semibold text-center"
                >
                  Save
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
};

export default OneToMany;
