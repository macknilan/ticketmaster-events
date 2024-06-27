// COMPONENT FOR SHOW THE EVENT ITEM IN THE LIST OF EVENTS SEARCHED IN THE INPUT

const EventItem = ({ info, name, image, id, onEventClick }) => {
  //

  const handleSeeMoreClick = (evt) => {
    evt.stopPropagation(); // THIS IS TO PREVENT THE EVENT FROM BUBBLING UP TO THE PARENT ELEMENT.
    onEventClick(id);
  };

  return (
    <div
      className="flex flex-col items-center justify-center"
      onClick={() => console.log("PADRE CLICK")}
    >
      <picture>
        <img src={image} alt={name} className="object-scale-down h-64 w-72" />
      </picture>
      <div className="flex flex-col items-center justify-center">
        <p className="text-lg font-bold">{name}</p>
        <p className="text-base">{info}</p>
      </div>

      <button
        type="button"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        onClick={handleSeeMoreClick}
      >
        Ver más
      </button>
    </div>
  );
};

export default EventItem;
