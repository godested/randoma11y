/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui'
import { useEffect, useState } from 'react'
import  Link  from 'next/link'
import contrast from 'get-contrast'
import { Sliders, ArrowRightCircle, ArrowUpCircle, ArrowDownCircle } from 'react-feather'

import Layout from '../components/layout'
import Button from '../components/button'
import ContrastBoxes from '../components/contrast-boxes'


import { vote, getColorPair } from '../lib'

const Page = ({ pinnedColor }) => {
  const [colorPair, setColorPair] = useState([])
  const newColorPair = () => {
    setColorPair(getColorPair(pinnedColor))
  }

  const upvote = async () => {
    await vote({ upvote: true, colorPair })
    newColorPair()
  }
  const downvote = async () => {
    await vote({ upvote: false, colorPair })
    newColorPair()
  }
  const skip = () => {
    newColorPair()
  }
  const skiplink = (color) => {
    setColorPair(getColorPair(color))
  }
  const handleKeyUp = (e) => {
    const { key } = e

    if (key === 'ArrowUp') {
      upvote()
    } else if (key === 'ArrowDown') {
      downvote()
    } else if (key === 'ArrowRight') {
      skip()
    } else {
      return
    }
  }

  useEffect(() => {
    newColorPair()
  }, [])

  useEffect(() => {
    window.addEventListener('keyup', handleKeyUp)

    return () => {
      window.removeEventListener('keyup', handleKeyUp)
    }
  }, [colorPair])

  if (!colorPair.length) {
    return (
      <Layout>
        <div sx={{ minHeight: '66vh', display: 'flex', alignItems: 'center', justifyContent: 'center', p: 4, }}>
          <h2>Generating color pair...</h2>
        </div>
      </Layout>
    )
  }


  const [colorA, colorB] = colorPair

  const contrastRatio = contrast.ratio(colorA, colorB).toFixed(2)
  const contrastScore = contrast.score(colorA, colorB)

  const ColorLink = ({color, ...props}) => {
    return (
      <Link href={{
        pathname: '/',
        query: { color: color },
      }} scroll={false}
      >
        <a
          onClick={() => skiplink(color)}
          sx={{
          display: 'block',
          textDecoration: 'none',
          backgroundColor: color,
          borderRadius: '9999px',
          height: ['32px', '24px', '24px'],
          aspectRatio: '1/1',
          cursor: 'pointer',
        }} {...props} />
      </Link>
    )
  }
  return (
    <Layout colorPair={colorPair}>
      <header
        sx={{
          display: 'sticky',
          top: 0,
          borderBottom: 'thin solid',
          display: 'grid',
          alignItems: 'center',
          gridTemplateColumns: '1fr 1fr 1fr',
        }}
      >
        <h1
          sx={{
            display: 'flex',
            m: 0,
            alignItems: 'center',
            fontSize: [2, 2, 2],
            gap: 3,
            pl: 4,
            py: 3,
          }}
        >
          <span
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              height: '24px',
              width: '24px',
              backgroundImage:
                'linear-gradient(90deg, ' +
                colorPair[0] +
                ' 50%, transparent 50%, transparent 100%)',
              boxShadow: '0 0 0 2px ' + colorPair[0],
              borderRadius: '9999px',
            }}
          ></span>
          <span sx={{ display: ['none', 'block', 'block'] }}>Randoma11y</span>
        </h1>
        <p
          sx={{
            mx: 'auto',
            textAlign: 'center',
            fontWeight: 500,
            fontSize: [0, 1, 2],
            fontFamily: 'monospace, monospace',
          }}
        >
          {contrastRatio}{' '}
          <span sx={{ display: ['none', 'inline-block', 'inline-block'] }}>
            contrast {contrastScore}
          </span>
        </p>
        <div
          sx={{
            ml: 'auto',
            height: '100%',
            display: 'flex',
            alignItems: 'stretch',
          }}
        >
          <div sx={{ display: 'none' }}>
            <Button color={colorB} backgroundColor={colorA} onClick={upvote}>
              <ArrowUpCircle size={24} /> Upvote
            </Button>
          </div>
          <Button
            color={colorA}
            backgroundColor={colorB}
            borderColor={colorB}
            onClick={skip}
          >
            New colors
            <ArrowRightCircle size={20} />
          </Button>
          <div sx={{ display: 'none' }}>
            <Button
              color={colorA}
              backgroundColor={colorB}
              onClick={downvote}
              sx={{ ml: 3 }}
            >
              <ArrowDownCircle size={24} />
              Downvote
            </Button>
          </div>
        </div>
      </header>
      <section sx={{
         mx: 'auto',
         bg: 'tranparent',
           //boxShadow: 'inset 0 0 0 1px currentColor',
           maxWidth: '64rem',
    }}>
         <div sx={{ 
           display: 'flex',
           flexWrap: 'wrap',
           gap: '8px', 
           filter: 'saturate(100%)',
           transition: 'filter .25s ease',
           ':hover': {
             filter: 'saturate(100%)'
           },
           ':hover': {
             filter: 'saturate(100%)'
           },
           py: 4,
           px: 4,
           mx: 'auto',
           justifyContent: 'center',
         }}>
            <div sx={{ '> a': {
             // boxShadow: '0 0 2px 4px rgba(0,0,0,.125)'
            }}}><ColorLink color='white' /></div>
            <ColorLink color='black' />
            <ColorLink color='blue' />
            <ColorLink color='dodgerblue' />
            <ColorLink color='skyblue' />
            <ColorLink color='indigo' />
            <ColorLink color='blueviolet' />
            <ColorLink color='fuchsia' />
            <ColorLink color='violet' />
            <ColorLink color='hotpink' />
            <ColorLink color='red' />
            <ColorLink color='orangered' />
            <ColorLink color='orange' />
            <ColorLink color='gold' />
            <ColorLink color='yellow' />
            <ColorLink color='springgreen' />
            <ColorLink color='teal' />
            <ColorLink color='cyan' />
         </div>
      </section>

      <ContrastBoxes colorPair={colorPair} />
<div sx={{ textAlign: 'center', pt: 5, }}>
          <a
            sx={{ 
              display: 'inline-flex',
              mx: 'auto',
              color: colorPair[0], fontWeight: "bold", textDecoration: 'none', 
                gap: '8px',
                transition: 'all .25s ease',
                ':hover': {
                  filter: 'hue-rotate(140deg)',
                  opacity: .8,

                }

            }}
            href="https://components.ai/u/system/cl97otyus041709lblou2lylf/cl97ou8xs068609l3he0g8kau"
          >
            <Sliders size={20} strokeWidth={2} /> Advanced Editor
          </a>
     </div>
    
    </Layout>
  )
}

export async function getServerSideProps(context) {
  return {
    props: {
      pinnedColor: context.query.color? context.query.color : null,
    },
  }
}

export default Page
