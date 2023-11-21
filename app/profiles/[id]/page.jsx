import ProfileLeft from '../../Components/ProfileLeft'

import { redirect } from 'next/navigation'
import { getServerSession } from 'next-auth/next';
import { options } from '../../api/auth/[...nextauth]/options'
const baseUrl = process.env.BASE_URL

const Profile = async() => {

  const session = await getServerSession(options)

  if (!session) {
    redirect('/api/auth/signin?callbackUrl=/profiles/profile')
  }

  return (
    <div className="section profile-page">
      <ProfileLeft baseUrl={baseUrl} user={session.user}/>
    </div>
  );
};

export default Profile;
