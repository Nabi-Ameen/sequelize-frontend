import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { Form, Formik, FieldArray } from "formik";
import React from "react";

const OneToMany = () => {
  const initialValues = {
    total_seats: "",
    select_Supp: "",
    group_type: "",
    pnr: "",

    passanger: [{ passangerType: "", price_passanger: "", supp_pay_bill: "" }],
    flight: [
      { flight: "", flt_number: "", origin: "", destination: "", bag_info: "" },
    ],
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
  const passangerType = [
    { id: 1, passname: "Adult" },
    { id: 2, passname: "Child" },
    { id: 3, passname: "Infant" },
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

              <FieldArray
                name="passanger"
                render={(arrayHelpers) => (
                  <div>
                    {values.passanger.map((pass, index) => (
                      <div className="flex my-10 w-9/12 space-x-8" key={index}>
                        <div className="flex-1">
                          <FormControl variant="outlined" fullWidth>
                            <InputLabel id={`passangerType-label-${index}`}>
                              passanger Type
                            </InputLabel>
                            <Select
                              labelId={`passangerType-label-${index}`}
                              id={`passangerType-${index}`}
                              onChange={(e) => {
                                setFieldValue(
                                  `passanger[${index}].passangerType`,
                                  e.target.value
                                );
                              }}
                              value={values.passanger[index].passangerType}
                            >
                              {passangerType?.map((option) => (
                                <MenuItem
                                  value={option?.id}
                                  sx={{ m: 1, bgcolor: "#fff" }}
                                  key={option?.id}
                                >
                                  {option?.passname}
                                </MenuItem>
                              ))}
                            </Select>
                          </FormControl>
                        </div>
                        <div className="flex-1">
                          <TextField
                            id={`passanger[${index}].price_passanger`}
                            label="price_passanger"
                            variant="outlined"
                            value={values.passanger[index].price_passanger}
                            onChange={(e) =>
                              setFieldValue(
                                `passanger[${index}].price_passanger`,
                                e.target.value
                              )
                            }
                          />
                        </div>
                        <div className="flex-1">
                          <TextField
                            id={`passanger[${index}].supp_pay_bill`}
                            label="supp_pay_bill"
                            variant="outlined"
                            value={values.passanger[index].supp_pay_bill}
                            onChange={(e) =>
                              setFieldValue(
                                `passanger[${index}].supp_pay_bill`,
                                e.target.value
                              )
                            }
                          />
                        </div>
                        <div className="flex-1 space-x-2">
                          {index === 0 ? (
                            <button
                              type="button"
                              disabled={values.passanger.length === 3}
                              onClick={() =>
                                arrayHelpers.push({
                                  passangerType: "",
                                  price_passanger: "",
                                  supp_pay_bill: "",
                                })
                              }
                              className="px-6 py-1 rounded-md mt-2 bg-cyan-600 text-white text-lg font-semibold text-center"
                            >
                              +Pax
                            </button>
                          ) : (
                            <button
                              type="button"
                              onClick={() => arrayHelpers.remove(index)}
                              className="px-6 py-1 rounded-md mt-2 bg-red-500 text-white text-lg font-semibold text-center"
                            >
                              -Pax
                            </button>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              />

              <FieldArray
                name="flight"
                render={(arrayHelpers) => (
                  <div>
                    {values.flight.map((flt, index) => (
                      <div className="flex my-10 space-x-8" key={index}>
                        <div className="flex-1">
                          <TextField
                            id={`flight[${index}].flight`}
                            label="Flight"
                            variant="outlined"
                            value={values.flight[index].flight}
                            onChange={(e) =>
                              setFieldValue(
                                `flight[${index}].flight`,
                                e.target.value
                              )
                            }
                          />
                        </div>
                        <div className="flex-1">
                          <TextField
                            id={`flight[${index}].flt_number`}
                            label="Flight Number"
                            variant="outlined"
                            value={values.flight[index].flt_number}
                            onChange={(e) =>
                              setFieldValue(
                                `flight[${index}].flt_number`,
                                e.target.value
                              )
                            }
                          />
                        </div>
                        <div className="flex-1">
                          <TextField
                            id={`flight[${index}].origin`}
                            label="Origin"
                            variant="outlined"
                            value={values.flight[index].origin}
                            onChange={(e) =>
                              setFieldValue(
                                `flight[${index}].origin`,
                                e.target.value
                              )
                            }
                          />
                        </div>
                        <div className="flex-1">
                          <TextField
                            id={`flight[${index}].destination`}
                            label="Destination"
                            variant="outlined"
                            value={values.flight[index].destination}
                            onChange={(e) =>
                              setFieldValue(
                                `flight[${index}].destination`,
                                e.target.value
                              )
                            }
                          />
                        </div>
                        <div className="flex-1">
                          <TextField
                            id={`flight[${index}].bag_info`}
                            label="Baggage Info"
                            variant="outlined"
                            value={values.flight[index].bag_info}
                            onChange={(e) =>
                              setFieldValue(
                                `flight[${index}].bag_info`,
                                e.target.value
                              )
                            }
                          />
                        </div>
                        <div className="flex-1 space-x-2">
                          {index === 0 ? (
                            <button
                              type="button"
                              disabled={values.flight.length === 3}
                              onClick={() =>
                                arrayHelpers.push({
                                  flight: "",
                                  flt_number: "",
                                  origin: "",
                                  destination: "",
                                  bag_info: "",
                                })
                              }
                              className="px-6 py-1 rounded-md mt-2 bg-cyan-600 text-white text-lg font-semibold text-center"
                            >
                              +Flight
                            </button>
                          ) : (
                            <button
                              type="button"
                              onClick={() => arrayHelpers.remove(index)}
                              className="px-6 py-1 rounded-md mt-2 bg-red-500 text-white text-lg font-semibold text-center"
                            >
                              -Flight
                            </button>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              />

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
