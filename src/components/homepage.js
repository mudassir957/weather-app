const Homepage = () => {
 
  return (
    <div>
      <h1 className="text-3xl text-white text-center mt-8 p-4">
        Explore current weather
      </h1>

      <div className="text-2xl text-center p-4 text-blue-200">
        <p>
          A weather app built using the GeoDB Cities API for information about
          cities, countries, islands, and regions throughout the world{" "}
        </p>
        <span className="text-white">&&</span>
        <p>
          OpenWeatherMap for weather data via API, including current weather
          data, forecasts, nowcasts, and historical weather data.
        </p>
      </div>
      <div className="text-1xl text-white text-center mt-16">
        <footer>Made with ❤️ </footer>
      </div>
    </div>
  );
};

export default Homepage;
