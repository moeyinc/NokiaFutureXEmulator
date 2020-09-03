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
          networkVisualization: ['wireless'],
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
          networkVisualization: ['wireless'],
          thumbnail: 'section-02.png',
          text: 'All asembly processes are automated. ' +
            'Robots are capable of handling complex movements ' +
            'and some processes are highly synchronized.',
          nextText: 'Flexible Prod.',
        },
        {
          id: 3,
          title: 'Flexible Production',
          networkVisualization: ['wireless'],
          thumbnail: 'section-03.png',
          text: 'In the Future X Factory the production process is ' +
            'hyper-flexible. \nEach assembly line produces different types ' +
            'of products to deal with daily orders.',
          nextText: 'Robots at Work',
        },
        {
          id: 4,
          title: 'Robots at Work',
          networkVisualization: ['wireless'],
          thumbnail: 'section-04.png',
          text: 'All asembly processes are automated. Robots are capable ' +
            'of handling complex movements and some processes are highly ' +
            'synchronized.',
          nextText: 'Control Room',
        },
        {
          id: 5,
          title: 'Control Room',
          networkVisualization: [],
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
          networkVisualization: [],
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
          networkVisualization: [],
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
          networkVisualization: [],
          networkTypeSelection: true,
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
          networkVisualization: [],
          networkTypeSelection: true,
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
          networkVisualization: [],
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
      catchImageFilename: 'future-logistics-catch.png',
      sections: [
        {
          id: 1,
          title: 'Loading Package',
          networkVisualization: ['wireless', 'wired'],
          distributerSelection: true,
          thumbnail: '2-section-01.png',
          text: 'We are at a warehouse near an airport. ' +
            'An airplane takes off, rumbling the room. ' +
            'Future warehouses are fully automated with robots connected ' +
            'through 5G networks. Loader robots are loading entire shelves ' +
            'onto trucks. Drones are picking up and dropping off packages ' +
            'from neighboring facilities.',
          nextText: 'Getting on the Highway',
        },
        {
          id: 2,
          title: 'Getting on the Highway',
          networkVisualization: ['wireless'],
          thumbnail: '2-section-02.png',
          text: 'An autonomous truck with the hero package drives towards ' +
            'a highway. A platoon passes by directly ahead. Our truck merges ' +
            'onto the highway and joins the platoon.',
          nextText: 'Platoon System',
        },
        {
          id: 3,
          title: 'Platoon System',
          networkVisualization: ['wireless'],
          thumbnail: '2-section-03.png',
          text: 'The AR Overlay shows the truck’s range and efficiency. ' +
          'The system reports low fuel level for the lead truck and it ' +
          'automatically rearranges the truck order.',
          nextText: 'Transferring Package',
        },
        {
          id: 4,
          title: 'Transferring Package',
          networkVisualization: ['wireless'],
          thumbnail: '2-section-04.png',
          text: 'The system reports that the hero package has a destination ' +
            'better matched with another truck in the same platoon. ' +
            'System recommends transferring the package. A drone is ' +
            'dispatched to move the package to the other truck.',
          nextText: 'Edge Server',
        },
        {
          id: 5,
          title: 'Edge Server',
          networkVisualization: ['wireless', 'wired'],
          thumbnail: '2-section-05.png',
          text: 'Edge servers manage applications dynamically providing ' +
            'specific services on demand including security.',
          nextText: 'Private Slices',
        },
        {
          id: 6,
          title: 'Private Slices',
          networkVisualization: ['wireless', 'wired'],
          thumbnail: '2-section-06.png',
          text: 'Private slices not only include allocated bandwidth and speed, ' +
            'but also applications that are dynamically managed by Edge Servers.',
          nextText: 'Obstacle Ahead',
        },
        {
          id: 7,
          title: 'Obstacle Ahead',
          networkVisualization: ['wireless'],
          thumbnail: '2-section-07.png',
          text: 'The system alerts that there is a disabled vehicle ahead. ' +
            'The platoon disbands. Some trucks move to the left lane and ' +
            'others to the right. Once beyond the stalled car, the platoon ' +
            'reforms.',
          nextText: 'Control Room',
        },
        {
          id: 8,
          title: 'Control Room',
          networkVisualization: [],
          thumbnail: '2-section-08.png',
          text: 'Inside the control room we see an array of maps. ' +
            'Each shows platoons in different colors as well as views ' +
            'from drones. A single operator can handle enormous and ' +
            'complex delivery tasks with AI support.',
          nextText: 'Reroute Package',
        },
        {
          id: 9,
          title: 'Reroute Package',
          networkVisualization: [],
          thumbnail: '2-section-09.png',
          text: 'The system notifies the operator that the truck with ' +
            'the hero package could be re-routed to an approaching platoon ' +
            'with more vehicles travelling to the same delivery region. ' +
            'This increases trip efficiency, and the package will get ' +
            'delivered sooner. After the operator confirms, the truck ' +
            'joins the new platoon.',
          nextText: 'Network Structure',
        },
        {
          id: 10,
          title: 'Network Structure',
          networkVisualization: [],
          networkStructure: true,
          thumbnail: '2-section-10.png',
          text: 'Fiber cores arranged in loops provide redundancy and the ' +
            'backbone for 5G and 4G networks. Edge Servers insure that ' +
            'mission critical ultra low latency, high bandwidth information ' +
            'is managed as locally.',
          nextText: 'Multiple Carriers',
        },
        {
          id: 11,
          title: 'Multiple Carriers',
          networkVisualization: [],
          thumbnail: '2-section-11.png',
          text: 'A truck from a different delivery company requests to ' +
            'join the platoon. After the operator confirms, the truck joins ' +
            'the platoon and its information is shared in the platoon ' +
            'information panel.',
          nextText: 'Exit Highway',
        },
        {
          id: 12,
          title: 'Exit Highway',
          networkVisualization: ['wireless', 'wired'],
          thumbnail: '2-section-12.png',
          text: 'System notifies that the exit for the truck with the hero ' +
            'package is approaching. The truck leaves the platoon and gets ' +
            'off the highway to the delivery area.',
          nextText: 'Drone Delivery',
        },
        {
          id: 13,
          title: 'Drone Delivery',
          networkVisualization: ['wireless'],
          networkTypeSelection: true,
          sleeveCalibration: true,
          replayButton: true,
          thumbnail: '2-section-13.png',
          text: 'System receives an immediate delivery request for the ' +
            'hero package which was originally scheduled for delivery later. ' +
            'The operator manually pilots a delivery drone to make the new ' +
            'delivery deadline.',
          nextText: 'Round Up',
        },
        {
          id: 14,
          title: 'Round Up',
          networkVisualization: ['wireless'],
          thumbnail: '2-section-14.png',
          text: 'Future logistics are highly efficient and flexible with ' +
            'the help of 5G networks.',
          nextText: 'Back to Scenarios',
        },
      ],
    },
    {
      id: 3,
      title: 'Future \nPort',
      disabled: false,
      catchImageFilename: 'future-port-catch.png',
      sections: [
        {
          id: 1,
          title: 'Satellite Network',
          networkVisualization: [],
          thumbnail: '3-section-01.png',
          text: 'Communications are at the core of logistics and global shipping.',
          nextText: 'Global Shipping Lane',
        },
        {
          id: 2,
          title: 'Global Shipping Lane',
          networkVisualization: [],
          thumbnail: '3-section-02.png',
          text: 'Maritime transport is the backbone of global trade and the global economy.',
          nextText: 'HAPS',
        },
        {
          id: 3,
          title: 'HAPS',
          networkVisualization: [],
          thumbnail: '3-section-03.png',
          text: 'High-Altitude Pseudo Satellite (HAPS) aircraft provide network specifically for shipping lanes.',
          nextText: 'Network Hand-off',
        },
        {
          id: 4,
          title: 'Network Hand-off',
          networkVisualization: ['wireless'],
          thumbnail: '3-section-04.png',
          text: 'Mission-critical solutions for industries will need to handle global and local networks with seamless handoffs between them. Ships are served by a WAN slice using satellite access until they reache the coverage area of a harbor, where control is handed off to a port LAN (5G) slice.',
          nextText: 'Container Ship Bridge',
        },
        {
          id: 5,
          title: 'Container Ship Bridge',
          networkVisualization: ['wireless'],
          thumbnail: '3-section-05.png',
          text: 'Ships bridge comes alive with data from the port and AR that interprets the ships and obstacles ahead.',
          nextText: 'Control Room',
        },
        {
          id: 6,
          title: 'Control Room',
          networkVisualization: ['wireless'],
          thumbnail: '3-section-06.png',
          text: 'All aspects of the Port are monitored from the safety of the control room.',
          nextText: 'Network Structure',
        },
        {
          id: 7,
          title: 'Network Structure',
          networkVisualization: ['wireless', 'wired'],
          thumbnail: '3-section-07.png',
          text: 'The port is fortified with a structure of fiber lines along the perimeter that meet at the location of the local edge network.  A mesh of 5G mm-wave beaming serves the autonomous equipment.',
          nextText: 'Docking Ship',
        },
        {
          id: 8,
          title: 'Docking Ship',
          networkVisualization: ['wireless'],
          thumbnail: '3-section-08.png',
          text: 'These sensors and actuators are much faster at mooring a ship than traditional methods. They dynamically hold the ship with less movement so unloading is easier and can be done faster. Additionally, they better protect the dock which is very costly to repair.',
          nextText: 'Crane Operation',
        },
        {
          id: 9,
          title: 'Crane Operation',
          networkVisualization: [],
          startMissionButton: true,
          craneControl: true,
          replayButton: true,
          thumbnail: '3-section-09.png',
          text: 'We can virtually enter the cab of a ship-to-shore crane to take over its opperation and bring a priority container to shore.',
          nextText: 'Container Scan',
        },
        {
          id: 10,
          title: 'Container Scan',
          networkVisualization: ['wireless'],
          thumbnail: '3-section-10.png',
          text: 'This advanced scanner takes advantage of multiple technologies including embedded data loggers, exterior sensors and the container manifest in combination with a high tech scan that penetrates the steal container to potentially reveal contraband or other illegal cargo.',
          nextText: 'Round Up',
        },
        {
          id: 11,
          title: 'Round Up',
          networkVisualization: ['wireless'],
          thumbnail: '3-section-11.png',
          text: 'This container has been carefully tracked from its orign to its final destination using an array of networks and network configurations.  Future networks like the ones we have just seen will enable ports to work more efficiently and with more certaintly about the cargo that passes through.',
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
