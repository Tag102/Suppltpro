
# SupplyPro

The Ecommerce store, constructed using the Mern Stack, specializes in selling gym equipment and supplements. It offers various functionalities for both users and administrators:

For Users:

- Users can explore the entire product catalog.
- They can view detailed information about a specific product.
- Users have the ability to search for products based on categories and price ranges.
- It allows users to add selected items to their shopping cart.
- Users can create an account and log in.

For Administrators:

- Admins have the privilege to manage the product inventory by creating, editing, updating, and deleting products.
- They can also establish product categories.
- Admins can access information about ordered products.
- They have the authority to change the status of products (e.g., processing, shipped, delivered, etc.).



## Demo
This Website is depolyed [click here](https://colorful-calf-hosiery.cyclic.app/)
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

