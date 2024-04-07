# **ART SHOWCASE** - Advanced Front End <br>React + Django REST framework

![ART SHOWCASE responsive design](/src/assets/readme_images/responsive.png)

The premier online destination for emerging artists of modern paintings and the vibrant community that cherishes them. **ART SHOWCASE**, is not just about observation; it's about connection, discussion, and appreciation. The platform is meticulously designed to serve as a canvas for artists to exhibit their creations and engage with an enthusiastic audience keen on exploring the realms of contemporary art.

**ART SHOWCASE** is more than just a gallery; it's a dynamic ecosystem where artists can freely share their masterpieces, discuss probable prices, and receive feedback from art lovers worldwide. With a focus on modern paintings, the platform celebrates the diversity and creativity of artists at various stages of their careers. Whether you're an artist looking to gain visibility or an art enthusiast eager to discover new talents and trends, **ART SHOWCASE** offers a unique and enriching experience.

Join us as we journey through the captivating world of modern art, bringing artists and art enthusiasts closer together than ever before.

You can view the live site here - <a href="https://pp-5-art-showcase-1029cf70a456.herokuapp.com/" target="_blank" rel="noopener">ART SHOWCASE</a>

You can view the live API here - <a href="https://pp-5-drf-api-cb9dad6bdfdf.herokuapp.com/" >ART SHOWCASE</a>

You can view the front-end README.md here - <a href="https://github.com/gennadiy-gaysha/PP_5_art_showcase">ART SHOWCASE Front-End README</a>

You can view the back-end README.md here - <a href="https://github.com/gennadiy-gaysha/PP_5_rest_api">ART SHOWCASE Back-End README</a>

## Table of Contents

1. [**User Experience UX**](#user-experience-ux)

- 1.1. [Project Goals](#project-goals)

  - 1.1.1. [Epic: Admin Management](#epic-admin-management)
  - 1.1.2. [Epic: Navigation](#epic-navigation)

  - 1.1.3 [Epic: "Painting Management"](#epic-painting-management)
  - 1.1.4 [Epic: Search and Filtering](#epic-search-and-filtering)
  - 1.1.5 [Epic: User and User Profile Management](#epic-user-and-user-profile-management)
  - 1.1.6 [Epic: Favourite Profiles and Watchlist Management](#epic-favourite-profiles-and-watchlist-management)
  - 1.1.7 [Epic: Comments Management](#epic-comments-management)
  - 1.1.8 [Epic: Error Handling and Notification Management](#epic-error-handling-and-notification-management)

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
  - 3.5.1. [Filter area](#1-filters-area)
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
- 4.2. [Code validation](#code-validation)
  - 4.2.1. [HTML](#html)
  - 4.2.2. [CSS](#css)
  - 4.2.3. [JavaScript (JS) and JSX (JavaScript XML)](#javascript-js-and-jsx-javascript-xml)
- 4.3. [Accessibility](#accessibility)
- 4.4. [Tools testing](#tools-testing)
- 4.5. [Manual testing](#manual-testing)
  - 4.5.1. [Browser Compatibility](#browser-compatibility)
  - 4.5.2. [Testing Style And Functionality](#testing-style-and-functionality)

## User Experience (UX)

### Project Goals

The objective of the project is to meet a series of specific targets, which are categorized into eight main epics. These epics are Admin Management, Painting Management, Search and Filtering, User and User Profile Management, Favourite Profiles and Watchlist Management, Comments Management, and Error Handling. They each cover different facets of the ART SHOWCASE application. The project's goals are organized in a way to tackle particular needs associated with each epic, facilitating a systematic and effective development of the application.

#### Epic: "Admin Management"

- Develop a comprehensive system for user management that includes signing up, building and maintaining user profiles, ensuring secure sign-in and sign-out processes, and facilitating password modifications. This system aims to encompass all necessary aspects to provide a secure and user-friendly experience.
- Develop a capable system for admin to manage painting content, which includes capabilities for adding, updating, and removing paintings, along with overseeing the moderation of content.
- Introduce a feature for users to curate lists of their preferred artists and artworks, enabling easy access and organization of their favorites.
- Implement a system within the admin dashboard for the efficient oversight and arrangement of user comments, improving overall management and control.

#### Epic: Navigation

- Design a clear and intuitive navigation menu that allows users to effortlessly find and access different sections of the site, such as the Home page (gallery), Faves and Watchlist, user profiles, etc.
- Implement a responsive search bar and filters, enabling quick searches for paintings, artists, or specific content to enhance usability.
- Ensure the website's navigation framework is adaptive, varying based on the authentication status and permission levels of the user.

#### Epic: "Painting Management"

- Introduce an infinite scrolling feature for paintings to enhance the browsing experience, allowing users to continuously explore artwork without interruption.
- Facilitate a seamless user interface that allows users to effortlessly access and read details about each painting, prioritizing a smooth user experience.
- Add a comprehensive "About" page to the website that provides users with deep insights into the site's purpose, objectives, and the intended audience, ensuring visitors have a clear understanding of what the site is about and whom it serves.
- Implement a user-friendly feature for the addition of new paintings, streamlining the process for quick and efficient updates.
- Provide capabilities for authorized users to edit and remove paintings, ensuring effective content management and quality control.

#### Epic: Search and Filtering

- Introduce a search function that allows users to locate paintings by title or the artist's name, facilitating quick access to relevant information.
- Organize paintings into categories such as Theme, Technique, and Orientation, and allow sorting by price to help users easily find what they're looking for.
- Show the count of paintings found or filtered, providing users with a clear understanding of the search or filter results.

#### Epic: User and User Profile Management

- Facilitate an efficient and straightforward process for new users to sign up, ensuring the account registration system is user-friendly.
- Deploy a secure system for logging in and logging out, safeguarding user accounts and their data.
- Offer an easy-to-use option for users to update their passwords, enhancing account security.
- Require that newly registered users complete their profile details, helping to foster a community where members can learn about one another.
- Allow users to access and modify their own profiles, giving them control over their personal information and preferences.

#### Epic: Favourite Profiles and Watchlist Management

- Implement personalization options that let users add artworks to a watchlist and compile a collection of favorite artists' paintings, fostering greater user involvement and interaction within the community.
- Provide functionality for users to easily remove paintings from their watchlist and "unsubscribe" from their selected favorite artists, ensuring flexibility and control over their preferences.

#### Epic: Comments Management

- Introduce features that enable users to leave comments on artworks, boosting user engagement and fostering interactions within the community.
- Provide users with the capability to edit and delete their own comments, ensuring they have control over their contributions.
- Allow users to view comments from others, enabling them to participate in discussions and share insights.

#### Epic: Error Handling and Notification Management

- Develop a strong and intuitive error management system aimed at improving the user experience across the platform.
- Create customized error page for "404 Not Found" page, ensuring it offers clear, helpful instructions or reassurance to guide users effectively through any unexpected issues.
- Provide immediate and informative feedback through alert messages for users who encounter errors while filling out forms on the site, including but not limited to registration, login, profile creation/editing, and painting submission/editing forms, thereby ensuring users feel supported and well-informed during their site interactions.

<br>[Back to top ⇧](#table-of-contents)

### User Stories

Before initiating the React-based frontend portion of the project, I developed a comprehensive set of 44 user stories to meet the user requirements. Additionally, for the backend, 3 user stories for Admin were created and implemented to allow greater flexibility in database manipulation and for frontend testing purposes. These user stories were subsequently transferred to the Issues and Projects section (Kanban board) of the GitHub repository. Below is a table where all the mentioned user stories are categorized under their respective epics:

| No  | Title                              | User Story                                                                                                                                                                                                                                                                                                               | Epic                                        |
| --- | ---------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------- |
| 1   | Platform Content Oversight         | As a site admin I can manage paintings, profile and comments within the platform so that I can ensure the content meets the community standards, maintain a high quality of user experience, and address any issues promptly to keep the platform safe and engaging for all users.                                       | Admin Management                            |
| 2   | Account Removal Authority          | As a site admin, I can delete a user's profile so that I can remove accounts that violate our community guidelines or terms of service, ensuring a safe and respectful environment for all users.                                                                                                                        | Admin Management                            |
| 3   | About Page Management              | As a site admin, I can edit the About page so that I can ensure the information remains accurate and up-to-date, providing visitors with a clear understanding of the site's mission, values, and the community it serves.                                                                                               | Admin Management                            |
| 4   | Navbar Access                      | As a user I can view a navbar from every page so that I can navigate easily between pages.                                                                                                                                                                                                                               | Navigation                                  |
| 5   | Quick Navigation                   | As a user I can navigate through pages quickly so that I can view content seamlessly without page refresh.                                                                                                                                                                                                               | Navigation                                  |
| 6   | Direct Profile Access Via Avatar   | As a user, I can easily navigate to other users' profile pages by clicking on their avatar so that I can view their public information, artworks, and interests, fostering community engagement and connection among users.                                                                                              | Navigation                                  |
| 7   | Auth Options                       | As a logged out user I can see sign in and sign up options so that I can sign in/sign up.                                                                                                                                                                                                                                | Navigation                                  |
| 8   | Logout Access                      | As a logged in user, I can see a logout link so that I can securely exit my session, ensuring my account remains protected and my session is properly closed.                                                                                                                                                            | Navigation                                  |
| 9   | Footer Links                       | As a user, I can view a footer on every page so that I can access the site owner's social media pages.                                                                                                                                                                                                                   | Navigation                                  |
| 10  | Icon Tooltip                       | As a user, I want to see tooltips for any active icons that depend on my user and profile status before clicking on them, so I can make informed decisions about interacting with features based on my current capabilities and restrictions, thereby enhancing my navigational experience and engagement with the site. | Navigation                                  |
| 11  | Artwork Browsing                   | As a user, I can see a paintings page where all the paintings or filtered paintings are displayed, so that I can browse through a comprehensive collection of artworks easily, enhancing my exploration and discovery of new art.                                                                                        | Painting Management                         |
| 12  | Infinite Scrolling                 | As a user I can keep scrolling through the paintings on the site, that are loaded for me automatically so that I don't have to click on "next page.                                                                                                                                                                      | Painting Management                         |
| 13  | Painting Details                   | As a user I can view the details of a single painting so that I can learn more about it.                                                                                                                                                                                                                                 | Painting Management                         |
| 14  | Comments and Information           | As a user I can view the painting page so that I can read the comments about the painting, and get familiar with such details as 'Artist name', 'Painting title', 'Year created', 'Technique', 'Dimensions' and suggested price.                                                                                         | Painting Management                         |
| 15  | Create Artwork                     | As a logged in user I can create painting so that I can share my artwork with the world.                                                                                                                                                                                                                                 | Painting Management                         |
| 16  | Edit Artwork                       | As a painting owner I can edit my painting parameters so that I can make corrections or update my painting details after they were created.                                                                                                                                                                              | Painting Management                         |
| 17  | About Page Access                  | As a user I can view the About page so that I can stay informed about the mission, and understand the platform's purpose and offerings.                                                                                                                                                                                  | Painting Management                         |
| 18  | Title and Artist Search            | As a user, I can search for paintings by Title or Artist Name, so that I can find the paintings and user profiles I am most interested in.                                                                                                                                                                               | Search and Filtering                        |
| 19  | Filter Application                 | As a user, I can apply a set of filters, such as 'Painting Orientation', 'Technique', 'Theme' and 'Price' based on my preferences so that I can narrow down the displayed artworks.                                                                                                                                      | Search and Filtering                        |
| 20  | Search Results Count               | As a user, I can see not only the filtered paintings but also the number of paintings in the search result, so that I have a clear understanding of the breadth of options available within my search criteria, enhancing my decision-making process.                                                                    | Search and Filtering                        |
| 21  | One-Click Reset                    | As a user, I can easily reset filters with a single click so that I can quickly start a new search or explore different categories without manually removing each filter, enhancing my browsing experience and efficiency on the platform.                                                                               | Search and Filtering                        |
| 22  | Persistent Filter Choices          | As a user, I can my filter selections on the Paintings Page saved when navigating away and returning, so that it ensures a seamless browsing experience without redoing my choices.                                                                                                                                      | Search and Filtering                        |
| 23  | Account Creation                   | As a user I can create a new account so that I can access all the features for registered users.                                                                                                                                                                                                                         | User and User Profile Management            |
| 24  | User Login                         | As a user I can log in to the app so that I can access functionality for logged in users.                                                                                                                                                                                                                                | User and User Profile Management            |
| 25  | Login Status Indicator             | As a user I can tell if I am logged in or not so that I can log in if I need to.                                                                                                                                                                                                                                         | User and User Profile Management            |
| 26  | Session Persistence                | As a user I can maintain my logged-in status until I choose to log out so that my user experience is not compromised.                                                                                                                                                                                                    | User and User Profile Management            |
| 27  | Avatar Visibility                  | As a user I can view user's avatars so that I can easily identify users of the application.                                                                                                                                                                                                                              | User and User Profile Management            |
| 28  | Artist Profile Viewing             | As a user I can view other artists' profiles so that I can see their paintings and learn more about them.                                                                                                                                                                                                                | User and User Profile Management            |
| 29  | Artist Insights                    | As a user I can view data and statistics about a specific artist such as: bio, home country, gender, date of birth, as well as number of of paintings, followers and favourite artists so that I can learn more about them.                                                                                              | User and User Profile Management            |
| 30  | Artist's Artwork Gallery           | As a user I can view all the paintings by a specific artist so that I can catch up on their latest artworks, or decide I want to follow them.                                                                                                                                                                            | User and User Profile Management            |
| 31  | Profile Customization              | As a logged in user I can complete/edit my profile so that I can change my profile image, bio and other details.                                                                                                                                                                                                         | User and User Profile Management            |
| 32  | Password Update                    | As a logged in user with completed profile I can update my password so that I can keep my profile secure.                                                                                                                                                                                                                | User and User Profile Management            |
| 33  | Complete Profiles for Active Users | As a user I can see completed profiles of active users who display their paintings or leave comments so that I can access more context about their contributions and foster deeper community engagement.                                                                                                                 | User and User Profile Management            |
| 34  | Password Visibility                | As a user I can have an option to reveal or hide my password on any appropriate form so that I can ensure accuracy when entering my password, enhancing both security and usability.                                                                                                                                     | User and User Profile Management            |
| 35  | Adding paintings to Watchlist      | As a logged in user with completed profile I can add a painting to my watchlist so that I can observe it later, and show that I am not indifferent to this painting.                                                                                                                                                     | Favourite Profiles and Watchlist Management |
| 36  | Following/unfollowing Artists      | As a logged in user with completed profile I can follow and unfollow other artists so that I can see and remove paintings by specific artist in my Faves feed.                                                                                                                                                           | Favourite Profiles and Watchlist Management |
| 37  | Removing from Watchlist            | As a logged in user with completed profile, I can remove a painting from my watchlist so that I can keep my list updated with only the artworks that currently interest me, ensuring a personalized and clutter-free browsing experience.                                                                                | Favourite Profiles and Watchlist Management |
| 38  | Reading Comments                   | As a user I can read comments on painting so that I get informed what other artists think about the painting.                                                                                                                                                                                                            | Comments Management                         |
| 39  | Comment Timelines                  | As a user I can see how long ago a comment was made so that I know how old a comment is.                                                                                                                                                                                                                                 | Comments Management                         |
| 40  | Infinite Comment Scrolling         | As a user I can keep scrolling through the comments on the painting page, that are loaded for me automatically so that I don't have to click on "next page".                                                                                                                                                             | Comments Management                         |
| 41  | Commenting on Artworks             | As a logged in user with completed profile I can add comments to a painting so that I can share my thoughts about the artwork.                                                                                                                                                                                           | Comments Management                         |
| 42  | Editing Comments                   | As an owner of a comment I can edit my comment so that I can fix or update my existing comment.                                                                                                                                                                                                                          | Comments Management                         |
| 43  | Deleting Comments                  | As an owner of a comment I can delete my comment so that I can control removal of my comment from the application.                                                                                                                                                                                                       | Comments Management                         |
| 44  | Error Messaging                    | As a user I can receive clear error messages when a page I'm looking for is not found so that I understand what went wrong and feel guided on what to do next.                                                                                                                                                           | Error Handling and Notificationg Management |
| 45  | Form Error Feedback                | As a user I can receive immediate and informative feedback when I encounter errors while filling out forms on the site so that I can understand exactly what needs to be corrected without feeling frustrated or lost.                                                                                                   | Error Handling and Notificationg Management |
| 46  | Success Notifications              | As a user I can receive a success notification when I successfully complete the form so that I am assured my changes have been saved and can confidently navigate away from the form.                                                                                                                                    | Error Handling and Notificationg Management |
| 47  | Consistent Alert Handling          | As a user I can see that error alerts and success messages are handled uniformly across the platform so that I have a consistent experience and can easily understand feedback from the system.                                                                                                                          | Error Handling and Notificationg Management |

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

#### **1. Filter area:**

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

### Code validation

#### HTML

The HTML code of the project's home page was checked for syntax accuracy using the [W3C Markup Validator](https://validator.w3.org/) service, guaranteeing no syntax errors were present.

![ArtShowcase HTML Validation Home image](/src/assets/readme_images/testing/HTML_validation_home.png)

When trying to check another project's pages, 404 error occured:

![ArtShowcase HTML Validation 404 Error image](/src/assets/readme_images/testing/HTML_validation_404.png)

The inability of the W3C Validator to access specific routes in this React application is attributed to the nature of Single Page Application (SPA) Routing. Like many modern web applications built with frameworks such as React, this app employs client-side routing. While users perceive that they are navigating between different pages, the transitions are actually managed by JavaScript, which dynamically handles navigation and content rendering without real page reloads. However, for an external service like the W3C Validator to directly access a particular route, the server's configuration plays a crucial role. The server must be set up to always serve the main index.html file of the SPA for any route, which then lets the React application take over routing on the client side. The current server configuration, not adjusted to accommodate this requirement, and results in a 404 error when attempting to directly access URLs, as observed.

#### CSS

The project's CSS code was checked for syntax errors using the [W3C CSS Validator](https://jigsaw.w3.org/css-validator/) service, confirming it met the standards without any errors or warnings.

![ArtShowcase CSS Validation image](/src/assets/readme_images/testing/CSS_validation.png)

#### JavaScript (JS) and JSX (JavaScript XML)

This project was developed using [IDE VS Code], a highly versatile and lightweight code editor. Throughout the development process, built-in features such as **Syntax Highlighting and Basic Validation** and **IntelliSense** were employed to continuously validate the code.

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

<br>[Back to top ⇧](#table-of-contents)

### Downgrading react and react-dom to avoid compatibility issues.

To avoid compatibily issues with React Router Library a previous versions of react and react-dom, i. e. `"^17.0.2"` were installed instead of `react@18 react-dom@18`. The steps were as follows:

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
