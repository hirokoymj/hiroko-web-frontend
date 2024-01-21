import { useQuery } from "@apollo/client";
import { DAILY_FORECAST } from "../Queries/Weather.ts";
import get from "lodash/get";

export const DailyForecast = () => {
  const { data, error, loading } = useQuery(DAILY_FORECAST, {
    variables: {
      city: "tokyo",
    },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;
  const { forecastList } = get(data, "dailyForecast", {});
  console.log(forecastList);

  return (
    <div>
      <h1>DailyForecast page</h1>
    </div>
  );
};
