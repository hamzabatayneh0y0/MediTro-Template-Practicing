import { memo, useState } from "react";
import Button from "react-bootstrap/esm/Button";
import { Link } from "react-router-dom";
function BookingForm() {
  let [form, setform] = useState({
    department: "",
    doctor: "",
    name: "",
    phone: "",
    date: "",
  });
  function handleSubmet() {
    if (
      !form.name ||
      !form.phone ||
      !form.department ||
      !form.doctor ||
      !form.date
    ) {
      alert("Please fill in all fields.");
      return;
    }
    const phonePattern = /^07[7-9]{1}[0-9]{7}$/;
    if (!phonePattern.test(form.phone)) {
      alert(
        "Please enter a valid Jordanian phone number (starts with 07 followed by 8 digits)."
      );
      return;
    }
    setform({
      department: "",
      doctor: "",
      name: "",
      phone: "",
      date: "",
    });
  }
  return (
    <form
      className="col-md-6"
      action=""
      noValidate
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmet();
      }}
    >
    <h2 className="fw-bold text-center mb-5">Book Appointment</h2>

      <select
        className="p-3 rounded-4"
        name="department"
        id="department"
        value={form.department}
        onChange={(e) => {
          setform({ ...form, department: e.target.value });
        }}
        required
      >
        <option value="" disabled>
          Select Department
        </option>
        <option value="one">one</option>
        <option value="two">two</option>
        <option value="three">three</option>
      </select>

      <select
        className="p-3 rounded-4"
        name="doctor"
        id="doctor"
        value={form.doctor}
        onChange={(e) => {
          setform({ ...form, doctor: e.target.value });
        }}
        required
      >
        <option value="" disabled>
          Select Doctor
        </option>
        <option value="one">one</option>
        <option value="two">two</option>
        <option value="three">three</option>
      </select>
      <input
        className="p-3 rounded-4"
        type="text"
        name="name"
        id="name"
        placeholder="Your Name"
        value={form.name}
        onChange={(e) => {
          setform({ ...form, name: e.target.value });
        }}
        required
      />
      <input
        className="p-3 rounded-4"
        type="number"
        name="name"
        id="name"
        placeholder="Phone Number"
        value={form.phone}
        required
        onChange={(e) => {
          setform({ ...form, phone: e.target.value });
        }}
      />
      <input
        className="p-3 rounded-4"
        type="date"
        name="date"
        id="date"
        value={form.date}
        required
        onChange={(e) => {
          setform({ ...form, date: e.target.value });
        }}
      />
      <Button
        type="submit"
        className="py-2 px-4 fs-5 text-capitalize mt-3 mx-auto"
        style={{
          backgroundColor: "var(--hover-color)",
          border: "none",
          width: "fit-content",
        }}
      >
        Appoitment Now
      </Button>
    </form>
  );
}
export default memo(BookingForm);
