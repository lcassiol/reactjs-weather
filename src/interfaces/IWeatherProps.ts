export default interface weather {
  city: string;
  country: string;
  temp: string;
  wind: string;
  feelslike: string;
  tempMax: string;
  tempMin: string;
  humidity: number;
  weather: string;
  forecast: {
    day: string;
    tempMax: string;
    tempMin: string;
  }[];
}
