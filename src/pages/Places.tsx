import '../styles/sidebar.scss';
import { useEffect } from 'react';

const Places = (props : any) => {
  const { placeId } = props.match.params;
  
  useEffect(() => {
    
    console.log(placeId);
    console.log('Test');
  }, [placeId]);
  
  return (
    <div className='home'>
      <h1>{placeId}</h1>
    </div>
  )
}

export default Places