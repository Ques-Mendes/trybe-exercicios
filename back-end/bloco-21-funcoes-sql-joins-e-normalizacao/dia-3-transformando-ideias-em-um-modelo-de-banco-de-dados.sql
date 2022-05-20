CREATE DATABASE IF NOT EXISTS zoo;
USE zoo;

CREATE TABLE animal(
	animal_id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    especie VARCHAR(100) NOT NULL,
    sexo VARCHAR(100) NOT NULL,
    idade INT NOT NULL,
    localizacao VARCHAR(100) NOT NULL
) engine=InnoDB;

CREATE TABLE gerente(
	gerente_id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL
) engine=InnoDB;

CREATE TABLE cuidador(
	cuidador_id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    gerente_id INT NOT NULL,
    FOREIGN KEY (gerente_id) REFERENCES gerente (gerente_id)
) engine=InnoDB;

CREATE TABLE animal_cuidador(
	cuidador_id INT NOT NULL,
    animal_id INT NOT NULL,
    CONSTRAINT PRIMARY KEY(cuidador_id, animal_id),
    FOREIGN KEY (cuidador_id) REFERENCES cuidador (cuidador_id),
    FOREIGN KEY (animal_id) REFERENCES animal(animal_id)
) engine=InnoDB;








