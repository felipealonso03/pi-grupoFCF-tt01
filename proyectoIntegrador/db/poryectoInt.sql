CREATE SCHEMA proyectoIntegrador;

USE proyectoIntegrador;

CREATE TABLE `proyectointegrador`.`usuarios` (
  `idUsuarios` INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
  `email` VARCHAR(50) NULL,
  `pass` VARCHAR(200) NULL,
  `fotoPerfil` VARCHAR(200) NULL,
  `fecha` DATETIME NULL,
  `dni` INT(11) NULL,
  `createdAt` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `deletedAt` TIMESTAMP NULL,
  UNIQUE INDEX `dni_UNIQUE` (`dni` ASC),
  UNIQUE INDEX `email_UNIQUE` (`email` ASC));

CREATE TABLE `proyectointegrador`.`posteos` (
  `idPosteos` INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
  `nombreImagen` VARCHAR(50) NULL,
  `url` VARCHAR(500),
  `piePosteo` VARCHAR(50) NULL,
  `idUsuarios` INT UNSIGNED, 
  FOREIGN KEY (`idUsuarios`) REFERENCES `usuarios`(`idUsuarios`)); 


CREATE TABLE `proyectointegrador`.`comentarios` (
  `idComentarios` INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
  `textoComent` VARCHAR(50) NULL,
  `idPosteos` INT UNSIGNED,
  `idUsuarios` INT UNSIGNED,
  FOREIGN KEY (idPosteos) REFERENCES posteos(idPosteos),
  FOREIGN KEY (idUsuarios) REFERENCES usuarios(idUsuarios));

/*USUARIOS*/

INSERT INTO usuarios(idUsuarios, email, pass, fotoPerfil, fecha, dni,createdAt, updatedAt, deletedAt)
VALUES(DEFAULT,'marting@gmail.com','marto221','','2000-12-10',35089233,DEFAULT,DEFAULT,DEFAULT);

INSERT INTO usuarios(idUsuarios, email, pass, fotoPerfil, fecha, dni, createdAt, updatedAt, deletedAt)
VALUES(DEFAULT,'marcosl@gmail.com','marquito','','2010-12-21',30983333,DEFAULT,DEFAULT,DEFAULT);

INSERT INTO usuarios(idUsuarios, email, pass, fotoPerfil, fecha, dni, createdAt, updatedAt, deletedAt)
VALUES(DEFAULT,'leon@gmail.com','leo323','','2022-02-01',20343455,DEFAULT,DEFAULT,DEFAULT);

INSERT INTO usuarios(idUsuarios, email, pass, fotoPerfil, fecha, dni, createdAt, updatedAt, deletedAt)
VALUES(DEFAULT,'leangigo@hotmail.com','dro34','','1999-02-10',38889121,DEFAULT,DEFAULT,DEFAULT);

INSERT INTO usuarios(idUsuarios, email, pass, fotoPerfil, fecha, dni, createdAt, updatedAt, deletedAt)
VALUES(DEFAULT,'gastonf@gmail.com','gasti202','','2003-11-28',40571727,DEFAULT,DEFAULT,DEFAULT);

/*POSTEOS*/

INSERT INTO posteos(idPosteos, nombreImagen,url, piePosteo, idUsuarios) 
VALUES(DEFAULT,'Ferrari 250 GTO (1962)','https://i.pinimg.com/564x/ac/f8/34/acf834ec57213dcdb6c15337501ecee8.jpg','Cuando el lujo se encuentra con la velocidad.', 1);

INSERT INTO posteos(idPosteos, nombreImagen,url, piePosteo, idUsuarios) 
VALUES(DEFAULT,'Maserati 450 S (1956)','https://i.pinimg.com/564x/7c/d8/5a/7cd85ab161560c8904e81e3ea43c9bb2.jpg','Un vistazo al pasado con el Maserati 450 S',  1);

INSERT INTO posteos(idPosteos, nombreImagen,url, piePosteo, idUsuarios) 
VALUES(DEFAULT,'Ferrari 250 GT PF','https://i.pinimg.com/564x/34/4d/5a/344d5ae4685a551bd5842f62234c6c74.jpg','Sueños hechos realidad: el icónico Ferrari.', 2);

INSERT INTO posteos(idPosteos, nombreImagen,url, piePosteo, idUsuarios) 
VALUES(DEFAULT,'Datsun 240z','https://i.pinimg.com/564x/d2/d1/e4/d2d1e43f3e83143388896070da16b613.jpg','Un clásico que nunca pasa de moda.', 2);

INSERT INTO posteos(idPosteos, nombreImagen,url, piePosteo, idUsuarios) 
VALUES(DEFAULT,'1960 Aston Martin DB 4 GT','https://i.pinimg.com/564x/1e/c0/15/1ec0157f4fdb50904651a55a2432629f.jpg','El encanto intemporal de un clásico.', 3);

INSERT INTO posteos(idPosteos, nombreImagen,url, piePosteo, idUsuarios) 
VALUES(DEFAULT,'Golf Gti Cabriolet','https://i.pinimg.com/564x/6c/1b/a7/6c1ba7fa64d4c63559d34ce5a912e8f9.jpg','Deportividad al aire libre.',  3);

INSERT INTO posteos(idPosteos, nombreImagen,url, piePosteo, idUsuarios) 
VALUES(DEFAULT,'Shelby Cobra','https://i.pinimg.com/564x/91/86/0d/91860d403362e9d668937997a2018784.jpg','La herencia de la velocidad: El Shelby Cobra.', 4);

INSERT INTO posteos(idPosteos, nombreImagen,url, piePosteo, idUsuarios) 
VALUES(DEFAULT,'Lamborghini Countach','https://i.pinimg.com/564x/0f/28/1e/0f281e4ef0982aea5e8652751aedece0.jpg','Creado para romper récords y corazones.', 4);

INSERT INTO posteos(idPosteos, nombreImagen,url, piePosteo, idUsuarios) 
VALUES(DEFAULT,'1972 BMW Turbo','https://i.pinimg.com/564x/d2/ad/79/d2ad7943b688b9ec3ee7e64b6721f53e.jpg','1972 BMW Turbo & The Munich Olympics',  5);

INSERT INTO posteos(idPosteos, nombreImagen,url, piePosteo, idUsuarios) 
VALUES(DEFAULT,'Toyota Celica GT-Four 1989','https://i.pinimg.com/564x/50/fa/88/50fa889def831c47e0f87148aa0e28e4.jpg',
'El legado Toyota en el mundo de los deportivos.', 5);

/*COMENTARIOS*/

INSERT INTO comentarios(idComentarios, textoComent,idPosteos, idUsuarios) 
VALUES(DEFAULT,'Obra de arte',1,1),
(DEFAULT,'Increible',1,1),
(DEFAULT,'Potencia tana',1,1),
(DEFAULT,'Que hermosura',1,1),
/*Segundo post*/
(DEFAULT,'MASERATI POWER',2,1),
(DEFAULT,'Que ganas de sacarlo a rodar',2,1),
(DEFAULT,'Elegancia',2,1),
(DEFAULT,'Amazing designe',2,1),
/*Tercer post*/
(DEFAULT,'Italian beauty',3,2),
(DEFAULT,'Grandisimo',3,2),
(DEFAULT,'Que año es?',3,2),
(DEFAULT,'A la venta?',3,2),
/*Cuarto post*/
(DEFAULT,'Sueño hecho realidad',4,2),
(DEFAULT,'Que belleza por favorr',4,2),
(DEFAULT,'Podria usarlo todo el dia',4,2),
(DEFAULT,'DEUS',4,2),
/*Quinto post*/
(DEFAULT,'Dios solo te pido una bendicion como esta',5,3),
(DEFAULT,'De lo mejor que vi',5,3),
(DEFAULT,'Arte puro',5,3),
(DEFAULT,'Bond, James Bond',5,3),
/*Sexto post*/
(DEFAULT,'Potencia alemana',6,3),
(DEFAULT,'Increible el paso del tiempo',6,3),
(DEFAULT,'Elegancia y poder',6,3),
(DEFAULT,'Cuantos caballos tiene??',6,3),
/*Septimo post*/
(DEFAULT,'The Shelby empire',7,4),
(DEFAULT,'Grandioso',7,4),
(DEFAULT,'Los detalles en cada aspecto son increibles',7,4),
(DEFAULT,'Una verdadera locura',7,4),
/*Octavo post*/
(DEFAULT,'Y pensar que hacian tractores',8,4),
(DEFAULT,'En el lambo escuchando samba',8,4),
(DEFAULT,'Que lindo bicho',8,4),
(DEFAULT,'Rum rummm',8,4),
/*Noveno post*/
(DEFAULT,'70s deluxe',9,5),
(DEFAULT,'Que buena epoca',9,5),
(DEFAULT,'Un juguete de primera',9,5),
(DEFAULT,'Increible',9,5),
/*Decimo post*/
(DEFAULT,'Japoneses a la carga',10,5),
(DEFAULT,'Indestructible',10,5),
(DEFAULT,'Imparable',10,5),
(DEFAULT,'Los japoneses siempre fueron superiores',10,5);

