import { useEffect, useState } from "react";
import { axiosReq } from "../api/axiosDefaults";
import { isProfileCompleted } from "../components/IsProfileCompleted";
import { useSetProfileData } from "../contexts/ProfileDataContext";
import { useCurrentUser } from "../contexts/CurrentUserContext";

export const useCurrentUserProfile = () => {
  const currentUser = useCurrentUser();
  const { setProfileData } = useSetProfileData();
  const [profileCompleted, setProfileCompleted] = useState(false);
  // Store the profile data directly
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      // Ensure there is a current user
      if (!currentUser) return;
      try {
        const { data: fetchedProfile } = await axiosReq.get(
          `/profiles/${currentUser.pk}/`
        );
        setProfile(fetchedProfile);
        setProfileCompleted(isProfileCompleted(fetchedProfile));
      } catch (err) {
        // console.log(err);
      }
    };

    fetchData();
    // Dependency on currentUser
  }, [currentUser, setProfileData]);
  return { profile, profileCompleted };
};
