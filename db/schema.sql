DROP DATABASE IF EXISTS burgers;
CREATE TABLE burgers(
    id INT AUTO_INCREMENT NOT NULL,
    burger_name VARCHAR(255) NOT NULL,
    devoured BOOLEAN DEFAULT FALSE,
    createdAt TIMESTAMP NOT NULL default current_timestamp,
    PRIMARY KEY(id)
);