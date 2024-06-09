
import React from 'react';
import './globals.css'
import Header from './header';
import Search from './search';
import Grid from './grid';
import Footer from './footer';

export default function Home() {
    return (
      <>
        <Header/>
        <Search/>
        <Grid/>
        <Footer/>
      </>
  
    );
  };
