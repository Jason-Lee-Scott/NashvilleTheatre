--create database NashvilleTheatreDB

use NashvilleTheatreDB

create table Subscription (
	SubscriptionId int PRIMARY KEY IDENTITY (1,1) NOT NULL,
	level int,
	price decimal,
)

create table UserType(
	UserTypeId int PRIMARY KEY IDENTITY(1,1) NOT NULL,
	[Type] varchar(100)
)

create table [User] (
	UID int PRIMARY KEY Identity(1,1) NOT NULL,
	FirstName varchar(100),
	LastName varchar(100),
	Email varchar(75),
	TotalCredits int,
	SubscriptionId int FOREIGN KEY REFERENCES Subscription(subscriptionId),
	UserTypeId int FOREIGN KEY REFERENCES UserType(userTypeId)
)

CREATE TABLE Category (
	CategoryId INT PRIMARY KEY IDENTITY(1,1) NOT NULL,
	CategoryName VARCHAR
)

CREATE TABLE Venue (
	VenueId INT PRIMARY KEY IDENTITY(1,1) NOT NULL,
	StreetAddress VARCHAR,
	City VARCHAR,
	[State] VARCHAR,
	ZipCode VARCHAR(5),
	Capacity INT
)

CREATE TABLE TheatreCompany (
	TheatreCoId INT PRIMARY KEY IDENTITY(1,1) NOT NULL,
	TheatreCompanyName VARCHAR
)

CREATE TABLE Show (
	ShowId INT PRIMARY KEY IDENTITY(1, 1) NOT NULL,
	TheatreCoId INT FOREIGN KEY REFERENCES TheatreCompany(TheatreCoId),
	VenueId INT FOREIGN KEY REFERENCES Venue(VenueId),
	ShowDate DATETIME NOT NULL,
	StartTime DATETIME NOT NULL,
	ShowName VARCHAR(255) NOT NULL,
	Synopsis VARCHAR(1000),
	CreditCost INT,
	CategoryId INT FOREIGN KEY REFERENCES Category(CategoryId)
)

create table ShowOrder (
	OrderId int Primary Key Identity(1,1) NOT NULL,
	ShowId int FOREIGN KEY REFERENCES Show(ShowId),
	UID int FOREIGN KEY REFERENCES [User](UID),
	CreditPrice int not null,
	ShowOrderDate datetime not null
)

create table SubscriptionOrder (
	SubscriptionOrderId int PRIMARY KEY IDENTITY(1,1) NOT NULL,
	UID int FOREIGN KEY REFERENCES [User](UID),
	SubscriptionID int FOREIGN KEY REFERENCES Subscription(SubscriptionId),
	SubscriptionOrderDate datetime not null
)