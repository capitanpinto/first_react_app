CREATE DATABASE firstdatabase;

CREATE TABLE users(
    user_id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    user_password VARCHAR(255) NOT NULL
);

INSERT INTO users (name, email, user_password) VALUES ('santi', 'santi@santi.com', 'password');
 
CREATE TABLE repositories(
    repository_id SERIAL PRIMARY KEY,
    description VARCHAR(255),
    name VARCHAR(255),
    url text,
    user_id INT,
    CONSTRAINT fk_users
        FOREIGN KEY(user_id)
            REFERENCES users(user_id)
);