import axios from 'axios';
import { useEffect, useState } from 'react';

import { User } from '../types';

export const Info: React.FC = () => {
  const [userInformation, setuserInformation] = useState<User>();

  useEffect(() => {
    axios.get('user_informations').then((res) => {
      setuserInformation(res.data);
    });
  }, []);

  return (
    <>
      {userInformation && (
        <div>
          <div>名前: {userInformation.name}</div>
          <div>年齢: {userInformation.age}</div>
          {<div>出身: {userInformation.address}</div>}
        </div>
      )}
    </>
  );
};
