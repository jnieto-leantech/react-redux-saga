import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getCharactersSelector, loadCharacters } from "redux/characters";

const Home = () => {
  const dispatch = useDispatch();
  const characters = useSelector(getCharactersSelector);

  useEffect(() => {
    dispatch(loadCharacters());
  }, []);

  return <p>great!</p>;
};

export default Home;
