const { Client } = require('pg');

module.exports = async ({ uri, opts, dryRun }) => {
  if (dryRun) {
    return null;
  }

  const db = new Client({
    ...opts,
    connectionString: uri,
  });

  try {
    await db.connect();
  } catch (err) {
    throw err;
  }

  return db;
}
