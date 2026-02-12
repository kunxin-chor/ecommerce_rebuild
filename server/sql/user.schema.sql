CREATE DATABASE IF NOT EXISTS ecommerce;

CREATE USER IF NOT EXISTS 'ecommerce_app'@'localhost';

ALTER USER 'ecommerce_app'@'localhost'
  IDENTIFIED VIA mysql_native_password USING PASSWORD('change_me_strong_password');

GRANT SELECT, INSERT, UPDATE, DELETE, CREATE, ALTER, INDEX, REFERENCES
  ON ecommerce.*
  TO 'ecommerce_app'@'localhost';

FLUSH PRIVILEGES;
