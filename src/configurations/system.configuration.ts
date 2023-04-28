export default () => ({
  port: parseInt(process.env.PORT, 10) || 3000,
  storagePath: process.env.STORAGE_PATH || "./public",
});
