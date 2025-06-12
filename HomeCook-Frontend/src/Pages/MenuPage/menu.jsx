import React, { useEffect, useState } from "react";
import Section from "../../components/Menu/section";
import ItemCard from "../../components/Menu/itemcard";
import AddFoodItemForm from "../../components/Menu/AddFoodItemForm";
import homebackground from "../../assets/homebackground.png";

const Menu = () => {
  const [todayMenu, setTodayMenu] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showForm, setShowForm] = useState(false);

  // Fetch today's menu when component mounts
  useEffect(() => {
    fetchMenu();
  }, []);

  // Function to fetch today's menu data
  const fetchMenu = async () => {
    setLoading(true);
    try {
      const response = await fetch("http://localhost:5000/api/foods/today");
      if (!response.ok) throw new Error("Failed to fetch menu");
      const data = await response.json();
      setTodayMenu(data);
    } catch (error) {
      console.error(error);
      setTodayMenu([]);
    } finally {
      setLoading(false);
    }
  };

  // Function to handle adding a new food item
  const handleAddFood = async (formData) => {
    try {
      const response = await fetch("http://localhost:5000/api/foods", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          image: formData.image,
          price: Number(formData.price),
          availableDay: formData.availableDay,
        }),
      });

      if (response.ok) {
        alert("Food item added successfully!");
        setShowForm(false);
        fetchMenu(); // Refresh the menu
      } else {
        alert("Failed to add food item.");
      }
    } catch (error) {
      console.error("Error adding food:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div>
      <div className="home-bannerImage-container">
        <img src={homebackground} alt="Home Banner" />
      </div>

      <Section />

      <div className="menu-header flex justify-between items-center">
        <h2>Today's Menu</h2>
        <button
          className="mb-4 px-6 py-3  font-semibold rounded-lg shadow-md
                     "
          onClick={() => setShowForm(true)}
        >
          Add New Food Item
        </button>
      </div>

      <div className="menu-card-container">
        {loading ? (
          <p>Loading menu...</p>
        ) : todayMenu.length > 0 ? (
          todayMenu.map((item, index) => (
            <ItemCard
              key={index}
              name={item.name}
              image={item.image}
              price={item.price}
            />
          ))
        ) : (
          <p>No menu available today.</p>
        )}
      </div>

      {showForm && (
        <AddFoodItemForm onClose={() => setShowForm(false)} onSubmit={handleAddFood} />
      )}
    </div>
  );
};

export default Menu;
