CREATE SCHEMA proyectoIntegrador;

USE proyectoIntegrador;

CREATE TABLE `proyectointegrador`.`usuarios` (
  `idUsuarios` INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
  `email` VARCHAR(50),
  `pass` VARCHAR(200),
  `fotoPerfil` VARCHAR(200),
  `fecha` DATETIME,
  `dni` INT(11),
  `createdAt` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `deletedAt` TIMESTAMP NULL,
  UNIQUE INDEX `dni_UNIQUE` (`dni` ASC),
  UNIQUE INDEX `email_UNIQUE` (`email` ASC));

CREATE TABLE `proyectointegrador`.`posteos` (
  `idPosteos` INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
  `nombreImagen` VARCHAR(500),
  `url` VARCHAR(500),
  `piePosteo` VARCHAR(50),
  `idUsuarios` INT UNSIGNED,
  `createdAt` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `deletedAt` TIMESTAMP NULL,
  FOREIGN KEY (`idUsuarios`) REFERENCES `usuarios`(`idUsuarios`)); 


CREATE TABLE `proyectointegrador`.`comentarios` (
  `idComentarios` INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
  `textoComent` VARCHAR(500),
  `idPosteos` INT UNSIGNED,
  `idUsuarios` INT UNSIGNED,
  `createdAt` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `deletedAt` TIMESTAMP NULL,
  FOREIGN KEY (idPosteos) REFERENCES posteos(idPosteos),
  FOREIGN KEY (idUsuarios) REFERENCES usuarios(idUsuarios));



INSERT INTO usuarios(idUsuarios, email, pass, fotoPerfil, fecha, dni,createdAt, updatedAt, deletedAt)
VALUES(DEFAULT,'marting@gmail.com','$2a$10$Dm/8MeFev1LHZy2tpVcineRkcDzVEIY1EwECebzfAebHBJb/c8sJm','https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/M/MAXVER01_Max_Verstappen/maxver01.png.transform/2col/image.png','2000-12-10',35089233,DEFAULT,DEFAULT,DEFAULT);

INSERT INTO usuarios(idUsuarios, email, pass, fotoPerfil, fecha, dni, createdAt, updatedAt, deletedAt)
VALUES(DEFAULT,'marcosl@gmail.com','$2a$10$0z6TfYPyOywK.OOCKbjsC.anZ0LssoE4gI/fTjAU0su2lhN.oFXvW','https://media.vogue.mx/photos/64e791e72497275ac48c75d1/master/w_1600%2Cc_limit/Ferrari.jpg','2010-12-21',30983333,DEFAULT,DEFAULT,DEFAULT);

INSERT INTO usuarios(idUsuarios, email, pass, fotoPerfil, fecha, dni, createdAt, updatedAt, deletedAt)
VALUES(DEFAULT,'leon@gmail.com','$2a$10$33Vkybg0fJCHgp5qOJe9Wu0vjb6mqrM4acSr3ulwrOfFbOc/DtlX2','https://s1.eestatic.com/2023/01/29/motor/737436563_230499300_1706x960.jpg','2022-02-01',20343455,DEFAULT,DEFAULT,DEFAULT);

INSERT INTO usuarios(idUsuarios, email, pass, fotoPerfil, fecha, dni, createdAt, updatedAt, deletedAt)
VALUES(DEFAULT,'leangigo@hotmail.com','$2a$10$LaSVm9sRS8Vl6CGOfNgaGebGomR335QT57qBd9p/.4m9nJVo0EjZG','https://i.insider.com/5fd3b419e00bce00188badcc?width=1136&format=jpeg','1999-02-10',38889121,DEFAULT,DEFAULT,DEFAULT);

INSERT INTO usuarios(idUsuarios, email, pass, fotoPerfil, fecha, dni, createdAt, updatedAt, deletedAt)
VALUES(DEFAULT,'gastonf@gmail.com','$2a$10$ZI9m2ee7I0SKioh4KIpFi.K2XjA/Uexo.YQL4C7BxnuP3J138ATbS','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4kS474sV8KfwkcFeJiQxxWqz7e2rDVCyk5w&usqp=CAU','2003-11-28',40571727,DEFAULT,DEFAULT,DEFAULT);




INSERT INTO posteos(idPosteos, nombreImagen,url, piePosteo, idUsuarios, createdAt, updatedAt, deletedAt) 
VALUES(DEFAULT,'Ferrari 250 GTO (1962)','https://i.pinimg.com/564x/ac/f8/34/acf834ec57213dcdb6c15337501ecee8.jpg','Cuando el lujo se encuentra con la velocidad.', 1,DEFAULT,DEFAULT,DEFAULT);

INSERT INTO posteos(idPosteos, nombreImagen,url, piePosteo, idUsuarios, createdAt, updatedAt, deletedAt) 
VALUES(DEFAULT,'Maserati 450 S (1956)','https://i.pinimg.com/564x/7c/d8/5a/7cd85ab161560c8904e81e3ea43c9bb2.jpg','Un vistazo al pasado con el Maserati 450 S',  1,DEFAULT,DEFAULT,DEFAULT);

INSERT INTO posteos(idPosteos, nombreImagen,url, piePosteo, idUsuarios, createdAt, updatedAt, deletedAt) 
VALUES(DEFAULT,'Ferrari 250 GT PF','https://i.pinimg.com/564x/34/4d/5a/344d5ae4685a551bd5842f62234c6c74.jpg','Sueños hechos realidad: el icónico Ferrari.', 2,DEFAULT,DEFAULT,DEFAULT);

INSERT INTO posteos(idPosteos, nombreImagen,url, piePosteo, idUsuarios, createdAt, updatedAt, deletedAt) 
VALUES(DEFAULT,'Datsun 240z','https://i.pinimg.com/564x/d2/d1/e4/d2d1e43f3e83143388896070da16b613.jpg','Un clásico que nunca pasa de moda.', 2,DEFAULT,DEFAULT,DEFAULT);

INSERT INTO posteos(idPosteos, nombreImagen,url, piePosteo, idUsuarios, createdAt, updatedAt, deletedAt) 
VALUES(DEFAULT,'1960 Aston Martin DB 4 GT','https://i.pinimg.com/564x/1e/c0/15/1ec0157f4fdb50904651a55a2432629f.jpg','El encanto intemporal de un clásico.', 3,DEFAULT,DEFAULT,DEFAULT);

INSERT INTO posteos(idPosteos, nombreImagen,url, piePosteo, idUsuarios, createdAt, updatedAt, deletedAt) 
VALUES(DEFAULT,'Golf Gti Cabriolet','https://i.pinimg.com/564x/6c/1b/a7/6c1ba7fa64d4c63559d34ce5a912e8f9.jpg','Deportividad al aire libre.',  3,DEFAULT,DEFAULT,DEFAULT);

INSERT INTO posteos(idPosteos, nombreImagen,url, piePosteo, idUsuarios, createdAt, updatedAt, deletedAt) 
VALUES(DEFAULT,'Shelby Cobra','https://i.pinimg.com/564x/91/86/0d/91860d403362e9d668937997a2018784.jpg','La herencia de la velocidad: El Shelby Cobra.', 4,DEFAULT,DEFAULT,DEFAULT);

INSERT INTO posteos(idPosteos, nombreImagen,url, piePosteo, idUsuarios, createdAt, updatedAt, deletedAt) 
VALUES(DEFAULT,'Lamborghini Countach','https://i.pinimg.com/564x/0f/28/1e/0f281e4ef0982aea5e8652751aedece0.jpg','Creado para romper récords y corazones.', 4,DEFAULT,DEFAULT,DEFAULT);

INSERT INTO posteos(idPosteos, nombreImagen,url, piePosteo, idUsuarios, createdAt, updatedAt, deletedAt) 
VALUES(DEFAULT,'1972 BMW Turbo','https://i.pinimg.com/564x/d2/ad/79/d2ad7943b688b9ec3ee7e64b6721f53e.jpg','1972 BMW Turbo & The Munich Olympics',  5,DEFAULT,DEFAULT,DEFAULT);

INSERT INTO posteos(idPosteos, nombreImagen,url, piePosteo, idUsuarios, createdAt, updatedAt, deletedAt) 
VALUES(DEFAULT,'Toyota Celica GT-Four 1989','https://i.pinimg.com/564x/50/fa/88/50fa889def831c47e0f87148aa0e28e4.jpg',
'El legado Toyota en el mundo de los deportivos.', 5,DEFAULT,DEFAULT,DEFAULT);



INSERT INTO comentarios(idComentarios, textoComent,idPosteos, idUsuarios, createdAt, updatedAt, deletedAt) 
VALUES(DEFAULT,'Obra de arte',1,2,DEFAULT,DEFAULT,DEFAULT),
(DEFAULT,'Increible',1,3,DEFAULT,DEFAULT,DEFAULT),
(DEFAULT,'Potencia tana',1,4,DEFAULT,DEFAULT,DEFAULT),
(DEFAULT,'Que hermosura',1,5,DEFAULT,DEFAULT,DEFAULT),

(DEFAULT,'MASERATI POWER',2,2,DEFAULT,DEFAULT,DEFAULT),
(DEFAULT,'Que ganas de sacarlo a rodar',2,3,DEFAULT,DEFAULT,DEFAULT),
(DEFAULT,'Elegancia',2,5,DEFAULT,DEFAULT,DEFAULT),
(DEFAULT,'Amazing designe',2,4,DEFAULT,DEFAULT,DEFAULT),

(DEFAULT,'Italian beauty',3,5,DEFAULT,DEFAULT,DEFAULT),
(DEFAULT,'Grandisimo',3,4,DEFAULT,DEFAULT,DEFAULT),
(DEFAULT,'Que año es?',3,3,DEFAULT,DEFAULT,DEFAULT),
(DEFAULT,'A la venta?',3,1,DEFAULT,DEFAULT,DEFAULT),

(DEFAULT,'Sueño hecho realidad',4,1,DEFAULT,DEFAULT,DEFAULT),
(DEFAULT,'Que belleza por favorr',4,4,DEFAULT,DEFAULT,DEFAULT),
(DEFAULT,'Podria usarlo todo el dia',4,5,DEFAULT,DEFAULT,DEFAULT),
(DEFAULT,'DEUS',4,3,DEFAULT,DEFAULT,DEFAULT),

(DEFAULT,'Dios solo te pido una bendicion como esta',5,4,DEFAULT,DEFAULT,DEFAULT),
(DEFAULT,'De lo mejor que vi',5,2,DEFAULT,DEFAULT,DEFAULT),
(DEFAULT,'Arte puro',5,1,DEFAULT,DEFAULT,DEFAULT),
(DEFAULT,'Bond, James Bond',5,5,DEFAULT,DEFAULT,DEFAULT),

(DEFAULT,'Potencia alemana',6,1,DEFAULT,DEFAULT,DEFAULT),
(DEFAULT,'Increible el paso del tiempo',6,5,DEFAULT,DEFAULT,DEFAULT),
(DEFAULT,'Elegancia y poder',6,4,DEFAULT,DEFAULT,DEFAULT),
(DEFAULT,'Cuantos caballos tiene??',6,2,DEFAULT,DEFAULT,DEFAULT),

(DEFAULT,'The Shelby empire',7,5,DEFAULT,DEFAULT,DEFAULT),
(DEFAULT,'Grandioso',7,2,DEFAULT,DEFAULT,DEFAULT),
(DEFAULT,'Los detalles en cada aspecto son increibles',7,3,DEFAULT,DEFAULT,DEFAULT),
(DEFAULT,'Una verdadera locura',7,1,DEFAULT,DEFAULT,DEFAULT),

(DEFAULT,'Y pensar que hacian tractores',8,3,DEFAULT,DEFAULT,DEFAULT),
(DEFAULT,'En el lambo escuchando samba',8,2,DEFAULT,DEFAULT,DEFAULT),
(DEFAULT,'Que lindo bicho',8,5,DEFAULT,DEFAULT,DEFAULT),
(DEFAULT,'Rum rummm',8,1,DEFAULT,DEFAULT,DEFAULT),

(DEFAULT,'70s deluxe',9,4,DEFAULT,DEFAULT,DEFAULT),
(DEFAULT,'Que buena epoca',9,1,DEFAULT,DEFAULT,DEFAULT),
(DEFAULT,'Un juguete de primera',9,2,DEFAULT,DEFAULT,DEFAULT),
(DEFAULT,'Increible',9,3,DEFAULT,DEFAULT,DEFAULT),

(DEFAULT,'Japoneses a la carga',10,2,DEFAULT,DEFAULT,DEFAULT),
(DEFAULT,'Indestructible',10,1,DEFAULT,DEFAULT,DEFAULT),
(DEFAULT,'Imparable',10,4,DEFAULT,DEFAULT,DEFAULT),
(DEFAULT,'Los japoneses siempre fueron superiores',10,3,DEFAULT,DEFAULT,DEFAULT);