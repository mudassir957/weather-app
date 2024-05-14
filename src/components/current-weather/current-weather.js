const CurrentWeather = ({ data }) => {
  return (
    <div className="flex justify-center">
      <div className="top w-72 h-72 rounded-md m-4 p-4 bg-blue-900 text-white">
        <div className="flex justify-between items-center">
          <div>
            <p className="text-2xl">{data.city}</p>
            <p className="text-1xl">{data.weather[0].description}</p>
          </div>
          <div>
            <img
              alt="weather"
              className="w-24"
              src={`icons/${data.weather[0].icon}.png`}
            />
          </div>
        </div>

        <div className="flex justify-between mt-4">
          <p className="text-3xl font-medium">{Math.round(data.main.temp)}°C</p>
          <div className="w-full mx-4">
            <div className="parameter-row">
              <span className="font-medium">Details</span>
            </div>
            <div className="flex justify-between">
              <span className="parameter">Feels like</span>
              <span className="parameter-value">
                {Math.round(data.main.feels_like)}°C
              </span>
            </div>
            <div className="flex justify-between">
              <span className="parameter-label">Wind</span>
              <span className="parameter-value">{data.wind.speed} m/s</span>
            </div>
            <div className="flex justify-between">
              <span className="parameter-label">Humidity</span>
              <span className="parameter-value">{data.main.humidity}%</span>
            </div>
            <div className="flex justify-between">
              <span className="parameter-label">Pressure</span>
              <span className="parameter-value">{data.main.pressure} hPa</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
