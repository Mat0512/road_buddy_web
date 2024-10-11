const ServiceCard = ({ serviceName, onAvail }) => {
    return (
        <div className="bg-white rounded-lg shadow-md p-4 m-1">
            <h3 className="text-md font-semibold">{serviceName}</h3>
            <button onClick={onAvail} className="mt-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                Avail
            </button>
        </div>
    );
};

export default ServiceCard;
