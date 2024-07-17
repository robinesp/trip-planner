import React from "react";
import Header from "./components/ui/Header";
import Footer from "./components/ui/Footer";
import TripList from "./components/trips/TripList";

const App: React.FC = () => (
  <>
    <Header />
    <TripList />
    <Footer />
  </>
);

export default App;
