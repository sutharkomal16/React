import Childcard from "./components/Childcard";
import Home from "./components/Home"
import Navbar from "./components/Navbar";
import Card from "./components/card"

const App = () => {
  return (
    <div>
      <Navbar />
      <div className="maincard">
        <Card />
        <Card />
      </div>

      <Home />
      <div className="parent">
        <Childcard user='komal' age={23} />
        <Childcard user='nisha' age={22} />
        <Childcard user='khushi' age={20} />
      </div>
    </div>

  )
}
export default App;