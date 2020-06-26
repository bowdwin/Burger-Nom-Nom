DROP DATABASE IF EXISTS burgers;
CREATE DATABASE burgers;
CREATE TABLE burgers(
    id INT AUTO_INCREMENT NOT NULL,
    burger_name VARCHAR(255) NOT NULL,
    devoured BOOLEAN DEFAULT FALSE,
    createdAt TIMESTAMP NOT NULL default current_timestamp,
    PRIMARY KEY(id)
);




-- local DB setup

CREATE DATABASE burgers;
USE burgers;
CREATE TABLE burgers(
    id INT NOT NULL AUTO_INCREMENT,
    burger_name varchar(255) NOT NULL,
    devoured BOOLEAN NOT NULL,
    PRIMARY KEY (id)
)