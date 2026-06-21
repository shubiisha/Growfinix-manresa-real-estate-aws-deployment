# Manresa Real Estate - AWS Cloud Deployment

## Project Overview

Manresa Real Estate is a responsive React-based frontend application deployed on AWS cloud infrastructure.

The project demonstrates static website hosting using Amazon S3 and global content delivery using Amazon CloudFront CDN with HTTPS security.

---

# Technologies Used

## Frontend

- React.js
- Vite
- JavaScript
- CSS

## AWS Services

- Amazon S3
- Amazon CloudFront
- AWS IAM
- AWS Certificate Management (HTTPS via CloudFront)

---

# Architecture

User

↓

Amazon CloudFront CDN

↓

Amazon S3 Bucket

↓

React Static Website Files


---

# Implementation Steps


## 1. Frontend Development

Created a responsive real estate website using React.

Features:

- Home page
- Property listing page
- Login interface
- Responsive navigation


---

## 2. Production Build

The React application was converted into optimized static files using:

npm run build


The generated dist folder contains:

- index.html
- JavaScript files
- CSS files
- Assets


---

## 3. Amazon S3 Deployment

An S3 bucket was created to store the static website files.

Deployment process:

1. Created S3 bucket
2. Uploaded React build files
3. Configured static website hosting
4. Enabled website access


---

## 4. CloudFront CDN Configuration

Amazon CloudFront was configured to distribute website content globally.

Configuration:

- S3 bucket configured as origin
- HTTPS enabled
- Default root object set as index.html
- CDN caching enabled


---

# Final Website URL

CloudFront URL:

https://dy0xnnx8ick3.cloudfront.net/


---

# Benefits of This Architecture

## High Availability

AWS provides reliable infrastructure for website delivery.


## Low Latency

CloudFront caches content closer to users using global edge locations.


## Security

HTTPS encryption protects communication between users and AWS.


## Scalability

The architecture can handle increasing numbers of visitors without managing servers.


---

# Future Improvements

Possible enhancements:

- Custom domain using Route 53
- SSL certificate using ACM
- CI/CD deployment using GitHub Actions
- Backend API integration
- Database integration
