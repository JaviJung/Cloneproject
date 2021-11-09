//App 기본기능
import { useEffect, useState } from "react";
import AppRouter from "components/Router";
import { authService } from "fbase";


function App() {
  const [init, setinit] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(authService.currentUser);

  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      if (user) {
        setIsLoggedIn(user);
      }
      else {
        setIsLoggedIn(false);
      }
      setinit(true);
    });
  }, []);

  return (
    <>
    {init ? <AppRouter isLoggedIn={isLoggedIn} /> : "initializing..."}
    <footer>&copy; {new Date(). getFullYear()} Nwitter</footer>
    </>
  );
  
}

export default App;
