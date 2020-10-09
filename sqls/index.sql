create table User(
  user_id INT NOT NULL AUTO_INCREMENT,
  last_name VARCHAR(40) NOT NULL,
  first_name VARCHAR(40) NOT NULL,
  PRIMARY KEY ( user_id )
);
INSERT INTO User (last_name,first_name)
VALUES ('Bagshot','Bathilda'),
('Black','Sirius'),
('Brown','Lavender'),
('Chang','Cho'),
('Creevey','Colin'),
('Crouch','Bartemius'),
('Delacour','Fleur'),
('Diggle','Dedalus'),
('Diggory','Cedric'),
('Dumbledore','Aberforth'),
('Dumbledore','Albus'),
('Dursley','Dudley'),
('Dursley','Petunia'),
('Dursley','Vernon'),
('Filch','Argus'),
('Finnigan','Seamus'),
('Fletcher','Mundungus');