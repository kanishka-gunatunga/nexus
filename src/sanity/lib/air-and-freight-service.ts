import client from '../../../client';


export const airAndFreightService = async () => {
    const query = `*[_type == "airAndFreight"]{
    title,
    sections[] {
      _type,
      title,
      paragraph1,
      paragraph2,
      paragraph3,
      subtitle,
      buttonText,
      buttonLink,
      image {
      asset-> {
        _id,
        url
      }
    },
      imageAlt,
      reverseOrder
    }
  }`

    const data = await client.fetch(query)
    console.log("4--------------", data)
    return data
}
