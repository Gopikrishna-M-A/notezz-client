import ProfileCardWrapper from '../Components/ProfileCardWrapper'
import { getServerSession } from 'next-auth/next';
import { options } from '../api/auth/[...nextauth]/options'
import { redirect } from "next/navigation"
const baseUrl = process.env.BASE_URL

const Profiles = async() => {
  const session = await getServerSession(options)

  // if (!session) {
  //   redirect('/api/auth/signin?callbackUrl=/profiles')
  // }

  return (
    <div className='section'>
      <div className="page-title">Meet the Creators</div>
        <ProfileCardWrapper user={session.user} baseUrl={baseUrl}/>
    </div>
  )
}

export default Profiles