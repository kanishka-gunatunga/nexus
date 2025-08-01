import client from '../../../client';


export const insights = async () => {
  const query = `
 *[_type == "Insights"]{
  heroSection{
    heroTitle,
    "heroImage": heroImage.asset->url,
    },
  Page_subtitle,
  main_post->{
    
    postTitle,
    Post_short_description,
    postContent,
    "slug": slug.current,
    "postImage": postImage.asset->url,
  },


  main_post_button_text,
  right_section_post_1->{
    postTitle,
    Post_short_description,
    postContent,
    "slug": slug.current,
    "postImage": postImage.asset->url,
  },


  right_section_post_2->{
    postTitle,
    Post_short_description,
    postContent,
    "slug": slug.current,
    "postImage": postImage.asset->url,
  },


  latest_insights_title[]->{
   postTitle,
    Post_short_description,
    postContent,
    "slug": slug.current,
    "postImage": postImage.asset->url,
  },

  trending_insights_title[]->{
   postTitle,
    Post_short_description,
    postContent,
    "slug": slug.current,
    "postImage": postImage.asset->url,
  }
}
  
`
  const data = await client.fetch(query)
  console.log("Insights Data:", data)
  return data;
}


export async function PostData(slug: string) {
  const post = await client.fetch(
    `*[_type == "Posts" && slug.current == $slug][0]{
      postTitle,
      Post_short_description,
      postContent,
      "slug": slug.current,
      "postImage": postImage.asset->url,
      
    }`,
    { slug } 
  );
  console.log("Post Data:", post);
  if (!post) {
    throw new Error(`Post with slug "${slug}" not found`);
  }
  return post;
}