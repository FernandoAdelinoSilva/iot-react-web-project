import '../styles/sidebar.scss';
import { useAuth } from '../hooks/useAuth';

const Overview = () => {
  const { user } = useAuth();
	console.log(user);

  return (
    <div className='home'>
      Overview
    </div>
  )
}

export default Overview
