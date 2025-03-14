import React, { useState } from "react";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Reservation = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [phone, setPhone] = useState("");
  const [image, setImage] = useState("");

  const navigate = useNavigate();

  const handleReservation = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:4000/api/v1/reservation/send",
        { firstName, lastName, email, phone, date, time },
        { withCredentials: true }
      );

      toast.success(data.message);
      setImage(data.image); // Show image from response
      setFirstName("");
      setLastName("");
      setPhone("");
      setEmail("");
      setTime("");
      setDate("");
      navigate("/success");
    } catch (error) {
      toast.error(error.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <section className="reservation">
      <div className="container">
        <div className="banner">
          <img src="/table.jpg" alt="res" />
        </div>
        <div className="banner">
          <div className="reservation_form_box">
            <h1>MAKE A RESERVATION</h1>
            <p>For Further Questions, Please Call</p>
            <form onSubmit={handleReservation}>
              <div>
                <input type="text" placeholder="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                <input type="text" placeholder="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)} />
              </div>
              <div>
                <input type="date" placeholder="Date" value={date} onChange={(e) => setDate(e.target.value)} />
                <input type="time" placeholder="Time" value={time} onChange={(e) => setTime(e.target.value)} />
              </div>
              <div>
                <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type="number" placeholder="Phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
              </div>
              <button type="submit">
                RESERVE NOW <HiOutlineArrowNarrowRight />
              </button>
            </form>
          </div>
        </div>
        {image && (
          <div className="success-message">
            <h2>🎉 Registration Successful! 🎉</h2>
            <img src={image} alt="Sandwich" style={{ width: "300px", height: "200px" }} />
          </div>
        )}
      </div>
    </section>
  );
};

export default Reservation;
