import client from '../../../client';


export const homePage =  () => {
  const query = `*[_type == "homepage"][0]{
    heroTitle,
    heroDescription,
    buttonText
  }`
  const data =  client.fetch(query)
  console.log("4--------------", data);
  return data
}