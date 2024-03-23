import { createContext, useContext, useState } from "react";

// Create 2 context objects. Allow components within application to
// either consume the profile data or update it, depending on their needs.

// Hold the current state of the profile data
export const ProfileDataContext = createContext();
// Hold the function that updates the profile data
export const SetProfileDataContext = createContext();

// Custom hooks for each context object:
// These hooks internally use the useContext hook to access the current values of ProfileDataContext and SetProfileDataContext

export const useProfileData = () => useContext(ProfileDataContext);
export const useSetProfileData = () => useContext(SetProfileDataContext);

// Export and define a ProfileDataProvider function component with children as props:
export const ProfileDataProvider = ({ children }) => {
  const [profileData, setProfileData] = useState({
    // we will use the pageProfile later
    pageProfile: { results: [] },
  });

  return (
    <ProfileDataContext.Provider value={profileData}>
      <SetProfileDataContext.Provider value={setProfileData}>
        {children}
      </SetProfileDataContext.Provider>
    </ProfileDataContext.Provider>
  );
};
