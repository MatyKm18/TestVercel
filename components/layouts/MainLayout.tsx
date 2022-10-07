import { FC } from "react";
import Head from "next/head"

import { Navbar } from '../Navbar'
import styles from './MainLayout.module.css'


interface Props {
  title?: string;
  children?: JSX.Element | JSX.Element[]
}


export const MainLayout: FC<Props> = ({ children }) => {
        return (
          <div className={styles.container}>

            <Head>
              <title>Proyecto - Home</title>
              <meta name="description" content="Home Page" />
              <link rel="icon" href="/favicon.ico" />
            </Head>
      
            <Navbar />
      
            <main className={styles.main}>

              { children }
      


            </main>     
          </div>
        )
    }
