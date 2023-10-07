type Date = {
  weekday: string;
  year: string;
  month: string;
  day: string;
};

const GetTime = (date: any) => {
  const time = new Date(date);

  const timeStamp = time.getTime();

  const options: Date = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  const dateFormat: any = new Date(timeStamp);

  return dateFormat.toLocaleString("gb-GB", options);
};

export default GetTime;
