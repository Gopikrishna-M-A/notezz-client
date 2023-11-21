import UploadForm from "../../Components/UploadForm";
import { getServerSession } from 'next-auth/next';
import { options } from '../../api/auth/[...nextauth]/options'
const baseUrl = process.env.BASE_URL

const UploadPage = async() => {
  const session = await getServerSession(options)
  if (!session) {
    redirect('/api/auth/signin?callbackUrl=/settings')
  }

  return (
    <div className="section upload-page">
      <div className="page-title">Add Note</div>
      <UploadForm  baseUrl={baseUrl} session={session.user}/>
    </div>
  );
};

export default UploadPage;
