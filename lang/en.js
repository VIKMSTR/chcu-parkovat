export default async (context, locale) => {
    return await Promise.resolve({
      welcome: 'Welcome',
      title: 'Chcu parkovat v Brně! - overview of a current parking houses occupancy in Brno',
      description: 'Overview of a current parking houses occupancy in Brno',
      parking: 'Parking',
      free: 'Free',
      full: 'Fully occupied',
      map: 'map',
      nofull: 'Nowhere. Looks like there are still some spots left anywhere! :)',
      explanation: 'The parking lots highlighted in yellow are more than three-quarters full. It might be a problem to find a nice place to park there.',
      onstreet_header: 'Wanna park on street?',
      onstreet_content: 'Could be done (except the city centre). More info here:',
      onstreet_parking: 'Parking in Brno',
      updated: 'Updated',
      sources: 'Source code',
      on_github: 'on Github'  

    })
  }