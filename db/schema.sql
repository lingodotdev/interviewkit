
--
-- Database schema
--

CREATE DATABASE IF NOT EXISTS localize;

CREATE TABLE localize.logs
(
    `id` UUID DEFAULT generateUUIDv4(),
    `created_at` DateTime64(3) DEFAULT now64(3),
    `payload` String,
    `metadata` String DEFAULT '{}'
)
ENGINE = MergeTree
ORDER BY (created_at, id)
SETTINGS index_granularity = 8192;

CREATE TABLE localize.schema_migrations
(
    `version` String,
    `ts` DateTime DEFAULT now(),
    `applied` UInt8 DEFAULT 1
)
ENGINE = ReplacingMergeTree(ts)
PRIMARY KEY version
ORDER BY version
SETTINGS index_granularity = 8192;


--
-- Dbmate schema migrations
--

INSERT INTO localize.schema_migrations (version) VALUES
    ('20260912000000');
