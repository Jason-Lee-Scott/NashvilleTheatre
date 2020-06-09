--create database NashvilleTheatreDB

--use NashvilleTheatreDB

--create table Subscription (
--	SubscriptionId int PRIMARY KEY IDENTITY (1,1) NOT NULL,
--	level int,
--	price decimal,
--)

--create table UserType(
--	UserTypeId int PRIMARY KEY IDENTITY(1,1) NOT NULL,
--	[Type] varchar(100)
--)

--create table [User] (
--	UID int PRIMARY KEY Identity(1,1) NOT NULL,
--	FirstName varchar(100),
--	LastName varchar(100),
--	Email varchar(75),
--	TotalCredits int,
--	SubscriptionId int FOREIGN KEY REFERENCES Subscription(subscriptionId),
--	UserTypeId int FOREIGN KEY REFERENCES UserType(userTypeId)
--)

--CREATE TABLE Category (
--	CategoryId INT PRIMARY KEY IDENTITY(1,1) NOT NULL,
--	CategoryName VARCHAR
--)

--CREATE TABLE Venue (
--	VenueId INT PRIMARY KEY IDENTITY(1,1) NOT NULL,
--	StreetAddress VARCHAR,
--	City VARCHAR,
--	[State] VARCHAR,
--	ZipCode VARCHAR(5),
--	Capacity INT
--)

--CREATE TABLE TheatreCompany (
--	TheatreCoId INT PRIMARY KEY IDENTITY(1,1) NOT NULL,
--	TheatreCompanyName VARCHAR(100)
--)

--CREATE TABLE Show (
--	ShowId INT PRIMARY KEY IDENTITY(1, 1) NOT NULL,
--	TheatreCoId INT FOREIGN KEY REFERENCES TheatreCompany(TheatreCoId),
--	VenueId INT FOREIGN KEY REFERENCES Venue(VenueId),
--	ShowDate DATETIME NOT NULL,
--	StartTime DATETIME NOT NULL,
--	ShowName VARCHAR(255) NOT NULL,
--	Synopsis VARCHAR(1000),
--	CreditCost INT,
--	CategoryId INT FOREIGN KEY REFERENCES Category(CategoryId)
--)

--create table ShowOrder (
--	OrderId int Primary Key Identity(1,1) NOT NULL,
--	ShowId int FOREIGN KEY REFERENCES Show(ShowId),
--	UID int FOREIGN KEY REFERENCES [User](UID),
--	CreditPrice int not null,
--	ShowOrderDate datetime not null
--)

--create table SubscriptionOrder (
--	SubscriptionOrderId int PRIMARY KEY IDENTITY(1,1) NOT NULL,
--	UID int FOREIGN KEY REFERENCES [User](UID),
--	SubscriptionID int FOREIGN KEY REFERENCES Subscription(SubscriptionId),
--	SubscriptionOrderDate datetime not null
--)

--INSERT INTO SubscriptionOrder ([UID], subscriptionId, SubscriptionOrderDate)
--VALUES
--((SELECT [uid] FROM [user] WHERE [uid] = 1), (SELECT subscriptionId FROM Subscription WHERE [level] = 1), '2020-04-27'),
--((SELECT [uid] FROM User WHERE [level] = 2), (SELECT subscriptionId FROM Subscription WHERE [level] = 2), '2020-05-12'),
--((SELECT [uid] FROM User WHERE [level] = 3), (SELECT subscriptionId FROM Subscription WHERE [level] = 3), '2020-06-15'),
--((SELECT [uid] FROM User WHERE [level] = 4), (SELECT subscriptionId FROM Subscription WHERE [level] = 4), '2020-07-19'),
--((SELECT [uid] FROM User WHERE [level] = 2), (SELECT subscriptionId FROM Subscription WHERE [level] = 2), '2020-05-12')


--INSERT INTO [User](FirstName, LastName, Email, TotalCredits, SubscriptionId, UserTypeId)
--VALUES
--('Evan','Grabenstein','evangdesigns@gmail.com',2,(SELECT SubscriptionId FROM Subscription WHERE [Level]= 1),(SELECT UserTypeId FROM UserType WHERE [Type]='audience')),
--('Denise','Baker','denviol125@gmail.com', 4,(SELECT SubscriptionId from Subscription WHERE [Level]=2),(SELECT UserTypeId from UserType WHERE [Type]='audience')),
--('Jacob','Best-Wittenberg', 'wittenberg.jacob@gmail.com', 6, (SELECT SubscriptionId from subscription WHERE [Level]=3), (SELECT UserTypeId from UserType WHERE [Type]='audience')),
--('Kelsey','Creel', 'kelseycreel@gmail.com',100 , (SELECT SubscriptionId from Subscription WHERE [Level]=4), (SELECT UserTypeId from UserType WHERE [Type]='audience')),
--('Helen','Mirren','evangdesigns@gmail.com',0,(SELECT SubscriptionId FROM Subscription WHERE [Level]= 5),(SELECT UserTypeId FROM UserType WHERE [Type]='venue')),
--('Kevin','Bacon','evangdesigns@gmail.com',0,(SELECT SubscriptionId FROM Subscription WHERE [Level]= 5),(SELECT UserTypeId FROM UserType WHERE [Type]='venue'))

--ALTER TABLE Venue 
--ADD VenueName VARCHAR NOT NULL;

--INSERT INTO [UserType]([Type])
--VALUES
--('audience'),
--('venue')
--INSERT INTO [Subscription]([Level], Price)
--VALUES
--(1,20.00),
--(2,50.00),
--(3,80.00),
--(4,120.00),
--(5,500.00)
--INSERT INTO [Category](CategoryName)
--VALUES
--('Comedy'),
--('Tragedy'),
--('Drama'),
--('Musical'),
--('Stand-Up'),
--('Horror'),
--('Magic'),
--('Mystery'),
--('Romance'),
--('Satire'),
--('Thriller')
--INSERT INTO [Venue](VenueName, StreetAddress, City, [State], ZipCode, Capacity)
--VALUES
--('Music Valley Event Center', '2416 Music Valley Drive', 'Nashville', 'TN', '37016', 250),
--('Dark Hourse Theatre', '4610 Charlotte Ave', 'Nashville', 'TN', '37209', 100),
--('Looby Center Theater', '2301 Rosa L Parks Blvd, Nashville, TN 37208', 218),
--('Chaffin''s Barn Dinner Theatre', '8204 TN-100', 'Nashville', 'TN', '37221', 300),
--('Tennessee Performing Arts Center','505 Deaderick St', 'Nashville', 'TN', '37243', 2472),
--('Encore Theatre Company','6978 Lebanon Rd', 'Mt. Juliet', 'TN', '37122', 75)

--alter table TheatreCompany alter column TheatreCompanyName varchar (100)

--INSERT INTO TheatreCompany(TheatreCompanyName)
--VALUES
--('Encore Theatre Company'),
--('Way-Off Broadway Productions'),
--('Act1 Theatre Company'),
--('Circle Players'),
--('Centerpiece Theatre'),
--('Inebriated Shakespeare'),
--('Chaffin''s Barn Dinner Theatre')

--drop table TheatreCompany;

drop database NashvilleTheatre