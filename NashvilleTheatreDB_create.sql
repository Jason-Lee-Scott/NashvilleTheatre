create database NashvilleTheatreDB

use NashvilleTheatreDB

create table Subscription (
	SubscriptionId INT PRIMARY KEY IDENTITY (1,1) NOT NULL,
	[Level] INT,
	Price DECIMAL(10,2),
)

create table UserType(
	UserTypeId INT PRIMARY KEY IDENTITY(1,1) NOT NULL,
	[Type] VARCHAR(100)
)

create table [User] (
	[Uid] INT PRIMARY KEY Identity(1,1) NOT NULL,
	FirstName VARCHAR(100),
	LastName VARCHAR(100),
	Email VARCHAR(75),
	TotalCredits INT,
	SubscriptionId INT FOREIGN KEY REFERENCES Subscription(SubscriptionId),
	UserTypeId INT FOREIGN KEY REFERENCES UserType(UserTypeId)
)

CREATE TABLE Category (
	CategoryId INT PRIMARY KEY IDENTITY(1,1) NOT NULL,
	CategoryName VARCHAR(100)
)

CREATE TABLE Venue (
	VenueId INT PRIMARY KEY IDENTITY(1,1) NOT NULL,
  VenueName VARCHAR(50),
	StreetAddress VARCHAR(100),
	City VARCHAR(25),
	[State] VARCHAR(25),
	ZipCode VARCHAR(5),
	Capacity INT
)

CREATE TABLE TheatreCompany (
	TheatreCoId INT PRIMARY KEY IDENTITY(1,1) NOT NULL,
	TheatreCompanyName VARCHAR(100)
)

CREATE TABLE Show (
	ShowId INT PRIMARY KEY IDENTITY(1,1) NOT NULL,
	TheatreCoId INT FOREIGN KEY REFERENCES TheatreCompany(TheatreCoId),
	VenueId INT FOREIGN KEY REFERENCES Venue(VenueId),
	ShowName VARCHAR(255) NOT NULL,
	Synopsis VARCHAR(1000),
	CreditCost INT,
	CategoryId INT FOREIGN KEY REFERENCES Category(CategoryId)
)

CREATE TABLE ShowDateTime (
	ShowDateTimeId INT PRIMARY KEY IDENTITY(1,1) NOT NULL,
	ShowId INT FOREIGN KEY REFERENCES Show(ShowId),
	ShowDateTime DATETIME NOT NULL,
)

CREATE TABLE ShowOrder (
	OrderId INT PRIMARY KEY Identity(1,1) NOT NULL,
	ShowId INT FOREIGN KEY REFERENCES Show(ShowId),
	ShowDateTimeId INT FOREIGN KEY REFERENCES ShowDateTime(ShowDateTimeId),
	[Uid] INT FOREIGN KEY REFERENCES [User]([Uid]),
	ShowOrderDate DATETIME NOT NULL
)

CREATE TABLE SubscriptionOrder (
	SubscriptionOrderId INT PRIMARY KEY IDENTITY(1,1) NOT NULL,
	[Uid] INT FOREIGN KEY REFERENCES [User](UID),
	SubscriptionId INT FOREIGN KEY REFERENCES Subscription(SubscriptionId),
	SubscriptionOrderDate DATETIME NOT NULL
)