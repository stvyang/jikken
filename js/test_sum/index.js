const pg = require('pg');
const pgFormat = require('pg-format');
const { v4: uuidv4 } = require('uuid');

const postgres = require('../postgres');

const insertItemQuery = 'INSERT INTO items (id, shop_id, price_int, price_numeric, price_varchar, created_at) VALUES ($1, $2, $3, $4, $5, $6)';

(async () => {
  const postgresDB = await postgres({
    uri: 'postgresql://localhost:5432/jikken?user=postgres&password=postgres',
  });
  
  try {
    await postgresDB.query('BEGIN');

    for (let i = 0; i < 10000; i++) {
      await postgresDB.query(insertItemQuery, [
        uuidv4(),
        'shop_1',
        i,
        i,
        i,
        new Date()
      ]);

      await postgresDB.query(insertItemQuery, [
        uuidv4(),
        'shop_2',
        i,
        i,
        i,
        new Date(),
      ]);

      console.log(`Item ${i} has been inserted`);
    }

    await postgresDB.query('COMMIT');
  } catch (err) {
    await postgresDB.query("ROLLBACK");
    throw err;
  }

  console.log('test_sum is DONE!');
  process.exit(0);
})();

