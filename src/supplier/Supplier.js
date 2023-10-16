import { Button, TextField } from "@mui/material";
import { Form, Formik } from "formik";
import React from "react";

const Supplier = () => {
  const initialValue = {
    supplierCategory: "",
    supplierName: "",
    contactNumber: "",
    currency: "",
    roe: "",
    commision: "",
    email: "",
    address: "",
  };

  const handlSubmit = (values) => {
    console.log("Values", values);
  };

  return (
    <>
      <div className="bg-blue-500 p-4 text-center text-white text-xl font-bold ">
        Supplier Data
      </div>

      <Formik initialValues={initialValue} onSubmit={handlSubmit}>
        {({ values, setFieldValue }) => (
          <Form>
            <div className="container mx-auto border p-5 my-5 space-y-10">
              <div className="flex">
                <div className="flex-1">
                  <TextField
                    id="supplierCategory"
                    label="Supplier Category"
                    variant="outlined"
                    name="supplierCategory"
                    value={values?.supplierCategory}
                    onChange={(e) =>
                      setFieldValue("supplierCategory", e.target.value)
                    }
                  />
                </div>
                <div className="flex-1">
                  <TextField
                    id="supplierName"
                    label="Supplier Name"
                    variant="outlined"
                    name="supplierName"
                    value={values?.supplierName}
                    onChange={(e) =>
                      setFieldValue("supplierName", e.target.value)
                    }
                  />
                </div>
                <div className="flex-1">
                  <TextField
                    id="contactNumber"
                    label="Contact Number"
                    variant="outlined"
                    name="contactNumber"
                    value={values?.contactNumber}
                    onChange={(e) =>
                      setFieldValue("contactNumber", e.target.value)
                    }
                  />
                </div>
                <div className="flex-1">
                  <TextField
                    id="currency"
                    label="Currency"
                    variant="outlined"
                    name="currency"
                    value={values?.currency}
                    onChange={(e) => setFieldValue("currency", e.target.value)}
                  />
                </div>
              </div>
              <div className="flex">
                <div className="flex-1">
                  <TextField
                    id="roe"
                    label="ROE"
                    variant="outlined"
                    name="roe"
                    value={values?.roe}
                    onChange={(e) => setFieldValue("roe", e.target.value)}
                  />
                </div>
                <div className="flex-1">
                  <TextField
                    id="commision"
                    label="Commision"
                    variant="outlined"
                    name="commision"
                    value={values?.commision}
                    onChange={(e) => setFieldValue("commision", e.target.value)}
                  />
                </div>
                <div className="flex-1">
                  <TextField
                    id="email"
                    label="Email"
                    variant="outlined"
                    name="email"
                    value={values?.email}
                    onChange={(e) => setFieldValue("email", e.target.value)}
                  />
                </div>
                <div className="flex-1">
                  <TextField
                    id="address"
                    label="Address"
                    variant="outlined"
                    name="address"
                    value={values?.address}
                    onChange={(e) => setFieldValue("address", e.target.value)}
                  />
                </div>
              </div>

              <div className="flex justify-center">
                <Button type="submit" variant="contained">
                  {" "}
                  Save{" "}
                </Button>
              </div>
            </div>
          </Form>
        )}
      </Formik>

      <div className="container mx-auto mt-20">
        <table className="w-full">
          <tr className="flex">
            <th className="flex-1">Supplier Category</th>
            <th className="flex-1">Supplier Name</th>
            <th className="flex-1">Contact Number</th>
            <th className="flex-1">Currency</th>
            <th className="flex-1">ROE</th>
            <th className="flex-1">Commision</th>
            <th className="flex-1">Email</th>
            <th className="flex-1">Address</th>
            <th className="flex-1">Action</th>
          </tr>
          <tr className="flex">
            <td className="flex-1">Supplier Category</td>
            <td className="flex-1">Supplier Name</td>
            <td className="flex-1">Contact Number</td>
            <td className="flex-1">Currency</td>
            <td className="flex-1">ROE</td>
            <td className="flex-1">Commision</td>
            <td className="flex-1">Email</td>
            <td className="flex-1">Address</td>
            <td className="flex-1">
              <p className="text-green-500">Edit</p>
              <p className="text-red-500">Delete</p>
            </td>
          </tr>
        </table>
      </div>
    </>
  );
};

export default Supplier;
