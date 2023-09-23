import { useEffect, useState } from "react";
import FavoriteCard from "./FavoriteCard";

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);
  const [noData, setNoData] = useState("");

  const [isShow, setIsShow] = useState(false)

  const [totalPrice, setTotalPrice ] = useState(0)

  useEffect(() => {
    const favoriteItems = JSON.parse(localStorage.getItem("favorites"));
    if (favoriteItems) {
      setFavorites(favoriteItems);

      const total = favoriteItems.reduce((previousValue, currentValue)=> previousValue + currentValue.price,0)
      setTotalPrice(total)

    } else {
      setNoData("No Data Found");
    }
  }, []);
  const handleRemove = () => {
    localStorage.clear();
    setFavorites([]);
    setNoData("No Data Found");
  };

  return (
    <div>
      {favorites.length > 0 && (
        <div>
            <button
            onClick={handleRemove}
            className="px-5 py-2 bg-orange-400 mt-10 mx-auto block rounded-md"
            >
            Remove All
            </button>
            <h1>Total Price: {totalPrice.toFixed(2)}</h1>
        </div>
        
      )}
      <div>
        {noData ? (
          <p className=" h-[80vh] flex justify-center items-center">{noData}</p>
        ) : (
          <div className="grid grid-cols-2 gap-5 py-10">
            {
                isShow ? favorites.map((phone) => (
                    <FavoriteCard key={phone.id} phone={phone}></FavoriteCard>
                  )) 
                  :favorites.slice(0,2).map((phone) => (
                    <FavoriteCard key={phone.id} phone={phone}></FavoriteCard>
                  ))
            }

          </div>
          
        )}
      </div>
      {favorites.length > 2 && <button onClick={()=> setIsShow(!isShow)} className="px-5 py-2 bg-orange-400 mt-10 mx-auto block rounded-md">{isShow ? 'See Less' : ' See More' }</button>}
    </div>
  );
};

export default Favorites;
