# **ART SHOWCASE** - Advanced Front End <br>React + Django REST framework

![ART SHOWCASE responsive design](/src/assets/readme_images/responsive.png)

The premier online destination for emerging artists of modern paintings and the vibrant community that cherishes them. **ART SHOWCASE**, is not just about observation; it's about connection, discussion, and appreciation. The platform is meticulously designed to serve as a canvas for artists to exhibit their creations and engage with an enthusiastic audience keen on exploring the realms of contemporary art.

**ART SHOWCASE** is more than just a gallery; it's a dynamic ecosystem where artists can freely share their masterpieces, discuss probable prices, and receive feedback from art lovers worldwide. With a focus on modern paintings, the platform celebrates the diversity and creativity of artists at various stages of their careers. Whether you're an artist looking to gain visibility or an art enthusiast eager to discover new talents and trends, **ART SHOWCASE** offers a unique and enriching experience.

Join us as we journey through the captivating world of modern art, bringing artists and art enthusiasts closer together than ever before.

You can view the live site here - [ART SHOWCASE](https://pp-5-art-showcase-1029cf70a456.herokuapp.com/)

You can view the live API here - [ART SHOWCASE API](https://pp-5-drf-api-cb9dad6bdfdf.herokuapp.com/)

You can view the front-end README.md here - [ART SHOWCASE Front-End README](https://github.com/gennadiy-gaysha/PP_5_art_showcase)

You can view the back-end README.md here - [ART SHOWCASE Back-End README](https://github.com/gennadiy-gaysha/PP_5_rest_api)

## Table of Contents

1. [**User Experience UX**](#user-experience-ux)

- 1.1. [Project Goals](#project-goals)
- 1.2. [User Stories](#user-stories)
- 1.3. [Mockup](#mockup)
- 1.4. [React Component Tree](#react-component-tree)
- 1.5. [Color Scheme](#color-scheme)
- 1.6. [Topography](#topography)

2. [**User Permissions**](#user-permissions)

3. [**Features**](#features)

- 3.1. [General](#general)
- 3.2. [Project's CRUD tables and endpoints](#projects-crud-tables-and-endpoints)
- 3.3. [Navigation Bar](#navigation-bar-navbar)
  - 3.3.1 [ModalAlert](#modal-alert)
- 3.4. [Footer](#footer)
- 3.5. [Home page](#home-page)
  - 3.5.1. [Filters area](#1-filters-area)
  - 3.5.2. [Resetting filter choices](#2-resetting-filter-choices)
  - 3.5.3. [Preserving user's filter choices](#3-preserving-users-filter-choices)
  - 3.5.4. [Painting Card](#4-painting-card-paintinglist-component)
    - [Observation CRUD](#observation-crud)
- 3.6. [Painting Detail page](#painting-detail-page)
  - 3.6.1. [Painting section](#1-painting-section)
  - 3.6.2. [Painting detail section](#2-painting-detail-section)
    - [Painting CRUD](#painting-crud)
  - 3.6.3. [Comment section](#3-comment-section)
    - [Comment CRUD](#comment-crud)
- 3.7. [Profile page](#profile-page)
  - 3.7.1. [User Profile Main Info Panel](#user-profile-main-info-panel)
    - [Follower CRUD](#follower-crud)
  - 3.7.2. [User's Available Artworks](#users-available-artworks)
    - [Profile CRUD](#profile-crud)
- 3.8. [About page](#about-page)
- 3.9. [Authentication Forms](#authentication-forms)
  - 3.9.1 [Registration Form](#registration-form)
  - 3.9.2. [Log In Form](#log-in-form)
  - 3.9.3. [Change Password Form](#change-password-form)
- 3.10. [Error Handling and Notifications](#error-handling-and-notifications)
  - 3.10.1. [React Bootstrap Alert component](#react-bootstrap-alert-component)
  - 3.10.2.[React Notification Package](#react-notification-package)
- 3.11. [Redirecting the user](#redirecting-the-user)
- 3.12. [404 Error page](#404-error-page)

4. [**Testing**](#testing)

- 4.1. [Testing User Stories](#testing-user-stories)

  - 4.1.1. [Epic: Navigation](#epic-navigation)
  - 4.1.2. [Epic: "Painting Management"](#epic-painting-management)
  - 4.1.3. [Epic: Search and Filtering](#epic-search-and-filtering)
  - 4.1.4. [Epic: User and User Profile Management](#epic-user-and-user-profile-management)
  - 4.1.5. [Epic: Favourite Profiles and Watchlist Management](#epic-favourite-profiles-and-watchlist-management)
  - 4.1.6 [Epic: Comments Management](#epic-comments-management)
  - 4.1.7 [Epic: Error Handling and Notification Management](#epic-error-handling-and-notification-management)

- 4.2. [Code validation](#code-validation)
  - 4.2.1. [HTML](#html)
  - 4.2.2. [CSS](#css)
  - 4.2.3. [JavaScript (JS) and JSX (JavaScript XML)](#javascript-js-and-jsx-javascript-xml)
- 4.3. [Accessibility](#accessibility)
  - 4.3.1. [Accessibility improvement and form design](#accessibility-improvement-and-form-design)
- 4.4. [Tools testing](#tools-testing)
- 4.5. [Manual testing](#manual-testing)
  - 4.5.1. [Browser Compatibility](#browser-compatibility)
  - 4.5.2. [Testing Style And Functionality](#testing-style-and-functionality)
    - [Navigation bar testing](#navigation-bar-testing)
    - [Search and Filtering fields testing](#search-and-filtering-fields-testing)
    - [Footer testing](#footer-testing)
    - [Home page testing](#home-page-testing)
    - [Painting Details page testing](#painting-details-page-testing)
    - [User Profile page testing](#user-profile-page-testing)
    - [Add painting page testing](#add-painting-page-testing)
    - [Update Painting page testing](#update-painting-page-testing)
    - [Compete Profile page testing](#compete-profile-page-testing)
    - [Update Profile page testing](#update-profile-page-testing)
    - [Register page testing](#register-page-testing)
    - [Change Password page testing](#change-password-page-testing)
    - [Login page testing](#login-page-testing)
    - [About page testing](#about-page-testing)
    - [Deletion Warning Modal testing](#deletion-warning-modal-testing)
    - [Modal alerts testing](#modal-alerts-testing)
    - [Error And Warning alerts testing](#error-and-warning-alerts-testing)
    - [404 Error page testing](#404-error-page-testing)
    - [Infinite scroll testing](#infinite-scroll-testing)

5. [**Technologies Used**](#technologies-used)

- 5.1. [Languages](#languages)
- 5.2. [Libraries and Frameworks](#libraries-and-frameworks)
- 5.3. [NPM Packages / Dependencies](#npm-packages--dependencies)
- 5.4. [Other Tools](#other-tools)

6. [**Known Bugs**](#known-bugs)

7. [**Downgrading react and react-dom**](#downgrading-react-and-react-dom)

8. [**Deployment To Heroku**](#deployment-to-heroku)

9. [**Cloning and Forking Repository**](#cloning-and-forking-repository)

- 9.1. [Cloning the Repository](#cloning-the-repository)
- 9.2. [Forking the Repository](#forking-the-repository)

10. [**Credits**](#credits)

- 10.1. [Code](#code)
- 10.2. [Media](#media)

11. [**Acknowledgements**](#acknowledgements)

## User Experience (UX)

### Project Goals

The objective of the project is to meet a series of specific targets, which are categorized into seven main epics. These epics are Navigation, Painting Management, Search and Filtering, User and User Profile Management, Favourite Profiles and Watchlist Management, Comments Management, and Error Handling. They each cover different facets of the ART SHOWCASE application. The project's goals are organized in a way to tackle particular needs associated with each epic, facilitating a systematic and effective development of the application.

- **Epic: Navigation**

  - Design a clear and intuitive navigation menu that allows users to effortlessly find and access different sections of the site, such as the Home page (gallery), Faves and Watchlist, user profiles, etc.
  - Implement a responsive search bar and filters, enabling quick searches for paintings, artists, or specific content to enhance usability.
  - Ensure the website's navigation framework is adaptive, varying based on the authentication status and permission levels of the user.

- **Epic: "Painting Management"**

  - Introduce an infinite scrolling feature for paintings to enhance the browsing experience, allowing users to continuously explore artwork without interruption.
  - Facilitate a seamless user interface that allows users to effortlessly access and read details about each painting, prioritizing a smooth user experience.
  - Add a comprehensive "About" page to the website that provides users with deep insights into the site's purpose, objectives, and the intended audience, ensuring visitors have a clear understanding of what the site is about and whom it serves.
  - Implement a user-friendly feature for the addition of new paintings, streamlining the process for quick and efficient updates.
  - Provide capabilities for authorized users to edit and remove paintings, ensuring effective content management and quality control.

- **Epic: Search and Filtering**

  - Introduce a search function that allows users to locate paintings by title or the artist's name, facilitating quick access to relevant information.
  - Organize paintings into categories such as Theme, Technique, and Orientation, and allow sorting by price to help users easily find what they're looking for.
  - Show the count of paintings found or filtered, providing users with a clear understanding of the search or filter results.

- **Epic: User and User Profile Management**

  - Facilitate an efficient and straightforward process for new users to sign up, ensuring the account registration system is user-friendly.
  - Deploy a secure system for logging in and logging out, safeguarding user accounts and their data.
  - Offer an easy-to-use option for users to update their passwords, enhancing account security.
  - Require that newly registered users complete their profile details, helping to foster a community where members can learn about one another.
  - Allow users to access and modify their own profiles, giving them control over their personal information and preferences.

- **Epic: Favourite Profiles and Watchlist Management**

  - Implement personalization options that let users add artworks to a watchlist and compile a collection of favorite artists' paintings, fostering greater user involvement and interaction within the community.
  - Provide functionality for users to easily remove paintings from their watchlist and "unsubscribe" from their selected favorite artists, ensuring flexibility and control over their preferences.

- **Epic: Comments Management**

  - Introduce features that enable users to leave comments on artworks, boosting user engagement and fostering interactions within the community.
  - Provide users with the capability to edit and delete their own comments, ensuring they have control over their contributions.
  - Allow users to view comments from others, enabling them to participate in discussions and share insights.

- **Epic: Error Handling and Notification Management**

- Develop a strong and intuitive error management system aimed at improving the user experience across the platform.
- Create customized error page for "404 Not Found" page, ensuring it offers clear, helpful instructions or reassurance to guide users effectively through any unexpected issues.
- Provide immediate and informative feedback through alert messages for users who encounter errors while filling out forms on the site, including but not limited to registration, login, profile creation/editing, and painting submission/editing forms, thereby ensuring users feel supported and well-informed during their site interactions.

<br>[Back to top ⇧](#table-of-contents)

### User Stories

Before initiating the React-based frontend portion of the project, I developed a comprehensive set of 44 user stories to meet the user requirements. These user stories were subsequently transferred to the Issues and Projects section (Kanban board) of the GitHub repository. Below is a table where all the mentioned user stories are categorized under their respective epics:

| No  | Title                              | User Story                                                                                                                                                                                                                                                                                                                   | Epic                                        |
| --- | ---------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| 1   | Navbar Access                      | As a user I can view a navbar from every page so that I can navigate easily between pages.                                                                                                                                                                                                                                   | Navigation                                  |
| 2   | Quick Navigation                   | As a user I can navigate through pages quickly so that I can view content seamlessly without page refresh.                                                                                                                                                                                                                   | Navigation                                  |
| 3   | Direct Profile Access Via Avatar   | As a user, I can easily navigate to other users' profile pages by clicking on their avatar so that I can view their public information, artworks, and interests, fostering community engagement and connection among users.                                                                                                  | Navigation                                  |
| 4   | Auth Options                       | As a logged out user I can see sign in and sign up options so that I can sign in/sign up.                                                                                                                                                                                                                                    | Navigation                                  |
| 5   | Logout Access                      | As a logged in user, I can see a logout link so that I can securely exit my session, ensuring my account remains protected and my session is properly closed.                                                                                                                                                                | Navigation                                  |
| 6   | Footer Links                       | As a user, I can view a footer on every page so that I can access the site owner's social media pages.                                                                                                                                                                                                                       | Navigation                                  |
| 7   | Icon Hints                         | As a user, I want to see pop-up hints for any active icons that depend on my user and profile status before clicking on them, so I can make informed decisions about interacting with features based on my current capabilities and restrictions, thereby enhancing my navigational experience and engagement with the site. | Navigation                                  |
| 8   | Artwork Browsing                   | As a user, I can see a paintings page where all the paintings or filtered paintings are displayed, so that I can browse through a comprehensive collection of artworks easily, enhancing my exploration and discovery of new art.                                                                                            | Painting Management                         |
| 9   | Infinite Scrolling                 | As a user I can keep scrolling through the paintings on the site, that are loaded for me automatically so that I don't have to click on "next page.                                                                                                                                                                          | Painting Management                         |
| 10  | Painting Details                   | As a user I can view the details of a single painting so that I can learn more about it.                                                                                                                                                                                                                                     | Painting Management                         |
| 11  | Comments and Information           | As a user I can view the painting page so that I can read the comments about the painting, and get familiar with such details as 'Artist name', 'Painting title', 'Year created', 'Technique', 'Dimensions' and suggested price.                                                                                             | Painting Management                         |
| 12  | Create Artwork                     | As a logged in user I can create painting so that I can share my artwork with the world.                                                                                                                                                                                                                                     | Painting Management                         |
| 13  | Edit Artwork                       | As a painting owner I can edit my painting parameters so that I can make corrections or update my painting details after they were created.                                                                                                                                                                                  | Painting Management                         |
| 14  | About Page Access                  | As a user I can view the About page so that I can stay informed about the mission, and understand the platform's purpose and offerings.                                                                                                                                                                                      | Painting Management                         |
| 15  | Title and Artist Search            | As a user, I can search for paintings by Title or Artist Name, so that I can find the paintings and user profiles I am most interested in.                                                                                                                                                                                   | Search and Filtering                        |
| 16  | Filter Application                 | As a user, I can apply a set of filters, such as 'Painting Orientation', 'Technique', 'Theme' and 'Price' based on my preferences so that I can narrow down the displayed artworks.                                                                                                                                          | Search and Filtering                        |
| 17  | Search Results Count               | As a user, I can see not only the filtered paintings but also the number of paintings in the search result, so that I have a clear understanding of the breadth of options available within my search criteria, enhancing my decision-making process.                                                                        | Search and Filtering                        |
| 18  | One-Click Reset                    | As a user, I can easily reset filters with a single click so that I can quickly start a new search or explore different categories without manually removing each filter, enhancing my browsing experience and efficiency on the platform.                                                                                   | Search and Filtering                        |
| 19  | Persistent Filter Choices          | As a user, I can my filter selections on the Paintings Page saved when navigating away and returning, so that it ensures a seamless browsing experience without redoing my choices.                                                                                                                                          | Search and Filtering                        |
| 20  | Account Creation                   | As a user I can create a new account so that I can access all the features for registered users.                                                                                                                                                                                                                             | User and User Profile Management            |
| 21  | User Login                         | As a user I can log in to the app so that I can access functionality for logged in users.                                                                                                                                                                                                                                    | User and User Profile Management            |
| 22  | Login Status Indicator             | As a user I can tell if I am logged in or not so that I can log in if I need to.                                                                                                                                                                                                                                             | User and User Profile Management            |
| 23  | Session Persistence                | As a user I can maintain my logged-in status until I choose to log out so that my user experience is not compromised.                                                                                                                                                                                                        | User and User Profile Management            |
| 24  | Avatar Visibility                  | As a user I can view user's avatars so that I can easily identify users of the application.                                                                                                                                                                                                                                  | User and User Profile Management            |
| 25  | Artist Profile Viewing             | As a user I can view other artists' profiles so that I can see their paintings and learn more about them.                                                                                                                                                                                                                    | User and User Profile Management            |
| 26  | Artist Insights                    | As a user I can view data and statistics about a specific artist such as: bio, home country, gender, date of birth, as well as number of of paintings, followers and favourite artists so that I can learn more about them.                                                                                                  | User and User Profile Management            |
| 27  | Artist's Artwork Gallery           | As a user I can view all the paintings by a specific artist so that I can catch up on their latest artworks, or decide I want to follow them.                                                                                                                                                                                | User and User Profile Management            |
| 28  | Profile Customization              | As a logged in user I can complete/edit my profile so that I can change my profile image, bio and other details.                                                                                                                                                                                                             | User and User Profile Management            |
| 29  | Password Update                    | As a logged in user with completed profile I can update my password so that I can keep my profile secure.                                                                                                                                                                                                                    | User and User Profile Management            |
| 30  | Complete Profiles for Active Users | As a user I can see completed profiles of active users who display their paintings or leave comments so that I can access more context about their contributions and foster deeper community engagement.                                                                                                                     | User and User Profile Management            |
| 31  | Password Visibility                | As a user I can have an option to reveal or hide my password on any appropriate form so that I can ensure accuracy when entering my password, enhancing both security and usability.                                                                                                                                         | User and User Profile Management            |
| 32  | Adding paintings to Watchlist      | As a logged in user with completed profile I can add a painting to my watchlist so that I can observe it later, and show that I am not indifferent to this painting.                                                                                                                                                         | Favourite Profiles and Watchlist Management |
| 33  | Following/unfollowing Artists      | As a logged in user with completed profile I can follow and unfollow other artists so that I can see and remove paintings by specific artist in my Faves feed.                                                                                                                                                               | Favourite Profiles and Watchlist Management |
| 34  | Removing from Watchlist            | As a logged in user with completed profile, I can remove a painting from my watchlist so that I can keep my list updated with only the artworks that currently interest me, ensuring a personalized and clutter-free browsing experience.                                                                                    | Favourite Profiles and Watchlist Management |
| 35  | Reading Comments                   | As a user I can read comments on painting so that I get informed what other artists think about the painting.                                                                                                                                                                                                                | Comments Management                         |
| 36  | Comment Timelines                  | As a user I can see how long ago a comment was made so that I know how old a comment is.                                                                                                                                                                                                                                     | Comments Management                         |
| 37  | Infinite Comment Scrolling         | As a user I can keep scrolling through the comments on the painting page, that are loaded for me automatically so that I don't have to click on "next page".                                                                                                                                                                 | Comments Management                         |
| 38  | Commenting on Artworks             | As a logged in user with completed profile I can add comments to a painting so that I can share my thoughts about the artwork.                                                                                                                                                                                               | Comments Management                         |
| 39  | Editing Comments                   | As an owner of a comment I can edit my comment so that I can fix or update my existing comment.                                                                                                                                                                                                                              | Comments Management                         |
| 40  | Deleting Comments                  | As an owner of a comment I can delete my comment so that I can control removal of my comment from the application.                                                                                                                                                                                                           | Comments Management                         |
| 41  | Error Messaging                    | As a user I can receive clear error messages when a page I'm looking for is not found so that I understand what went wrong and feel guided on what to do next.                                                                                                                                                               | Error Handling and Notificationg Management |
| 42  | Form Error Feedback                | As a user I can receive immediate and informative feedback when I encounter errors while filling out forms on the site so that I can understand exactly what needs to be corrected without feeling frustrated or lost.                                                                                                       | Error Handling and Notificationg Management |
| 43  | Success Notifications              | As a user I can receive a success notification when I successfully complete the form so that I am assured my changes have been saved and can confidently navigate away from the form.                                                                                                                                        | Error Handling and Notificationg Management |
| 44  | Consistent Alert Handling          | As a user I can see that error alerts and success messages are handled uniformly across the platform so that I have a consistent experience and can easily understand feedback from the system.                                                                                                                              | Error Handling and Notificationg Management |

<br>[Back to top ⇧](#table-of-contents)

### Mockup

In this project, the React Bootstrap library was implemented. It utilizes a grid system and responsive utility classes, facilitating the creation of a site that looks appealing on both mobile and larger screens without necessarily initiating the design process with a mobile-first approach in mind. Therefore, it was decided not to adhere to the 'mobile-first' approach.

[Balsamiq](https://balsamiq.com/) was used to showcase the appearance of the site on desktop devices and to display the placement of the different elements within the pages.

During the development of the site, minor amendments were made to some initial page designs to enhance user experience (UX)

| Page                   | Desktop version                                                                                                |
| ---------------------- | -------------------------------------------------------------------------------------------------------------- |
| Home page (logged out) | ![Desktop log out index wireframe image](/src/assets/readme_images/wireframes/index_desktop_logged_out.png)    |
| Home page (logged in)  | ![Desktop log in index wireframe image](/src/assets/readme_images/wireframes/index_desktop_logged_in.png)      |
| Log in page            | ![Desktop log in page wireframe image](/src/assets/readme_images/wireframes/login_desktop.png)                 |
| Registration page      | ![Desktop sign up page wireframe image](/src/assets/readme_images/wireframes/signup_desktop.png)               |
| Painting page          | ![Desktop painting page wireframe image](/src/assets/readme_images/wireframes/painting_page_desktop.png)       |
| Add painting page      | ![Desktop add painting wireframe image](/src/assets/readme_images/wireframes/add_painting_desktop.png)         |
| Profile page           | ![Desktop profile page wireframe image](/src/assets/readme_images/wireframes/profile_page_desktop.png)         |
| Complete profile page  | ![Desktop complete profile wireframe image](/src/assets/readme_images/wireframes/complete_profile_desktop.png) |

<br>[Back to top ⇧](#table-of-contents)

### React Component Tree

This project was developed with React, facilitating the reuse of components across the application. React components are versatile, capable of rendering page elements, displaying data, managing events and user interactions, and communicating with other components through props, among other functionalities.

However, as the project grows in size, navigating the file structure and accurately mapping out the relationships between components and containers can become increasingly complex. The expansion of the project can lead to a rapid rise in complexity.

Having a method to visualize the entire project structure by choosing a root component is cost-effective, as it aids in the swift planning and addition of new features, thanks to the insights provided by props.

For the ART SHOWCASE project, a React Component Tree diagram was generated using the [ReacTreeDev](https://reactree.dev/) VS Code plugin and [xMind](https://xmind.app/) tool. This diagram enables a clear visualization of the hierarchical organization of components, highlighting parent/child relationships.

![Component Tree image](/src/assets/readme_images/ComponentTree.png)

You can also download the original file of the project's React Component Tree diagram from [here](https://github.com/gennadiy-gaysha/PP_5_art_showcase/blob/main/src/assets/App.js.xmind).

<br>[Back to top ⇧](#table-of-contents)

### Color Scheme

The color palette of this site was intentionally chosen to be simple (primarily black and white tones, as well as shades of gray) to keep the user's focus on the images of the paintings.
The color hue table for the project was created using the [Colors](https://coolors.co/).

To provide a complete representation, the first color in the Primary Hue Table (Seasalt) corresponds to the main color of the pattern, which has been
chosen as the background for the entire project.

**Primary color hue table**
![Primary color hue table](/src/assets/readme_images/color_hue_table.png)

**The colors used in the website are as follows:**

- background image for all
  pages: [@lifeforstock](https://www.freepik.com/free-photo/abstract-surface-textures-white-concrete-stone-wall_4326138.htm)
- background color for the nav bar and the footer: #ffffff
- logo colors: #ffffff and #000000
- active links and button color: #007bff
- buttons hover color: #2142b2
- main text color: #555
- auxiliary text colors: #c1c1c5, #802222, #ff9254
- icon color: #b5b5b5
- icon hover color: #cfced3

<br>[Back to top ⇧](#table-of-contents)

### Topography

The main Google Font chosen for the project is "DM Sans". To complement it, a variety of FontAwesome icons were deployed to enhance the user experience. Both were imported into the index.html file for use throughout the project. The font link specifies two font weights for DM Sans: 500 (Medium) and 700 (Bold).

<br>[Back to top ⇧](#table-of-contents)

## User Permissions

Given the specific characteristics of this website, I have determined that implementing various levels of permissions/access would significantly enhance both the site's management and the user experience. Below are the different levels of user permissions and authorization rights.

**1. Logged Out User**

- Access to the Home page, Registration page, Log in Page, and About page
- Use of Footer links to social media accounts
- Use of Painting search and filtering functionality
- Viewing of the Painting detail page
- Ability to read comments in the painting detail page
- Viewing of profile pages of registered users with completed profiles

**2. Logged In User without completed profile**

- Access to the Home page, Log out page and About page
- Use of Footer links to social media accounts
- Use of Painting search and filtering functionality
- Viewing of the Painting detail page
- Ability to read comments in the painting detail page
- Viewing of profile pages of registered users with completed profiles
- Links to "Add Painting", "Faves", "Watchlist", and "Avatar+Username" are visible; however, clicking on them activates a modal panel that alerts the user to complete their profile by clicking a button located at the bottom of the panel.

**3. Logged In User with completed profile**

- Access to the Home page, Log out page and About page
- Use of Footer links to social media accounts
- Use of Painting search and filtering functionality
- Ability to add/edit/delete their own paintings
- Ability to edit their own profile and change their password
- Ability to add/remove artworks of other painters to/from the Watchlist
- Viewing of the Painting detail page
- Ability to read and create comments on the painting detail page (both for their own and other users' paintings)
- Ability to edit/delete their own comments
- Viewing of profile pages of registered users with completed profiles
- Ability to add/remove other painters to/from their "Faves"

<br>[Back to top ⇧](#table-of-contents)

## Features

### General

Every feature outlined for the site is meticulously designed to align with a corresponding [User Story](#user-stories), ensuring a seamless integration that adheres to the highest standards of UI and UX design. This approach guarantees that each element of the site not only meets the specific needs and expectations of the users but also provides an intuitive and engaging experience.

### Project's CRUD tables and endpoints

It's important to note that the acronym CRUD, as used in this README file, does not strictly refer to all four functionalities — Create, Read, Update, Delete — in their entirety. Instead, it should be understood as a subset of these operations, applicable specifically to the context of the object being described (such as Painting, Profile, Observation, Comment). Below is a CRUD table that outlines the entire project, accompanied by the corresponding backend endpoints:

**Painting object**
| Action | HTTP Method | Request to the Endpoint | Description |
|----------|-------------|--------------------------------------------------------|-----------------------------------------------------------|
| Create | POST | axiosReq.post("/paintings/", formData) | Adds a new Painting to the database |
| Retrieve | GET | axiosReq.get(`/paintings/${id}`) | Retrieves detailed information about a Painting by its ID |
| Update | PUT | axiosReq.put(`/paintings/${id}/`, formData) | Updates the information of an existing Painting by its ID |
| Destroy | DELETE | axiosRes.delete(`/paintings/${id}`) | Removes an existing Painting from the database by its ID |
| List | GET | axiosReq.get( “/paintings/”) | Retrieves a list of all Paintings |
| Search | GET | axiosReq.get( `/paintings/?${filter}search=${query}`) | Filters a list of all Paintings based on the query |

**Profile object**
| Action | HTTP Method | Request to the Endpoint | Description |
|----------|-------------|---------------------------------------------|----------------------------------------------------------|
| Retrieve | GET | axiosReq.get(`/profiles/${id}/`) | Retrieves detailed information about a Profile by its ID |
| Update | PUT | axiosReq.put(`/profiles/${id}/`, formData) | Updates the information of an existing Profile by its ID |

**Comment object**
| Action | HTTP Method | Request to the Endpoint | Description |
|---------|-------------|------------------------------------------------------------------|----------------------------------------------------------|
| Create | POST | axiosRes.post("/comments/", {content, painting,}) | Adds a new Comment to the database |
| Update | PUT | axiosRes.put(`/comments/${id}/`, {content:formContent.trim(),}) | Updates the information of an existing Comment by its ID |
| Destroy | DELETE | axiosRes.delete(`/comments/${id}/`) | Removes an existing Comment from the database by its ID |
| List | GET | axiosReq.get(`/comments/?painting=${id}`) | Retrieves a list of all Comments |

**Observation object**
| Action | HTTP Method | Request to the Endpoint | Description |
|---------|-------------|-----------------------------------------------------|-------------------------------------------------------------|
| Create | POST | axiosRes.post("/observations/", { painting: id }) | Adds a new Observation to the database |
| Destroy | DELETE | axiosRes.delete(`/observations/${observation_id}`) | Removes an existing Observation from the database by its ID |

**Follower object**
| Action | HTTP Method | Request to the Endpoint | Description |
|---------|-------------|---------------------------------------------------------------|----------------------------------------------------------|
| Create | POST | axiosRes.post("/followers/", {followed: clickedProfile.id,}) | Adds a new Follower to the database |
| Destroy | DELETE | axiosRes.delete(`/followers/${clickedProfile.following_id}`) | Removes an existing Follower from the database by its ID |

**Auth objects**
| Action | HTTP Method | Request to the Endpoint | Description |
|-----------------|-------------|--------------------------------------------------------------|----------------------|
| Register | POST | axios.post("/dj-rest-auth/registration/", registrationData) | Registers new user |
| Log in | POST | axios.post("/dj-rest-auth/login/", logInData) | User log in |
| Log out | POST | axios.post("dj-rest-auth/logout/") | User log out |
| Get currentUser | GET | axiosRes.get("dj-rest-auth/user/") | Retrieves user id |
| Refresh token | POST | axios.post("/dj-rest-auth/token/refresh/") | Refreshes auth token |
| Change password | POST | axiosRes.post("/dj-rest-auth/password/change/", userData) | Changes password |

<br>[Back to top ⇧](#table-of-contents)

### Navigation Bar (NavBar)

- Includes the main logo, user greeting/username and links to various pages of the site, enhancing the ease of navigation throughout the site.
- The logo image is linked to the home page.
- The NavBar links incorporate a hover effect that changes color, providing users with visual feedback for an improved browsing experience.
- The active (clicked) link on the navigation bar is highlighted in blue.

**Depending on the user status, the NavBar has two different states:**

- For a logged-out (unauthenticated) user:
  ![ArtShowcase Navbar image Authenticated](/src/assets/readme_images/features/nav_unauthenticated.png)
- For a logged-in user:
  ![ArtShowcase Navbar image Unauthenticated](/src/assets/readme_images/features/nav_authenticated.png)

- Responsiveness. NavBar burger menu:
  | ![ArtShowcase Navbar Mobile Unauthenticated](/src/assets/readme_images/features/nav_mobile_unauthenticated.png) | ![ArtShowcase Navbar Mobile Authenticated](/src/assets/readme_images/features/nav_mobile_authenticated.png) |
  |------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------|

#### Modal Alert

Clicking on the avatar/username link may result in two different scenarios, depending on the authenticated user's credentials:

- For newly registered users who have not completed their profile yet, it activates a modal panel that alerts the user to complete their profile by clicking a button located at the bottom of the panel.
- This Modal Alert panel is also triggered when they click on the "Add Painting", "Faves", and "Watchlist" links on the NavBar.
  ![ArtShowcase ModalAlert image](/src/assets/readme_images/features/modal_alert.png)

- Registered users who have completed their profile are redirected to their [Profile page](#profile-page)

### Footer

- The footer includes the ArtShowcase trademark, and links to various social media channels.
  ![ArtShowcase Footer image](/src/assets/readme_images/features/footer.png)

<br>[Back to top ⇧](#table-of-contents)

### Home page

The Home page features an infinite scroll display of paintings, arranged in rows of three, and includes a set of filters for selecting a desired group of paintings.

![ArtShowcase Home Page image](/src/assets/readme_images/features/home_page.png)

#### **1. Filters area:**

![ArtShowcase Filters Area image](/src/assets/readme_images/features/filters_area.png)

- Search Painting Field

  - Allows users to search for paintings by title or painter's name by entering the relevant information into the field.

- Theme Filter

  - Enables users to find paintings by a desired theme through a dropdown menu. Available options include:
    - Portrait
    - Still Life
    - Landscape
    - Seascape
    - Abstract
    - Figurative
    - Genre
    - Animal

- Technique Filters

  - Users can select paintings by a specific technique using a dropdown menu. Available options are:
    - Oil Paint
    - Acrylic Paint
    - Watercolor
    - Gouache
    - Pastel
    - Charcoal
    - Graphite
    - Ink
    - Mixed Media

- Orientation Filter

  - A computed value filter that helps users to select paintings based on the desired orientation, depending on the painting's width-height ratio. This value can also be chosen from a dropdown menu:
    - Vertical
    - Horizontal
    - Square

- Price Filter

  - A dropdown menu that allows users to sort paintings in **_ascending_** or **_descending_** order by price.

- Cumulative Filtering Display

  - When filters are applied one after the other, their criteria are cumulative, with the final display showing the collective result of all selected filters.

- Painting Counter

  - The number of paintings displayed is shown beneath the row of filter settings, and it updates according to the results of the applied filters.

<br>[Back to top ⇧](#table-of-contents)

#### **2. Resetting filter choices**

- To enhance the user experience, a 'Reset Filters' feature has been implemented. This allows users to quickly and efficiently clear all applied filters by clicking on any of the intuitively obvious links in the NavBar that lead to pages where filters are presented:
  - Logo link
  - Artworks link
  - Faves link
  - Watchlist link

#### **3. Preserving user's filter choices**

- To improve user convenience, functionality was added to save filter settings in browser's sessionStorage. This keeps filter states preserved across page navigations, ensuring the application remembers users' choices even after navigating away and returning to the PaintingsPage, via links or browser navigation buttons.

- This feature is beneficial for users who wish to view a painting's detail page and then return to the filtered paintings page, among other navigational actions.

#### **4. Painting Card (PaintingList component)**

This component can be divided into four distinct parts, each offering its own functionality.

- Link to the Painting Deatil Page

  - Clicking on any painting on the Paintings Page redirects the user to the [Painting Detail page](#painting-detail-page).

- Avatar/Username

  - Essentially, this acts as a link to the [Profile page](#profile-page) of the user (painting owner).

- Painting Details

  - Provides a summary of information about the painting, as described by the artist upon adding the painting to the gallery.

- Painting Layout

  - Allows the uploading of paintings with any aspect ratio dimensions. Regardless of the aspect ratio, the image will be fitted into a square frame without cropping. Horizontal or vertical images will have padding added on the top and bottom or sides, respectively.

- Observe/Comment Icons and Hovered Icon Tooltips

  - These two icons display the number of times the painting was added to the Watchlist and the number of comments the painting has received, respectively.
  - Icon tooltip appear when the user hovers over the Observe (Watch) or Comment icon beneath the painting's data. The type of tooltip message displayed varies depending on the user's credentials, as detailed in the table below:

| Status                               | Icon            | Message                                                                | Icon    | Message           |
| ------------------------------------ | --------------- | ---------------------------------------------------------------------- | ------- | ----------------- |
| Logged out user                      | Observe (Watch) | Log in to follow up the painting                                       | Comment | Read comments     |
| Logged in user (painting owner)      | Observe (Watch) | You can't follow up your own painting                                  | Comment | Read/add comments |
| Logged in user w/completed Profile   | Observe (Watch) | Add painting to your watchlist/Remove the painting from your Watchlist | Comment | Read/add comments |
| Logged in user w/uncompleted Profile | Observe (Watch) | Complete your profile to add painting to your Watchlist                | Comment | Read comments     |

**Below are some examples of icons' tooltips:**

| ![ArtShowcase Painting Card-1 image](/src/assets/readme_images/features/painting_card_1.png) | ![ArtShowcase Painting Card-2 image](/src/assets/readme_images/features/painting_card_2.png) | ![ArtShowcase Painting Card-3 image](/src/assets/readme_images/features/painting_card_3.png) |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |

##### **Observation CRUD**

- Every click on the observation icon within a Painting Card toggles the addition or removal of the painting to the user’s Watchlist, creating or deleting an instance of the Observation model accordingly.
- Depending on whether the painting has been added to their Watchlist, the color of the Observe icon changes from blue to grey for the user.
- Additionally, hovering over the observation icon activates a tooltip. The message displayed in this tooltip changes based on the painting’s Watchlist status, either prompting to "Add painting to your watchlist" if it is not already added, or suggesting to "Remove the painting from your Watchlist" if it is.

| ![ArtShowcase Observation Create image](/src/assets/readme_images/features/observation_create.png) | ![ArtShowcase Observation Delete image](/src/assets/readme_images/features/observation_delete.png) |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |

<br>[Back to top ⇧](#table-of-contents)

### Painting Detail page

This page consists of three independent sections, which may vary slightly depending on the user's status (see the full description below).

#### 1. Painting section

- The Painting Itself

  - Positioned on the left side of the screen, it occupies two-thirds of the site's main container size.

![ArtShowcase Painting Detail Page image](/src/assets/readme_images/features/painting_detail_page.png)

- Painting's Upper and Lower Paddings

  - In the top-left corner of the painting section, the Avatar/Username is displayed, serving as a link to the [Profile page](#profile-page) of the user (painting owner).
  - In the top-right corner of the painting section, the date when the painting was added to the gallery is shown.
  - At the bottom of the painting section, the Observe and Comment icons are displayed along with the number of times the painting has been added to the Watchlist and the total number of comments it has received.
  - Depending on whether the painting has been added to their watchlist, the color of the Observe icon changes from blue to grey for the currently logged in user.
  - Each time the currently logged-in, authorized user clicks on the Observation icon, a new instance of the Observation model is either created or deleted. This functionality mirrors the process described for the [Painting Card](#observation-crud).
  - Icon tooltips appear when the user hovers over the Observe (Watch) or Comment icon beneath the painting's data. The type of tooltip message displayed varies depending on the user's credentials, as detailed in the table below:

| Status                               | Icon                 | Message                                                                | Icon         | Message                                  |
| ------------------------------------ | -------------------- | ---------------------------------------------------------------------- | ------------ | ---------------------------------------- |
| Logged out user                      | Observe (Watch) icon | Log in to follow up the painting                                       | Comment icon | Log in to leave a comment                |
| Logged in user (painting owner)      | Observe (Watch) icon | You can't follow up your own painting                                  | Comment icon | Total number of comments                 |
| Logged in user w/completed Profile   | Observe (Watch) icon | Add painting to your watchlist/Remove the painting from your Watchlist | Comment icon | Total number of comments                 |
| Logged in user w/uncompleted Profile | Observe (Watch) icon | Complete your profile to add painting to your Watchlist                | Comment icon | Complete your profile to leave a comment |

<br>[Back to top ⇧](#table-of-contents)

#### 2. Painting detail section

- This section provides the general details of the painting, as provided by the owner when they add their artwork to the Gallery.

##### **Painting CRUD**

- Users who are logged in and have completed their profiles can add their paintings to the Gallery by clicking on the "Add Painting" icon in the NavBar, which redirects them to the Create Painting page:

![ArtShowcase Add painting image](/src/assets/readme_images/features/add_painting.png)

- All fields in the "Add Painting" form are mandatory, including the requirement to upload an image. Should there be any errors, a detailed and informative message will be displayed:

![ArtShowcase Add painting error image](/src/assets/readme_images/features/add_painting_error.png)

- If users wish to change the image they initially selected, they can do so by clicking on the "Change the image" button beneath the uploaded image.
- Image size restrictions are enforced programmatically in the backend (paintings/serializers.py), limiting the Width/Height to no more than 4096px, and the file size to no more than 2MB.

  ![ArtShowcase Image Width Error image](/src/assets/readme_images/features/image_width_error.png)
  ![ArtShowcase Image Weight Error image](/src/assets/readme_images/features/image_weight_error.png)

- The "Year Created" field is also restricted in the backend (paintings/serializers.py), with allowable years ranging from 1000 to 9999.

| ![ArtShowcase Year Created Greater image](/src/assets/readme_images/features/year_created_greater.png) | ![ArtShowcase Year Created Less image](/src/assets/readme_images/features/year_created_less.png) |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |

- "Select Theme" and "Select Technique" fields are dropdown menus with predefined options, as described in the [filter area section](#1-filter-area).
- Upon successful submission of a painting, a "Success" message will be displayed to confirm the addition. The user is then redirected to the "Painting Page" of the newly created artwork.

![ArtShowcase Add painting success image](/src/assets/readme_images/features/add_painting_success.png)

- The owner of a painting, when logged in, has the ability to edit and delete their own paintings. This can be done by clicking on the three vertical dots located in the top right corner of the Painting section. This feature provides painting owners with direct control over their artwork's representation on the platform, ensuring they can easily make adjustments or remove their paintings as needed.

![ArtShowcase Comment CRUD image](/src/assets/readme_images/features/painting_crud.png)

- When a user clicks on the "Edit Painting" icon, a prepopulated form containing all the painting's data is displayed. Here, they can update any field, including the image. It is important to note that all fields in the "Edit Painting" form are mandatory and must not be left empty. This ensures that all necessary information about the painting is maintained and updated accurately, allowing for a comprehensive and detailed presentation of each piece within the gallery.

![ArtShowcase Comment Update image](/src/assets/readme_images/features/painting_update.png)

- Painting Deletion. After clicking the icon to delete a painting, a modal alert window appears, asking the user to confirm the deletion action.

![ArtShowcase Comment Delete image](/src/assets/readme_images/features/painting_delete.png)

- Upon successful editing/deletion of a painting, a "Success" message will be displayed to confirm the action.

![ArtShowcase Painting Success Update image](/src/assets/readme_images/features/painting_success_update.png)
![ArtShowcase Painting Success Delete image](/src/assets/readme_images/features/painting_success_delete.png)

#### 3. Comment section

Each comment includes information about the user who left the comment, how long ago the comment was made, and the comment itself.

- Unauthenticated users and authenticated users who have not yet completed their profile can only read the comments:

![ArtShowcase Comment Unauthenticated image](/src/assets/readme_images/features/comment_unauthenticated.png)

![ArtShowcase Comment Authenticated NotCompleted image](/src/assets/readme_images/features/comment_authenticated_notcompleted.png)

##### **Comment CRUD**

- Authenticated users that have completed their profile:
  - Those can read other users comments and leave their own comments.
  - Logged in comments' owner can also edit and delete their own comment.
  - Upon successful editing/deletion of a comment, a "Success" message will be displayed to confirm the action.

![ArtShowcase Comment Authorized image](/src/assets/readme_images/features/comment_authorized.png)

Comment CRUD:
![ArtShowcase Comment CRUD image](/src/assets/readme_images/features/comment_crud.png)
Comment Updating:
![ArtShowcase Comment Update image](/src/assets/readme_images/features/comment_update.png)
Comment Deletion. After clicking the icon to delete a comment, a modal alert window appears, asking the user to confirm the deletion action.
![ArtShowcase Comment Delete image](/src/assets/readme_images/features/comment_delete.png)

Any user is redirected to comment's owner Profile page when they click on owner's Avatar/Username that located near the comment.

<br>[Back to top ⇧](#table-of-contents)

### Profile page

To navigate to any user's profile page, simply click on the Avatar/Username pairing found throughout the site. The user profile page is organized into two main sections:

#### User Profile Main Info Panel:

- This section displays both computed data and user-provided information. The computed data includes the number of paintings the user has, the number of favorite painters, and the user's follower count. Additionally, it features information provided by the user upon completing their profile, such as:

  - Profile photo
  - Short bio
  - Home country
  - Gender
  - Date of birth

![ArtShowcase Profile Page Owner image](/src/assets/readme_images/features/profile_page_owner.png)

##### **Follower CRUD**

- The "To Faves"/"Unfollow" button is visible to logged-in users beneath the profile image, except to the profile owner themselves. Clicking on the button adds or removes the profile to or from the Favorites of the logged-in user. It also increments or decrements the follower count of the profile in question and the number of favorites in the logged-in user's profile accordingly.
- After adding a profile to Faves, the logged-in user can view all the paintings by the selected artist in their Faves section.

![ArtShowcase Profile Page Not Owner image](/src/assets/readme_images/features/profile_page_not_owner.png)

#### User's Available Artworks:

- This area showcases an infinite scroll of the user's paintings added to the gallery. Each painting card is presented in the same format as those on the [Home page](#4-painting-card-paintinglist-component)

<br>[Back to top ⇧](#table-of-contents)

#### Profile CRUD

- Upon new user registration, a profile is automatically created in the backend. Thus, CRUD operations for users are limited to profile updates, such as completion or editing.
- Selecting the "Complete your profile" button from a [ModalAlert](#modal-alert) navigates the user to the Profile Completion page:

![ArtShowcase Complete Profile image](/src/assets/readme_images/features/complete_profile.png)

- All form fields, except for the image which has a default option, are required. Any errors encountered will prompt a detailed message similar to the one used in the ["Add painting" form](#painting-crud)
- To facilitate user-friendly input of birth dates, a date-picker library is utilized in the "Date of Birth" field:

![ArtShowcase Complete Profile Birthdate image](/src/assets/readme_images/features/complete_profile_birthdate.png)

- Users who have completed their profiles may edit them by clicking the three vertical dots located in the top right corner of their [User Profile Main Info Panel](#user-profile-main-info-panel):

![ArtShowcase Profile Edit image](/src/assets/readme_images/features/profile_edit.png)

- Clicking the "Edit Profile" icon will display a form pre-filled with the user's existing profile data. All fields (except for the the profile image) are required to be filled out. This measure ensures the integrity and completeness of user information:

![ArtShowcase Profile Edit Form image](/src/assets/readme_images/features/profile_edit_form.png)

- Note that the deletion of users and their profiles is reserved as an administrative function in the backend and is not a part of the Profile CRUD operations.

<br>[Back to top ⇧](#table-of-contents)

### About page

![ArtShowcase About page image](/src/assets/readme_images/features/about.png)

- The "About" page of the project serves as the cornerstone of ART SHOWCASE, introducing users to the mission and the essence of this online platform. Designed for both emerging artists and art enthusiasts, this page outlines the core functionalities and the unique ecosystem that ART SHOWCASE provides. It emphasizes dedication to fostering connections within the modern art community through the sharing, discussion, and appreciation of contemporary paintings.
- Visitors to the "About" page will gain insight into the various features the platform offers, from creating artist profiles and showcasing artwork to exploring vast collections and engaging in community discussions. The page highlights the seamless blend of UI and UX design principles that enhance the user experience, enabling easy navigation and interaction.
- Moreover, the "About" page delves into the tailored discovery experience ART SHOWCASE offers, including advanced search capabilities and personalized user interactions like watchlists and artist connections. It underscores the commitment to making art accessible and enjoyable for everyone, facilitating a space where art not only is viewed but lived and breathed.
- In essence, the "About" page invites users to join a community that celebrates modern paintings' power to inspire, connect, and enchant, marking the beginning of an artistic voyage with ART SHOWCASE.

<br>[Back to top ⇧](#table-of-contents)

### Authentication Forms

Security on this platform is anchored by a set of intuitive authentication forms: Registration, Login, and Change Password. These forms are designed to protect user data, facilitating secure sign-up, sign-in, and account updates with an easy verification process.

#### Registration Form

![ArtShowcase Registration image](/src/assets/readme_images/features/registration.png)

- To register on the Art Showcase site, users should click the "Register" link in the NavBar to bring up the registration form.
- New users begin by entering a chosen username and password. It's important to select a username carefully, as it cannot be changed after creation (Disclaimer: Once created, your username cannot be changed). For password verification, a second entry is required for confirmation.
- An "eye" icon is provided in the password field to toggle visibility and confirm the correct entry before finalizing the registration.
- Upon successful registration, a "Success" message will be displayed, and the user will be automatically redirected to the Log In page.

#### Log In Form

![ArtShowcase Log in image](/src/assets/readme_images/features/login.png)

- For account access, users are prompted to input their username and password.
- The form design ensures a quick and efficient login process, with the inclusion of an "eye" icon for password visibility, enabling users to check their credentials as they type.

#### Change Password Form

![ArtShowcase Change Password image](/src/assets/readme_images/features/change_password.png)

- Users looking to update their passwords have the option to do so securely via their Profile page. This can be achieved by clicking the three vertical dots located in the top right corner of their [User Profile Main Info Panel](#user-profile-main-info-panel).
- The new password must be entered and then re-entered for confirmation. Consistent with the other forms, the "eye" icon allows users to reveal the password for accuracy before saving changes.

<br>[Back to top ⇧](#table-of-contents)

### Error Handling and Notifications

#### React Bootstrap Alert component

- This messaging approach is employed across all form fields in the project to notify users of incorrectly entered data. It allows the creation of detailed messages for each field separately, ensuring that the user can clearly understand what the input error is:

| ![ArtShowcase React Bootstrap Alert-1 image](/src/assets/readme_images/features/bootstrap_alert_1.png) | ![ArtShowcase React Bootstrap Alert-2 image](/src/assets/readme_images/features/bootstrap_alert_2.png) |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| ![ArtShowcase React Bootstrap Alert-3 image](/src/assets/readme_images/features/bootstrap_alert_3.png) | ![ArtShowcase React Bootstrap Alert-4 image](/src/assets/readme_images/features/bootstrap_alert_4.png) |

- Below is a code snippet showcasing the use of the React Bootstrap Alert component for displaying error messages. It cycles through any error messages tied to a field. For each error encountered, it generates an Alert component marked with a "warning" variant, presenting each message as a cautionary alert in your React application:

```jsx
// some form field code
</Form.Group>
{
  errors?.field_name?.map((message, i) => {
    return (
      <Alert variant="warning" key={i}>
        {message}
      </Alert>
    );
  });
}
```

#### React Notification Package

- For more general user notifications, [React Notification Package](https://www.npmjs.com/package/react-notifications) was utilized.
- It generates success and error messages to clearly inform users whether their actions were completed successfully:

User successfully logged in
![ArtShowcase Success Log In image](/src/assets/readme_images/features/success_login.png)

Invalid credentials
![ArtShowcase Error Log In image](/src/assets/readme_images/features/error_login.png)

The Comment has been successfully created
![ArtShowcase Success Comment Created image](/src/assets/readme_images/features/success_comment.png)

The image has been successfully deleted
![ArtShowcase Success Painting Deleted image](/src/assets/readme_images/features/painting_success_delete.png)

### Redirecting the user

To enhance the user experience by steering them away from pages that may be irrelevant, two redirecting methods have been implemented:

- Utilizing a reusable custom hook as an intermediary (`useRedirect`).
- Applying conditional rendering within the Root component of `App.js`.

In both approaches, the user is seamlessly redirected to the Home page of the site. For more detailed information, please refer to the [Redirection] section in the Testing module.

### 404 Error page

When users attempt to visit a page or resource that is unavailable on the website, the custom 404 error page provides a constructive response. It conveys a courteous message that notifies the user of the nonexistent page and offers directions to return to the homepage, ensuring a smooth browsing experience:

![ArtShowcase 404 Error Page image](/src/assets/readme_images/features/404.png)

<br>[Back to top ⇧](#table-of-contents)

## Testing

### Testing User Stories

#### Epic: Navigation

| No  | User story                                                                                                                                                                                                                                                                                                                   | Result |
| --- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------ |
| 1   | As a user I can view a navbar from every page so that I can navigate easily between pages.                                                                                                                                                                                                                                   | Pass   |
| 2   | As a user I can navigate through pages quickly so that I can view content seamlessly without page refresh.                                                                                                                                                                                                                   | Pass   |
| 3   | As a user, I can easily navigate to other users' profile pages by clicking on their avatar so that I can view their public information, artworks, and interests, fostering community engagement and connection among users.                                                                                                  | Pass   |
| 4   | As a logged out user I can see sign in and sign up options so that I can sign in/sign up.                                                                                                                                                                                                                                    | Pass   |
| 5   | As a logged in user, I can see a logout link so that I can securely exit my session, ensuring my account remains protected and my session is properly closed.                                                                                                                                                                | Pass   |
| 6   | As a user, I can view a footer on every page so that I can access the site owner's social media pages.                                                                                                                                                                                                                       | Pass   |
| 7   | As a user, I want to see pop-up hints for any active icons that depend on my user and profile status before clicking on them, so I can make informed decisions about interacting with features based on my current capabilities and restrictions, thereby enhancing my navigational experience and engagement with the site. | Pass   |

#### Epic: "Painting Management"

| No  | User story                                                                                                                                                                                                                        | Result |
| --- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------ |
| 1   | As a user, I can see a paintings page where all the paintings or filtered paintings are displayed, so that I can browse through a comprehensive collection of artworks easily, enhancing my exploration and discovery of new art. | Pass   |
| 2   | As a user I can keep scrolling through the paintings on the site, that are loaded for me automatically so that I don't have to click on "next page.                                                                               | Pass   |
| 3   | As a user I can view the details of a single painting so that I can learn more about it.                                                                                                                                          | Pass   |
| 4   | As a user I can view the painting page so that I can read the comments about the painting, and get familiar with such details as 'Artist name', 'Painting title', 'Year created', 'Technique', 'Dimensions' and suggested price.  | Pass   |
| 5   | As a logged in user I can create painting so that I can share my artwork with the world.                                                                                                                                          | Pass   |
| 6   | As a painting owner I can edit my painting parameters so that I can make corrections or update my painting details after they were created.                                                                                       | Pass   |
| 7   | As a user I can view the About page so that I can stay informed about the mission, and understand the platform's purpose and offerings.                                                                                           | Pass   |

#### Epic: Search and Filtering

| No  | User story                                                                                                                                                                                                                                            | Result |
| --- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------ |
| 1   | As a user, I can search for paintings by Title or Artist Name, so that I can find the paintings and user profiles I am most interested in.                                                                                                            | Pass   |
| 2   | As a user, I can apply a set of filters, such as 'Painting Orientation', 'Technique', 'Theme' and 'Price' based on my preferences so that I can narrow down the displayed artworks.                                                                   | Pass   |
| 3   | As a user, I can see not only the filtered paintings but also the number of paintings in the search result, so that I have a clear understanding of the breadth of options available within my search criteria, enhancing my decision-making process. | Pass   |
| 4   | As a user, I can easily reset filters with a single click so that I can quickly start a new search or explore different categories without manually removing each filter, enhancing my browsing experience and efficiency on the platform.            | Pass   |
| 5   | As a user, I can my filter selections on the Paintings Page saved when navigating away and returning, so that it ensures a seamless browsing experience without redoing my choices.                                                                   | Pass   |

#### Epic: User and User Profile Management

| No  | User story                                                                                                                                                                                                                  | Result |
| --- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------ |
| 1   | As a user I can create a new account so that I can access all the features for registered users.                                                                                                                            | Pass   |
| 2   | As a user I can log in to the app so that I can access functionality for logged in users.                                                                                                                                   | Pass   |
| 3   | As a user I can tell if I am logged in or not so that I can log in if I need to.                                                                                                                                            | Pass   |
| 4   | As a user I can maintain my logged-in status until I choose to log out so that my user experience is not compromised.                                                                                                       | Pass   |
| 5   | As a user I can view user's avatars so that I can easily identify users of the application.                                                                                                                                 | Pass   |
| 6   | As a user I can view other artists' profiles so that I can see their paintings and learn more about them.                                                                                                                   | Pass   |
| 7   | As a user I can view data and statistics about a specific artist such as: bio, home country, gender, date of birth, as well as number of of paintings, followers and favourite artists so that I can learn more about them. | Pass   |
| 8   | As a user I can view all the paintings by a specific artist so that I can catch up on their latest artworks, or decide I want to follow them.                                                                               | Pass   |
| 9   | As a logged in user I can complete/edit my profile so that I can change my profile image, bio and other details.                                                                                                            | Pass   |
| 10  | As a logged in user with completed profile I can update my password so that I can keep my profile secure.                                                                                                                   | Pass   |
| 11  | As a user I can see completed profiles of active users who display their paintings or leave comments so that I can access more context about their contributions and foster deeper community engagement.                    | Pass   |
| 12  | As a user I can have an option to reveal or hide my password on any appropriate form so that I can ensure accuracy when entering my password, enhancing both security and usability.                                        | Pass   |

#### Epic: Favourite Profiles and Watchlist Management

| No  | User story                                                                                                                                                                                                                                | Result |
| --- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------ |
| 1   | As a logged in user with completed profile I can add a painting to my watchlist so that I can observe it later, and show that I am not indifferent to this painting.                                                                      | Pass   |
| 2   | As a logged in user with completed profile I can follow and unfollow other artists so that I can see and remove paintings by specific artist in my Faves feed.                                                                            | Pass   |
| 3   | As a logged in user with completed profile, I can remove a painting from my watchlist so that I can keep my list updated with only the artworks that currently interest me, ensuring a personalized and clutter-free browsing experience. | Pass   |

#### Epic: Comments Management

| No  | User story                                                                                                                                                   | Result |
| --- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------ |
| 1   | As a user I can read comments on painting so that I get informed what other artists think about the painting.                                                | Pass   |
| 2   | As a user I can see how long ago a comment was made so that I know how old a comment is.                                                                     | Pass   |
| 3   | As a user I can keep scrolling through the comments on the painting page, that are loaded for me automatically so that I don't have to click on "next page". | Pass   |
| 4   | As a logged in user with completed profile I can add comments to a painting so that I can share my thoughts about the artwork.                               | Pass   |
| 5   | As an owner of a comment I can edit my comment so that I can fix or update my existing comment.                                                              | Pass   |
| 6   | As an owner of a comment I can delete my comment so that I can control removal of my comment from the application.                                           | Pass   |

#### Epic: Error Handling and Notification Management

| No  | User story                                                                                                                                                                                                             | Result |
| --- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------ |
| 1   | As a user I can receive clear error messages when a page I'm looking for is not found so that I understand what went wrong and feel guided on what to do next.                                                         | Pass   |
| 2   | As a user I can receive immediate and informative feedback when I encounter errors while filling out forms on the site so that I can understand exactly what needs to be corrected without feeling frustrated or lost. | Pass   |
| 3   | As a user I can receive a success notification when I successfully complete the form so that I am assured my changes have been saved and can confidently navigate away from the form.                                  | Pass   |
| 4   | As a user I can see that error alerts and success messages are handled uniformly across the platform so that I have a consistent experience and can easily understand feedback from the system.                        | Pass   |

### Code validation

#### HTML

The HTML code of the project's home page was checked for syntax accuracy using the [W3C Markup Validator](https://validator.w3.org/) service, guaranteeing no syntax errors were present.

![ArtShowcase HTML Validation Home image](/src/assets/readme_images/testing/HTML_validation_home.png)

When trying to check another project's pages, 404 error occured:

![ArtShowcase HTML Validation 404 Error image](/src/assets/readme_images/testing/HTML_validation_404.png)

The inability of the W3C Validator to access specific routes in this React application is attributed to the nature of Single Page Application (SPA) Routing. Like many modern web applications built with frameworks such as React, this app employs client-side routing. While users perceive that they are navigating between different pages, the transitions are actually managed by JavaScript, which dynamically handles navigation and content rendering without real page reloads. However, for an external service like the W3C Validator to directly access a particular route, the server's configuration plays a crucial role. The server must be set up to always serve the main index.html file of the SPA for any route, which then lets the React application take over routing on the client side. The current server configuration, not adjusted to accommodate this requirement, and results in a 404 error when attempting to directly access URLs, as observed.

Therefore to validate other project's pages html code, Direct Input was applied.
Copying the HTML code rendered by a single-page application (SPA) in React from the Chrome Developer Tools is straightforward. Here's how to do it:

1. **Open Chrome Developer Tools**:

   - Right-click on the page and select "Inspect," or press `Ctrl+Shift+I` (Windows/Linux) or `Cmd+Option+I` (Mac) to open the Chrome Developer Tools.

2. **Navigate to the "Elements" Tab**:

   - The "Elements" tab displays the DOM tree of the webpage. It shows the HTML structure as it is currently rendered in the browser, which includes dynamically generated content by JavaScript.

3. **Find the Root Element of Your React App**:

   - React apps usually have a root element where the app is mounted. By default, this is often a div with the ID of "root" (`<div id="root">`). This element contains all the HTML content generated by your React app.
   - You might need to expand some elements in the DOM tree to find the root element of your React app.

4. **Copy the HTML Code**:

   - Right-click on the root element of your React app in the "Elements" tab.
   - Choose "Copy" > "Copy element" from the context menu. This copies the entire HTML content of the element, including all child elements and dynamically generated content, to your clipboard.

5. **Initial HTML document code snippet**:

- To avoid additional validation warnings and errors, enter the following at the beginning of the "Validate by Direct Input" tab on the [W3C Markup Validator](https://validator.w3.org/)

```
<!DOCTYPE html>
<html lang="en">
<title>pp5_art_showcase</title>
```

6. **Paste the Copied HTML**:
   - Paste the copied in p. 4 HTML code under the Initial HTML document code snippet

- Remember, the HTML you copy this way reflects the current state of the rendered page, including any changes made by JavaScript after the initial load. This can be particularly useful for debugging, reviewing the structure, or ensuring accessibility and SEO best practices are being followed in the rendered content.

- However, because SPAs typically update the DOM dynamically, the HTML code you copy might not represent the entire app's structure or potential states. It represents the app's state at the moment you copied the HTML.

Here are the results of validation for other pages:

- Register page:
  ![HTML Validation image](/src/assets/readme_images/html_success.png)
- Log in page:
  ![HTML Validation image](/src/assets/readme_images/html_success.png)
- Change password page:
  ![HTML Validation image](/src/assets/readme_images/html_success.png)
- Product details page:
  ![HTML Validation image](/src/assets/readme_images/html_success.png)
- Add Painting page:
  ![HTML Validation image](/src/assets/readme_images/html_success.png)
- Profile page:
  ![HTML Validation image](/src/assets/readme_images/html_success.png)
- Complete profile page:
  ![HTML Validation image](/src/assets/readme_images/html_success.png)
- About page:
  ![HTML Validation image](/src/assets/readme_images/html_success.png)

#### CSS

The project's CSS code was checked for syntax errors using the [W3C CSS Validator](https://jigsaw.w3.org/css-validator/) service, confirming it met the standards without any errors or warnings.

![ArtShowcase CSS Validation image](/src/assets/readme_images/testing/CSS_validation.png)

#### JavaScript (JS) and JSX (JavaScript XML)

This project was developed using [IDE VS Code](https://code.visualstudio.com/), a highly versatile and lightweight code editor. Throughout the development process, built-in features such as **Syntax Highlighting and Basic Validation** and **IntelliSense** were employed to continuously validate the code.

For more advanced validation, including style checks, code quality issues, and adherence to best practices, the following extensions were also utilized:

- **ESLint**: This extension integrates the ESLint tool into VS Code, offering comprehensive linting capabilities for JavaScript and JSX. It can detect both syntax errors and stylistic issues, enforce coding standards, and even automatically fix some problems.
- **Prettier**: This extension integrates the Prettier code formatter into VS Code, which formats JavaScript and JSX code according to a specified style. Although primarily a formatter, Prettier can also assist in identifying syntax errors by failing to format invalid code.

These tools ensure that the code is clean and error-free.

### Accessibility

The Lighthouse Chrome DevTools extension was utilized to evaluate web pages in terms of their performance, accessibility, features of progressive web apps, and search engine optimization. The outcomes of these audits across different pages are detailed below.

| Page                  | Lighthouse report                                                                           |
| --------------------- | ------------------------------------------------------------------------------------------- |
| Home page             | ![ArtShowcase LH Home image](/src/assets/readme_images/testing/LH_home.png)                 |
| Painting Details page | ![ArtShowcase LH Detail Page image](/src/assets/readme_images/testing/LH_detail_page.png)   |
| Profile page          | ![ArtShowcase LH Profile Page image](/src/assets/readme_images/testing/LH_profile_page.png) |
| About page            | ![ArtShowcase LH About page image](/src/assets/readme_images/testing/LH_about_page.png)     |
| Registration page     | ![ArtShowcase LH Registration image](/src/assets/readme_images/testing/LH_register.png)     |
| Log in page           | ![ArtShowcase LH Login image](/src/assets/readme_images/testing/LH_login.png)               |

<br>[Back to top ⇧](#table-of-contents)

#### Accessibility improvement and form design

To enhance the accessibility of form elements, particularly for screen reader users, some `Form.Label` components have been properly linked to their corresponding `Form.Control` components using the `htmlFor` property, which matches the `id` of the `Form.Control`. This method was preferred over the `aria-label` attribute to ensure wider accessibility support:

- Labels assist not only screen reader users but also those who may struggle with smaller interactive areas. Clicking on the label text will focus the associated input, improving usability.
- Label elements aid users with cognitive disabilities by clearly denoting what each input field is for.
- Unlike placeholders, which vanish as the user types, labels remain visible, preventing confusion about what information is being requested.

Moreover, utilizing React Bootstrap in this project allows for cleaner code and helps avoid potential mismatches between the `id` and `htmlFor` values. For this purpose, the `controlId` prop on the `Form.Group` component was used. It automatically generates and sets the `id` for the `Form.Control` and the `htmlFor` attribute for the `Form.Label` within that group.

To ensure accessibility while maintaining the functionality of hiding the label, a visually hidden class `className="sr-only"` was implemented. This class makes the label accessible to screen readers without making it visible on the screen.

<br>[Back to top ⇧](#table-of-contents)

### Tools Testing.

#### Chrome DevTools.

- [Chrome DevTools](https://developer.chrome.com/docs/devtools/) were used
  during the development process to test, explore, and modify HTML elements and
  CSS styles, while also looking for errors in the JS code.

#### Responsiveness.

- [responsivedesignchecker.com](https://www.responsivedesignchecker.com/)
  was used to check responsiveness of the site pages across different devices.

### Manual Testing.

#### Browser Compatibility.

- All site functions work correctly and the same in browsers that have
  different engines, i.e. Chrome, Firefox and Safari:

| Browser         | Outcome                                                                               | Pass/Fail |
| --------------- | ------------------------------------------------------------------------------------- | --------- |
| Google Chrome   | No problems related to the appearance, responsiveness or functionality of the website | Pass      |
| Safari          | No problems related to the appearance, responsiveness or functionality of the website | Pass      |
| Mozilla Firefox | No problems related to the appearance, responsiveness or functionality of the website | Pass      |
| Microsoft Edge  | No problems related to the appearance, responsiveness or functionality of the website | Pass      |

<br>[Back to top ⇧](#table-of-contents)

#### Testing Style And Functionality

##### Navigation bar testing

| Element           | Users                                    | Test          | Outcome                                                                                | Pass/Fail |
| ----------------- | ---------------------------------------- | ------------- | -------------------------------------------------------------------------------------- | --------- |
| Main logo link    | All                                      | Functionality | Clicking the link redirects to the Home page                                           | Pass      |
|                   |                                          | Style         | n/a                                                                                    | n/a       |
| Register link     | Unauthenticated                          | Functionality | Clicking the link redirects to the Register page                                       | Pass      |
|                   |                                          | Style         | Hover/active link effect is working as expected                                        | Pass      |
| Login link        | Unauthenticated                          | Functionality | Clicking the link redirects to the Login page                                          | Pass      |
|                   |                                          | Style         | Hover/active link effect is working as expected                                        | Pass      |
| About link        | All                                      | Functionality | Clicking the link redirects to the About page                                          | Pass      |
|                   |                                          | Style         | Hover/active link effect is working as expected                                        | Pass      |
| Welcoming message | Unauthenticated                          | Functionality | Impersonal greeting.                                                                   | Pass      |
|                   | Authenticated                            |               | Avatar+username                                                                        | Pass      |
| Add painting      | Authenticated, completed profile already | Functionality | Clicking the link redirects to the Add Painting page                                   | Pass      |
|                   |                                          | Style         | Hover/active link effect is working as expected                                        | Pass      |
| Add painting      | Authenticated, not completed profile yet | Functionality | Clicking the link triggers Modal Alert (advice to complete the Profile)                | Pass      |
|                   |                                          | Style         | Hover effect is working as expected                                                    | Pass      |
| Artworks link     | All                                      | Functionality | Clicking the link redirects to the Home page                                           | Pass      |
|                   |                                          | Style         | Hover/active link effect is working as expected                                        | Pass      |
| Faves link        | Authenticated, completed profile already | Functionality | Clicking the link redirects you to a page with a list of paintings by favorite artists | Pass      |
|                   |                                          | Style         | Hover/active link effect is working as expected                                        | Pass      |
| Faves link        | Authenticated, not completed profile yet | Functionality | Clicking the link triggers Modal Alert (advice to complete the Profile)                | Pass      |
|                   |                                          | Style         | Hover effect is working as expected                                                    | Pass      |
| Watchlist link    | Authenticated, completed profile already | Functionality | Clicking the link redirects to a page with a list of paintings you wish to observe     | Pass      |
|                   |                                          | Style         | Hover/active link effect is working as expected                                        | Pass      |
| Watchlist link    | Authenticated, not completed profile yet | Functionality | Clicking the link triggers Modal Alert (advice to complete the Profile)                | Pass      |
|                   |                                          | Style         | Hover effect is working as expected                                                    | Pass      |
| Avatar+username   | Authenticated, completed profile already | Functionality | Clicking the link redirects you to your Profile page                                   | Pass      |
|                   |                                          | Style         | Hover/active link effect is working as expected                                        | Pass      |
| Avatar+username   | Authenticated, not completed profile yet | Functionality | Clicking the link redirects to the Create Profile page.                                | Pass      |
|                   |                                          | Style         | Hover effect is working as expected                                                    | Pass      |
| Logout link       | Authenticated                            | Functionality | Clicking the link loggs out and redirects to the Home page.                            | Pass      |
|                   |                                          | Style         | Hover effect working as expected.                                                      | Pass      |

<br>[Back to top ⇧](#table-of-contents)

##### Search and Filtering fields testing

| Element                          | Users                       | Test          | Outcome                                                                                                                      | Pass/Fail |
| -------------------------------- | --------------------------- | ------------- | ---------------------------------------------------------------------------------------------------------------------------- | --------- |
| Search Painting Field            | All                         | Functionality | Entering the painter's name or title filters the paintings accordingly                                                       | Pass      |
| Theme filter                     | All                         |               | Selecting an element from the dropdown menu filters the paintings accordingly                                                | Pass      |
| Technique filter                 | All                         |               | Selecting an element from the dropdown menu filters the paintings accordingly                                                | Pass      |
| Orientation filter               | All                         |               | Selecting an element from the dropdown menu filters the paintings accordingly                                                | Pass      |
| Price filter                     | All                         |               | Selecting an element from the dropdown menu orders the paintings by price accordingly                                        | Pass      |
| Cumulative Filtering Display     | All (for appropriate links) |               | Applying multiple filters simultaneously displays the collective results                                                     | Pass      |
| Resetting filters                | All (for appropriate links) |               | Clicking on any of the links (Logo, Artworks, Faves, Watchlist) resets the applied filters                                   | Pass      |
| Preserving user's filter choices | All                         |               | Clicking on any links other than Logo, Artworks, Faves, or Watchlist does not reset the applied filters                      | Pass      |
| Painting counter                 | All                         |               | The number of paintings displayed by the painting counter corresponds to the number of paintings shown on the paintings page | Pass      |

<br>[Back to top ⇧](#table-of-contents)

##### Footer testing

| Element        | Users | Test          | Outcome                                                       | Pass/Fail |
| -------------- | ----- | ------------- | ------------------------------------------------------------- | --------- |
| Facebook icon  | All   | Functionality | Clicking the link will open Facebook page on a separate tab.  | Pass      |
|                |       | Style         | Hover effect working as expected.                             | Pass      |
| Twitter icon   | All   | Functionality | Clicking the link will open Twitter page on a separate tab.   | Pass      |
|                |       | Style         | Hover effect working as expected.                             | Pass      |
| Instagram icon | All   | Functionality | Clicking the link will open Instagram page on a separate tab. | Pass      |
|                |       | Style         | Hover effect working as expected.                             | Pass      |
| LinkedIn icon  | All   | Functionality | Clicking the link open LinkedIn page on a separate tab.       | Pass      |
|                |       | Style         | Hover effect working as expected.                             | Pass      |

<br>[Back to top ⇧](#table-of-contents)

##### Home page testing

| Element                        | Users                                                   | Test                | Outcome                                                                                  | Pass/Fail |
| ------------------------------ | ------------------------------------------------------- | ------------------- | ---------------------------------------------------------------------------------------- | --------- |
| Infinite scroll                | All                                                     | Functionality       | Home page features an infinite scroll display of paintings                               | Pass      |
| Painting card, image           | All                                                     | Functionality       | Clicking on the item redirects the user to the Painting page                             | Pass      |
| Painting card, Avatar/Username | All                                                     | Functionality       | Clicking on the item redirects the user to the painter’s Profile page                    | Pass      |
|                                |                                                         | Style               | Hover effect working as expected.                                                        | Pass      |
| Painting card, detail area     | All                                                     | Functionality/style | The content is displayed as expected                                                     | Pass      |
| Painting card, icons area      | All                                                     | Functionality       | Hover over icons triggers [appropriate tooltip](#4-painting-card-paintinglist-component) | Pass      |
|                                |                                                         | Style               | Hover effect working as expected.                                                        | Pass      |
| Observe Icon                   | Logged in user w/completed Profile (not painting owner) | Functionality       | Adds/removes painting to/from the Watchlist                                              | Pass      |
|                                |                                                         | Style               | Hover effect working as expected.                                                        | Pass      |
| Observe Icon                   | Logged in user w/uncompleted Profile                    | Functionality       | Clicking the link triggers Modal Alert (advice to complete the Profile)                  | Pass      |
|                                |                                                         | Style               | Hover effect working as expected.                                                        | Pass      |
| Comment icon                   | All                                                     | Functionality       | Clicking the icon redirects to the Painting Detail page.                                 | Pass      |
|                                |                                                         | Style               | Hover effect working as expected.                                                        | Pass      |

<br>[Back to top ⇧](#table-of-contents)

##### Painting Details page testing

| Element                                             | Users                                                   | Test                | Outcome                                                                                      | Pass/Fail |
| --------------------------------------------------- | ------------------------------------------------------- | ------------------- | -------------------------------------------------------------------------------------------- | --------- |
| Painting section/Avatar+Username                    | All                                                     | Functionality       | Clicking the link redirects you to painter Profile page                                      | Pass      |
|                                                     |                                                         | Style               | Hover/active link effect is working as expected                                              | Pass      |
| Painting section/date                               | All                                                     | Functionality       | The date matches the date when the painting was added to the gallery                         | Pass      |
| Painting section, three vertical dots near the date | Painting owner                                          | Functionality       | Clicking the icon triggers dropdown bootstrap component for edit and delete painting options | Pass      |
|                                                     |                                                         | Style               | Hover effect working as expected.                                                            | Pass      |
| Edit option of dropdown component                   | Painting owner                                          | Functionality       | Clicking the option redirects the user to Edit painting page                                 | Pass      |
| Delete option of dropdown component                 | Painting owner                                          | Functionality       | Clicking the option triggers a modal alert that asks for confirmation of the deletion        | Pass      |
| Painting section, icons area                        | All                                                     | Functionality       | Hover over icons triggers [appropriate tooltip](#1-painting-section)                         | Pass      |
|                                                     |                                                         | Style               | Hover effect working as expected.                                                            | Pass      |
| Observe Icon                                        | Logged in user w/completed Profile (not painting owner) | Functionality       | Adds/removes painting to/from the Watchlist                                                  | Pass      |
|                                                     |                                                         | Style               | Hover effect working as expected.                                                            | Pass      |
| Observe Icon                                        | Logged in user w/uncompleted Profile                    | Functionality       | Clicking the link triggers Modal Alert (advice to complete the Profile)                      | Pass      |
|                                                     |                                                         | Style               | Hover effect working as expected.                                                            | Pass      |
| Comment icon                                        | Logged in user w/uncompleted Profile                    | Functionality       | Clicking the link triggers Modal Alert (advice to complete the Profile)                      | Pass      |
|                                                     |                                                         | Style               | Hover effect working as expected.                                                            | Pass      |
| Painting detail section                             | All                                                     | Functionality/style | The content is displayed as expected                                                         | Pass      |
| Comment section, published comment/ Avatar+Username | All                                                     | Functionality       | Clicking the link redirects you to the commenter's profile page                              | Pass      |
| Comment section, published comment/ date            | All                                                     | Functionality       | The date indicates how long ago the comment was posted                                       | Pass      |
| Comment section, three vertical dots at the right   | Comment’s owner                                         | Functionality       | Clicking the icon triggers dropdown bootstrap component for edit and delete comment options  | Pass      |
|                                                     |                                                         | Style               | Hover effect working as expected.                                                            | Pass      |
| Edit option of dropdown component                   | Comment owner                                           | Functionality       | Clicking the option redirects the user to Edit comment section                               | Pass      |
| Delete option of dropdown component                 | Comment owner                                           | Functionality       | Clicking the option triggers a modal alert that asks for confirmation of the deletion        | Pass      |
| Add comment section                                 | Logged in user w/completed Profile                      | Functionality       | Clicking the submit button after entering the comment publishes it                           | Pass      |
| Add comment section                                 | Logged in user w/completed Profile                      | Functionality       | Clicking the submit button after not entering the comment triggers error alert               | Pass      |
| Comment section/Infinite scroll                     | All                                                     | Functionality       | Comment section features an infinite scroll display of comments                              | Pass      |

<br>[Back to top ⇧](#table-of-contents)

##### User Profile page testing

| Element                                                       | Users                              | Test                | Outcome                                                                                                                          | Pass/Fail |
| ------------------------------------------------------------- | ---------------------------------- | ------------------- | -------------------------------------------------------------------------------------------------------------------------------- | --------- |
| User Profile Main Info Panel                                  | All                                | Functionality/style | The content is displayed as expected                                                                                             | Pass      |
| User Profile Main Info Panel/computed data                    | Logged in user w/completed Profile | Functionality       | Clicking the “to Faves” or “Unfollow” button adjusts the number of followers or favorites on the respective profiles accordingly | Pass      |
| User Profile Main Info Panel/computed data                    | Logged in user w/completed Profile | Functionality       | The number of paintings matches the number of paintings the user has added to the gallery                                        | Pass      |
| User Profile Main Info Panel/three vertical dots at the right | Profile’s owner                    | Functionality       | Clicking the icon triggers dropdown bootstrap component for edit profile and change password options                             | Pass      |
|                                                               |                                    | Style               | Hover effect working as expected.                                                                                                | Pass      |
| Edit profile option of dropdown component                     | Profile’s owner                    | Functionality       | Clicking the option redirects the user to Edit profile page                                                                      | Pass      |
| Change password option of dropdown component                  | Profile’s owner                    | Functionality       | Clicking the option redirects the user to Change password page                                                                   | Pass      |
| Available artworks section                                    | All                                | Functionality       | The number of paintings displayed matches the calculated total                                                                   | Pass      |
| Available artworks section/Infinite scroll                    | All                                | Functionality       | Available artworks section features an infinite scroll display of profile’s owner paintings                                      | Pass      |
| Painting card                                                 | All                                | Functionality       | The same as on [Home Page](#home-page-testing)                                                                                   | Pass      |

<br>[Back to top ⇧](#table-of-contents)

##### Add painting page testing

| Element                             | Users                              | Test          | Outcome                                                                                                                     | Pass/Fail |
| ----------------------------------- | ---------------------------------- | ------------- | --------------------------------------------------------------------------------------------------------------------------- | --------- |
| Upload image                        | Logged in user w/completed Profile | Functionality | Clicking on the icon allows the user to upload their own painting image.                                                    | Pass      |
| Upload image                        | Logged in user w/completed Profile | Functionality | Validation occurs (alert message), when image size (width or height) is larger than 4096px or image weight is more than 2MB | Pass      |
| “Change the image” button           | Logged in user w/completed Profile | Functionality | The option appears if the image has already been uploaded. Clicking the button enables the upload of another image          | Pass      |
|                                     |                                    | Functionality | Validation occurs (alert message), if it is left empty.                                                                     | Pass      |
| Title input                         | Logged in user w/completed Profile | Functionality | Text can be entered into the field.                                                                                         | Pass      |
|                                     |                                    | Functionality | Validation occurs (alert message), if it is left empty.                                                                     | Pass      |
|                                     |                                    | Style         | Focus effect working as expected.                                                                                           | Pass      |
| Year crated input                   | Logged in user w/completed Profile | Functionality | Only number can be entered into the field.                                                                                  | Pass      |
|                                     |                                    | Functionality | Validation occurs (alert message), if it is left empty or number is out of range from 1000 to 9999                          | Pass      |
|                                     |                                    | Style         | Focus effect working as expected.                                                                                           | Pass      |
| Select Theme dropdown list          | Logged in user w/completed Profile | Functionality | Clicking the dropdown button displays a list of themes to choose from                                                       | Pass      |
|                                     |                                    | Functionality | Validation occurs (alert message), when no theme was chosen                                                                 | Pass      |
|                                     |                                    | Style         | Focus effect working as expected.                                                                                           | Pass      |
| Select Technique dropdown list      | Logged in user w/completed Profile | Functionality | Clicking the dropdown button displays a list of techniques to choose from                                                   | Pass      |
|                                     |                                    | Functionality | Validation occurs (alert message), when no technique was chosen                                                             | Pass      |
|                                     |                                    | Style         | Focus effect working as expected.                                                                                           | Pass      |
| Suggested price input               | Logged in user w/completed Profile | Functionality | Any symbols can be entered into the field.                                                                                  | Pass      |
|                                     |                                    | Functionality | Validation occurs (alert message), if it is left empty or user’s input is not a number.                                     | Pass      |
|                                     |                                    | Style         | Focus effect working as expected.                                                                                           | Pass      |
| Dimensions input (width and height) | Logged in user w/completed Profile | Functionality | Any symbols can be entered into the field.                                                                                  | Pass      |
|                                     |                                    | Functionality | Validation occurs (alert message), if it is left empty or user’s input is not a number.                                     | Pass      |
|                                     |                                    | Style         | Focus effect working as expected.                                                                                           | Pass      |

<br>[Back to top ⇧](#table-of-contents)

##### Update Painting page testing

| Element              | Users                              | Test          | Outcome                                                                 | Pass/Fail |
| -------------------- | ---------------------------------- | ------------- | ----------------------------------------------------------------------- | --------- |
| Update painting page | Logged in user w/completed Profile | Functionality | Prepopulated form containing all the painting's data is displayed       | Pass      |
| All other elements   | Logged in user w/completed Profile | Functionality | The same as for [Add painting page testing](#add-painting-page-testing) | Pass      |
|                      |                                    | Sytle         | The same as for [Add painting page testing](#add-painting-page-testing) | Pass      |

<br>[Back to top ⇧](#table-of-contents)

##### Compete Profile page testing

| Element                     | Users                                    | Test          | Outcome                                                                                      | Pass/Fail |
| --------------------------- | ---------------------------------------- | ------------- | -------------------------------------------------------------------------------------------- | --------- |
| “Change the image” button   | Authenticated, not completed profile yet | Functionality | Clicking on the button allows the user to upload their own profile image.                    | Pass      |
| “Change the image” button   | Authenticated, not completed profile yet | Functionality | Image upload is optional, given the availability of a default image                          | Pass      |
| Bio input                   | Authenticated, not completed profile yet | Functionality | Text can be entered into the field.                                                          | Pass      |
|                             |                                          | Functionality | Validation occurs (alert message), if it is left empty.                                      | Pass      |
|                             |                                          | Style         | Focus effect working as expected.                                                            | Pass      |
| Full name input             | Authenticated, not completed profile yet | Functionality | Text can be entered into the field.                                                          | Pass      |
|                             |                                          | Functionality | Validation occurs (alert message), if it is left empty.                                      | Pass      |
|                             |                                          | Style         | Focus effect working as expected.                                                            | Pass      |
| Home country input          | Authenticated, not completed profile yet | Functionality | Text can be entered into the field.                                                          | Pass      |
|                             |                                          | Functionality | Validation occurs (alert message), if it is left empty.                                      | Pass      |
|                             |                                          | Style         | Focus effect working as expected.                                                            | Pass      |
| Select Gender dropdown list | Authenticated, not completed profile yet | Functionality | Clicking the dropdown button displays a list of genders to choose from                       | Pass      |
|                             |                                          | Functionality | Validation occurs (alert message), when no gender was chosen                                 | Pass      |
|                             |                                          | Style         | Focus effect working as expected.                                                            | Pass      |
| Date of birth input         | Authenticated, not completed profile yet | Functionality | Clicking on the field opens a date picker calendar, allowing the selection of a desired date | Pass      |
| Date of birth input         | Authenticated, not completed profile yet | Functionality | Validation occurs (alert message), when no date was chosen or input is invalid               | Pass      |
| “Cancel” button             | Authenticated, not completed profile yet | Functionality | Redirects to the home page                                                                   | Pass      |
| “Save” button               | Authenticated, not completed profile yet | Functionality | Submits the data and redirects the profile page                                              | Pass      |

<br>[Back to top ⇧](#table-of-contents)

##### Update Profile page testing

| Element             | Users                              | Test          | Outcome                                                                       | Pass/Fail |
| ------------------- | ---------------------------------- | ------------- | ----------------------------------------------------------------------------- | --------- |
| Update profile page | Logged in user w/completed Profile | Functionality | Prepopulated form containing all the profile's data is displayed              | Pass      |
| All other elements  | Logged in user w/completed Profile | Functionality | The same as for [Compete Profile page testing](#compete-profile-page-testing) | Pass      |
|                     |                                    | Sytle         | The same as for [Compete Profile page testing](#compete-profile-page-testing) | Pass      |

<br>[Back to top ⇧](#table-of-contents)

##### Register page testing

| Element                                | Users           | Test          | Outcome                                                                                                                                                                                                             | Pass/Fail |
| -------------------------------------- | --------------- | ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- |
| Username input                         | Unauthenticated | Functionality | Text can be entered into the field. A sign beneath the field indicates that, once created, the username is uneditable.                                                                                              | Pass      |
| Password fields                        | Unauthenticated | Functionality | Text can be entered into the field.                                                                                                                                                                                 | Pass      |
|                                        |                 | Functionality | Validation occurs (highlighted field & pop-up message) if the field is left empty. Validate input is a valid password. Displays message if password is not valid. Displays message if both passwords are not equal. | Pass      |
| Password field/“eye” icon              | Unauthenticated | Functionality | Clicking on the icon toggles password visibility in both password fields simultaneously                                                                                                                             | Pass      |
|                                        |                 | Style         | Hover effect working as expected.                                                                                                                                                                                   | Pass      |
| Register button                        | Unauthenticated | Functionality | Clicking the button redirects to the Login page, a "Success" flash message is displayed                                                                                                                             | Pass      |
|                                        |                 | Style         | Hover effect working as expected.                                                                                                                                                                                   | Pass      |
| “Already have an account? Log in” link | Unauthenticated | Functionality | Clicking the link redirects to the Registration page.                                                                                                                                                               | Pass      |
|                                        |                 | Style         | Hover effect working as expected.                                                                                                                                                                                   | Pass      |

<br>[Back to top ⇧](#table-of-contents)

##### Change Password page testing

| Element                   | Users         | Test          | Outcome                                                                                                                                                                                                             | Pass/Fail |
| ------------------------- | ------------- | ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- |
| Password fields           | Authenticated | Functionality | Text can be entered into the field.                                                                                                                                                                                 | Pass      |
|                           |               | Functionality | Validation occurs (highlighted field & pop-up message) if the field is left empty. Validate input is a valid password. Displays message if password is not valid. Displays message if both passwords are not equal. | Pass      |
| Password field/“eye” icon | Authenticated | Functionality | Clicking on the icon toggles password visibility in both password fields simultaneously                                                                                                                             | Pass      |
|                           |               | Style         | Hover effect working as expected.                                                                                                                                                                                   | Pass      |
| “Save” button             | Authenticated | Functionality | Clicking the button redirects to the Login page, a "Success" flash message is displayed                                                                                                                             | Pass      |
|                           |               | Style         | Hover effect working as expected.                                                                                                                                                                                   | Pass      |
| “Cancel” button           | Authenticated | Functionality | Clicking the button redirects to the Profile page.                                                                                                                                                                  | Pass      |
|                           |               | Style         | Hover effect working as expected.                                                                                                                                                                                   | Pass      |

<br>[Back to top ⇧](#table-of-contents)

##### Login page testing

| Element                                     | Users           | Test          | Outcome                                                                                                  | Pass/Fail |
| ------------------------------------------- | --------------- | ------------- | -------------------------------------------------------------------------------------------------------- | --------- |
| Username input                              | Unauthenticated | Functionality | Username can be entered into the field                                                                   | Pass      |
|                                             |                 | Functionality | Validation occurs (warning message) if the username, password, or both are incorrect.                    | Pass      |
|                                             |                 | Style         | Focus effect working as expected.                                                                        | Pass      |
| Password input                              | Unauthenticated | Functionality | Password can be entered into the field.                                                                  | Pass      |
|                                             |                 | Functionality | Validation occurs (warning message) if the username, password, or both are incorrect.                    | Pass      |
|                                             |                 | Style         | Focus effect working as expected.                                                                        | Pass      |
| Password field/“eye” icon                   | Unauthenticated | Functionality | Clicking on the icon toggles password visibility                                                         | Pass      |
|                                             |                 | Style         | Hover effect working as expected.                                                                        | Pass      |
| Login button                                | Unauthenticated | Functionality | Clicking the button redirects to the Home page. A flash message about the successful login is displayed. | Pass      |
|                                             |                 | Style         | Hover effect working as expected.                                                                        | Pass      |
| “Don't have an account? Register now!” link | Unauthenticated | Functionality | Clicking the link redirects to the Registration page.                                                    | Pass      |
|                                             |                 | Style         | Hover effect working as expected.                                                                        | Pass      |

<br>[Back to top ⇧](#table-of-contents)

##### About page testing

| Element     | Users | Test          | Outcome                           | Pass/Fail |
| ----------- | ----- | ------------- | --------------------------------- | --------- |
| Page layout | All   | Functionality | The About page renders correctly. | Pass      |
|             |       | Style         | Style applied as expected.        | Pass      |

<br>[Back to top ⇧](#table-of-contents)

##### Deletion Warning Modal testing

| Element                  | Users                                                 | Test          | Outcome                                                                                                                                                                                       | Pass/Fail |
| ------------------------ | ----------------------------------------------------- | ------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- |
| "Delete Painting" button | Logged in user w/completed Profile (painting’s owner) | Functionality | After clicking the “Delete painting” button in the confirmation modal alert, the painting is deleted. A flash message confirms the deletion, and then the user is redirected to the home page | Pass      |
|                          |                                                       | Functionality | After clicking on “Cancel" button it stays at the same painting detail page                                                                                                                   | Pass      |
| "Delete Comment" button  | Logged in user w/completed Profile (painting’s owner) | Functionality | After clicking the “Delete comment” button in the confirmation modal alert, the comment is deleted. A flash message then appears to confirm the deletion, with no redirection occurring.      | Pass      |
|                          |                                                       | Functionality | After clicking on “Cancel button it stays at the same painting detail page”                                                                                                                   | Pass      |

<br>[Back to top ⇧](#table-of-contents)

##### Modal alerts testing

| Element                        | Users                                     | Test          | Outcome                                                                                                                       | Pass/Fail |
| ------------------------------ | ----------------------------------------- | ------------- | ----------------------------------------------------------------------------------------------------------------------------- | --------- |
| "Complete your profile" button | Logged in user, not completed profile yet | Functionality | Clicking the "Complete your profile" button in a [ModalAlert](#modal-alert) navigates the user to the Profile Completion page | Pass      |

<br>[Back to top ⇧](#table-of-contents)

##### Error And Warning alerts testing

| Element                                                                        | Users            | Test          | Outcome                                                                                                                                                                                   | Pass/Fail |
| ------------------------------------------------------------------------------ | ---------------- | ------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- |
| Registration page                                                              | Unregistered     | Functionality | If any field is left empty or filled in incorrectly, clicking the Register button both triggers a corresponding warning alert and displays a 'Registration error' flash message           | Pass      |
|                                                                                |                  | Style         | All alert messages are displayed within a rectangle with the background color #fff3cd, known as Cornsilk                                                                                  | Pass      |
|                                                                                |                  | Style         | The flash message is displayed within a rectangle with the background color #bd362f, known as Persian red                                                                                 | Pass      |
|                                                                                |                  | Functionality | If all fields of the form are completed correctly, clicking the Register button triggers the display of a “Successful registration” flash message                                         | Pass      |
|                                                                                |                  | Style         | The flash message is displayed within a rectangle with the background color #51a351, known as Pigment green                                                                               | Pass      |
| Login page                                                                     | Unauthenticated  | Functionality | If any field is left empty or filled in incorrectly, clicking the Log in button both triggers a corresponding warning alert and displays a 'Login error' flash message                    | Pass      |
|                                                                                |                  | Style         | All alert messages are displayed within a rectangle with the background color #fff3cd, known as Cornsilk                                                                                  | Pass      |
|                                                                                |                  | Style         | The flash message is displayed within a rectangle with the background color #bd362f, known as Persian red                                                                                 | Pass      |
|                                                                                |                  | Functionality | If all form fields are correctly completed, clicking the Log in button displays a 'Successful login' flash message, including the profile owner's name                                    | Pass      |
| Change password page                                                           | Profile’s owner  | Functionality | If any field is left empty or filled in incorrectly, clicking the Save button both triggers a corresponding warning alert and displays a 'Error! Failed to change password' flash message | Pass      |
|                                                                                |                  | Style         | All alert messages are displayed within a rectangle with the background color #fff3cd, known as Cornsilk                                                                                  | Pass      |
|                                                                                |                  | Style         | The flash message is displayed within a rectangle with the background color #bd362f, known as Persian red                                                                                 | Pass      |
|                                                                                |                  | Functionality | If all fields of the form are completed correctly, clicking the Save button triggers the display of a “Success!Your password has been successfully changed.” flash message                | Pass      |
|                                                                                |                  | Style         | The flash message is displayed within a rectangle with the background color #51a351, known as Pigment green                                                                               | Pass      |
|                                                                                |                  | Style         | The flash message is displayed within a rectangle with the background color #51a351, known as Pigment green                                                                               | Pass      |
| Comment section of Painting details page, Submit button                        | Logged in users  | Functionality | If Comment field is left empty, clicking the Submit button triggers a 'Error! Failed to create a comment' flash message                                                                   | Pass      |
|                                                                                |                  | Style         | The flash message is displayed within a rectangle with the background color #bd362f, known as Persian red                                                                                 | Pass      |
|                                                                                |                  | Functionality | If Comment field is completed, clicking the Submit button displays a 'Success! The Comment was created...' flash message                                                                  | Pass      |
|                                                                                |                  | Style         | The flash message is displayed within a rectangle with the background color #51a351, known as Pigment green                                                                               | Pass      |
| Comment section of Painting details page, Delete Comment button in Modal Alert | Comment’s owner  | Functionality | Clicking the Delete Comment button triggers a 'Success! The Comment was deleted…' flash message                                                                                           | Pass      |
|                                                                                |                  | Style         | The flash message is displayed within a rectangle with the background color #51a351, known as Pigment green                                                                               | Pass      |
| “Add painting”, “Edit painting” pages                                          | Logged in users  | Functionality | For any field left empty or filled in incorrectly (including the image section), clicking the create/update button triggers a corresponding warning alert                                 | Pass      |
|                                                                                |                  | Style         | All alert messages are displayed within a rectangle with the background color #fff3cd, known as Cornsilk                                                                                  | Pass      |
|                                                                                |                  | Functionality | If all fields of the form are completed correctly, clicking the create/update button triggers the display of a “Success” flash message                                                    | Pass      |
|                                                                                |                  | Style         | The flash message is displayed within a rectangle with the background color #51a351, known as Pigment green                                                                               | Pass      |
| Painting Details page, Delete Painting button in Modal Alert                   | Painting’s owner | Functionality | Clicking the Delete Painting button triggers a 'Deleted! The Painting was successfully deleted…' flash message                                                                            | Pass      |
|                                                                                |                  | Style         | The flash message is displayed within a rectangle with the background color #51a351, known as Pigment green                                                                               | Pass      |
| “Complete profile”, “Edit profile” pages                                       |                  | Functionality | For any field left empty or filled in incorrectly (including the image section), clicking the save button triggers a corresponding warning alert                                          | Pass      |
|                                                                                |                  | Style         | All alert messages are displayed within a rectangle with the background color #fff3cd, known as Cornsilk                                                                                  | Pass      |
|                                                                                |                  | Functionality | If all fields of the form are completed correctly, clicking the save button triggers the display of a “Success” flash message                                                             | Pass      |
|                                                                                |                  | Style         | The flash message is displayed within a rectangle with the background color #51a351, known as Pigment green                                                                               | Pass      |

<br>[Back to top ⇧](#table-of-contents)

##### 404 Error page testing

To test the triggering of custom Error 404 page, a link to the homepage was used as the base for constructing triggering links. The link consists of the domain (herokuapp.com) and the subdomain name, which is the project's name (i.e., `pp-5-art-showcase-1029cf70a456.herokuapp.com`):

| Endpoint description                                       | URL pattern          | Users | Triggering result | Error status / message |
| ---------------------------------------------------------- | -------------------- | ----- | ----------------- | ---------------------- |
| Random set of symbols                                      | /nkjw6q3’#as/dF      | All   | Page not found    | 404                    |
| Endpoint with a valid URL, but with an invalid profile ID  | /profiles/1000       | All   | Page not found    | 404                    |
|                                                            | /profiles/1000/edit  | All   | Page not found    | 404                    |
| Endpoint with a valid URL, but with an invalid painting ID | /paintings/1000      | All   | Page not found    | 404                    |
|                                                            | /paintings/1000/edit | All   | Page not found    | 404                    |

<br>[Back to top ⇧](#table-of-contents)

##### Infinite scroll testing

| Element                                   | Users | Test          | Outcome                                           | Pass/Fail |
| ----------------------------------------- | ----- | ------------- | ------------------------------------------------- | --------- |
| Home page                                 | All   | Functionality | The list of paintings features infinite scrolling | Pass      |
| Faves page                                | All   | Functionality | The list of paintings features infinite scrolling | Pass      |
| Watchlist                                 | All   | Functionality | The list of paintings features infinite scrolling | Pass      |
| Profile page (AVAILABLE ARTWORKS section) | All   | Functionality | The list of paintings features infinite scrolling | Pass      |
| Painting details page (Comment section)   | All   | Functionality | The list of comments features infinite scrolling  | Pass      |

Back to top ⇧

## Technologies Used

### Languages

- [JavaScript](https://www.javascript.com/) - A dynamic programming language that's used for web development
- [HTML5](https://en.wikipedia.org/wiki/HTML5) - A markup language used for structuring and presenting content
- [CSS3](https://en.wikipedia.org/wiki/CSS) - A style sheet language used for describing the presentation of a document

### Libraries and Frameworks

- [React](https://reactjs.org/) - A JavaScript library for building user interfaces.
- [Bootstrap](https://getbootstrap.com/) - The world's most popular front-end open source toolkit, featuring Sass variables and mixins, a responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.
- [Font Awesome](https://fontawesome.com/) - A collection of icons and symbols implemented as a font, allowing for easy styling and integration using CSS.
- [Google Fonts](https://fonts.google.com/) - A service that offers a wide range of free fonts that can be easily embedded in a website through CSS.

### NPM Packages / Dependencies

- [axios](https://www.npmjs.com/package/axios) - A promise-based HTTP client for the browser and Node.js.
- [react-datepicker](https://www.npmjs.com/package/react-datepicker) - A simple and reusable datepicker component for React.
- [react-bootstrap](https://react-bootstrap.github.io/) - A package that provides Bootstrap components built with React.
- [react-dom](https://reactjs.org/docs/react-dom.html) - Serves as the entry point to the DOM and server renderers for React.
- [react-infinite-scroll-component](https://www.npmjs.com/package/react-infinite-scroll-component) - A component to make infinite scrolling for React applications easier.
- [react-notifications](https://www.npmjs.com/package/react-notifications) - Component to create and display notifications in React applications.
- [react-router-dom](https://www.npmjs.com/package/react-router-dom) - The DOM bindings for React Router, which includes the router components for websites.

### Other Tools

- [Favicon](https://favicon.io/) - used to create the favicon.
- [VSCode](https://code.visualstudio.com/) - used to create and edit the website.
- [GitHub](https://github.com/) - used to host and deploy the website as well as manage the project.
- [Colors](https://coolors.co/) - the super fast color palettes generator.
- [Google Chrome DevTools](https://developer.chrome.com/docs/devtools/) - used to test responsiveness and debug.
- [Responsive Design Checker](https://www.responsivedesignchecker.com/) - used to test responsiveness.
- [Balsamiq](https://balsamiq.com/) - a rapid low-fidelity UI wireframing tool.
- [Heroku](https://dashboard.heroku.com) - used to deploy the website
- [JSHint Validation](https://jshint.com/) - used to validate JavaScript code
- **ESLint** - integrates the ESLint tool into VS Code, offering comprehensive linting capabilities for JavaScript and JSX.
- **Prettier** - integrates the Prettier code formatter into VS Code, which formats JavaScript and JSX code according to a specified style.
- [Canva](https://www.canva.com/) - free-to-use online graphic design tool, was used to logo and more.

[Back to top](#contents)

## Known Bugs

[Back to top](#contents)

- Although registering new users poses no issue across devices, I've encountered a problem with logging in on iOS devices—a problem not present on other platforms. The configuration settings seem appropriately adjusted for a cross-origin setup with JWT authentication. However, iOS enforces stricter cookie policies, particularly concerning cross-site tracking and third-party cookies. Unfortunately, due to the time constraints associated with this project, I haven't been able to address this issue yet. I plan to tackle the login challenges on iOS devices as a future task and to identify the factors affecting cross-origin and cross-device functionality.

- It was discovered that when rendering project pages, a warning consistently appears in the console related to the use of findDOMNode, which is deprecated in React's StrictMode: "Warning: findDOMNode is deprecated..."

![ArtShowcase Warning: findDOMNode is deprecated image](/src/assets/readme_images/findDOMNode_depreciated.png)

- Although it does not affect site functionality, this deprecation warning may occur when using certain third-party libraries or older React APIs that internally rely on findDOMNode. The issue seems to stem from the use of OverlayTrigger or a similar component that internally relies on findDOMNode. To resolve this, it is needed to update the component to directly use a ref on the element I wish to reference, as suggested by the warning. However, since OverlayTrigger comes from a React Bootstrap, I'll need to ensure I'm using the latest version of the library that's compatible with the current React version and its strict mode requirements. In this project, I do not do this because I work with the library and package versions that were recommended in the walkthrough project.

## Downgrading react and react-dom

To avoid compatibily issues with React Router Library - "5.3.0" which was utilized in this project, a previous versions of react and react-dom, i. e. `"^17.0.2"` were installed instead of `react@18 react-dom@18`. The steps were as follows:

- Create a New React App:
  `npx create-react-app .`
  This command creates a new React application in a root folder of a project with the latest version of React.

- Uninstall the current versions of react and react-dom:
  `npm uninstall react react-dom`

- To avoid dependency conflict between the downgradeded version of React project and the version required by `@testing-library/react@13.4.0`, uninstall it using the command:
  `npm uninstall @testing-library/react`

- Install the specific version of react and react-dom:
  `npm install react@17.0.2 react-dom@17.0.2`

- Install downgraded version `@testing-library/react` compatible with React 17:
  `npm install @testing-library/react@^12.0.0`

- Ensure React 17 is installed. Verify your React version in package.json:

  ```
  "dependencies": {
  "react": "^17.0.2",
  "react-dom": "^17.0.2",
  ...
  }
  ```

- Manually adjust index.js to use ReactDOM.render instead of ReactDOM.createRoot as shown below:

  ```
  ReactDOM.render(
  <React.StrictMode>
  <App />
  </React.StrictMode>,
  document.getElementById('root')
  );
  ```

This will be fully compatible with `react-router-dom@5.3.0`

<br>[Back to top ⇧](#table-of-contents)

## Deployment To Heroku

- Initially, a new repository named PP_5_art_showcase was created on GitHub.
- After launching a new React project in VS Code on my local machine and [downgrading it](#downgrading-react-and-react-dom), I added it to the local repository using the following commands:
  ```
  git init
  git add
  git commit -m "Initial commit"
  ```
- To push the local repository to the remote GitHub repository, the following commands were executed:
  ```
  git remote add origin https://github.com/gennadiy-gaysha/PP_5_art_showcase.git
  git branch -M main
  git push -u origin main
  ```

It's time to launch our project on Heroku, making it publicly accessible.

- Head over to [Heroku's platform](https://www.heroku.com).
- Initiate a new app by clicking 'New app.'
- Provide the necessary details.
- Confirm the information and click 'Create app.'

Next, establish a connection between the Heroku app and the GitHub repository:

- Go to the 'Deploy' section.
- Select 'GitHub' as the deployment method.
- Locate your repository using the search feature.
- Hit 'Connect' to link the repository.

Now, it is set to make the project live:

- You'll have the option to enable 'Automatic Deploys' or opt for 'Deploy Branch.'
- Press 'Deploy Branch' and let the build process complete.
- Once done, your React application is live and running on Heroku.

<br>[Back to top ⇧](#table-of-contents)

## Cloning and Forking Repository

To make changes to the code without affecting the original version stored in the
repository you may create a local copy of the repository, through cloning and
forking methods.

### Cloning the Repository:

- Install Git on your local machine, if it is not already installed.
- Navigate to the repository you want to clone in a web browser.
- Click the "Clone or download" button and copy the repository's
  URL (`https://github.com/gennadiy-gaysha/PP_5_art_showcase`) to your clipboard.
- Open a terminal or command prompt on your local machine.
- Change to the directory where you want to clone the repository.
- Type the command
  `git clone https://github.com/gennadiy-gaysha/PP_5_art_showcase.git`
  and press enter.
- Wait for the repository to download to your local machine.
- Once the repository is downloaded, you can make changes to the code and use
  Git to manage and sync those changes with the original repository.

<br>[Back to top ⇧](#table-of-contents)

- ### Forking the Repository:

- Navigate to the repository you want to fork in a web browser.
- Click the "Fork" button in the top right corner of the page.
- Select your account as the destination for the forked repository.
- Wait for the repository to be forked to your account.
- Once the repository is forked, you can clone it to your local machine using
  the steps above for cloning a repository.
- You can make changes to the code and commit those changes to your forked
  repository. If you want to contribute those changes back to the original
  repository, you can create a pull request from your forked repository to the
  original repository.

- These instructions should help you create a local copy of a code repository
  using both cloning and forking methods, allowing you to make changes to the
  code and collaborate with other developers on the project.

<br>[Back to top ⇧](#table-of-contents)

## Credits

### Code

This project draws significant inspiration from the [Code Institute](https://codeinstitute.net/) walk-through project, Moments, and has undergone extensive modifications.

The ArtShowcase project incorporated and adapted several files originally from the Moments project, including:

- CurrentUserContext.js
- useRedirect.js
- axiosDefault.js
- useClickOutsideToggle.js

Additionally, to tailor the project to the specific requirements of ArtShowcase, inspiration was taken or certain functionalities were adapted from these files:

- LogInForm.js
- RegistrationForm.js
- Comment.js
- CommentCreateForm.js
- CommentEditForm.js
- UserPasswordForm.js
- Asset.js
- utils.js
- Avatar.js

### Media

- ArtShowcase brand and favicon images were created
  on [Canva](https://www.canva.com/) by the developer.
- Background image was taken
  from [@lifeforstock](https://www.freepik.com/author/lifeforstock)

- Sample paintings images paintors images and About page image were taken from:
  - [KELLEPICS](https://pixabay.com/users/kellepics-4893063/)
  - [1tamara2](https://pixabay.com/users/1tamara2-15516491/)
  - [2210273](https://pixabay.com/users/2210273-2210273/)
  - [ThomasWolter](https://pixabay.com/users/thomaswolter-92511/)
  - [Layers](https://pixabay.com/users/layers-245306/)
  - [ZAIDoopro](https://pixabay.com/users/zaidoopro-10396895/)
  - [Martina_Bulkova](https://pixabay.com/users/martina_bulkova-6772107/)
  - [webdepp](https://pixabay.com/users/webdepp-723434/)
  - [Van3ssa\_](https://pixabay.com/users/van3ssa_-13670757/)

<br>[Back to top ⇧](#table-of-contents)

## Acknowledgements.

- I extend heartfelt thanks to my partner for her constant love, support, and motivation during this project. Her faith in me propelled me forward, and I couldn't have achieved this without her.
- To my daughter Anna, who eagerly took on the role of the website's initial beta tester. Her insights and suggestions have been crucial to refining the project.
- I'm grateful to my mentor, Marcel, for his invaluable advice and direction.
- Lastly, my appreciation goes to the [Code Institute](https://codeinstitute.net/) and the wonderful Slack community for their unwavering assistance and for equipping me with the vital skills and tools necessary to complete this project successfully.

<br>[Back to top ⇧](#table-of-contents)
