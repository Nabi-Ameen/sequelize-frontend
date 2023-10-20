import { Button, Checkbox, FormControlLabel, TextField } from "@mui/material";
import { Form, Formik } from "formik";
import React, { useState } from "react";

const SupplierRuls = () => {
  const [supplier, setSupplier] = useState([]);
  const [singleSupplier, setSingleSupplier] = useState(null);
  const initialValue = {
    selectType: "",
    image: "",
    header: "",
    description: "",
    status: "",
  };

  const handlSubmit = (values, { resetForm }) => {
    //    if (singleSupplier?.id) {
    //      const id = singleSupplier?.id;
    //      updateSupplier(id, values);
    //      setSingleSupplier(null);
    //      resetForm();
    //    } else {
    //      postSupplier(values);
    //      resetForm();
    //    }
  };

  return (
    <>
      <div className="bg-blue-500 p-4 text-center text-white text-xl font-bold ">
        Supplier Rules
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
                    id="selectType"
                    label="Select Type"
                    variant="outlined"
                    name="selectType"
                    value={values?.selectType}
                    onChange={(e) =>
                      setFieldValue("selectType", e.target.value)
                    }
                  />
                </div>
                <div className="flex-1">
                  <TextField
                    type="file"
                    id="image"
                    variant="outlined"
                    name="image"
                    className="w-10/12"
                    value={values?.image}
                    onChange={(e) => setFieldValue("image", e.target.value)}
                  />
                </div>
                <div className="flex-1">
                  <TextField
                    id="header"
                    label="Header"
                    variant="outlined"
                    name="header"
                    value={values?.header}
                    onChange={(e) => setFieldValue("header", e.target.value)}
                  />
                </div>
                <div className="flex-1">
                  <TextField
                    id="description"
                    label="Description"
                    variant="outlined"
                    name="description"
                    value={values?.description}
                    onChange={(e) =>
                      setFieldValue("description", e.target.value)
                    }
                  />
                </div>
                <div className="flex-1">
                  <FormControlLabel
                    control={
                      <Checkbox
                        defaultChecked
                        sx={{ "& .MuiSvgIcon-root": { fontSize: 28 } }}
                      />
                    }
                    label="status"
                  />
                </div>
              </div>

              <div className="flex justify-center">
                <Button type="submit" variant="contained">
                  Save
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
              <th className="border border-gray-300">Select Type</th>
              <th className="border border-gray-300">image</th>
              <th className="border border-gray-300">Heading</th>
              <th className="border border-gray-300">Description</th>
              <th className="border border-gray-300">Staus</th>
              <th className="border border-gray-300">Action</th>
            </tr>
          </thead>
          <tbody>
            {supplier?.map((data, index) => (
              <tr key={index}>
                <td className="border border-gray-300">{data?.SelectType}</td>
                <td className="border border-gray-300">{data?.image}</td>
                <td className="border border-gray-300">{data?.heading}</td>
                <td className="border border-gray-300">{data?.description}</td>
                <td className="border border-gray-300">{data?.status}</td>
                <td className="border border-gray-300">
                  <p
                    className="text-green-500 cursor-pointer"
                    onClick={() => {
                      //   getSingleRecord(data?.id);
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                  >
                    Edit
                  </p>
                  <p
                    className="text-red-500 cursor-pointer"
                    onClick={() => {
                      const id = data?.id;
                      //   deleteSupplier(id);
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

export default SupplierRuls;
