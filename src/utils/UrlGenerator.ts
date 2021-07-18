import { v4 as uuidv4 } from "uuid";
export const UrlGenerator = (urlName: string) => {
   return "/" + urlName + "-" + uuidv4();
  //return '/'+urlName;
};
