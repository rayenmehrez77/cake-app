import React, { useState, useEffect } from "react";

import axios from "axios";
import { auth, createUserProfileDocument } from "../firebase/firebase.utils";

const APP_KEY = "a3ebdd55d602c17ef048d6d174bd6314";
const APP_ID = "70c9c027";

const rootUrl = `https://api.edamam.com/search?q=cakes&app_id=${APP_ID}&app_key=${APP_KEY}`;

const EdamamContext = React.createContext();

const EdamamProvider = ({ children }) => {
  const [recipes, setRecipes] = useState([]);
  const [user, setUser] = useState(null);

  // Request loading
  const [isLoading, setIsloading] = useState(false);

  const fetchData = async () => {
    setIsloading(true);
    await axios(rootUrl)
      .then(({ data }) => {
        setRecipes(data.hits);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchData();
    setIsloading(false);
  }, []);

  useEffect(() => {
    let unsubscribeFromAuth = null;
    unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          setUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      }
      setUser(userAuth);
    });

    return () => {
      unsubscribeFromAuth();
    };
  }, []);
  return (
    <EdamamContext.Provider value={{ recipes, isLoading, user }}>
      {children}
    </EdamamContext.Provider>
  );
};

export { EdamamContext, EdamamProvider };
