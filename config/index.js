// Load Module Dependencies

module.exports = {
  // Database URL dialect(Mongodb)
  DB_URL: "mongodb://127.0.0.1:27017/gebeya_api",

  // HTTP Port
  HTTP_PORT: 9100,

  // Password Hashing Salt length
  SALT_FACTOR: 13,

  // Auth Token Length
  AUTH_TOKEN_LENGTH: 23,

  OPEN_ENDPOINTS: [
    "/users/login",
    "/users/create"
  ]
}