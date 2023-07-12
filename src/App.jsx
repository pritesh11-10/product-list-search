import jsonData from "./data/data.json"
import SearchFilterComponent from './components/SearchFilterComponent';

const App = () => {
  return (
    <div className="p-4 m-2">
      <h1 className="text-3xl text-left mx-auto">Product List Search</h1>
      <SearchFilterComponent jsonData={jsonData} />
    </div>
  );
};

export default App;