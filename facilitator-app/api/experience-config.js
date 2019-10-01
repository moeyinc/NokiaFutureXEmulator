module.exports = {
  ambientModules: [
    {
      name: 'connected-nodes',
      thumbnail: 'connected-nodes.png',
    },
    {
      name: 'attract',
      thumbnail: 'attract.png',
    },
  ],
  introModules: [
    {
      name: 'city-intro',
      thumbnail: 'city-intro.png',
    },
    {
      name: 'city-top',
      thumbnail: 'city-top.png',
    },
  ],
  stories: [
    {
      id: 1,
      title: 'Future X Factory',
      disabled: false,
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
      title: 'Future \nLogistics',
      disabled: false,
      catchImageFilename: 'future-city-catch.png',
      sections: [
        {
          id: 1,
          title: 'Load Up Package',
          control: 'ar',
          distributerSelection: true,
          thumbnail: 'section-01.png',
          text: 'We are at warehouses located in close proximity to an airport. ' +
            'An airplane takes off, rumbling the room. \n' +
            'Future warehouses are full-automated with robots connected 5G networks. ' +
            'Loader robots are loading entire shelves onto trucks. ' +
            'Drones are picking up and dropping off packages from neighboring facilities.',
          nextText: 'Getting on Highway',
        },
        {
          id: 2,
          title: 'Getting on Highway',
          control: 'ar',
          thumbnail: 'section-02.png',
          text: 'An autonomous truck with the distinctive parcel drives towards a highway. ' +
            'At the onramp, local 4G and LTE towers make handoff to 5G ' +
            'low frequency towers repeated along the highway. ' +
            'A platoon passes by directly ahead. Our truck accelerates merges onto the highway. ' +
            'After a series of wireless communications with the platoon it joins in back.',
          nextText: 'Platoon System',
        },
        {
          id: 3,
          title: 'Platoon System',
          control: 'ar',
          thumbnail: 'section-03.png',
          text: 'When AR Overlay is turned on (generally) truck range and efficiency are shown. ' +
            'System reports low fuel level alert to the lead truck and it automatically arranges the truck order.',
          nextText: 'Transferring Parcel',
        },
        {
          id: 4,
          title: 'Transferring Parcel',
          control: 'ar',
          thumbnail: 'section-04.png',
          text: 'System recommends  to transfer the package has a destination better matched with another truck in the same platoon. \n' +
            'Drone with packages dispatches to other truck.',
          nextText: 'Obstacle Ahead',
        },
        {
          id: 5,
          title: 'Obstacle Ahead',
          control: 'ar',
          thumbnail: 'section-05.png',
          text: 'System alerts there is a slow malfunctional car ahead.\n' +
            'Platoon disbands with some trucks moving to the left lane and others to the right. Once beyond the stalled car, the platoon reforms.',
          nextText: 'Control Room',
        },
        {
          id: 6,
          title: 'Control Room',
          control: '',
          thumbnail: 'section-06.png',
          text: 'Camera view pulls into the control room.\n' +
            'Displays around room show an array of maps each with dynamically updated visuals of maps with platoons depicted in different colors mixed with camera views of drones.\n' +
            'Single operator can handle enormous and complex delivery tasks with an AI support.',
          nextText: 'Re-route Package',
        },
        {
          id: 7,
          title: 'Re-route Package',
          control: '',
          thumbnail: 'section-07.png',
          text: 'The distinctive package could be re-routed to an approaching \n' +
            'platoon which has additional packages in the same delivery region. ' +
            'Will increase trip efficiency, plus package will get delivered sooner.',
          nextText: 'Multiple Carriers',
        },
        {
          id: 8,
          title: 'Multiple Carriers',
          control: '',
          thumbnail: 'section-08.png',
          text: 'A truck with distinctively different brand requests to join convoy. \n' +
            'After operator’s request comfirmation. ' +
            'The truck joined the platoon and its information is shared in the platoon information panel.',
          nextText: 'Exit Highway',
        },
        {
          id: 9,
          title: 'Exit Highway',
          control: '',
          thumbnail: 'section-09.png',
          text: 'System notifies that an exit for the truck with the distinctive package is approaching. ' +
            'The truck leaves the platoon and gets off the highway to the delivery area.',
          nextText: 'Drone Delivery',
        },
        {
          id: 10,
          title: 'Drone Delivery',
          control: 'network',
          sleeveCalibration: true,
          replayButton: true,
          thumbnail: 'section-10.png',
          text: 'System receives an immediate delivery request of the distinctive package which was originally to be delivered in hours. ' +
            'The operator manual-pilots delivery drone remotely to make it.',
          nextText: 'Round Up',
        },
        {
          id: 11,
          title: 'Round Up',
          control: '',
          thumbnail: 'section-10.png',
          text: 'Fture logistics are highly efficient and flexible with a help of 5G networks.',
          nextText: 'Back to Scenarios',
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
