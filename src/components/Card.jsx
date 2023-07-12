/* eslint-disable react/prop-types */
const Card = ({projectGroupId, metroArea, productName, projectName, productId}) => {
  return (
    <div className="bg-white max-w-md mx-auto rounded-lg overflow-hidden shadow-lg p-6 mb-2">
        <h3><span className="text-gray-400 normal">Product Name:</span> {productName}</h3>
        <h3><span className="text-gray-400 normal">Product ID:</span> {productId}</h3>
        <h3><span className="text-gray-400 normal">Metro Area ID:</span> {metroArea}</h3>
        <h3><span className="text-gray-400 normal">Project Name:</span> {projectName}</h3>
        <h3><span className="text-gray-400 normal">Project Group ID:</span> {projectGroupId}</h3>
    </div>
  )
}

export default Card