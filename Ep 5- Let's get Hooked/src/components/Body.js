import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
import restaurantList from "../../utils/mockData";

const Body = () => {
  const [list, setList] = useState(restaurantList);
  const [searchText, setSearchText] = useState("");

  return (
    <div className="body">
      <div className="search-box">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = restaurantList.filter(
              (res) => res.info.avgRating > 4.5
            );
            setList(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>

        <input
          type="text"
          placeholder="search"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />

        <button
          className="search-btn"
          onClick={() => {
            const filteredRes = restaurantList.filter((res) =>
              res.info.name.toLowerCase().includes(searchText.toLowerCase())
            );
            setList(filteredRes);
          }}
        >
          Click Me
        </button>
      </div>

      <div className="restaurant-container">
        {list.map((restaurant) => (
          <RestaurantCard
            key={restaurant.info.id}
            restaurantData={restaurant}
          />
        ))}
      </div>
    </div>
  );
};

export default Body;
