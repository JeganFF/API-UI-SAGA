import { useSelector, useDispatch } from "react-redux";
import { place, get_all_place } from "../redux/action";
import { useEffect,useState} from "react";

const Header = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(place());
  }, []);


  const places = useSelector((state) => state.place_data);
  const all_places = useSelector((state) => state.all_place_data);


  console.log(places);
  console.log(all_places);


  const [placeSelected,SetPlace] = useState()
  const filtered_places = all_places.filter(places =>places.city_name === placeSelected)


  return (
    <div className="header">
      <label for="cars">Choose place</label>
      <select
        name="cars"
        id="cars"
        onChange={(event) => dispatch(get_all_place(event.target.value),SetPlace(event.target.value))}
      >
        {places?.map((place,index) => (
          <option value={place.city_name}>{place.city_name}</option>
        ))}
      </select>
      <select
        name="cars"
        id="cars"
        onChange={(event) => dispatch(get_all_place(event.target.value))}
      >
        
        {filtered_places?.map((place,index) => (
          <option value={place.city_name}>{place.locality_name}</option>
        ))}
      </select>
    </div>
  );
};

export default Header;
