import styles from "./App.module.css";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Container from "react-bootstrap/Container";
import { Switch, Route } from "react-router-dom";
import "./api/axiosDefaults";
import RegistrationForm from "./pages/auth/RegistrationForm";
import LogInForm from "./pages/auth/LogInForm";
import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const CurrentUserContext = createContext();
export const setCurrentUserContext = createContext();

function App() {
  const [currentUser, setCurrentUser] = useState(null);

  const handleMount = async () => {
    try {
      const { data } = await axios.get("dj-rest-auth/user/");
      // console.log(data);
      setCurrentUser(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    handleMount();
  }, []);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <setCurrentUserContext.Provider value={setCurrentUser}>
        <div className={styles.App}>
          <NavBar />

          <Container className={styles.Main}>
            <Switch>
              <Route exact path="/" render={() => <h1>Artworks</h1>} />
              <Route
                exact
                path="/registration"
                render={() => <RegistrationForm />}
              />
              <Route exact path="/login" render={() => <LogInForm />} />
              <Route exact path="/about" render={() => <h1>About</h1>} />
              <Route render={() => <p>Page not found!</p>} />
            </Switch>
          </Container>
          <Footer />
        </div>
      </setCurrentUserContext.Provider>
    </CurrentUserContext.Provider>
  );
}

export default App;
