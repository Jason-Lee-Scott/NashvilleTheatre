--Check the Table
SELECT * FROM [Subscription]
--Create the Column In the Table
--ALTER TABLE [Subscription]
--ADD UserTypeId INT FOREIGN KEY REFERENCES UserType(UserTypeId)
--Populate the Columns with data based on row
--UPDATE Subscription
--SET UserTypeId= 1
--WHERE SubscriptionId= 1;
--UPDATE Subscription
--SET UserTypeId= 1
--WHERE SubscriptionId= 2;
--UPDATE Subscription
--SET UserTypeId= 1
--WHERE SubscriptionId= 3;
--UPDATE Subscription
--SET UserTypeId= 1
--WHERE SubscriptionId= 4;
--UPDATE Subscription
--SET UserTypeId= 2
--WHERE SubscriptionId= 5;
----Create the Column In the Table
--ALTER TABLE [Subscription]
--ADD SubscriptionName varchar(20);
--Populate the Columns with data based on row
--UPDATE Subscription
--SET SubscriptionName = 'Community'
--WHERE SubscriptionId= 1;
--UPDATE Subscription
--SET SubscriptionName = 'Indie'
--WHERE SubscriptionId= 2;
--UPDATE Subscription
--SET SubscriptionName = 'Broadway'
--WHERE SubscriptionId= 3;
--UPDATE Subscription
--SET SubscriptionName = 'Hollywood'
--WHERE SubscriptionId= 4;
--UPDATE Subscription
--SET SubscriptionName = 'Basic'
--WHERE SubscriptionId= 5;

select * from [user]
--alter table [user]
--add IsActive bit default 1 Not null;
--alter table [user]
--add DateCreated DateTime default GetDate() Not null;
--alter table [user]
--add DateDeleted DateTime null;

select * from show
select * from Venue
select * from TheatreCompany

ALTER TABLE Show
ADD ShowImageUrl varchar(200);

ALTER TABLE Venue
ADD VenueImageUrl varchar(200) null;

ALTER TABLE TheatreCompany
ADD TheatreCoImageUrl varchar(200) null;

Update Show Set ShowImageUrl = 'https://media.timeout.com/images/103774300/image.jpg' WHERE ShowId = 1
Update Show Set ShowImageUrl = 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F6%2F2017%2F05%2Fmsdsiac_ec002_h-2000.jpg' WHERE ShowId = 2
Update Show Set ShowImageUrl = 'https://media.timeout.com/images/103015872/image.jpg' WHERE ShowId = 3
Update Show Set ShowImageUrl = 'https://www.theprospectordaily.com/wp-content/uploads/2018/01/ChorusLine_01_WEB-900x600.jpg' WHERE ShowId = 4
Update Show Set ShowImageUrl = 'https://www.repstl.org/assets/img/ProPhotoSTL.com-P2_05195-3a53efd653.jpg' WHERE ShowId = 5
Update Show Set ShowImageUrl = 'https://theartsdesk.com/sites/default/files/styles/mast_image_landscape/public/mastimages/A%20Midsummer%20Night%27s%20Dream%20-%202013%20-%20John%20Haynes%20sized.jpeg?itok=XvKltPD7' WHERE ShowId = 6
Update Show Set ShowImageUrl = 'https://fords-theatre.s3.amazonaws.com/files/productions/02h-deathofsalesman-fords.jpg' WHERE ShowId = 7
