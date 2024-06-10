export const projects = () => {
  let id = 1
  return new Map([
    [
      id++,
      {
        name: 'FiniteViz',
        longDescription: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec laoreet a tellus sed elementum. Proin lorem metus, tempor vitae eleifend at, interdum viverra nulla. Nunc non orci scelerisque, pretium purus ac, sagittis lectus. Pellentesque ut eros in risus ultrices varius. Quisque sit amet velit id orci elementum pretium. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce vitae vestibulum tellus.

Sed pharetra ante ac justo viverra, ac ornare ipsum vehicula. Sed nec est dictum, placerat arcu vel, lacinia odio. Vestibulum varius lacus vel convallis eleifend. Integer augue odio, vestibulum eu ornare at, sagittis vel neque. Pellentesque condimentum risus ornare, eleifend tortor a, sodales ipsum. Praesent maximus et tortor et feugiat. Cras tristique venenatis turpis, sit amet vestibulum arcu luctus et. Morbi venenatis fermentum ex dictum egestas. Proin convallis velit facilisis quam cursus, a suscipit nulla venenatis. Nullam posuere justo nibh, at ultricies enim blandit at.

Praesent dapibus diam sem, et volutpat quam porta nec. Ut finibus et mi eu imperdiet. Cras lobortis vel massa vel scelerisque. Aliquam maximus porttitor fringilla. Sed a fringilla tortor, vel consectetur dolor. Mauris rutrum, massa sit amet vestibulum pulvinar, mi mauris porttitor mi, vel pharetra augue quam vel turpis. Proin accumsan turpis in aliquet imperdiet. Suspendisse vehicula sem sit amet turpis dapibus venenatis. Duis non augue ac metus aliquam gravida vitae non est. Maecenas molestie et erat sit amet sagittis. Nam laoreet dignissim sodales. Etiam vel vulputate ligula. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Pellentesque vitae erat tincidunt, condimentum leo et, pharetra nisl. Integer sagittis dictum consectetur.

Aliquam interdum purus in lacus posuere ultricies. Praesent sit amet mauris bibendum, facilisis nunc non, interdum sapien. Sed malesuada urna faucibus quam posuere dapibus. Vestibulum vitae aliquam est. Nunc vel lobortis nunc, convallis imperdiet libero. Aliquam velit neque, semper sit amet scelerisque eu, facilisis sed ex. Aliquam erat volutpat. Aenean eu est rhoncus, commodo erat in, tristique odio. Vivamus consectetur risus orci, vel suscipit orci rhoncus in. Sed vestibulum non nulla vel hendrerit. Ut non lectus elementum, dignissim odio quis, cursus neque. Sed eleifend erat a est ornare fermentum.

Mauris vitae est quis ante maximus convallis. Quisque quis placerat ligula. Sed non massa tristique, mollis turpis placerat, imperdiet metus. Donec tristique lacus vel turpis eleifend blandit. Vivamus accumsan arcu bibendum elit tincidunt molestie. Nunc non ligula augue. Nullam tincidunt rutrum dui eu lacinia. Vivamus gravida semper dignissim. Nam ultrices bibendum nulla bibendum vehicula. In volutpat imperdiet consequat.`,
        description:
          'Web-based Finite Element Mesh Generator for creating and visualising Finite Element meshes on the web.',
        link: 'https://github.com/chubi-x/FiniteViz',
        thumbnail: '/images/projects/finiteViz.jpg',
        tools: [
          'react',
          'threejs',
          'c++',
          'flask',
          'redis',
          'docker',
          'rabbitmq'
        ]
      }
    ],
    [
      id++,
      {
        name: 'Sorta',
        longDescription: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec laoreet a tellus sed elementum. Proin lorem metus, tempor vitae eleifend at, interdum viverra nulla. Nunc non orci scelerisque, pretium purus ac, sagittis lectus. Pellentesque ut eros in risus ultrices varius. Quisque sit amet velit id orci elementum pretium. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce vitae vestibulum tellus.

Sed pharetra ante ac justo viverra, ac ornare ipsum vehicula. Sed nec est dictum, placerat arcu vel, lacinia odio. Vestibulum varius lacus vel convallis eleifend. Integer augue odio, vestibulum eu ornare at, sagittis vel neque. Pellentesque condimentum risus ornare, eleifend tortor a, sodales ipsum. Praesent maximus et tortor et feugiat. Cras tristique venenatis turpis, sit amet vestibulum arcu luctus et. Morbi venenatis fermentum ex dictum egestas. Proin convallis velit facilisis quam cursus, a suscipit nulla venenatis. Nullam posuere justo nibh, at ultricies enim blandit at.

Praesent dapibus diam sem, et volutpat quam porta nec. Ut finibus et mi eu imperdiet. Cras lobortis vel massa vel scelerisque. Aliquam maximus porttitor fringilla. Sed a fringilla tortor, vel consectetur dolor. Mauris rutrum, massa sit amet vestibulum pulvinar, mi mauris porttitor mi, vel pharetra augue quam vel turpis. Proin accumsan turpis in aliquet imperdiet. Suspendisse vehicula sem sit amet turpis dapibus venenatis. Duis non augue ac metus aliquam gravida vitae non est. Maecenas molestie et erat sit amet sagittis. Nam laoreet dignissim sodales. Etiam vel vulputate ligula. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Pellentesque vitae erat tincidunt, condimentum leo et, pharetra nisl. Integer sagittis dictum consectetur.

Aliquam interdum purus in lacus posuere ultricies. Praesent sit amet mauris bibendum, facilisis nunc non, interdum sapien. Sed malesuada urna faucibus quam posuere dapibus. Vestibulum vitae aliquam est. Nunc vel lobortis nunc, convallis imperdiet libero. Aliquam velit neque, semper sit amet scelerisque eu, facilisis sed ex. Aliquam erat volutpat. Aenean eu est rhoncus, commodo erat in, tristique odio. Vivamus consectetur risus orci, vel suscipit orci rhoncus in. Sed vestibulum non nulla vel hendrerit. Ut non lectus elementum, dignissim odio quis, cursus neque. Sed eleifend erat a est ornare fermentum.

Mauris vitae est quis ante maximus convallis. Quisque quis placerat ligula. Sed non massa tristique, mollis turpis placerat, imperdiet metus. Donec tristique lacus vel turpis eleifend blandit. Vivamus accumsan arcu bibendum elit tincidunt molestie. Nunc non ligula augue. Nullam tincidunt rutrum dui eu lacinia. Vivamus gravida semper dignissim. Nam ultrices bibendum nulla bibendum vehicula. In volutpat imperdiet consequat.`,
        description:
          'an app that lets twitter users manage and categorize their bookmarks.',
        link: 'https://github.com/chubi-x/sorta',
        thumbnail: '/images/projects/sorta.jpg',
        tools: [
          'typescript',
          'react',
          'tailwindcss',
          'expressjs',
          'firebase',
          'twitterAPI'
        ]
      }
    ],
    [
      id++,
      {
        name: 'OrthoForum',
        longDescription: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec laoreet a tellus sed elementum. Proin lorem metus, tempor vitae eleifend at, interdum viverra nulla. Nunc non orci scelerisque, pretium purus ac, sagittis lectus. Pellentesque ut eros in risus ultrices varius. Quisque sit amet velit id orci elementum pretium. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce vitae vestibulum tellus.

Sed pharetra ante ac justo viverra, ac ornare ipsum vehicula. Sed nec est dictum, placerat arcu vel, lacinia odio. Vestibulum varius lacus vel convallis eleifend. Integer augue odio, vestibulum eu ornare at, sagittis vel neque. Pellentesque condimentum risus ornare, eleifend tortor a, sodales ipsum. Praesent maximus et tortor et feugiat. Cras tristique venenatis turpis, sit amet vestibulum arcu luctus et. Morbi venenatis fermentum ex dictum egestas. Proin convallis velit facilisis quam cursus, a suscipit nulla venenatis. Nullam posuere justo nibh, at ultricies enim blandit at.

Praesent dapibus diam sem, et volutpat quam porta nec. Ut finibus et mi eu imperdiet. Cras lobortis vel massa vel scelerisque. Aliquam maximus porttitor fringilla. Sed a fringilla tortor, vel consectetur dolor. Mauris rutrum, massa sit amet vestibulum pulvinar, mi mauris porttitor mi, vel pharetra augue quam vel turpis. Proin accumsan turpis in aliquet imperdiet. Suspendisse vehicula sem sit amet turpis dapibus venenatis. Duis non augue ac metus aliquam gravida vitae non est. Maecenas molestie et erat sit amet sagittis. Nam laoreet dignissim sodales. Etiam vel vulputate ligula. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Pellentesque vitae erat tincidunt, condimentum leo et, pharetra nisl. Integer sagittis dictum consectetur.

Aliquam interdum purus in lacus posuere ultricies. Praesent sit amet mauris bibendum, facilisis nunc non, interdum sapien. Sed malesuada urna faucibus quam posuere dapibus. Vestibulum vitae aliquam est. Nunc vel lobortis nunc, convallis imperdiet libero. Aliquam velit neque, semper sit amet scelerisque eu, facilisis sed ex. Aliquam erat volutpat. Aenean eu est rhoncus, commodo erat in, tristique odio. Vivamus consectetur risus orci, vel suscipit orci rhoncus in. Sed vestibulum non nulla vel hendrerit. Ut non lectus elementum, dignissim odio quis, cursus neque. Sed eleifend erat a est ornare fermentum.

Mauris vitae est quis ante maximus convallis. Quisque quis placerat ligula. Sed non massa tristique, mollis turpis placerat, imperdiet metus. Donec tristique lacus vel turpis eleifend blandit. Vivamus accumsan arcu bibendum elit tincidunt molestie. Nunc non ligula augue. Nullam tincidunt rutrum dui eu lacinia. Vivamus gravida semper dignissim. Nam ultrices bibendum nulla bibendum vehicula. In volutpat imperdiet consequat.`,
        description: 'Forum for Orthodox Christian Content.',
        link: 'https://github.com/chubi-x/orthoforum',
        thumbnail: '/images/projects/orthoforum.png',
        tools: ['react', 'inertiajs', 'laravel', 'tailwindcss']
      }
    ],
    [
      id++,
      {
        name: 'World Airports Dashboard',
        longDescription: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec laoreet a tellus sed elementum. Proin lorem metus, tempor vitae eleifend at, interdum viverra nulla. Nunc non orci scelerisque, pretium purus ac, sagittis lectus. Pellentesque ut eros in risus ultrices varius. Quisque sit amet velit id orci elementum pretium. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce vitae vestibulum tellus.

Sed pharetra ante ac justo viverra, ac ornare ipsum vehicula. Sed nec est dictum, placerat arcu vel, lacinia odio. Vestibulum varius lacus vel convallis eleifend. Integer augue odio, vestibulum eu ornare at, sagittis vel neque. Pellentesque condimentum risus ornare, eleifend tortor a, sodales ipsum. Praesent maximus et tortor et feugiat. Cras tristique venenatis turpis, sit amet vestibulum arcu luctus et. Morbi venenatis fermentum ex dictum egestas. Proin convallis velit facilisis quam cursus, a suscipit nulla venenatis. Nullam posuere justo nibh, at ultricies enim blandit at.

Praesent dapibus diam sem, et volutpat quam porta nec. Ut finibus et mi eu imperdiet. Cras lobortis vel massa vel scelerisque. Aliquam maximus porttitor fringilla. Sed a fringilla tortor, vel consectetur dolor. Mauris rutrum, massa sit amet vestibulum pulvinar, mi mauris porttitor mi, vel pharetra augue quam vel turpis. Proin accumsan turpis in aliquet imperdiet. Suspendisse vehicula sem sit amet turpis dapibus venenatis. Duis non augue ac metus aliquam gravida vitae non est. Maecenas molestie et erat sit amet sagittis. Nam laoreet dignissim sodales. Etiam vel vulputate ligula. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Pellentesque vitae erat tincidunt, condimentum leo et, pharetra nisl. Integer sagittis dictum consectetur.

Aliquam interdum purus in lacus posuere ultricies. Praesent sit amet mauris bibendum, facilisis nunc non, interdum sapien. Sed malesuada urna faucibus quam posuere dapibus. Vestibulum vitae aliquam est. Nunc vel lobortis nunc, convallis imperdiet libero. Aliquam velit neque, semper sit amet scelerisque eu, facilisis sed ex. Aliquam erat volutpat. Aenean eu est rhoncus, commodo erat in, tristique odio. Vivamus consectetur risus orci, vel suscipit orci rhoncus in. Sed vestibulum non nulla vel hendrerit. Ut non lectus elementum, dignissim odio quis, cursus neque. Sed eleifend erat a est ornare fermentum.

Mauris vitae est quis ante maximus convallis. Quisque quis placerat ligula. Sed non massa tristique, mollis turpis placerat, imperdiet metus. Donec tristique lacus vel turpis eleifend blandit. Vivamus accumsan arcu bibendum elit tincidunt molestie. Nunc non ligula augue. Nullam tincidunt rutrum dui eu lacinia. Vivamus gravida semper dignissim. Nam ultrices bibendum nulla bibendum vehicula. In volutpat imperdiet consequat.`,
        description:
          'A dashboard visualising US and World airport information, including international routes between countries and the relationship between airport count and annual C02 emissions.',
        link: 'https://github.com/chubi-x/world-airports',
        thumbnail: '/images/projects/airports.jpg',
        tools: ['python', 'jupyter notebook', 'altair']
      }
    ],
    [
      id++,
      {
        name: 'Sort-it-Image-Classifier',
        longDescription: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec laoreet a tellus sed elementum. Proin lorem metus, tempor vitae eleifend at, interdum viverra nulla. Nunc non orci scelerisque, pretium purus ac, sagittis lectus. Pellentesque ut eros in risus ultrices varius. Quisque sit amet velit id orci elementum pretium. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce vitae vestibulum tellus.

Sed pharetra ante ac justo viverra, ac ornare ipsum vehicula. Sed nec est dictum, placerat arcu vel, lacinia odio. Vestibulum varius lacus vel convallis eleifend. Integer augue odio, vestibulum eu ornare at, sagittis vel neque. Pellentesque condimentum risus ornare, eleifend tortor a, sodales ipsum. Praesent maximus et tortor et feugiat. Cras tristique venenatis turpis, sit amet vestibulum arcu luctus et. Morbi venenatis fermentum ex dictum egestas. Proin convallis velit facilisis quam cursus, a suscipit nulla venenatis. Nullam posuere justo nibh, at ultricies enim blandit at.

Praesent dapibus diam sem, et volutpat quam porta nec. Ut finibus et mi eu imperdiet. Cras lobortis vel massa vel scelerisque. Aliquam maximus porttitor fringilla. Sed a fringilla tortor, vel consectetur dolor. Mauris rutrum, massa sit amet vestibulum pulvinar, mi mauris porttitor mi, vel pharetra augue quam vel turpis. Proin accumsan turpis in aliquet imperdiet. Suspendisse vehicula sem sit amet turpis dapibus venenatis. Duis non augue ac metus aliquam gravida vitae non est. Maecenas molestie et erat sit amet sagittis. Nam laoreet dignissim sodales. Etiam vel vulputate ligula. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Pellentesque vitae erat tincidunt, condimentum leo et, pharetra nisl. Integer sagittis dictum consectetur.

Aliquam interdum purus in lacus posuere ultricies. Praesent sit amet mauris bibendum, facilisis nunc non, interdum sapien. Sed malesuada urna faucibus quam posuere dapibus. Vestibulum vitae aliquam est. Nunc vel lobortis nunc, convallis imperdiet libero. Aliquam velit neque, semper sit amet scelerisque eu, facilisis sed ex. Aliquam erat volutpat. Aenean eu est rhoncus, commodo erat in, tristique odio. Vivamus consectetur risus orci, vel suscipit orci rhoncus in. Sed vestibulum non nulla vel hendrerit. Ut non lectus elementum, dignissim odio quis, cursus neque. Sed eleifend erat a est ornare fermentum.

Mauris vitae est quis ante maximus convallis. Quisque quis placerat ligula. Sed non massa tristique, mollis turpis placerat, imperdiet metus. Donec tristique lacus vel turpis eleifend blandit. Vivamus accumsan arcu bibendum elit tincidunt molestie. Nunc non ligula augue. Nullam tincidunt rutrum dui eu lacinia. Vivamus gravida semper dignissim. Nam ultrices bibendum nulla bibendum vehicula. In volutpat imperdiet consequat.`,
        description:
          'Sort-it is an image classification application that classifies images of cats, dogs, bicycles, cars, and motorcycles.',
        link: 'https://github.com/chubi-x/Sort-it-Image-Classifier',
        thumbnail: '/images/projects/finiteViz.jpg',
        tools: ['python', 'tensorflow', 'pandas']
      }
    ],
    [
      id++,
      {
        name: 'England Dev Jobs',
        longDescription: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec laoreet a tellus sed elementum. Proin lorem metus, tempor vitae eleifend at, interdum viverra nulla. Nunc non orci scelerisque, pretium purus ac, sagittis lectus. Pellentesque ut eros in risus ultrices varius. Quisque sit amet velit id orci elementum pretium. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce vitae vestibulum tellus.

Sed pharetra ante ac justo viverra, ac ornare ipsum vehicula. Sed nec est dictum, placerat arcu vel, lacinia odio. Vestibulum varius lacus vel convallis eleifend. Integer augue odio, vestibulum eu ornare at, sagittis vel neque. Pellentesque condimentum risus ornare, eleifend tortor a, sodales ipsum. Praesent maximus et tortor et feugiat. Cras tristique venenatis turpis, sit amet vestibulum arcu luctus et. Morbi venenatis fermentum ex dictum egestas. Proin convallis velit facilisis quam cursus, a suscipit nulla venenatis. Nullam posuere justo nibh, at ultricies enim blandit at.

Praesent dapibus diam sem, et volutpat quam porta nec. Ut finibus et mi eu imperdiet. Cras lobortis vel massa vel scelerisque. Aliquam maximus porttitor fringilla. Sed a fringilla tortor, vel consectetur dolor. Mauris rutrum, massa sit amet vestibulum pulvinar, mi mauris porttitor mi, vel pharetra augue quam vel turpis. Proin accumsan turpis in aliquet imperdiet. Suspendisse vehicula sem sit amet turpis dapibus venenatis. Duis non augue ac metus aliquam gravida vitae non est. Maecenas molestie et erat sit amet sagittis. Nam laoreet dignissim sodales. Etiam vel vulputate ligula. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Pellentesque vitae erat tincidunt, condimentum leo et, pharetra nisl. Integer sagittis dictum consectetur.

Aliquam interdum purus in lacus posuere ultricies. Praesent sit amet mauris bibendum, facilisis nunc non, interdum sapien. Sed malesuada urna faucibus quam posuere dapibus. Vestibulum vitae aliquam est. Nunc vel lobortis nunc, convallis imperdiet libero. Aliquam velit neque, semper sit amet scelerisque eu, facilisis sed ex. Aliquam erat volutpat. Aenean eu est rhoncus, commodo erat in, tristique odio. Vivamus consectetur risus orci, vel suscipit orci rhoncus in. Sed vestibulum non nulla vel hendrerit. Ut non lectus elementum, dignissim odio quis, cursus neque. Sed eleifend erat a est ornare fermentum.

Mauris vitae est quis ante maximus convallis. Quisque quis placerat ligula. Sed non massa tristique, mollis turpis placerat, imperdiet metus. Donec tristique lacus vel turpis eleifend blandit. Vivamus accumsan arcu bibendum elit tincidunt molestie. Nunc non ligula augue. Nullam tincidunt rutrum dui eu lacinia. Vivamus gravida semper dignissim. Nam ultrices bibendum nulla bibendum vehicula. In volutpat imperdiet consequat.`,
        description: 'Glassdoor webscrape for Developer jobs in England',
        link: 'https://github.com/chubi-x/dev-jobs-in-england-scrape',
        thumbnail: '/images/projects/finiteViz.jpg',
        tools: ['python', 'selenium']
      }
    ],

    [
      id++,
      {
        name: 'Ball Academy',
        longDescription: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec laoreet a tellus sed elementum. Proin lorem metus, tempor vitae eleifend at, interdum viverra nulla. Nunc non orci scelerisque, pretium purus ac, sagittis lectus. Pellentesque ut eros in risus ultrices varius. Quisque sit amet velit id orci elementum pretium. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce vitae vestibulum tellus.

Sed pharetra ante ac justo viverra, ac ornare ipsum vehicula. Sed nec est dictum, placerat arcu vel, lacinia odio. Vestibulum varius lacus vel convallis eleifend. Integer augue odio, vestibulum eu ornare at, sagittis vel neque. Pellentesque condimentum risus ornare, eleifend tortor a, sodales ipsum. Praesent maximus et tortor et feugiat. Cras tristique venenatis turpis, sit amet vestibulum arcu luctus et. Morbi venenatis fermentum ex dictum egestas. Proin convallis velit facilisis quam cursus, a suscipit nulla venenatis. Nullam posuere justo nibh, at ultricies enim blandit at.

Praesent dapibus diam sem, et volutpat quam porta nec. Ut finibus et mi eu imperdiet. Cras lobortis vel massa vel scelerisque. Aliquam maximus porttitor fringilla. Sed a fringilla tortor, vel consectetur dolor. Mauris rutrum, massa sit amet vestibulum pulvinar, mi mauris porttitor mi, vel pharetra augue quam vel turpis. Proin accumsan turpis in aliquet imperdiet. Suspendisse vehicula sem sit amet turpis dapibus venenatis. Duis non augue ac metus aliquam gravida vitae non est. Maecenas molestie et erat sit amet sagittis. Nam laoreet dignissim sodales. Etiam vel vulputate ligula. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Pellentesque vitae erat tincidunt, condimentum leo et, pharetra nisl. Integer sagittis dictum consectetur.

Aliquam interdum purus in lacus posuere ultricies. Praesent sit amet mauris bibendum, facilisis nunc non, interdum sapien. Sed malesuada urna faucibus quam posuere dapibus. Vestibulum vitae aliquam est. Nunc vel lobortis nunc, convallis imperdiet libero. Aliquam velit neque, semper sit amet scelerisque eu, facilisis sed ex. Aliquam erat volutpat. Aenean eu est rhoncus, commodo erat in, tristique odio. Vivamus consectetur risus orci, vel suscipit orci rhoncus in. Sed vestibulum non nulla vel hendrerit. Ut non lectus elementum, dignissim odio quis, cursus neque. Sed eleifend erat a est ornare fermentum.

Mauris vitae est quis ante maximus convallis. Quisque quis placerat ligula. Sed non massa tristique, mollis turpis placerat, imperdiet metus. Donec tristique lacus vel turpis eleifend blandit. Vivamus accumsan arcu bibendum elit tincidunt molestie. Nunc non ligula augue. Nullam tincidunt rutrum dui eu lacinia. Vivamus gravida semper dignissim. Nam ultrices bibendum nulla bibendum vehicula. In volutpat imperdiet consequat.`,
        description: 'Landing page for a fictional basketball academy',
        link: 'https://github.com/chubi-x/ball-academy-landing-page',
        thumbnail: '/images/projects/finiteViz.jpg',
        tools: ['sass', 'tailwindcss', 'javascript']
      }
    ]
  ])
}

export const testimonials = [
  {
    name: 'Professor Wulf Dettmer',
    job: 'Professor of Aerospace Engineering, Swansea University',
    link: 'https://www.linkedin.com/in/wulf-dettmer-bbab09a/',
    testimonial:
      'Chubi did a very good job on his masters dissertation and it was a pleasure working with him. I learnt a lot myself and am keen to continue building on his work.'
  },
  {
    name: 'Ojima Aniegboka',
    job: 'Senior Product Designer, GoCo.io',
    link: 'https://www.linkedin.com/in/ojima-aniegboka/',
    testimonial:
      'Chubi is not only a genius problem-solver but also an exceptional collaborator. His willingness to listen, share ideas, and work seamlessly within a team environment is truly admirable. He elevates the whole team with his expertise and positive attitude, making every project a success.'
  },
  {
    name: 'Ojima Aniegboka',
    job: 'Senior Product Designer, GoCo.io',
    link: 'https://www.linkedin.com/in/ojima-aniegboka/',
    testimonial:
      'Chubi is not only a genius problem-solver but also an exceptional collaborator. His willingness to listen, share ideas, and work seamlessly within a team environment is truly admirable. He elevates the whole team with his expertise and positive attitude, making every project a success.'
  },
  {
    name: 'Professor Wulf Dettmer',
    job: 'Professor of Aerospace Engineering, Swansea University',
    link: 'https://www.linkedin.com/in/wulf-dettmer-bbab09a/',
    testimonial:
      'Chubi did a very good job on his masters dissertation and it was a pleasure working with him. I learnt a lot myself and am keen to continue building on his work.'
  },
  {
    name: 'Professor Wulf Dettmer',
    job: 'Professor of Aerospace Engineering, Swansea University',
    link: 'https://www.linkedin.com/in/wulf-dettmer-bbab09a/',
    testimonial:
      'Chubi did a very good job on his masters dissertation and it was a pleasure working with him. I learnt a lot myself and am keen to continue building on his work.'
  },
  {
    name: 'Professor Wulf Dettmer',
    job: 'Professor of Aerospace Engineering Swansea University',
    link: 'https://www.linkedin.com/in/wulf-dettmer-bbab09a/',
    testimonial:
      'Chubi did a very good job on his masters dissertation and it was a pleasure working with him. I learnt a lot myself and am keen to continue building on his work.'
  }
]

export const navLinks = [
  { name: 'projects', link: '/projects' },
  { name: 'resume', link: '/resume' },
  { name: 'contact', link: '/contact' }
]
