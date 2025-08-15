import { useState } from "react";
import axios from "axios";

interface User {
  name: string;
  picture: string;
}
export default function useIterator(url: string) {

  let [users, updateUsers] = useState([]);
  let [index, setUserIndex] = useState(0);
  let [isLoading, setIsLoading] = useState(false);
  const fetchUser = () => {
    axios(url).then((res,) => {

    })
  }
  const next = () => {
    fetchUser();

  };
  const previous = () => { };

  return [users, users[index], isLoading, next, previous];
}

