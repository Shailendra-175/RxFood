// src/components/BookAppointment.jsx
import React, { useState } from "react";

function BookAppointment() {
  const [selectedTime, setSelectedTime] = useState("");

  // Generate 15-min interval slots from 9:00 AM to 6:00 PM
  const generateTimeSlots = () => {
    const slots = [];
    let start = 9 * 60; // 9:00 AM in minutes
    const end = 18 * 60; // 6:00 PM in minutes

    while (start <= end) {
      const h = Math.floor(start / 60);
      const m = start % 60;
      const hour = h < 10 ? `0${h}` : h;
      const minute = m === 0 ? "00" : m;
      slots.push(`${hour}:${minute}`);
      start += 15;
    }
    return slots;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `Appointment booked on ${e.target.date.value} at ${selectedTime} ✅`
    );
  };

  const timeSlots = generateTimeSlots();

  return (
    <div className="appointment-container">
      <h2>Book An Appointment</h2>
      <p>
        Take the first step towards optimal well-being and secure your
        consultation with the foremost top Nutritionist in Delhi.
      </p>

      <form className="appointment-form" onSubmit={handleSubmit}>
        <input type="text" placeholder="Full Name" required />
        <input type="email" placeholder="Email" required />
        <input type="tel" placeholder="Enter your number" required />

        <div className="form-row">
          <input type="number" placeholder="Age" required />
          <select required>
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>

        <input type="date" name="date" required />

        <select
          value={selectedTime}
          onChange={(e) => setSelectedTime(e.target.value)}
          required
        >
          <option value="">Select Time Slot</option>
          {timeSlots.map((slot, idx) => (
            <option key={idx} value={slot}>
              {slot}
            </option>
          ))}
        </select>

        <textarea placeholder="Your Message" rows="4" required></textarea>

        <button type="submit">Book Appointment</button>
      </form>
    </div>
  );
}

export default BookAppointment;
