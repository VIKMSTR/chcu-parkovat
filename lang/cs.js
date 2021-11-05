export default async (context, locale) => {
    return await Promise.resolve({
      welcome: 'Vítejte',
      title: 'Chcu parkovat v Brně! - aktuální obsazenost parkovacích domů v Brně.',
      description: 'Aktuální přehled obsazenosti parkovacích domů v Brně',
      parking: 'Parkoviště',
      free: 'Volných míst',
      map: 'mapa',
      full: 'Obsazeno',
      nofull: 'Nikde. Vypadá to, že je všude místo! :)',
      explanation: 'Žlutě zvýrazněná parkoviště jsou zaplněná více než ze tří čtvrtin. Může tak být problém najít hezké místo na parkování.',
      onstreet_header: 'Chcu to nechat na ulici?',
      onstreet_content: 'Taky se dá (kromě centra). Víc info tady:',
      onstreet_parking: 'Parkování v Brně',
      updated: 'Aktualizováno',
      sources: 'Zdrojáky',
      on_github: 'na Githubu'  
    })
  }