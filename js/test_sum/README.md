# test_sum

```
EXPLAIN ANALYZE SELECT SUM(price_int) FROM items WHERE shop_id = 'shop_1';
EXPLAIN ANALYZE SELECT SUM(price_numeric) FROM items WHERE shop_id = 'shop_1';
EXPLAIN ANALYZE SELECT SUM(CAST(price_varchar AS NUMERIC)) FROM items WHERE shop_id = 'shop_1';
EXPLAIN ANALYZE SELECT SUM(CAST(price_varchar AS NUMERIC)) FROM items WHERE shop_id = 'shop_1' AND created_at >= '2023-12-11 05:15:09.00+00' AND created_at < '2023-12-11 05:15:16.00+00';
```
