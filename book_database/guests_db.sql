CREATE DATABASE guests;

USE guests;

DROP IF EXISTS TABLE admin_users;

CREATE TABLE admin_users(
    id INT AUTO_INCREMENT,
    username varchar(64),
    password varchar(64),
    id PRIMARY KEY(id)
);

DROP IF EXISTS TABLE guests;

CREATE TABLE guests(
    id int AUTO_INCREMENT,
    first_name varchar(64),
    last_name varchar(64),
    description varchar(100),
    creation_date timestamp default current_timestamp,
    id PRIMARY KEY(id)
);

INSERT INTO admin_users(username, password)
values
('admin', 'bzc7ZOCcwxz7hfP5oIpk'),
('admin2', '1UmsJSFIUX3heMYS0Ybd'),
('admin3', 'TemHdfmldVd1m5ifrgwE');