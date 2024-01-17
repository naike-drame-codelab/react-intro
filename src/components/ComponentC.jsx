import { useContext } from 'react';
import { UserData } from '../App';

const ComponentC = () => {
  const user = useContext(UserData);

  return (
    <div className='m-5 p-5 bg-slate-800 text-white'>
      <h1 className='text-3xl mb-3 font-bold'>My name is <span className='text-purple-500'>{user.name}</span> and I'm <span className='text-purple-500'>{user.age}</span> years old.</h1>
      <ul className='list-disc ml-5'>
        {user.hobbies.map((h, idx) => (
          <li key={idx}>{h}</li>
        ))}
      </ul>
    </div>
  )
}

export default ComponentC; 