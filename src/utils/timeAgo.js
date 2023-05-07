export const timeAgo = (timestamp) => {
  const date = new Date(Date.parse(timestamp));
  const now = new Date();
  const diff = now - date;

  const minute = 60 * 1000;
  const hour = 60 * minute;
  const day = 24 * hour;
  const week = 7 * day;
  const month = 30 * day;
  const year = 365 * day;

  if (diff < minute) {
    return "방금 전";
  } else if (diff < hour) {
    const minutesAgo = Math.floor(diff / minute);
    return `${minutesAgo}분 전`;
  } else if (diff < day) {
    const hoursAgo = Math.floor(diff / hour);
    return `${hoursAgo}시간 전`;
  } else if (diff < week) {
    const daysAgo = Math.floor(diff / day);
    return `${daysAgo}일 전`;
  } else if (diff < month) {
    const weeksAgo = Math.floor(diff / week);
    return `${weeksAgo}주 전`;
  } else if (diff < year) {
    const monthsAgo = Math.floor(diff / month);
    return `${monthsAgo}달 전`;
  } else {
    const yearsAgo = Math.floor(diff / year);
    return `${yearsAgo}년 전`;
  }
};
