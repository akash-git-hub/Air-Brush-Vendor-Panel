import { Routes, Route, Navigate } from "react-router-dom"
import ThemeCustomization from 'themes';
import ScrollTop from 'components/ScrollTop';
import MainLayout from "layout/MainLayout/index";
import Login from "pages/authentication/Login";
import DashboardDefault from "pages/dashboard/index";
import EventList from "pages/event-list/EventList";
import OrderList from "pages/order-list/OrderList";
import AddEvent from "pages/add-event/AddEvent";
import ErrorPage from "pages/ErrorPage";
import { AuthContext } from "./states/AuthContext";
import { useContext } from "react";
import ArtisList from "pages/artist/artist-list/ArtistList";
import { EventDetail } from "pages/event-detail/EventDetail";

const App = () => {
  const { loggedIn } = useContext(AuthContext);
  return (<ThemeCustomization>
    <ScrollTop>
      <Routes>
        <Route path="/" element={loggedIn ? <Navigate to="/vendor/dashboard" /> : <Login />} />
        <Route
          path="/vendor"
          element={loggedIn ? <MainLayout /> : <Navigate to="/" />}
        >
          <Route path="/vendor/dashboard" element={loggedIn ? <DashboardDefault /> : <Navigate to="/" />} />
          <Route path="/vendor/order-list" element={loggedIn ? <OrderList /> : <Navigate to="/" />} />
          <Route path="/vendor/event-list" element={loggedIn ? <EventList /> : <Navigate to="/" />} />
          <Route path="/vendor/event-detail" element={loggedIn ? <EventDetail /> : <Navigate to="/" />} />
          <Route path="/vendor/add-event" element={loggedIn ? <AddEvent /> : <Navigate to="/" />} />
          <Route path="/vendor/artist-list" element={loggedIn ? <ArtisList /> : <Navigate to="/" />} />
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </ScrollTop>
  </ThemeCustomization>)
};

export default App;
