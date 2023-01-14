import React from "react";
import { useDispatch } from "react-redux";
import CountryList from "../../components/CountryList/CountryList";

import { fetchAllCountries } from "../../redux/actions";
import Appbar from "../../components/Appbar/Appbar";
import "../../styles/home.css";

const Home = () => {
  //initialize dispatch
  const dispatch = useDispatch();
  //dispatch fetchAllCountries when page loads
  React.useEffect(() => {
    dispatch(fetchAllCountries() as any);
  }, [dispatch]);
  const [drawerState, setDrawerState] = React.useState(false);
  //handle drawer state
  const handleDrawerState = (state: boolean) => {
    setDrawerState(state);
  };

  return (
    <div className="home">
      <Appbar onClick={handleDrawerState} drawerState={drawerState} />
      {/* Inner contents country list/result */}
      <CountryList />
    </div>
  );
};

export default Home;
