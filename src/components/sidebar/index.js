import { useContext } from 'react';
import User from './user';
import Suggestions from './suggestion';
import LoggedInUserContext from '../../context/logged-in-user';

const Sidebar = () => {
  const {
    user: { docId = '', fullName, username, userId, following } = {},
  } = useContext(LoggedInUserContext);

  return (
    <div className="p-4">
      {docId ? (
        <>
          <User username={username} fullName={fullName} />
          <Suggestions
            userId={userId}
            following={following}
            loggedInUserDocId={docId}
          />
        </>
      ) : null}
    </div>
  );
};

export default Sidebar;

Sidebar.whyDidYouRender = true;
