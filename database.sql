CREATE DATABASE startup_ai;

CREATE TABLE projects(

id SERIAL PRIMARY KEY,

startup_name VARCHAR(200),

industry VARCHAR(100),

business_model VARCHAR(100),

target_market VARCHAR(200),

budget BIGINT,

description TEXT

);