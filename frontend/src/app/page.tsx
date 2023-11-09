import Image from 'next/image'
import styles from './page.module.css'
import { useEffect } from 'react';
import { Client } from '@/types/client';
'use client'

export default function Home(){

  const client : Client = {
    clientID: 1,
    contactNum: 1234567890,
    name: 'A name',
    avatar: 'https://example.com/avatar.png',
    organization: 'blah',
    assignedUser: 'Another name',
  }

  const myJSON = JSON.stringify(client);
  localStorage.setItem("1", myJSON);

  console.log(localStorage);

  // localStorage.setItem('username', 'Anisha');
  // localStorage.setItem('userId', '12345');
  if (typeof localStorage !== 'undefined') {
    localStorage.setItem('key', 'value');
  } else if (typeof sessionStorage !== 'undefined') {
    // Fallback to sessionStorage if localStorage is not supported
    sessionStorage.setItem('key', 'value');
  } else {
    // If neither localStorage nor sessionStorage is supported
    console.log('Web Storage is not supported in this environment.');
  }
  console.log(localStorage);
  return (
      "hello world\n"
  )
}
