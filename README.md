# Kids in tow

The aim of Kit is to help the user discover perfect days out for all of the family to enjoy. The website equips users with the tools to tailor their search for a day out in Leeds utilising some pre-built filters such as free admission and accessibility. 

Kit compliments this with an interactive Google Map where the user can search for places to further enhance their day out in Leeds, searching for places such as eateries, transport, accommodation and other activities.

## Research, Planning and Scope

Several example project briefs were provided by Code Institute and of these, Project Idea 1 appealed to me the most. I liked the idea of creating a website that utilised the Google Maps API and subsequently adapted the original brief to fit my own ideas and inspiration. The original CI project brief can be found [here](documentation/ProjectBrief.pdf "Original Project Brief 1").

As a parent, it’s always appreciated when others pass on suggestions and recommendations of great places to visit with children. Using the Google Maps API, I want to develop a site that caters to parents like myself, looking for places to visit with their family. The website incorporates filters to show results based on different criteria which can be defined by the user via search filters.

The ultimate aim of Kit is to be a nationwide site covering all areas in the UK but due to resource and time constraints, and without the ability to utilise a database with it being a frontend project, it was pertinent to focus the initial scope of the project on just one area. As a resident of Leeds, I decided to focus my site on the city of Leeds and surrounding areas.

The scope of Phase 1 would be focussed on Leeds with further areas to be developed as additional phases (not within the scope of this project) incorporating the use of a database and backend technologies, in order to store information about the activities. 

## UX Design

### User Stories

As a user, I want to:
-	Find places to visit with children that can be enjoyed by the whole family
-	View on a map the places location
-	Understand what the place has to offer in terms of facilities
-	View pictures of the places as a visual aid
-	Filter results based on criteria I have specified
-	Find places with particular features, such as Accessible/Disability friendly
-	Link to further information about the place i.e. their website
-	Explore the surrounding area to find nearby places for example eateries, accommodation and transport links

As a business user, I want to:
-	Get in touch to discuss marketing of my place
-	Feature my place on Kit

As a marketer, I want to:
-	 Make contact with Kit to discuss advertising options

As the owner/operator of the website, I want to:
-	Attract users in search of local attractions
-	Use advertising as a potential stream of revenue
-	Utilise paid features on the site for business wishing to market their place

### Wireframes

Wireframes for the project were drafted on the Balsamiq Wireframes application.

The wireframes and notes to accompany them can be accessed here:
A [link](documentation/KidsInTow.pdf "Kids in tow - wireframes")

## Features

### Existing Features

**Navigation tabs**
-	**Filters** – filters allow the user to search for activities that fall into one of the pre-defined categories including; featured, accessible, challenging, outdoors, indoors, free. When the apply button is clicked, the user is taken to the section of the page where the activities are displayed. The user can click on the ‘Clear’ button to remove all highlighted filters and reset the activities displayed.
-	**About** - when the about tab is clicked, the content drops down to reveal further information and giving users insight into the purpose of the site
-	**Contact** - enables users to get in touch with Kit directly by completing the contact form. Users will receive email confirmation of their message as well as a message on the site to confirm that their enquiry has been sent. KIT also receive an email with details of the user and their enquiry message.

**Google Maps**

-	All Kit activities are displayed as markers on the Google Map. When the marker is clicked, an info window is displayed revealing content including the name of the activity and a picture.
-	The ‘Explore Leeds’ form allows users to search Google Maps ‘nearby places’ functionality enabling them to search the area close by, helping them to find places to complement their day out. When a place type is selected from the drop down, the user can click the ‘Submit’ button to reveal results located on the map, identified with unique markers corresponding to the place type e.g. a bed icon is used for accommodation types, a cup is used for cafes and so on. The user can click on the map marker to reveal an info window containing additional information about the place including its name, rating and link to the website. The user can select from a range of place types including eateries, activities, entertainment, accommodation and transport.

**Activities**
-	Users will see a full list of activities to browse through where filters have not been used. If filtered, only activities which hit the users defined criteria will display on site. Activities are displayed in a single column running vertically down the page. A horizontal rule is used to distinguish between the different activities. Activities initially include an image, name, icons corresponding to the filter options, and a summary paragraph. Where the summary is longer than the space available, the user can view fill details by clicking on the ‘More info’ icon set over the summary paragraph which is displayed in a pop-out modal.

**Modals**
-	Modals have been utilised for a smooth and consistent user experience of the site and to ensure the user isn’t bombarded with too much information on the main page, the listed activities have a 'more info' button which links to a pop-out modal containing photos, further information, list of facilities and website links of the chosen place. When the user closes a modal, they are returned to the place in the original search results where they left and are not lost through page refreshing.
-	Modal icons have been utilised to visually represent the facilities on offer at the activity. These include but not limited to: information centre, toilets, card payments options, dog friendly, bike friendly, WiFi access, café.
-	A carousel of photos has been included in each of the modals so users can scroll through the photos of a chosen page using the image slideshow with forward and back arrows to scroll as required. When clicking the left and right arrows, the user can loop through the available images for that activity.
-	Each of the modals contains a link to the activities own website, when clicked, opens out in a new browser tab so the user doesn’t completely navigate away from the KIT site.

**Footer**
-	Social Media - users can link to Kits social media pages including Facebook, Twitter and Instagram (currently linked to my personal profiles) to further enhance their user experience and where they may find additional information about the place including comments from other visitors, reviews etc.
-	Privacy and T&Cs - links to Kits privacy policy and terms and conditions have been embedded in the footer should they wish to view these (currently standard wording from TermsFeed)

### **Features left to implement: **

During the planning and research stages of the project, the scope was refined due to resource and time constraints so some features were left out of the original brief. Further development of this website would expand on the original scope to include some of these features left to implement. These are detailed below:

**Database** 
-	the nature of the site makes it more suited to having a database incorporated to manage the significant amount of data held. In its current format, it means that it not be feasible to expand the scope and increase the number of activities held unless further technologies were utilised including a database to store data for the activities.

**Regions**
-	If developed further, I would like to expand KIT to cover areas nationwide, not just restricted to the Leeds area. As above, further technologies would need to be utilised to make this happen.

**Pagination**
-	As the number of activities hosted on KIT grew, pagination would be required to ensure that the main page didn’t grow too long and the user get lost in the list of results.

**Improved filters**
-	Further development of the filters section would be introduced to allow users to search by location or distance from their current location e.g. 30 miles from current location. I’d also like to incorporate price filters setting min and max pricing

**Google Maps**
-	Show my location on google maps - permission required from user to access their location services

**Reviews**
-	To further enhance the user experience, I’d like to incorporate users reviews for the activities to help inform users when selecting a day out. This could then allow an additional filter option for users to select activities based on user review ratings.

**Login functionality**
-	Ability for users to create an account and be able to save activities of interest for viewing/visiting. It could also include the ability for users to share and email details of a selected activity to themselves, friends or family members.
-	Shopping cart functionality and introduction of booking options on the website to allow users to book the activities directly via the KIT website.

**Advertising and Marketing**
-	Ability to include adverts on the site relating to the activities and to offer discounts / codes to users who have seen the activity via the KIT website.


### Structure and Flow

The main content of the site flows in a vertical direction. The top of the page contains the main navigation bar, tabs and the homepage image to capture the user’s attention. Where filters are highlighted and applied, as the user clicks ‘Apply’ the are redirected to the first results within the Activities section of the homepage. 

As the users scrolls down the page, the ‘Explore Leeds’ section comes into view. The search form and Google Map are contained within the same section to ensure 

With vertical flow and scrolling, the activity results occupy a single column which is responsive in its design, reformatting the content according the device size. 

### Navigation

The main navigation bar occupies a standard horizontal space at the top of the page and includes the main KIT branding and a strap line ‘Kids in tow…off we go’. The KIT branding contains a link to the main index.html page so users can always get back to the homepage regardless of which page they are on.

Rather than incorporate navigation links in the navbar at the top, tabs have been included which allow users to toggle on or off some of the key features of the site including the ‘filters’, ‘about’ content and ‘contact’ form. Users can toggle these sections on or off as required but the remain on the main page of the site throughout. 

The footer provides additional navigation options including links out to social media pages and separate Privacy and Terms & Conditions pages should the user wish to review this information.

### Forms

**Bootstrap** forms have been used for both the contact form and the ‘Explore Leeds’ form above the Google Map. The fields have been sized appropriate to their content for example the ‘Message’ form field occupies more space than the name and email fields as it’s expected that more information will be entered here. 

Field labels have been placed consistently above the related field and placeholder text has been included with the field to guide the user on the type of content required.

The ‘type’ attribute of the input field ensures that the user is only able to enter the relevant type of content, for example, the email field will only allow valid email addresses to be entered into this field. Where invalid content is entered, a message will be displayed to the user advising them of the error. 

### Typography

I had an idea of the font style I’d like to include in this project, something clear and simple with a soft undertone. I browsed **Google Fonts** and selected several for my shortlist, then decided upon Catamaran as the font choice for this project.

Font sample:
![](/static/images/Catamaran.jpg)

### Colour

**Coolors** (https://coolors.co/) was used to generate and experiment with different colour choices and colour combinations. As my site is mostly aimed at families with children, I wanted to introduce a colour scheme that had elements of maturity yet including vibrant and playful colours that would also link well with kids. 

I wanted to use a vibrant but fresh colour and apply it as consistent branding across the site. I wanted a colour that would be unlikely to appear in images of recipe dishes to ensure enough contrast between branding and recipe images. The final colour selections can be seen below, with #56A3A6 chosen for the project.

Colour pallet:
![](/static/images/Whats4T_colours.jpg)

A single colour scheme has been maintained throughout for consistency, applied to header and footer, text headings and buttons with further splashes of colour introduced as a result of image content. I considered the use of more than one colour for the project but thought it could risk the site looking too busy and distracting from the content and purpose. The inclusion of vibrant recipe images throughout the site introduces enough colour without it needing anything further.

A fixed background image was selected to create visual appeal, showing a variety of different and colourful ingredients, hoping to inject inspiration and capture the user’s attention. The background image has been overlaid with a white section to hold the main content of the page, providing contrast from the background image and to make text content and additional images clearly visible.

### Icons

**Font Awesome** has been utilised for the various icons in use throughout the site. These include the social media icons for Facebook, Twitter and Instagram as well as icons for use in the recipes to display prep, cooking and total time and numbers of views of the recipe. The icon images are relevant to their function, for example a ‘clock’ icon depicts time and an ‘eye’ icon for views.

The social media icons have been included in the footer in a linear format with clear distinction between them and direct users to the relevant social media site upon click.

## Technologies Used

-	HTML
-	CSS
-	JQuery
-	Javascript
-	Google Maps API
-	Bootstrap - Table, Modal boxes, Contact form
-	Google Fonts
-	EmailJS
-	Font awesome

## Testing

I created a testing framework in excel with specific testing scripts and scenarios to test out on each of the pages / functions included throughout the project. The framework included the page / function being tested, the test carried out and the expected result.
The project was designed to be responsive, adapting structure and formatting according to the user’s device. Consequently, testing needed to be carried out on a variety of different sized devices as well as on different browsers to ensure that the pages and functionality responded as expected across a range of different technologies.
Where tests failed, the relevant alterations were made to the code, changes saved and committed and the test was repeated to ensure it responded correctly.
A link to the Milestone 2 Testing excel can be found [here](documentation/MS2_Testing.xlsx "Milestone 2 Testing – Kids in tow")

## Deployment

This section should describe the process you went through to deploy the project to a hosting platform (e.g. GitHub Pages or Heroku).

In particular, you should provide all details of the differences between the deployed version and the development version, if any, including:
-	Different values for environment variables (Heroku Config Vars)?
-	Different configuration files?
-	Separate git branch?
In addition, if it is not obvious, you should also describe how to run your code locally.


## Credits

### Content & References

I used various sites to gain inspiration, information and content for the places used throughout my website. These include:
-	Harewood House - https://harewood.org/
-	Brimham Rocks - https://www.nationaltrust.org.uk/brimham-rocks
-	Clip n Climb Leeds - https://leeds.clipnclimb.co.uk/
-	Valley Gardens - https://www.visitharrogate.co.uk/things-to-do/valley-gardens-harrogate-p1205921
-	Leeds Urban Bike Park - https://www.leedsurbanbikepark.com/
-	Royal Armouries Leeds - https://royalarmouries.org/
-	Stockeld Park - https://stockeldpark.co.uk/
-	Temple Newsam - https://museumsandgalleries.leeds.gov.uk/temple-newsam/
-	Yorkshire Wildlife Park - https://www.yorkshirewildlifepark.com/
-	Tropical World - https://tropicalworld.leeds.gov.uk/
-	Meanwood Valley Trail -https://www.leeds.gov.uk/docs/MVT%20leaflet%20for%20web.pdf
-	The Arium Leeds - https://www.theariumleeds.co.uk/
-	Go Ape Leeds - https://goape.co.uk/locations/temple-newsam
-	Roundhay Park - https://www.roundhaypark.org.uk/

-	Privacy Policy template wording - https://www.termsfeed.com/blog/sample-privacy-policy-template/

### Media

**Canva**

Canva is a free online design tool allowing users to design many different types of media including mockups, leaflets, flyers, posters, logos etc. Canva has an extensive photo library offering millions of stock photos, fonts, icons, shapes and graphics.

General photos used throughout the site including homepage image were downloaded from Canva. Homepage image courtesy of XXXXX

The majority of photos included in the website were taken by myself however, there may be a couple of images taken from the sites listed above to enhance the number of images in the carousel where I didn’t have images of my own to include.

### Acknowledgements

I received inspiration for this project from my beautiful little boy Alfie. We are so lucky to have an array fantastic places to enjoy right on our doorstep. We love exploring the many wonderful places surrounding our home in Leeds and hope that we can inspire others to love these places as much as we do. 



