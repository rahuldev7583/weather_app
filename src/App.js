import Search from "./components/Search";
import Bottom from "./components/Bottom/Bottom.jsx";
function App() {
  return (
    <div className="text-center mt-4 text-xl  font-arial md:text-2xl md:mt-4">
      <h1 className="text-gray-600 ">Check weather in your city</h1>
      <Search />
      <Bottom />
    </div>
  );
}

export default App;
