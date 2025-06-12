import React, { useState } from "react";
import "./AddFoodItemForm.css"; 

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const AddFoodItemForm = ({ onClose, onSubmit }) => {
  const [form, setForm] = useState({
    name: "",
    image: "",
    price: "",
    availableDay: "Monday",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(form);
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal-box">
        <h2>Add New Food Item</h2>
        <form onSubmit={handleSubmit} className="food-form">
          <input
            type="text"
            name="name"
            placeholder="Dish Name"
            value={form.name}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="image"
            placeholder="Image URL or filename"
            value={form.image}
            onChange={handleChange}
            required
          />
          <input
            type="number"
            name="price"
            placeholder="Price"
            value={form.price}
            onChange={handleChange}
            required
          />
          <select name="availableDay" value={form.availableDay} onChange={handleChange}>
            {days.map((day) => (
              <option key={day} value={day}>
                {day}
              </option>
            ))}
          </select>
          <div className="form-buttons">
            <button type="submit">Submit</button>
            <button type="button" onClick={onClose} className="cancel-button">Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddFoodItemForm;
