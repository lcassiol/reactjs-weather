export default interface searchWeather {
  city: {
    name: string;
    country: string;
  };
  list: [
    {
      main: {
        temp: number;
        feels_like: number;
        temp_max: number;
        temp_min: number;
        humidity: number;
      };
      wind: {
        speed: number;
      };
      weather: [
        {
          description: string;
        }
      ];
    }
  ];
}
