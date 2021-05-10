import { useState, useEffect, useContext } from 'react';
import { getUserByUserId } from '../services/firebase';
import UserContext from '../context/user';

export default function useUser(userId) {
  const [activeUser, setActiveUser] = useState();
  const { user } = useContext(UserContext);

  useEffect(() => {
    async function getUserObjByUserId() {
      const [userInfo] = await getUserByUserId(user.uid);
      setActiveUser(userInfo);
    }

    if (user?.uid) {
      getUserObjByUserId(userId);
    }
  }, [user]);

  return { user: activeUser, setActiveUser };
}
