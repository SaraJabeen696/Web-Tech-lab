# TechNest — E-commerce Website

## Project Description

TechNest is a static and responsive e-commerce website designed for selling electronic gadgets and tech accessories. The website features a collection of products such as wireless headphones, earbuds, smartwatches, computer accessories, and other electronic devices.

The website is designed to provide a simple, clean, and user-friendly shopping experience across mobile, tablet, and desktop screens.

## Technologies Used

- HTML5 — For creating the structure of the website.
- CSS3 — For custom styling and design.
- Tailwind CSS v4 — For responsive layouts, grids, navigation, and styling.

## Reference Website

**Website Name:** Apple Store

**Website URL:** https://www.apple.com/shop

TechNest takes design inspiration from the Apple Store's clean product presentation and minimalist layout. The website uses its own branding, colors, and page structure.

![alt text](image-1.png)

## Website Features

- Responsive navigation bar with a shopping cart icon.
- Homepage with eight electronic products.
- Product cards displaying images, names, prices, and Add to Cart buttons.
- Individual product detail page for Wireless Headphones.
- Product description, color selection, and quantity selection.
- Responsive layouts using Tailwind CSS Grid and Flexbox.
- Consistent navigation and footer across both pages.
- CSS hover effects and transitions.

## Responsive Design

The website has been designed and tested for the following screen widths:

- Mobile: 375px
- Tablet: 768px
- Desktop: 1440px

The product grid adjusts automatically according to the screen size.

## How to Run the Project

1. Open the `assignment-2` folder in Visual Studio Code.
2. Open `index.html` using the Live Server extension or a web browser.
3. Browse the products on the homepage.
4. Click the Wireless Headphones product image to open `product.html`.

If the compiled `output.css` file needs to be regenerated, install the project dependencies using `npm install` and run:

```bash
npx @tailwindcss/cli -i ./style.css -o ./output.css --watch
```

## Project Pages

**index.html:** Homepage containing the navigation bar, hero section, product listing, and footer.

**product.html:** Product detail page displaying the selected product's image, price, description, color options, quantity selector, and Add to Cart button.

## Note

This project is developed for Assignment 2 of the Web Technologies course. It is a static website, so the Add to Cart buttons do not currently perform any actions. Shopping cart functionality, form validation, and dynamic product loading will be implemented in later assignments.

## Developed By

Student Name:Sara Jabeen

Course: Web Technologies

Assignment: 2 — Static Responsive E-commerce Website

Project Name: TechNest