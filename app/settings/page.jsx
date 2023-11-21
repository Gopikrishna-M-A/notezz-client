import SetiingsDetails from '../Components/SetiingsDetails.jsx'
import SettingsControls from '../Components/SettingsControls.jsx'
import { getServerSession } from 'next-auth/next';
import { options } from '../api/auth/[...nextauth]/options.js'
const baseUrl = process.env.BASE_URL

const Settings = async() => {

  const session = await getServerSession(options)
  if (!session) {
    redirect('/api/auth/signin?callbackUrl=/settings')
  }

  
  return (
    <div className='section settings-page'>
      <div className="page-title">Settings</div>
      <div className="setting-profile-img-wrapper">
        <img className="profile-img" src="/images/girl1.png" alt="" />
      </div>
        <SetiingsDetails profile={session.user}/>
        <SettingsControls baseUrl={baseUrl} profile={session.user}/>
    </div>

  )
}

export default Settings