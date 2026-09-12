-- migrate:up
CREATE TABLE logs (
  id UUID DEFAULT generateUUIDv4(),
  created_at DateTime64(3) DEFAULT now64(3),
  payload String,
  metadata String DEFAULT '{}'
)
ENGINE = MergeTree
ORDER BY (created_at, id);

-- migrate:down
DROP TABLE logs;
