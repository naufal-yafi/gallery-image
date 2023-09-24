function formattedDate(date: string) {
  const currentDate: any = new Date();
  const inputDate: any = new Date(date);

  const timeDifferenceInSeconds = Math.floor((currentDate - inputDate) / 1000);

  if (timeDifferenceInSeconds < 60) {
    return `${timeDifferenceInSeconds} second${
      timeDifferenceInSeconds === 1 ? "" : "s"
    } ago`;
  } else if (timeDifferenceInSeconds < 3600) {
    const minutes = Math.floor(timeDifferenceInSeconds / 60);
    return `${minutes} minute${minutes === 1 ? "" : "s"} ago`;
  } else if (timeDifferenceInSeconds < 86400) {
    const hours = Math.floor(timeDifferenceInSeconds / 3600);
    return `${hours} hour${hours === 1 ? "" : "s"} ago`;
  } else if (timeDifferenceInSeconds < 604800) {
    const days = Math.floor(timeDifferenceInSeconds / 86400);
    return `${days} day${days === 1 ? "" : "s"} ago`;
  } else if (timeDifferenceInSeconds < 31536000) {
    const weeks = Math.floor(timeDifferenceInSeconds / 604800);
    return `${weeks} week${weeks === 1 ? "" : "s"} ago`;
  } else {
    const years = Math.floor(timeDifferenceInSeconds / 31536000);
    return `${years} year${years === 1 ? "" : "s"} ago`;
  }
}

export default formattedDate;
