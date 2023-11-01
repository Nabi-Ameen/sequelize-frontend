import { Button, Checkbox, FormControlLabel, TextField } from "@mui/material";
import axios from "axios";
import { Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
import { baseUrl } from "../utils/baseUrls";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SupplierRuls = () => {
  const [supplier, setSupplier] = useState([]);
  const [singlSupplierRule, setSingleSupplierRule] = useState(null);
  const [error, setError] = useState(null)

  const initialValue = {
    selectType: singlSupplierRule?.supplierType || "" ,
    image: singlSupplierRule?.image || "" ,
    header: singlSupplierRule?.header || "" ,
    description: singlSupplierRule?.description || "" ,
    status: singlSupplierRule?.status || ""
  };

  const getSupplierRulesData = async () => {
    try {
      await axios.get(`${baseUrl}/supplierRuls/suplierget`).then((res) => {
        setSupplier(res?.data);
      });
    } catch (error) {
      console.log(error);
    }
  };

  const getSingleSupplierRule = async (id) => {
    try {
      await axios
        .get(`${baseUrl}/supplierRuls/suplierget/${id}`)
        .then((res) => {
          setSingleSupplierRule(res?.data?.data);
        });
    } catch (error) {
      console.log("object", error);
    }
  };

  const deleteSingleSupplierRule = async (id) => {
    try {
      await axios
        .delete(`${baseUrl}/supplierRuls/delete/${id}`)
        getSupplierRulesData()
    } catch (error) {
      console.log("object", error);
    }
  };

  const updateSingleSupplierRule = async (id, values) => {
    const formData = new FormData();
    formData.append("supplierType", values?.selectType);
    formData.append("image", values?.image);
    formData.append("header", values?.header);
    formData.append("description", values?.description);
    formData.append("status", values?.status);
    try {
      await axios.patch( `${baseUrl}/supplierRuls/updatesupplier/${id}`,formData)
      .then(res=>{
      toast.success(res?.data?.message)
      })
      getSupplierRulesData();
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    getSupplierRulesData();
  }, [singlSupplierRule?.id]);

  const supplierRulsPost = async (values) => {
    const formData = new FormData();
    formData.append("supplierType", values?.selectType);
    formData.append("image", values?.image);
    formData.append("header", values?.header);
    formData.append("description", values?.description);
    formData.append("status", values?.status);

    try {
      await axios.post(`${baseUrl}/supplierRuls/suplierpost`, formData)
      .then(res=>{
        console.log("res", res)
        toast.success(res?.data?.message)
      })
      getSupplierRulesData();
    } catch (error) {
      console.error(error)
      toast.error(error?.response?.data?.message);
    }
  };

  const handlSubmit = (values, { resetForm }) => {
    if (singlSupplierRule?.id) {
      const id = singlSupplierRule?.id;
      updateSingleSupplierRule(id, values);
      setSingleSupplierRule(null)
      resetForm();
    } else {
      supplierRulsPost(values);
      resetForm();
    }
  };

  return (
    <>
      <div className="bg-blue-500 p-4 text-center text-white text-xl font-bold ">
        Supplier Rules
      </div>

      <ToastContainer />

      <Formik
        initialValues={initialValue}
        onSubmit={handlSubmit}
        enableReinitialize
      >
        {({ values, setFieldValue }) => (
          <Form enctype="multipart/form-data">
            <div className="container mx-auto border p-5 my-5 space-y-10">
              <div className="flex">
                <div className="flex-1">
                  <TextField
                    id="outlined-basic"
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
                    onChange={(e) => setFieldValue("image", e.target.files[0])}
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
                        checked={values?.status}
                        name="status"
                        onChange={(e) =>
                          setFieldValue("status", e.target.checked)
                        }
                        sx={{ "& .MuiSvgIcon-root": { fontSize: 28 } }}
                      />
                    }
                    label="status"
                  />
                </div>
              </div>

              <div className="flex justify-center">
                <Button type="submit" variant="contained">
                  {singlSupplierRule? "Updae" : "Save"}
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
                <td className="border border-gray-300">{data?.supplierType}</td>
                <td className="border border-gray-300">
                  <img
                    src={`${baseUrl}/supplierRuls/suplierget/${data?.image}`}
                    className="w-40 h-20 mx-auto object-cover"
                  />
                </td>
                <td className="border border-gray-300">{data?.header}</td>
                <td className="border border-gray-300">{data?.description}</td>
                <td className="border border-gray-300 pl-12">
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={data?.status}
                        // name="status"
                        // onChange={(e) =>
                        //   setFieldValue("status", e.target.checked)
                        // }
                        sx={{ "& .MuiSvgIcon-root": { fontSize: 28 } }}
                      />
                    }
                  />
                </td>
                <td className="border border-gray-300">
                  <p
                    className="text-green-500 cursor-pointer"
                    onClick={() => {
                      const id = data?.id;
                      getSingleSupplierRule(id);
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                  >
                    Edit
                  </p>
                  <p
                    className="text-red-500 cursor-pointer"
                    onClick={() => {
                      const id = data?.id;
                      deleteSingleSupplierRule(id)
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
