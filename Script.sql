create database Game10


use Game10

create table Users
(
	Id int AUTO_INCREMENT,
	Name varchar(50) not null,
	Lastname varchar(50)not null,
	Email varchar(50)not null,
	Password varchar(500),
	PRIMARY KEY (ID)
) 

create table Idoms
(
	Id int AUTO_INCREMENT,
	Name varchar(50) not null,
	PRIMARY KEY (ID)
) 

create table ProducerCompanies
(
	Id int AUTO_INCREMENT,
	Name varchar(50) not null,
	PRIMARY KEY (ID)
) 

create table DeveloperCompanies
(
	Id int AUTO_INCREMENT,
	Name varchar(50) not null,
	PRIMARY KEY (ID)
) 

create table Categories
(
	Id int AUTO_INCREMENT,
	Name varchar(50) not null,
	PRIMARY KEY (ID)
) 

create table PurchaseStates
(
	Id int AUTO_INCREMENT,
	Description varchar(50) not null,
	PRIMARY KEY (ID)
) 

create table DocumentTypes
(
	Id int AUTO_INCREMENT,
	Description varchar(50) not null,
	PRIMARY KEY (ID)
) 

create table AreaCodes
(
	Id int AUTO_INCREMENT,
	Description varchar(50) not null,
	PRIMARY KEY (ID)
) 

create table Products
(
	Id int AUTO_INCREMENT,
	Name varchar(50) not null,
	CoverageUrl varchar(500) not null,
	Price float,
	ReleaseDate datetime not null,
	VideoUrl varchar(500) not null,
	PlayersQuantity int,
	Description varchar(500) not null,
	Discount float,
	IsSuggested bit,
	ProducerId int,
	DeveloperId int,
	LanguageId int,
	Category int,
	PRIMARY KEY (ID)
) 

create table ShoppingCarts
(
	Id int AUTO_INCREMENT,
	TotalPrice float,
	UserId int,
	PurchaseStatusId int,
	PRIMARY KEY (ID)
)

create table ShoppingCartsProducts
(
	Id int AUTO_INCREMENT,
	UnitPrice float,
	Quantity int,
	Discount float,
	ShoppingCartId int,
	ProductId int,
	PRIMARY KEY (ID)
)

create table Payer
(
	Id int AUTO_INCREMENT,
	Name varchar(50) not null,
	Lastname varchar(50)not null,
	Email varchar(50)not null,
	AreaCodeId int,
	PhoneNumber varchar(20),
	DocumentTypeId int,
	DocumentNumber varchar(50),
	ShoppingCartId int,
	PRIMARY KEY (ID)
)

create table Payment
(
	Id int AUTO_INCREMENT,
	ExternalReference varchar(50) not null,
	CreationDate datetime not null,
	ExpirationDate datetime not null,
	ApprovalDate datetime not null,
	Status varchar(50)not null,
	Amount int,
	ShoppingCartId int,
	PRIMARY KEY (ID)
)

ALTER TABLE products
ADD FOREIGN KEY (LanguageId) REFERENCES idoms(Id);

ALTER TABLE products
ADD FOREIGN KEY (DeveloperId) REFERENCES developercompanies(Id);

ALTER TABLE products
ADD FOREIGN KEY (ProducerId) REFERENCES producercompanies(Id);

ALTER TABLE products
ADD FOREIGN KEY (Category) REFERENCES categories(Id);

INSERT INTO users (Name, Lastname, Email, Password)
VALUES ('Juan Pablo', 'Henao Rojas', 'juanphrojas@outlook.com', '$2a$10$/q8TeZADl2xx.NqQP6GEEOKsUgHtDy1sy.AglXpF3Sg.0LSDf4902');

INSERT INTO areacodes (Description)
VALUES ('+57');

INSERT INTO areacodes (Description)
VALUES ('+54');