import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from "react-accessible-accordion";

const days = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const Forecast = ({ data }) => {
  const dayInWeek = new Date().getDay();
  const forecastDays = days
    .slice(dayInWeek, days.length)
    .concat(days.slice(0, dayInWeek));

  return (
    <>
      <h2 className="text-2xl text-center text-white my-4"> Daily</h2>
      <Accordion allowZeroExpanded>
        {data.list.splice(0, 7).map((item, index) => (
          <AccordionItem key={index}>
            <AccordionItemHeading>
              <AccordionItemButton>
                <div className="flex justify-center">
                  <div className="flex justify-between top h-12 w-9/12 rounded-md bg-blue-900 text-white my-2 py-2">
                    <div className="flex px-2">
                      <img
                        alt="weather"
                        className="w-8"
                        src={`icons/${item.weather[0].icon}.png`}
                      />
                      <label>{forecastDays[index]}</label>
                    </div>
                    <div className="flex px-2">
                      <label className="">{item.weather[0].description}</label>
                      <label className="flex px-2">
                        {Math.round(item.main.temp_max)}°C
                      </label>
                    </div>
                  </div>
                </div>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <div className="flex justify-center">
                <div className="w-9/12 grid grid-cols-2 gap-x-4 gap-y-0 p-2 text-white">
                  <div className="flex align-center justify-between">
                    <label>Pressure:</label>
                    <label>{item.main.pressure} hPa</label>
                  </div>
                  <div className="flex align-center justify-between">
                    <label>Humidity:</label>
                    <label>{item.main.humidity}%</label>
                  </div>
                  <div className="flex align-center justify-between">
                    <label>Clouds:</label>
                    <label>{item.clouds.all}%</label>
                  </div>
                  <div className="flex align-center justify-between">
                    <label>Wind speed:</label>
                    <label>{item.wind.speed} m/s</label>
                  </div>
                  <div className="flex align-center justify-between">
                    <label>Sea level:</label>
                    <label>{item.main.sea_level} m</label>
                  </div>
                  <div className="flex align-center justify-between">
                    <label>Feels like:</label>
                    <label>{item.main.feels_like}°C</label>
                  </div>
                </div>
              </div>
            </AccordionItemPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </>
  );
};

export default Forecast;
