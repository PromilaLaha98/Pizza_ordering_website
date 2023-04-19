import Head from 'next/head';
import Image from 'next/image';
import styles from '@/styles/Home.module.css';
import Featured from "../Components/Featured";
import PizzaList from "../Components/PizzaList";



export default function Home() {
  return (
    <>
      <Head>
        <title>Pizza Restaurant</title>
        <meta name="description" content="Best pizza shop in town" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <Featured/>
        <PizzaList/>
    </>
  )
}
