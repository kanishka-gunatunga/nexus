// client.ts
import sanityClient from '@sanity/client'

export default sanityClient({
  projectId: 'pd10w17r',
  dataset: 'production',
  useCdn: true //
})

