export default () => ({
  port: process.env.PORT || 3000,
  microserviceTCPHost: process.env.MICROSERVICE_TCP_HOST,
  microservicePort: process.env.MICROSERVICE_TCP_PORT,
});
