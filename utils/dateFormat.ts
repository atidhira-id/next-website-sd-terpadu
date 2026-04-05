type FormattedDate = {
  day: string;
  month: string;
  year: string;
};

export const getDateObject = (dateString: string): FormattedDate => {
  const date = new Date(dateString);

  const day = String(date.getUTCDate()).padStart(2, "0");

  const monthNames: string[] = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "Mei",
    "Jun",
    "Jul",
    "Agu",
    "Sep",
    "Okt",
    "Nov",
    "Des",
  ];
  const month = monthNames[date.getUTCMonth()];

  const year = String(date.getUTCFullYear());

  return { day, month, year };
};

export const getDateString = (date: string): string => {
  const { day, month, year } = getDateObject(date);
  return `${day} ${month} ${year}`;
};
