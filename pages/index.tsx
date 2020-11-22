import Head from 'next/head'
import styles from '../styles/Home.module.css'
import DisplayCards from './components/DisplayCards'
import React from 'react'
import axios from 'axios'

//using axios to fetch data from api 

interface Community {
  id: String, 
  name: String, 
  imgUrl: String, 
  group: String,
}

interface Home {
  id: String, 
  communityId: String, 
  price: Number; 
  area: Number; 
  type: String; 
}

export default function Home() {

  const defaultCommunity:Community[] = []; 
  const defaultHome:Home[] = []; 


const [homes, setHomes]: [Home[], (homes: Home[]) => void] = 
React.useState(defaultHome); 

const [communities, setCommunties]: [Community[], (communities: Community[]) => void] = 
React.useState(defaultCommunity); 

const [loading, setLoading]: [boolean, (loading: boolean) => void] = 
React.useState<boolean>(true); 

const [error, setError]: [string, (error: string) => void] = React.useState(""); 



console.log(communities); 
console.log(loading); 
console.log(error); 
  React.useEffect(() => {
    axios
    .get<Community[]>('https://a18fda49-215e-47d1-9dc6-c6136a04a33a.mock.pstmn.io/communities')
    .then(response => {
      setCommunties(response.data); 
      setLoading(false); 
    })
    .catch(ex => {
      const err =
      ex.response.status === 404 
      ? "Resource not found" 
      : "An unexpected error has occured"; 
      setError(err); 
      setLoading(false); 
    }
      )
    axios
    .get<Home[]>('https://a18fda49-215e-47d1-9dc6-c6136a04a33a.mock.pstmn.io/homes')
    .then(response => {
      setHomes(response.data); 
      setLoading(false);
    })
      .catch(ex => {
        const err = 
        ex.response.status === 404 
        ? "Resource not found" 
        : "An unexpected error has occured"; 
        setError(err); 
        setLoading(false); 
      })
    }, []); 

    communities.sort((a,b) => a.name !== b.name ? a.name < b.name ? -1 : 1 : 0); 

    const homePrice = []; 

    for (let i = 0; i < communities.length; i++) {
      for(let x = 0; x < homes.length; x++)
        if(communities[i].id === homes[x].communityId) {
          homePrice.push(homes[x].communityId, homes[x].price)
     }
    }

  return (
    <div className={styles.container}>
      <Head>
      <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
          integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
          crossorigin="anonymous"
        />
      </Head>

      <main className={styles.main}>
        <h1 style={{ color: '#606060'}} > Communities in Calgary </h1>
        <DisplayCards communities={communities} homes={homePrice} />
      </main>

      <footer className={styles.footer}>
      </footer>
    </div>
  )
}
