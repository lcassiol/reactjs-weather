export default interface DefaultWeatherProps {
  name: string;
  main: {
    feels_like: number;
    temp_max: number;
    temp_min: number;
  };
}
