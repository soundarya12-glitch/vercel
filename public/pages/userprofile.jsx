// UserProfile.js
import { useParams } from 'react-router-dom';

function UserProfile() {
  const { id } = useParams();

  return (
    <div>
      <h1>User ID: {id}</h1>
    </div>
  );
}

export default UserProfile;
