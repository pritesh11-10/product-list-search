/* eslint-disable react/prop-types */
import { useState } from 'react';
import Card from './Card';
import MessageCard from './MessageCard';

const SearchFilterComponent = ({jsonData}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  const [error, setError] = useState('');

  const handleSearchChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query);

    // Clear the filtered data when the search query is empty
    if (query === '') {
      setFilteredData([]);
      setError('')
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Validate if the search query is empty
    if (!searchQuery) {
        setFilteredData([]);
        setError('Please enter a search query.');
        return;
    }

    // Validate if jsonData is null or undefined
    if (!jsonData) {
      setError('No data available.');
      setFilteredData([]);
      return;
    }

    // Filter the JSON data based on the search
    const filteredResults = jsonData.filter((item) => {
      const projectname = item.projectName ? item.projectName.toLowerCase() : '';
      const metroArea = item.metroArea ? item.metroArea.toLowerCase() : '';
      const productId = item.productId ? item.productId.toLowerCase() : '';
      const productname = item.productName ? item.productName.toLowerCase() : '';

      return (
        projectname.includes(searchQuery.toLowerCase()) ||
        metroArea.includes(searchQuery.toLowerCase()) ||
        productId.includes(searchQuery.toLowerCase()) ||
        productname.includes(searchQuery.toLowerCase())
      )
    });

    if (filteredResults.length === 0) {
        setError('No results found.');
        setFilteredData([]);
        return;
    }

    const sortedData = filteredResults.sort((a, b) => {
        const nameA = a.productName.toLowerCase();
        const nameB = b.productName.toLowerCase();
    
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        return 0;
      });
      setError("");
    setFilteredData(sortedData);
  };

  return (
    <div className="bg-cyan-800 rounded-lg shadow-md p-6 mt-2">
      <form onSubmit={handleSubmit}>
      <div className="flex flex-col items-center">
          <input
            className="w-2/3 px-4 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none"
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={handleSearchChange}
          />
          <button 
            type="submit"
            className="px-6 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600"
          >Search</button>
        </div>
      </form>
      
      {error ? (
        <MessageCard message={error} />
      ) : (
        <div className="bg-cyan-50 rounded-lg shadow-md p-6 m-4">
          <div className="h-48 overflow-y-auto">
            {filteredData.map((item,index) => (
              <Card key={`${item.id}_${index}`}
                projectGroupId={item.id} 
                metroArea={item.metroArea} 
                productName={item.productName}
                projectName={item.projectName}
                productId={item .productId}/>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchFilterComponent;