const Eureka = require('eureka-js-client').Eureka;
const eureka = new Eureka({
  instance: {
    app: 'ReservationGestion',
    hostName: 'reservation',
    ipAddr: '127.0.0.1',
    port: {
      '$': 3000,
      '@enabled': 'true',
    },
    vipAddress: 'ReservationGestion',
    statusPageUrl: 'http://localhost:3000/info',
    healthCheckUrl: 'http://localhost:3000/health',
    dataCenterInfo: {
      '@class': 'com.netflix.appinfo.InstanceInfo$DefaultDataCenterInfo',
      name: 'MyOwn',
    },
    registerWithEureka: true, // Set to false as you don't want to register with Eureka server
    fetchRegistry: true, // Set to false as you don't want to fetch registry information
  },
  eureka: {
    host: 'eureka', // Use the actual hostname or IP where your Eureka server is running
    port: 8761,
    servicePath: '/eureka/apps',
  },
});

eureka.start();