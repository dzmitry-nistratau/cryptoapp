import ky from "ky";

const prefixUrl = `${process.env.EXPO_PUBLIC_API_URL ? process.env.EXPO_PUBLIC_API_URL : ""}/`;

const instance = ky.create({
  prefixUrl,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default instance;
