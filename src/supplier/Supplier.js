import { Button, TextField } from "@mui/material";
import axios from "axios";
import { Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
import { baseUrl } from "../utils/baseUrls";

const Supplier = () => {
  const [supplier, setSupplier] = useState([]);
  const [singleSupplier, setSingleSupplier] = useState(null);

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
  }, [supplier]);

  const postSupplier = async (values) => {
    try {
      await axios.post(`${baseUrl}/supplier/post`, values);
      getSupplierData();
    } catch (error) {
      console.log(error);
    }
  };

  const getSingleRecord = async (id) => {
    try {
      const response = await axios.get(`${baseUrl}/supplier/get/${id}`);
      setSingleSupplier(response?.data?.data);
    } catch (error) {
      console.log(error);
    }
  };

  const updateSupplier = async (id, values) => {
    try {
      await axios.patch(`${baseUrl}/supplier/update/${id}`, values);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteSupplier = async (id) => {
    try {
      await axios.delete(`${baseUrl}/supplier/delete/${id}`);
      getSupplierData();
    } catch (error) {
      console.log(error);
    }
  };

  const initialValue = {
    supplier_Category: singleSupplier?.supplier_Category || "",
    supplier_Name: singleSupplier?.supplier_Name || "",
    contact_Number: singleSupplier?.contact_Number || "",
    currency: singleSupplier?.currency || "",
    roe: singleSupplier?.roe || "",
    commision: singleSupplier?.commision || "",
    email: singleSupplier?.email || "",
    address: singleSupplier?.address || "",
  };

  const handlSubmit = (values, { resetForm }) => {
    if (singleSupplier?.id) {
      const id = singleSupplier?.id;
      updateSupplier(id, values);
      setSingleSupplier(null);
      resetForm();
    } else {
      postSupplier(values);
      resetForm();
    }
  };

  return (
    <>
      <div className="bg-blue-500 p-4 text-center text-white text-xl font-bold ">
        Supplier Data
      </div>

      <Formik
        initialValues={initialValue}
        onSubmit={handlSubmit}
        enableReinitialize
      >
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
                  {singleSupplier?.id ? "Update" : "Save"}
                </Button>
              </div>
            </div>
          </Form>
        )}
      </Formik>

      <div className="container mx-auto my-20">
        <table className="w-full table-fixed border-collapse border border-gray-300">
          <thead>
            <tr>
              <th className="border border-gray-300">Supplier Category</th>
              <th className="border border-gray-300">Supplier Name</th>
              <th className="border border-gray-300">Contact Number</th>
              <th className="border border-gray-300">Currency</th>
              <th className="border border-gray-300">ROE</th>
              <th className="border border-gray-300">Commision</th>
              <th className="border border-gray-300">Email</th>
              <th className="border border-gray-300">Address</th>
              <th className="border border-gray-300">Action</th>
            </tr>
          </thead>
          <tbody>
            {supplier?.map((data, index) => (
              <tr key={index}>
                <td className="border border-gray-300">
                  {data?.supplier_Category}
                </td>
                <td className="border border-gray-300">
                  {data?.supplier_Name}
                </td>
                <td className="border border-gray-300">
                  {data?.contact_Number}
                </td>
                <td className="border border-gray-300">{data?.currency}</td>
                <td className="border border-gray-300">{data?.roe}</td>
                <td className="border border-gray-300">{data?.commision}</td>
                <td className="border border-gray-300 whitespace-normal break-words ">
                  {data?.email}
                </td>
                <td className="border border-gray-300 break-words">
                  {data?.address}
                </td>
                <td className="border border-gray-300">
                  <p
                    className="text-green-500 cursor-pointer"
                    onClick={() => {
                      getSingleRecord(data?.id);
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                  >
                    Edit
                  </p>
                  <p
                    className="text-red-500 cursor-pointer"
                    onClick={() => {
                      const id = data?.id;
                      deleteSupplier(id);
                    }}
                  >
                    Delete
                  </p>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Supplier;
