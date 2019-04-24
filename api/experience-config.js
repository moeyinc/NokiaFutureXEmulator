module.exports = {
  stories: [
    {
      id: 1,
      title: 'Future X Factory',
      disabled: false,
      category: 'BUSINESS',
      summary: 'Let\'s go inside a fully automated factory where ' +
        'manufacturing lines are powered by a fast, reliable 5G Network. ' +
        'Manufucturing and its process will never be the same.',
      catchImageFilename: 'future-factory-catch.png',
      sections: [
        {
          id: 1,
          title: '5G Vehicles',
          control: 'ar',
          thumbnail: 'section-01.png',
          text: 'A truck drives to a Nokia factory, directed by a ' +
            '5G network beam. In the future, vehicles are autonomous, ' +
            'controlled by a network. \nAs the truck arrives it transfers ' +
            'from a WAN newtwork to factory controlled LAN network.',
          nextText: 'Fully Automated',
        },
        {
          id: 2,
          title: 'Fully Automated Factory',
          control: 'ar',
          thumbnail: 'section-02.png',
          text: 'All asembly processes are automated. ' +
            'Robots are capable of handling complex movements ' +
            'and some processes are highly synchronized.',
          nextText: 'Flexible Prod.',
        },
        {
          id: 3,
          title: 'Flexible Production',
          control: 'ar',
          thumbnail: 'section-03.png',
          text: 'In the Future X Factory the production process is ' +
            'hyper-flexible. \nEach assembly line produces different types ' +
            'of products to deal with daily orders.',
          nextText: 'Robots at Work',
        },
        {
          id: 4,
          title: 'Robots at Work',
          control: 'ar',
          thumbnail: 'section-04.png',
          text: 'All asembly processes are automated. Robots are capable ' +
            'of handling complex movements and some processes are highly ' +
            'synchronized.',
          nextText: 'Control Room',
        },
        {
          id: 5,
          title: 'Control Room',
          control: '',
          thumbnail: 'section-05.png',
          text: 'Now we are in the control room. This is where people, ' +
            'out of harm\'s way, supervise and control productivity by ' +
            'operating the 5G network. \nAs the robots work, the 5G network ' +
            'collects enormous amounts of production related information ' +
            'for us without any lag.',
          nextText: 'Factory Management',
        },
        {
          id: 6,
          title: 'Factory Management',
          control: '',
          thumbnail: 'section-06.png',
          text: 'A single expert can control multiple robots, increasing ' +
            'productivity. \nThe future factory constantly monitors its own ' +
            'state and can instantaneously and dynamically adjust to ' +
            'changes on demand.',
          nextText: 'Reconfiguration',
        },
        {
          id: 7,
          title: 'Dynamic Reconfiguration',
          control: '',
          thumbnail: 'section-07.png',
          text: 'Human operators receive alerts when necessary. ' +
            'AI software determines when and how to optimize the ' +
            'factory and dynamically adjusts its assembly lines, ' +
            'but a human always stays in control. This controlled ' +
            'flexibility allows the factory to be made as productive ' +
            'as possible. \nThe process of dynamic reconfiguration requires ' +
            'low-latency, high-performing wireless networks.',
          nextText: 'Drone Supervision',
        },
        {
          id: 8,
          title: 'Drone Supervision',
          control: 'network',
          thumbnail: 'section-08.png',
          text: 'The AI has reported a problem: one robot is moving its ' +
            'arm inefficiently. It will not fulfill the order in time. ' +
            'A human operator dispatches a drone to investigate and finds ' +
            'the problem right away through high-quality live streaming. ' +
            '\nThis is one more thing that sets 5G apart from Wifi and LTE ' +
            'networks.',
          nextText: 'Reprogramming',
        },
        {
          id: 9,
          title: 'Robot Reprogramming',
          control: 'network',
          sleeveCalibration: true,
          replayButton: true,
          acceptButton: true,
          thumbnail: 'section-09.png',
          text: 'A human operator can manually program the robot\'s ' +
            'arm movement with an interactive sleeve. The high speed ' +
            'network is capable of remote operation with hand-craft ' +
            'quality. Now we can quickly reprogram the robot. ' +
            'Only 5G can make this possible.',
          nextText: 'Round Up',
        },
        {
          id: 10,
          title: 'Round Up',
          control: '',
          thumbnail: 'section-10.png',
          text: 'Thanks to the 5G network capability, factory production ' +
            'is now back on schedule. Future X  Factory is managed by ' +
            'fewer people but with more efficiency. The high-speed, ' +
            'reliable network maximizes productivity more than ever before.',
          nextText: 'Back to Scenarios',
        },
      ],
    },
    {
      id: 2,
      title: 'City of \nFuture',
      disabled: true,
      category: 'COMING SOON',
      summary: 'Full automated manufacturing lines powered by 5G Network.',
      catchImageFilename: 'future-city-catch.png',
      sections: [
        {
          id: 1,
          title: 'XXXXX XXXXX',
          control: '',
          thumbnail: '',
          text: '',
        },
      ],
    },
  ],
  sleeves: [
    'D0L5',
    'D0R5',
    'FAKE 1',
    'FAKE 2',
    'FAKE 3',
    'FAKE 4',
  ],
};
