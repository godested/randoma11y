/** @jsxRuntime classic */
/** @jsx jsx */
import { Global } from "@emotion/react";
import { ThemeProvider, jsx } from "theme-ui";
import { Sliders } from 'react-feather'
import Head from "next/head";
import { useRouter } from "next/router";
import Link from "next/link";

import theme from "../theme";


export default ({ children, colorPair = [] }) => {

  const router  = useRouter()


  return (
  <ThemeProvider theme={theme}>
    <div>
      <Head>
        <title>Randoma11y - Accessible color combinations</title>
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,shrink-to-fit=no,viewport-fit=cover"
        />
        <link
          rel="shortcut icon"
          href="https://user-images.githubusercontent.com/1424573/63131613-9862b880-bf7b-11e9-99d8-09ef94854999.png"
        />
        <meta
          property="description"
          content="Get random, accessible color combinations"
        />
        <meta property="og:title" content="Randoma11y" />
        <meta
          property="og:description"
          content="Get random, accessible color combinations"
        />
        <meta property="og:url" content="https://randoma11y.com" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en" />
        <meta property="og:site_name" content="Randoma11y" />
      </Head>
      <Global
        styles={{
          html: {
            fontFamily: "system-ui, sans-serif",
            margin: 0,
            color: colorPair[0],
            backgroundColor: colorPair[1],
          },
          body: {
            color: 'inherit',
            backgroundColor: 'inherit',
          },
          "*": {
            boxSizing: "border-box",
            transition: 'color .2s ease, background-color .3s ease',
          },
        }}
      />
      
      <div
        sx={{
          pb: [4, 5, 5],
        }}
      >
        {children}
   
      </div>
      
      <footer
        sx={{
          borderTop: "thin solid",
          textAlign: "center",
          py: 4,
          px: 4,
        }}
      >
        <div
          sx={{
            fontSize: [0, 0, 2],
            display: 'flex', 
            alignItems: 'center',
            gap: '1em',
          }}
        >
          © Copyright 2016-2022,{" "}
          <a
            sx={{ color: colorPair[0], fontWeight: "bold", textDecoration: 'none', }}
            href="https://components.ai"
            title="Made by Components AI"
          >
            Components AI
          </a>
          <a
            sx={{ ml: 'auto', color: colorPair[0], fontWeight: "bold", textDecoration: 'none', }}
            href="https://github.com/components-ai/randoma11y"
            title="GitHub"
          >
            GitHub
          </a>
          <a
            sx={{ color: colorPair[0], fontWeight: "bold", textDecoration: 'none', }}
            href="https://github.com/components-ai/randoma11y"
            title="GitHub"
          >
            Twitter
          </a>
        </div>
      </footer>
    </div>
  </ThemeProvider>
)};
