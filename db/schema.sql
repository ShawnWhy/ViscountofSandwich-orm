
DROP DATABASE IF EXISTS burgerLord_db;

CREATE DATABASE burgerlord_db;

USE Burgerlord_db;

CREATE TABLE burgers (
  id INT NOT NULL AUTO_INCREMENT,
  top_bun VARCHAR(255) NOT NULL,
  cheese VARCHAR(300) NULL,
  lettice BOOLEAN,
  meat VARCHAR(100) NOT NULL,
  bottom_bun VARCHAR (225)NOT NULL,
  name VARCHAR(100) NULL,
  eaten BOOLEAN NOT NULL,
   PRIMARY KEY (id)
)
