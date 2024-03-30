import styles from "./App.module.css";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Container from "react-bootstrap/Container";
import { Switch, Route } from "react-router-dom";
import "./api/axiosDefaults";
import RegistrationForm from "./pages/auth/RegistrationForm";
import LogInForm from "./pages/auth/LogInForm";
import PaintingCreateForm from "./pages/paintings/PaintingCreateForm";
import PaintingPage from "./pages/paintings/PaintingPage";
import PaintingsPage from "./pages/paintings/PaintingsPage";
import { useCurrentUser } from "./contexts/CurrentUserContext";
import PaintingEditForm from "./pages/paintings/PaintingEditForm";
import ProfilePage from "./pages/profiles/ProfilePage";
import UserPasswordForm from "./pages/profiles/UserPasswordForm";
import ProfileEditForm from "./pages/profiles/ProfileEditForm";
import ModalAlert from "./components/ModalAlert";
import { useState } from "react";
import CompleteProfile from "./pages/profiles/CompleteProfile";

function App() {
  const [modalShow, setModalShow] = useState(false);
  const currentUser = useCurrentUser();
  const profile_id = currentUser?.profile_id || "";

  return (
    <div className={styles.App}>
      <NavBar onModalShow={() => setModalShow(true)} />
      <ModalAlert
        show={modalShow}
        onHide={() => setModalShow(false)}
        title={
          <h4 className="mb-2 mt-2" style={{ color: "#802222" }}>
            To fully engage with our community, please complete your profile
          </h4>
        }
        heading={
          <h5 className="mb-4 mt-2">Here's what you'll be able to do:</h5>
        }
        content={
          <div>
            <ul>
              <li>
                <strong>Add Your Paintings:</strong> Showcase your artwork by
                uploading it to our gallery.
              </li>
              <li>
                <strong>Curate Your Watchlist:</strong> Keep an eye on your
                favorite pieces by adding them to your personal watchlist.
              </li>
              <li>
                <strong>Connect with Artists:</strong> Add other artists to your
                Faves list to follow their new work and updates.
              </li>
              <li>
                <strong>Participate in Discussions:</strong> Leave comments on
                paintings and join the conversation with artists and art lovers
                alike.
              </li>
              <li>
                <strong>Manage Your Account:</strong> Change your password and
                update your account settings with ease.
              </li>
            </ul>
            <p className="pt-2">
              Just click the button below to finalize your profile and start
              enjoying these benefits!
            </p>
          </div>
        }
      />

      <Container className={styles.Main}>
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <PaintingsPage message="No results found. Adjust your search options." />
            )}
          />
          <Route
            exact
            path="/favourites"
            render={() => (
              <PaintingsPage
                message="No results found. Adjust the search keyword or add an artist to Faves."
                filter={`owner__followed__owner__profile=${profile_id}&`}
              />
            )}
          />
          <Route
            exact
            path="/watchlist"
            render={() => (
              <PaintingsPage
                message="No results found. Adjust the search keyword or click on the eye under the painting to follow it up."
                filter={`observations__owner__profile=${profile_id}&ordering=-observations__created_at&`}
              />
            )}
          />
          <Route
            exact
            path="/registration"
            render={() => <RegistrationForm />}
          />
          <Route exact path="/login" render={() => <LogInForm />} />
          <Route exact path="/about" render={() => <h1>About</h1>} />
          <Route
            exact
            path="/paintings/create"
            render={() => <PaintingCreateForm />}
          />
          <Route
            path="/paintings/:id/edit"
            render={() => <PaintingEditForm />}
          />
          <Route exact path="/paintings/:id" render={() => <PaintingPage />} />
          <Route exact path="/profiles/:id" render={() => <ProfilePage />} />
          <Route
            exact
            path="/profiles/:id/edit/password"
            render={() => <UserPasswordForm />}
          />
          <Route
            exact
            path="/profiles/:id/edit"
            render={() => <ProfileEditForm />}
          />
          <Route
            exact
            path="/complete-profile/"
            render={() => <CompleteProfile />}
          />
          <Route render={() => <p>Page not found!</p>} />
        </Switch>
      </Container>
      <Footer />
    </div>
  );
}

export default App;
