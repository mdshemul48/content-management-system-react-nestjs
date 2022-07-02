import { useContext } from "react";
import UserContext from "../Context/UserContext";

const useUser = () => useContext(UserContext);

export default useUser;
