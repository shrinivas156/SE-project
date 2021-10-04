# Booking system
## Team members
Name|RollNO
--------------|--------------
Shrinivas Bagadi| 191CS156
Darshan A V| 191CS219
Shyam Sundar N R| 191CS157
Lokeshwar Reddy| 191CS161
Karthik Chandra| 191CS222
## Project Objective
- The objective of this project is to create a web-based application to manage classroom bookings, Hostels booking, Seminar Halls booking, Guest room booking, and sports booking at NITK.
- The purpose of this project is to reduce manual work with papers and documents.
## Project Description
The project is aimed to minimize the manual work, the number of people involved, and paperwork while booking a guest room, seminar hall, or a classroom in the institution. It also extends to features like booking a sports court and selecting a mess of the user's preference (once per month).

The project will be a web-based portal to make the booking system accessible on the go, making it multi-device compatible.
The project is intended for the people of the Institution with a valid username and password provided by the institute. A user can access the portal's functionalities only after authentication of username and password.On the other hand, admin will have the authority to accept or reject the booking slot request from student or faculty.
## Flow chart
![flow chart image3png](https://user-images.githubusercontent.com/91780372/135726892-a38f3d48-7ad4-4f26-a188-040188bf0f11.png)
## Project Requirements
#### Users in the system
- Administrator
- Faculty
- user(student,faculty any valid member of Institute with username and password).
- 
## Functional requirements/Features
 - **Users in the system** :
  -There are mainly two users in the system 
  -Admins who approve the booking system.
  -The Users(student / faculty / any valid member with id and password) who seek to book the variety of services the website offers.
  
 - **Basic requirements** :
   - All the users are required to signup to enjoy the services of our application.
   - During sign up the application will store the following information about the user :
       - Username /Email ID
       - Password
    - Every user can login and logout of the system through any compatible browser.
    - Since the application is done exclusively for nitk students, the authentication should be done using nitk mail id only.
    - Our project will provide the following booking services to enjoy
        - classrooms
        - seminar halls
        - sport Courts
        - Guest Houses
        - Mess

  - **Classrooms**
     - A user will be able to
        - View booked rooms / room availability.
        - Book a room if available.
        - Cancel the room booking if not required.
     - The admin who handles can
        - Approve or reject a requested classroom (in case of clash, faculty will be given preference over a student or first come first serve is followed) 
        - change the availability status of a classroom
        - Add/Remove a slot or a classroom data
        
  - **Seminar halls**
      - A faculty enjoys the following
        - In case the faculty has any seminar to be conducted by him or guest professor he can directly book any which are available.
      - The  admin has to look into the flowing 
        - View the hall booked and view the available halls.
        - Cancel a hall booking if required and asked by the user.
        - Book a hall if available as per user request 
        - Accept or reject the request from the students for the hall booking.
       - The users other than faculty have these services
         - View the hall booked or the halls which are available.
         - Request for the hall booking or cancellation.
        
  - **Sport Courts** 
      - The admin looks into the foolowing matters
        - View the slot booked or the slots which are available for different sports.
        - Cancel a slot booking if the user cant make it.
        - The admin can forbid any user to book incase of any misconduct.
      - The user enjoys
        - Book a slot for any particular sports based on any availability.
        - Cancel the slot prior to the alloted time.
       
  - **Guest Houses**
      - The admin takes care of
         - Once the allocater accepts to give the rooms requested,the admin can said the room allocation confirmation mail to the user.
      - The user can book a guest house according to the need and by selecting among the guest rooms which are available.
     
  - **Mess**
      - The admin shoulders the responsibilty of the following
         - He has to allot the requested mess to the person based on first come first serve.
         - If the user hasn't specified any priorities for the mess block, the user allots the default mess based on food habits.
      - The user gets to enjoy
        - Choosing the mess based on food habits and the block number.

  - All the requests will contain information about the purpose of booking, the room he/she prefers and the required capacity.
  - ALL these requests will travel to the admin for verification and approval, if approved by admin the website would show as booked or booking confirmed.
  - If there is no word from the admin,the request will automatically get cancelled after 5 days or the time slot it is booked for whichever is sooner.
 
## Non functional Requirements
- **Scalability**: since we are using mysql with proper data integrity models, scalability in terms of data management is achieved. Also scalability in terms of server management is taken care with Nodejs.
- **Reliability and Availability**: This is taken care by Node.js, since Node.js increases performance and handles a lot of requests. It also overcomes large data processing 
challenges.
- **Maintainability and Manageability**: This is satisfied properly as we are following a proper software engineering priniciples and also we are using frameworks like ReactJs which provied us to create different components to maintain the code properly.
- **Usability**: This web based application is user friendly with best user interface.
- **Portabilty and Compatibilty**: Protability and Compatibilty of the application on other devices or browsers or networks is possible, since we are using latest technologies and framework for the project.
- **Performance**: Performance of the application is high,as the request time, response time and through output time is very less.
- **Security**: Application provide a proper data security using mysql and security of proper data transfer is taken care by Node.js

## Software Specification
### operation system server
- Windows:  8 or newer
- Mac: OS X v10.7 or higher
- Linux: ubuntu
### Tools
- Microsoft visual studio code
### Frameworks/Languages
Front-end|Back-end|Database
--------------|--------------|--------------
ReactJs|Node js|MySQl
HTML|Express.js
CSS|
## Hardware Specification
- Below are the hardware requirments for the application to run smoothly.

Hardware|Minimum|Recommended
--------------|--------------|--------------
Processor|1 GHz of X86 or X64 processor|2 GHz of X86 or X64
Memory|1 GB|4 GB
Hard drive|32 GB|64 GB
## Dataflow diagram
### High level Diagram
![IMAGE](https://user-images.githubusercontent.com/91780372/135727128-b22f6eb1-a35f-4f30-ac75-7190ba9706a7.jpg)
