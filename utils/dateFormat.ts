const formatDateToDDMMMYYYY = (dateString: string): string => {
  const date = new Date(dateString);

  const day = String(date.getUTCDate()).padStart(2, "0");

  const monthNames = [
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

  const year = date.getUTCFullYear();

  return `${day} ${month} ${year}`;
};

export default formatDateToDDMMMYYYY;
