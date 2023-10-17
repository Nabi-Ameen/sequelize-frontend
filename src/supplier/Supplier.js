import { Button, TextField } from "@mui/material";
import axios from "axios";
import { Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
import { baseUrl } from "../utils/baseUrls";

const Supplier = () => {
  const [supplier, setSupplier] = useState([]);

  const getSupplierData = async () => {
    try {
      const response = await axios.get(`${baseUrl}/supplier/get`);
      setSupplier(response?.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSupplierData();
  }, []);

  const initialValue = {
    supplier_Category: "",
    supplier_Name: "",
    contact_Number: "",
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
                    id="supplier_Category"
                    label="Supplier Category"
                    variant="outlined"
                    name="supplier_Category"
                    value={values?.supplier_Category}
                    onChange={(e) =>
                      setFieldValue("supplier_Category", e.target.value)
                    }
                  />
                </div>
                <div className="flex-1">
                  <TextField
                    id="supplier_Name"
                    label="Supplier Name"
                    variant="outlined"
                    name="supplier_Name"
                    value={values?.supplier_Name}
                    onChange={(e) =>
                      setFieldValue("supplier_Name", e.target.value)
                    }
                  />
                </div>
                <div className="flex-1">
                  <TextField
                    id="contact_Number"
                    label="Contact Number"
                    variant="outlined"
                    name="contact_Number"
                    value={values?.contact_Number}
                    onChange={(e) =>
                      setFieldValue("contact_Number", e.target.value)
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

      <div className="container mx-auto my-20">
        <table className="w-full">
          <thead>
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
          </thead>
          <tbody>
            {supplier?.map((data, index) => (
              <div key={index}>
                <tr className="flex">
                  <td className="flex-1">{data?.supplier_Category}</td>
                  <td className="flex-1">{data?.supplier_Name}</td>
                  <td className="flex-1">{data?.contact_Number}</td>
                  <td className="flex-1">{data?.currency}</td>
                  <td className="flex-1">{data?.roe}</td>
                  <td className="flex-1">{data?.commision}</td>
                  <td className="flex-1">{data?.email}</td>
                  <td className="flex-1">{data?.address}</td>
                  <td className="flex-1">
                    <p className="text-green-500">Edit</p>
                    <p className="text-red-500">Delete</p>
                  </td>
                </tr>
              </div>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Supplier;
