
# SupplyPro

It is Ecommerce store used to sell gym equipments and Supplements built with Mern Stack
-
- user can view all products
- user can view single product
- user can search products and view products by category and price range
- user can add to cart 
- user can register & sign in
- admin can create, edit, update & delete products
- admin can create categories
- admin can view ordered products
- admin can change the status of a product (processing, shipped, delivered, etc.)



## Demo
This Website is depolyed [click here](https://linktodocumentation)
## Run Locally

Clone the project

```bash
  git clone https://github.com/Tag102/Suppltpro
```

Go to the project directory

```bash
  cd my-project
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev
```

sample code for backend .env
```bash
    PORT =8080
    DEV_MODE = developement
    MONGODB_URI=YOUR_MONGODB_URI
    JWT_SECRET=YOUR_JWT_SECRET
    BRAINTREE_MERCHANT_ID=YOUR_BRAINTREE_MERCHANT_ID
    BRAINTREE_PUBLIC_KEY=YOUR_BRAINTREE_PUBLIC_KEY
    BRAINTREE_PRIVATE_KEY=YOUR_BRAINTREE_PRIVATE_KEY
```

sample code for frontend .env
```bash
    REACT_APP_API = http://localhost:8080
```
## Tech Stack

**FrontEnd:** React.js

**Server:** Node.js, Express

**DataBase:** Mongodb

