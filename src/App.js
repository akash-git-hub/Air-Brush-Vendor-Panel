import { Routes, Route } from "react-router-dom"
import ThemeCustomization from 'themes';
import ScrollTop from 'components/ScrollTop';
import MainLayout from "layout/MainLayout/index";
import Login from "pages/authentication/Login";
import DashboardDefault from "pages/dashboard/index";
import EventList from "pages/event-list/EventList";
import OrderList from "pages/order-list/OrderList";
import AddEvent from "pages/add-event/AddEvent";
import ErrorPage from "pages/ErrorPage";

const App = () => (
  <ThemeCustomization>
    <ScrollTop>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/vendor"
          element={<MainLayout />}
        >
          <Route path="/vendor/add-event" element={<AddEvent />} />
          <Route path="/vendor/dashboard" element={<DashboardDefault />} />
          <Route path="/vendor/order-list" element={<OrderList />} />
          <Route path="/vendor/event-list" element={<EventList />} />
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </ScrollTop>
  </ThemeCustomization>
);

export default App;
