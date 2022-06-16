import React, { useState, useEffect } from 'react';

const url = 'https://api.github.com/users';

const UseEffectFetchData = () => {
  const [users, setUsers] = useState('');
  const [loading, setLoading] = useState(true)

  const getUsers = async () => {
    const res = await fetch(url)
    const users = await res.json()
    setUsers(users)
    console.log(users)
    setLoading(false)
  }

  useEffect(
    () => {
      getUsers()
    }, []
  )

  return (

    loading ? 
    (
      <h3>Loading...</h3>
    ) :

    (
      <>
        <h2>fetch data</h2>
        <ul className='users'>
          { 
          Array.from(users).map((user) => {
            const {login, id, avatar_url, html_url} = user;

            return (
              <li key={id}>
                <img src={avatar_url}/>
                <div>
                  <h4>
                    {login}
                  </h4>
                  <a href={html_url}>
                    profile
                  </a>
                </div>
              </li>
            ) 
          }
          )}
        </ul>
      </>
    )
  )
;
};

export default UseEffectFetchData;
