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

1. [User Experience UX](#user-experience-ux)

- [Project Goals](#project-goals)

  - [Epic: Admin Management](#epic-admin-management)

  - [Epic: Navigation](#epic-navigation)

  - [Epic: "Painting Management"](#epic-painting-management)

  - [Epic: Search and Filtering](#epic-search-and-filtering)

  - [Epic: User and User Profile Management](#epic-user-and-user-profile-management)

  - [Epic: Favourite Profiles and Watchlist Management](#epic-favourite-profiles-and-watchlist-management)

  - [Epic: Comments Management](#epic-comments-management)

  - [Epic: Error Handling and Notification Management](#epic-error-handling-and-notificationg-management)

- [User Stories](#user-stories)

- [General structure](#general-structure)

- [React Component Tree](#react-component-tree)

- [Color Scheme](#color-scheme)

- [Topography](#topography)

## User Experience (UX)

### Project Goals.

The objective of the project is to meet a series of specific targets, which are categorized into eight main epics. These epics are Admin Management, Painting Management, Search and Filtering, User and User Profile Management, Favourite Profiles and Watchlist Management, Comments Management, and Error Handling. They each cover different facets of the ART SHOWCASE application. The project's goals are organized in a way to tackle particular needs associated with each epic, facilitating a systematic and effective development of the application.

#### Epic: "Admin Management".

- Develop a comprehensive system for user management that includes signing up, building and maintaining user profiles, ensuring secure sign-in and sign-out processes, and facilitating password modifications. This system aims to encompass all necessary aspects to provide a secure and user-friendly experience.
- Develop a capable system for admin to manage painting content, which includes capabilities for adding, updating, and removing paintings, along with overseeing the moderation of content.
- Introduce a feature for users to curate lists of their preferred artists and artworks, enabling easy access and organization of their favorites.
- Implement a system within the admin dashboard for the efficient oversight and arrangement of user comments, improving overall management and control.

#### Epic: Navigation.

- Design a clear and intuitive navigation menu that allows users to effortlessly find and access different sections of the site, such as the Home page (gallery), Faves and Watchlist, user profiles, etc.
- Implement a responsive search bar and filters, enabling quick searches for paintings, artists, or specific content to enhance usability.
- Ensure the website's navigation framework is adaptive, varying based on the authentication status and permission levels of the user.

#### Epic: "Painting Management".

- Introduce an infinite scrolling feature for paintings to enhance the browsing experience, allowing users to continuously explore artwork without interruption.
- Facilitate a seamless user interface that allows users to effortlessly access and read details about each painting, prioritizing a smooth user experience.
- Add a comprehensive "About" page to the website that provides users with deep insights into the site's purpose, objectives, and the intended audience, ensuring visitors have a clear understanding of what the site is about and whom it serves.
- Implement a user-friendly feature for the addition of new paintings, streamlining the process for quick and efficient updates.
- Provide capabilities for authorized users to edit and remove paintings, ensuring effective content management and quality control.

#### Epic: Search and Filtering.

- Introduce a search function that allows users to locate paintings by title or the artist's name, facilitating quick access to relevant information.
- Organize paintings into categories such as Theme, Technique, and Orientation, and allow sorting by price to help users easily find what they're looking for.
- Show the count of paintings found or filtered, providing users with a clear understanding of the search or filter results.

#### Epic: User and User Profile Management.

- Facilitate an efficient and straightforward process for new users to sign up, ensuring the account registration system is user-friendly.
- Deploy a secure system for logging in and logging out, safeguarding user accounts and their data.
- Offer an easy-to-use option for users to update their passwords, enhancing account security.
- Require that newly registered users complete their profile details, helping to foster a community where members can learn about one another.
- Allow users to access and modify their own profiles, giving them control over their personal information and preferences.

#### Epic: Favourite Profiles and Watchlist Management.

- Implement personalization options that let users add artworks to a watchlist and compile a collection of favorite artists' paintings, fostering greater user involvement and interaction within the community.
- Provide functionality for users to easily remove paintings from their watchlist and "unsubscribe" from their selected favorite artists, ensuring flexibility and control over their preferences.

#### Epic: Comments Management.

- Introduce features that enable users to leave comments on artworks, boosting user engagement and fostering interactions within the community.
- Provide users with the capability to edit and delete their own comments, ensuring they have control over their contributions.
- Allow users to view comments from others, enabling them to participate in discussions and share insights.

#### Epic: Error Handling and Notificationg Management.

- Develop a strong and intuitive error management system aimed at improving the user experience across the platform.
- Create customized error page for "404 Not Found" page, ensuring it offers clear, helpful instructions or reassurance to guide users effectively through any unexpected issues.
- Provide immediate and informative feedback through alert messages for users who encounter errors while filling out forms on the site, including but not limited to registration, login, profile creation/editing, and painting submission/editing forms, thereby ensuring users feel supported and well-informed during their site interactions.

<br>[Back to top ⇧](#table-of-contents)

### User Stories.

Before initiating the React-based frontend portion of the project, I developed a comprehensive set of 44 user stories to meet the user requirements. Additionally, for the backend, 3 user stories for Admin were created and implemented to allow greater flexibility in database manipulation and for frontend testing purposes. These user stories were subsequently transferred to the Issues and Projects section (Kanban board) of the GitHub repository. Below is a table where all the mentioned user stories are categorized under their respective epics:

| No  | Title                              | User Story                                                                                                                                                                                                                                                                                                                   | Epic                                        |
| --- | ---------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| 1   | Platform Content Oversight         | As a site admin I can manage paintings, profile and comments within the platform so that I can ensure the content meets the community standards, maintain a high quality of user experience, and address any issues promptly to keep the platform safe and engaging for all users.                                           | Admin Management                            |
| 2   | Account Removal Authority          | As a site admin, I can delete a user's profile so that I can remove accounts that violate our community guidelines or terms of service, ensuring a safe and respectful environment for all users.                                                                                                                            | Admin Management                            |
| 3   | About Page Management              | As a site admin, I can edit the About page so that I can ensure the information remains accurate and up-to-date, providing visitors with a clear understanding of the site's mission, values, and the community it serves.                                                                                                   | Admin Management                            |
| 4   | Navbar Access                      | As a user I can view a navbar from every page so that I can navigate easily between pages.                                                                                                                                                                                                                                   | Navigation                                  |
| 5   | Quick Navigation                   | As a user I can navigate through pages quickly so that I can view content seamlessly without page refresh.                                                                                                                                                                                                                   | Navigation                                  |
| 6   | Direct Profile Access Via Avatar   | As a user, I can easily navigate to other users' profile pages by clicking on their avatar so that I can view their public information, artworks, and interests, fostering community engagement and connection among users.                                                                                                  | Navigation                                  |
| 7   | Auth Options                       | As a logged out user I can see sign in and sign up options so that I can sign in/sign up.                                                                                                                                                                                                                                    | Navigation                                  |
| 8   | Logout Access                      | As a logged in user, I can see a logout link so that I can securely exit my session, ensuring my account remains protected and my session is properly closed.                                                                                                                                                                | Navigation                                  |
| 9   | Footer Links                       | As a user, I can view a footer on every page so that I can access the site owner's social media pages.                                                                                                                                                                                                                       | Navigation                                  |
| 10  | Icon Hints                         | As a user, I want to see pop-up hints for any active icons that depend on my user and profile status before clicking on them, so I can make informed decisions about interacting with features based on my current capabilities and restrictions, thereby enhancing my navigational experience and engagement with the site. | Navigation                                  |
| 11  | Artwork Browsing                   | As a user, I can see a paintings page where all the paintings or filtered paintings are displayed, so that I can browse through a comprehensive collection of artworks easily, enhancing my exploration and discovery of new art.                                                                                            | Painting Management                         |
| 12  | Infinite Scrolling                 | As a user I can keep scrolling through the paintings on the site, that are loaded for me automatically so that I don't have to click on "next page.                                                                                                                                                                          | Painting Management                         |
| 13  | Painting Details                   | As a user I can view the details of a single painting so that I can learn more about it.                                                                                                                                                                                                                                     | Painting Management                         |
| 14  | Comments and Information           | As a user I can view the painting page so that I can read the comments about the painting, and get familiar with such details as 'Artist name', 'Painting title', 'Year created', 'Technique', 'Dimensions' and suggested price.                                                                                             | Painting Management                         |
| 15  | Create Artwork                     | As a logged in user I can create painting so that I can share my artwork with the world.                                                                                                                                                                                                                                     | Painting Management                         |
| 16  | Edit Artwork                       | As a painting owner I can edit my painting parameters so that I can make corrections or update my painting details after they were created.                                                                                                                                                                                  | Painting Management                         |
| 17  | About Page Access                  | As a user I can view the About page so that I can stay informed about the mission, and understand the platform's purpose and offerings.                                                                                                                                                                                      | Painting Management                         |
| 18  | Title and Artist Search            | As a user, I can search for paintings by Title or Artist Name, so that I can find the paintings and user profiles I am most interested in.                                                                                                                                                                                   | Search and Filtering                        |
| 19  | Filter Application                 | As a user, I can apply a set of filters, such as 'Painting Orientation', 'Technique', 'Theme' and 'Price' based on my preferences so that I can narrow down the displayed artworks.                                                                                                                                          | Search and Filtering                        |
| 20  | Search Results Count               | As a user, I can see not only the filtered paintings but also the number of paintings in the search result, so that I have a clear understanding of the breadth of options available within my search criteria, enhancing my decision-making process.                                                                        | Search and Filtering                        |
| 21  | One-Click Reset                    | As a user, I can easily reset filters with a single click so that I can quickly start a new search or explore different categories without manually removing each filter, enhancing my browsing experience and efficiency on the platform.                                                                                   | Search and Filtering                        |
| 22  | Persistent Filter Choices          | As a user, I can my filter selections on the Paintings Page saved when navigating away and returning, so that it ensures a seamless browsing experience without redoing my choices.                                                                                                                                          | Search and Filtering                        |
| 23  | Account Creation                   | As a user I can create a new account so that I can access all the features for registered users.                                                                                                                                                                                                                             | User and User Profile Management            |
| 24  | User Login                         | As a user I can log in to the app so that I can access functionality for logged in users.                                                                                                                                                                                                                                    | User and User Profile Management            |
| 25  | Login Status Indicator             | As a user I can tell if I am logged in or not so that I can log in if I need to.                                                                                                                                                                                                                                             | User and User Profile Management            |
| 26  | Session Persistence                | As a user I can maintain my logged-in status until I choose to log out so that my user experience is not compromised.                                                                                                                                                                                                        | User and User Profile Management            |
| 27  | Avatar Visibility                  | As a user I can view user's avatars so that I can easily identify users of the application.                                                                                                                                                                                                                                  | User and User Profile Management            |
| 28  | Artist Profile Viewing             | As a user I can view other artists' profiles so that I can see their paintings and learn more about them.                                                                                                                                                                                                                    | User and User Profile Management            |
| 29  | Artist Insights                    | As a user I can view data and statistics about a specific artist such as: bio, home country, gender, date of birth, as well as number of of paintings, followers and favourite artists so that I can learn more about them.                                                                                                  | User and User Profile Management            |
| 30  | Artist's Artwork Gallery           | As a user I can view all the paintings by a specific artist so that I can catch up on their latest artworks, or decide I want to follow them.                                                                                                                                                                                | User and User Profile Management            |
| 31  | Profile Customization              | As a logged in user I can complete/edit my profile so that I can change my profile image, bio and other details.                                                                                                                                                                                                             | User and User Profile Management            |
| 32  | Password Update                    | As a logged in user with completed profile I can update my password so that I can keep my profile secure.                                                                                                                                                                                                                    | User and User Profile Management            |
| 33  | Complete Profiles for Active Users | As a user I can see completed profiles of active users who display their paintings or leave comments so that I can access more context about their contributions and foster deeper community engagement.                                                                                                                     | User and User Profile Management            |
| 34  | Password Visibility                | As a user I can have an option to reveal or hide my password on any appropriate form so that I can ensure accuracy when entering my password, enhancing both security and usability.                                                                                                                                         | User and User Profile Management            |
| 35  | Adding paintings to Watchlist      | As a logged in user with completed profile I can add a painting to my watchlist so that I can observe it later, and show that I am not indifferent to this painting.                                                                                                                                                         | Favourite Profiles and Watchlist Management |
| 36  | Following/unfollowing Artists      | As a logged in user with completed profile I can follow and unfollow other artists so that I can see and remove paintings by specific artist in my Faves feed.                                                                                                                                                               | Favourite Profiles and Watchlist Management |
| 37  | Removing from Watchlist            | As a logged in user with completed profile, I can remove a painting from my watchlist so that I can keep my list updated with only the artworks that currently interest me, ensuring a personalized and clutter-free browsing experience.                                                                                    | Favourite Profiles and Watchlist Management |
| 38  | Reading Comments                   | As a user I can read comments on painting so that I get informed what other artists think about the painting.                                                                                                                                                                                                                | Comments Management                         |
| 39  | Comment Timelines                  | As a user I can see how long ago a comment was made so that I know how old a comment is.                                                                                                                                                                                                                                     | Comments Management                         |
| 40  | Infinite Comment Scrolling         | As a user I can keep scrolling through the comments on the painting page, that are loaded for me automatically so that I don't have to click on "next page".                                                                                                                                                                 | Comments Management                         |
| 41  | Commenting on Artworks             | As a logged in user with completed profile I can add comments to a painting so that I can share my thoughts about the artwork.                                                                                                                                                                                               | Comments Management                         |
| 42  | Editing Comments                   | As an owner of a comment I can edit my comment so that I can fix or update my existing comment.                                                                                                                                                                                                                              | Comments Management                         |
| 43  | Deleting Comments                  | As an owner of a comment I can delete my comment so that I can control removal of my comment from the application.                                                                                                                                                                                                           | Comments Management                         |
| 44  | Error Messaging                    | As a user I can receive clear error messages when a page I'm looking for is not found so that I understand what went wrong and feel guided on what to do next.                                                                                                                                                               | Error Handling and Notificationg Management |
| 45  | Form Error Feedback                | As a user I can receive immediate and informative feedback when I encounter errors while filling out forms on the site so that I can understand exactly what needs to be corrected without feeling frustrated or lost.                                                                                                       | Error Handling and Notificationg Management |
| 46  | Success Notifications              | As a user I can receive a success notification when I successfully complete the form so that I am assured my changes have been saved and can confidently navigate away from the form.                                                                                                                                        | Error Handling and Notificationg Management |
| 47  | Consistent Alert Handling          | As a user I can see that error alerts and success messages are handled uniformly across the platform so that I have a consistent experience and can easily understand feedback from the system.                                                                                                                              | Error Handling and Notificationg Management |

<br>[Back to top ⇧](#table-of-contents)

### General structure.

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

### React Component Tree.

This project was developed with React, facilitating the reuse of components across the application. React components are versatile, capable of rendering page elements, displaying data, managing events and user interactions, and communicating with other components through props, among other functionalities.

However, as the project grows in size, navigating the file structure and accurately mapping out the relationships between components and containers can become increasingly complex. The expansion of the project can lead to a rapid rise in complexity.

Having a method to visualize the entire project structure by choosing a root component is cost-effective, as it aids in the swift planning and addition of new features, thanks to the insights provided by props.

For the ART SHOWCASE project, a React Component Tree diagram was generated using the [ReacTreeDev](https://reactree.dev/) VS Code plugin and [xMind](https://xmind.app/) tool. This diagram enables a clear visualization of the hierarchical organization of components, highlighting parent/child relationships.

![Component Tree image](/src/assets/readme_images/ComponentTree.png)

You can also download the original file of the project's React Component Tree diagram from
`/src/assets/App.js.xmind` in this project.

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
