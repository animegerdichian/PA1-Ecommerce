# PA1-Ecommerce - Created by Ani Megerdichian
MORNING RITUALS: An e-retailer selling specially curated, artisinal mugs.
### General Layout
Home page, Products page, About page
Each page can be accessed from all the other ones using the navigation bar and links at the top of each page.
Each item in the Products page has its own page that can be accessed by going to the Products page and selecting an item by clicking on its image.
### Styling
The goal was to create a minimal design that carried through all of the pages of the website.
### Requirements
##### 1. An overview of your business, the products you sell, the management team, and any other information that you think makes sense for the customers to know about your company. 
There is an About page that can be accessed from top right of the navigation bar on every page.
##### 2. Display a list of products (at least 10) available for sale in a table with multiple rows and columns, where each product is shown within a separate cell.
There are 10 items on the Products page where a table is used to display the products. See products.html and products.js to view how table is created and rows and columns of the table are generated.
##### 3. Display an image for each product available for sale in each cell.
Each product on the Products page has an image of the product for sale.
##### 4. Display the price and other key information (e.g., color, material, etc.) associated with each product in the corresponding table cell.
Each product on the products page has its name, artist, price, and star rating displayed below its image. See mugs.js to view how this information for each product is stored.
##### 5. The user should be able to choose a product from this table by clicking on the corresponding image, which should lead to a new page that provides additional details about the product, e.g., more images, detailed description, etc. 
The user is able to click on the image of a product on the Products page which will navigate to the page of the specific item. Two additional images of the product are shown on the new page, along with the description of the item.
##### 6. On the detailed description page, the user should be able to order a product by filling a form. The form should allow the user to enter the product identifier, quantity, first name, last name, phone number, shipping address, shipping method (e.g., overnight, 2-days expedited, 6-days ground), credit card information, and anything else that you think makes sense for your business.
The page for each item includes a form on the bottom left of the page where the user can input relevant information for ordering a product. This includes name,phone number, email, address, credit card number, and shipping method.
##### 7. Upon submitting the form, the website should send an email with the purchase order information included in the body of the email. Note that to send an email, one needs to connect to the SMTP server, which is not possible with the client-side software. Thus, this requirement simply requires bringing up the email client with the purchase order information included in the body of the email and allowing the user to send the email. 
Once the user clicks 'Submit' on the form, if all of the input is valid, the email client will be brought up. The subject of the email will be "Get Ready for a Delivery!" and an example of the email body is:

Hi Kendall Ruggers!<br />
This is a confirmation of your purchase of Rainbow Mug hand-made by Susan Kappala.<br />
Order Amount: 1<br />
Price Per Unit: 35.99<br />
Your Address: 432 Johnston Street Albany NY<br />
We will email you once your item has shipped!<br />

Thank you!<br />
MORNING RITUALS<br />
##### 8. Before submitting the form, it should be checked for proper formatting, including whether all fields are filled properly, whether the phone number, address, and credit card are properly formatted, etc. An alarm should be raised if a field is empty or not properly formatted to prevent submission of bad data. 
Validation of input formatting is done using regular expression. There are also checks in place to make sure all fields are filled out. Numeric data is also checked to make sure it is within the acceptable range. If there is a validation error, a descriptive message is relayed to the user. See item.js to view how validation is done.
##### 9. Your website should use CSS for layout and styling. You should create style rules so that the general design of the website, mainly the products page, is as close as possible to this image:
The website has a coherent layout and styling across all of the pages using CSS. The layout of the Products page is accordance with the sample given.
##### 10. The website should be responsive and mobile-friendly.
The website has been tested to be responsive to various screen sizes. The information on every page is correctly displayed on different screen sizes. Most importantly, the table used to display the items in the Products page responds to the screen size and will displayed different items per row according to the screen size.
##### 11. Provide the ability to track the mouse movement, such that when the mouse moves over a product image, the size of the image is increased, and when the mouse moves out, the size of the image is returned back to normal. This feature can be implemented on either the page that displays the various products, or on the pages that show the details of each product, or both.
On the Products page, the image of an item will enlarge once the mouse hovers over it, and will go to its regular size once the mouse is not on it.
