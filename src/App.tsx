import Banner from "./Components/Banner";
import Header from "./Components/Header"
import Navbar from "./Components/Navbar";

function App() {

  return (
    <>
      <div className="px-42 bg-osmon pb-50">
        <Header />
        <Navbar />
        <Banner />
      </div>
    </>
  )
}

export default App;