CREATE TABLE items (
  id UUID,
  shop_id VARCHAR(255),
  price_int INT,
  price_numeric NUMERIC,
  price_varchar VARCHAR(255),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE INDEX "items_shop_id_idx" ON "items" USING BTREE("shop_id");
CREATE INDEX "items_created_at_idx" ON "items" USING btree("created_at");
