import moment from "moment";

export const date = (d) => {
  return moment(d).format("YYYY-MM-DD");
}

export const dateWiew = (d) => {
  return moment(d).format("DD-MM-YYYY");
}

export const dateTime = (d) => {
  return moment(d).format("YYYY-MM-DD HH:mm:ss");
}

export const dateTimeWiew = (d) => {
  return moment(d).format("HH:mm DD/MM/YYYY");
}

export const time = (d) => {
  return moment(d).format("HH:mm:ss");
}

export const dateTimeCal = (d) => {
  return moment(d).format("DD-MM-YYYY HH:mm");
}

