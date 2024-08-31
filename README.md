
# FIXIT WEB APP (Backend APIs)

Pushing TechyJaunt Group Phase Project on github repository


## Authors

- [@InyangUkpong](https://www.github.com/InyangUkpong)


## Badges

Add badges from somewhere like: [shields.io](https://shields.io/)


[Follow Me](https://img.shields.io/twitter/follow/InyangDesigns?style=social)![Twitter Follow](https://img.shields.io/twitter/follow/InyangDesigns?style=social)




## Github
![GitHub followers](https://img.shields.io/github/followers/InyangUkpong?style=social)

## 🚀 About Me
Software Engineer (Backend)


## 🛠 Skills
NodeJs, Django, MongoDB, PostgreSQL, Docker, Postman, VSCode, Git, Github

## License

[cisco](https://www.credly.com/badges/7b49a22a-a891-48e1-9e10-8f692e0afbea/twitter?t=rfjssi)



## API Reference

-**AUTHENTICATION**

- **Base URL: https://fixitwebapp-nodejs-backend.onrender.com/**


#### Register user

```http
  POST /api/auth/register
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `email` | `string` | **Required**. Your email address |
| `password` | `string` | **Required**. The user password.         |
| `name`   | `string`| **Required** The user firstname and lastname|
| `role`| `string`| The role of the user (e.g., client, artisan)

**Example Body**:

```json
{ "name": "John Doe", "email": "johndoe@example.com", "password": "SecurePass123", "role": "artisan" } 
```


#### Login user


```http
  POST /api/auth/login
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `email` | `string` | **Required**. Your email address |
| `password` | `string` | **Required**. The user password.         |

**Example Body**:

```json
{ "email": "johndoe@example.com", "password": "SecurePass123" } 
```

-**USERS**

#### Get profile

```http
  GET /api/users/profile
```




-**ARTISAN**

#### Create artisan

```http
  POST /api/artisans
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `Job Title`      | `string` | Appliance Technician |
| `Category`      | `string` | Appliance Repair |
| `Bio`      | `string` | Experienced technician with over 5 years in appliance repair, specializing in refrigerators and washing machines. |
| `Services`      | `string` |Refrigerator Repair, Washing Machine Repair, Dishwasher Installation|


**Example Body**:

```json
{ "job_title": "Appliance Technician", "category": "Appliance Repair", "bio": "Experienced technician with over 5 years in appliance repair, specializing in refrigerators and washing machines.", "services": [ "Refrigerator Repair", "Washing Machine Repair", "Dishwasher Installation" ] } 
```




#### Get all artisan


```http
  GET /api/artisans
```


-**BOOKING**

### Create booking


```http
POST /api/booking
```

### Get all my booking(client)

```http
GET /api/booking/client-bookings
```

### Get a vendor's booked dates

```http
GET /api/booking/vendor-booked-dates/{id}
```
## Tech Stack



**Server:** Node, Express


## Deployment

To deploy this project run

```bash
  npm start
```


## Installation

Install my-project with npm

```bash
  npm install fixit-latest
  cd fixit-latest
```
    
## 🔗 Links
[![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://katherineoelsner.com/)
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/)
[![twitter](https://img.shields.io/badge/twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/)




