//import { Menu } from "./Menu";
//import { Cards } from "./card";
import { useState, useEffect } from "react";
import { API_CLIENT } from "../shared/api_client";
export const Product = () => {
  const [foodData, setFoodData] = useState({});
  const [index, setIndex] = useState(0);

  // useEffect(() => {
  //   const promise = API_CLIENT.get(process.env.REACT_APP_FOOD_URL);
  //   promise
  //     .then((result) => {
  //       console.log(result.data.category);
  //       // setFoodData(result.data.category);
  //     })
  //     .catch((err) => console.log("Network Err ", err));
  // }, []);


//   const menusTitle = ["Songs", "Albums", "Artists"];
//   return (
//     <>
//       <Menu setIndex={setIndex} index = {index}/>
//       <>{foodData.Song?foodData[menusTitle[index]].map((food,i) => <Cards food={food} key={i}/>):<></>}</>
//   </>
// );
};