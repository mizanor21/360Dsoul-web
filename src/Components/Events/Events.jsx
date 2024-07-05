import { useState, useEffect } from "react";

const Events = () => {
  // State to manage current page and events data
  const [currentPage, setCurrentPage] = useState(1);
  const [events, setEvents] = useState([]);
  const eventsPerPage = 6;

  // Dummy data for events
  const allEvents = [
    {
      date: "14 Jul 2020",
      title: "Mascarpone cheese triangles taleggio",
      description:
        "Brie cheese triangles cheesecake. Cauliflower cheese cheese and wine manchego bocconcini croque monsieur queso airedale brie.",
    },
    {
      date: "14 Jul 2020",
      title: "Mascarpone cheese triangles taleggio",
      description:
        "Brie cheese triangles cheesecake. Cauliflower cheese cheese and wine manchego bocconcini croque monsieur queso airedale brie.",
    },
    {
      date: "14 Jul 2020",
      title: "Mascarpone cheese triangles taleggio",
      description:
        "Brie cheese triangles cheesecake. Cauliflower cheese cheese and wine manchego bocconcini croque monsieur queso airedale brie.",
    },
    {
      date: "14 Jul 2020",
      title: "Mascarpone cheese triangles taleggio",
      description:
        "Brie cheese triangles cheesecake. Cauliflower cheese cheese and wine manchego bocconcini croque monsieur queso airedale brie.",
    },
    {
      date: "14 Jul 2020",
      title: "Mascarpone cheese triangles taleggio",
      description:
        "Brie cheese triangles cheesecake. Cauliflower cheese cheese and wine manchego bocconcini croque monsieur queso airedale brie.",
    },
    {
      date: "14 Jul 2020",
      title: "Mascarpone cheese triangles taleggio",
      description:
        "Brie cheese triangles cheesecake. Cauliflower cheese cheese and wine manchego bocconcini croque monsieur queso airedale brie.",
    },
    {
      date: "14 Jul 2020",
      title: "Mascarpone cheese triangles taleggio",
      description:
        "Brie cheese triangles cheesecake. Cauliflower cheese cheese and wine manchego bocconcini croque monsieur queso airedale brie.",
    },
    {
      date: "14 Jul 2020",
      title: "Mascarpone cheese triangles taleggio",
      description:
        "Brie cheese triangles cheesecake. Cauliflower cheese cheese and wine manchego bocconcini croque monsieur queso airedale brie.",
    },
    {
      date: "14 Jul 2020",
      title: "Mascarpone cheese triangles taleggio",
      description:
        "Brie cheese triangles cheesecake. Cauliflower cheese cheese and wine manchego bocconcini croque monsieur queso airedale brie.",
    },
    {
      date: "14 Jul 2020",
      title: "Mascarpone cheese triangles taleggio",
      description:
        "Brie cheese triangles cheesecake. Cauliflower cheese cheese and wine manchego bocconcini croque monsieur queso airedale brie.",
    },
    {
      date: "14 Jul 2020",
      title: "Mascarpone cheese triangles taleggio",
      description:
        "Brie cheese triangles cheesecake. Cauliflower cheese cheese and wine manchego bocconcini croque monsieur queso airedale brie.",
    },
    {
      date: "14 Jul 2020",
      title: "Mascarpone cheese triangles taleggio",
      description:
        "Brie cheese triangles cheesecake. Cauliflower cheese cheese and wine manchego bocconcini croque monsieur queso airedale brie.",
    },
    {
      date: "14 Jul 2020",
      title: "Mascarpone cheese triangles taleggio",
      description:
        "Brie cheese triangles cheesecake. Cauliflower cheese cheese and wine manchego bocconcini croque monsieur queso airedale brie.",
    },
    {
      date: "14 Jul 2020",
      title: "Mascarpone cheese triangles taleggio",
      description:
        "Brie cheese triangles cheesecake. Cauliflower cheese cheese and wine manchego bocconcini croque monsieur queso airedale brie.",
    },
    {
      date: "14 Jul 2020",
      title: "Mascarpone cheese triangles taleggio",
      description:
        "Brie cheese triangles cheesecake. Cauliflower cheese cheese and wine manchego bocconcini croque monsieur queso airedale brie.",
    },
    {
      date: "14 Jul 2020",
      title: "Mascarpone cheese triangles taleggio",
      description:
        "Brie cheese triangles cheesecake. Cauliflower cheese cheese and wine manchego bocconcini croque monsieur queso airedale brie.",
    },
    {
      date: "14 Jul 2020",
      title: "Mascarpone cheese triangles taleggio",
      description:
        "Brie cheese triangles cheesecake. Cauliflower cheese cheese and wine manchego bocconcini croque monsieur queso airedale brie.",
    },
    {
      date: "14 Jul 2020",
      title: "Mascarpone cheese triangles taleggio",
      description:
        "Brie cheese triangles cheesecake. Cauliflower cheese cheese and wine manchego bocconcini croque monsieur queso airedale brie.",
    },
    {
      date: "14 Jul 2020",
      title: "Mascarpone cheese triangles taleggio",
      description:
        "Brie cheese triangles cheesecake. Cauliflower cheese cheese and wine manchego bocconcini croque monsieur queso airedale brie.",
    },
    {
      date: "14 Jul 2020",
      title: "Mascarpone cheese triangles taleggio",
      description:
        "Brie cheese triangles cheesecake. Cauliflower cheese cheese and wine manchego bocconcini croque monsieur queso airedale brie.",
    },
    // Add more event objects here
  ];

  // Calculate the events to display based on the current page
  useEffect(() => {
    const startIndex = (currentPage - 1) * eventsPerPage;
    const endIndex = startIndex + eventsPerPage;
    setEvents(allEvents.slice(startIndex, endIndex));
  }, [currentPage]);

  // Function to handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="flex flex-col md:flex-row bg-gray-100 p-4 min-h-screen">
      <div className="md:w-1/3 lg:w-1/4 bg-white p-4 shadow-md rounded-lg mb-4 md:mb-0">
        <h2 className="text-2xl font-bold mb-4">Filter Events</h2>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            type="text"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Date
          </label>
          <input
            type="date"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Type
          </label>
          <select className="mt-1 block w-full p-2 border border-gray-300 rounded-md">
            <option>All Types</option>
            <option>Conference</option>
            <option>Workshop</option>
            <option>Meetup</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Location
          </label>
          <input
            type="text"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Language
          </label>
          <select className="mt-1 block w-full p-2 border border-gray-300 rounded-md">
            <option>All Languages</option>
            <option>English</option>
            <option>Spanish</option>
            <option>French</option>
          </select>
        </div>
        <button className="w-full bg-blue-500 text-white p-2 rounded-md">
          Apply Filters
        </button>
      </div>

      <div className="w-full md:w-2/3 lg:w-3/4 px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="grid gap-10 row-gap-8 lg:grid-cols-1 xl:grid-cols-3">
          {events.map((event, index) => (
            <div
              key={index}
              className="bg-gray-200 p-4 rounded-lg shadow-md lg:p-8"
            >
              <p className="mb-2 text-xs font-semibold tracking-wide text-gray-600 uppercase">
                {event.date}
              </p>
              <div className="mb-3">
                <a
                  href="/"
                  aria-label="Article"
                  className="inline-block text-black transition-colors duration-200 hover:text-deep-purple-accent-400"
                >
                  <p className="font-sans text-xl font-extrabold leading-none tracking-tight lg:text-2xl">
                    {event.title}
                  </p>
                </a>
              </div>
              <p className="mb-4 text-base text-gray-700 md:text-lg">
                {event.description}
              </p>
            </div>
          ))}
        </div>

        <div className="flex justify-center m sm:justify-center space-x-2 mt-8">
          <button
            title="previous"
            type="button"
            className={`inline-flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 border rounded-md shadow-md ${
              currentPage === 1
                ? "opacity-50 cursor-not-allowed"
                : "bg-white hover:bg-gray-200"
            }`}
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            <svg
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-4"
            >
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>
          {[...Array(Math.ceil(allEvents.length / eventsPerPage)).keys()].map(
            (pageNumber) => (
              <button
                key={pageNumber}
                type="button"
                className={`inline-flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 text-sm font-semibold border rounded-md shadow-md ${
                  currentPage === pageNumber + 1
                    ? "bg-blue-500 text-white"
                    : "bg-white hover:bg-gray-200"
                }`}
                onClick={() => handlePageChange(pageNumber + 1)}
              >
                {pageNumber + 1}
              </button>
            )
          )}
          <button
            title="next"
            type="button"
            className={`inline-flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 border rounded-md shadow-md ${
              currentPage === Math.ceil(allEvents.length / eventsPerPage)
                ? "opacity-50 cursor-not-allowed"
                : "bg-white hover:bg-gray-200"
            }`}
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={
              currentPage === Math.ceil(allEvents.length / eventsPerPage)
            }
          >
            <svg
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-4"
            >
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Events;
