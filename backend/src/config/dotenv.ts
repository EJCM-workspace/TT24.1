export default function configDotenv() {
  const result = require('dotenv').config();
  if (result.error) { throw result.error; }
}
    