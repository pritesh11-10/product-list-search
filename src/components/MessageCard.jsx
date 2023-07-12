/* eslint-disable react/prop-types */
const MessageCard = ({message}) => {
    return (
        <div className="bg-white max-w-md mx-auto rounded-lg overflow-hidden shadow-lg p-6 mt-10">
            {message}
        </div>
      )
}

export default MessageCard