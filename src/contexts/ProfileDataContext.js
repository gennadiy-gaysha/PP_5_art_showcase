import { createContext, useContext, useState } from "react";
import { axiosRes } from "../api/axiosDefaults";

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
    pageProfile: { results: [] },
  });

  const handleFollow = async (clickedProfile) => {
    try {
      const { data } = await axiosRes.post("/followers/", {
        followed: clickedProfile.id,
      });

      setProfileData((prevState) => {
        // Map over the profiles to find the one that was followed
        const updatedResults = prevState.pageProfile.results.map((profile) => {
          if (profile.id === clickedProfile.id) {
            // Update the followed profile's followers count and set its following_id
            return {
              ...profile,
              followers_count: profile.followers_count + 1,
              following_id: data.id,
            };
          } else if (profile.is_owner) {
            // Update the current user's following count
            return {
              ...profile,
              following_count: profile.following_count + 1,
            };
          }
          // Return all other profiles unchanged
          return profile;
        });

        return {
          ...prevState,
          pageProfile: {
            ...prevState.pageProfile,
            results: updatedResults,
          },
        };
      });
    } catch (err) {
      // console.log(err);
    }
  };

  const handleUnfollow = async (clickedProfile) => {
    try {
      await axiosRes.delete(`/followers/${clickedProfile.following_id}`);

      setProfileData((prevState) => {
        // Map over the profiles to update the one that was unfollowed
        const updatedResults = prevState.pageProfile.results.map((profile) => {
          if (profile.id === clickedProfile.id) {
            // Decrease the followed profile's followers count and reset its following_id
            return {
              ...profile,
              followers_count: profile.followers_count - 1,
              // Remove the following_id since the user has unfollowed
              following_id: null,
            };
          } else if (profile.is_owner) {
            // Decrease the current user's following count
            return {
              ...profile,
              following_count: profile.following_count - 1,
            };
          }
          // Return all other profiles unchanged
          return profile;
        });

        return {
          ...prevState,
          pageProfile: {
            ...prevState.pageProfile,
            results: updatedResults,
          },
        };
      });
    } catch (err) {
      // console.log(err);
    }
  };

  return (
    <ProfileDataContext.Provider value={profileData}>
      <SetProfileDataContext.Provider
        value={{ setProfileData, handleFollow, handleUnfollow }}
      >
        {children}
      </SetProfileDataContext.Provider>
    </ProfileDataContext.Provider>
  );
};
