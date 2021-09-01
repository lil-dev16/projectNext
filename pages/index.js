import Header from '../src/components/Header'
import Head from 'next/head'
import Hom from '../src/components/Home'
import About from  '../src/components/About'
import Skills from '../src/components/Skills'
import Services from '../src/components/services'
import Projects from '../src/components/projects'

const Home = () => {
  return(
  <div>
    <Header />
    <Hom />
    <About />
    <Skills />
    <Services />
    <Projects />
    <style jsx>{`
      .container {
        min-height: 100vh;
        padding: 0 0.5rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }

      main {
        padding: 5rem 0;
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }

      footer {
        width: 100%;
        height: 100px;
        border-top: 1px solid #eaeaea;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      footer img {
        margin-left: 0.5rem;
      }

      footer a {
        display: flex;
        justify-content: center;
        align-items: center;
      }

      a {
        color: inherit;
        text-decoration: none;
      }

      .title a {
        color: #0070f3;
        text-decoration: none;
      }

      .title a:hover,
      .title a:focus,
      .title a:active {
        text-decoration: underline;
      }

      .title {
        margin: 0;
        line-height: 1.15;
        font-size: 4rem;
      }

      .title,
      .description {
        text-align: center;
      }

      .description {
        line-height: 1.5;
        font-size: 1.5rem;
      }

      code {
        background: #fafafa;
        border-radius: 5px;
        padding: 0.75rem;
        font-size: 1.1rem;
        font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
          DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
      }

      .grid {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;

        max-width: 800px;
        margin-top: 3rem;
      }

      .card {
        margin: 1rem;
        flex-basis: 45%;
        padding: 1.5rem;
        text-align: left;
        color: inherit;
        text-decoration: none;
        border: 1px solid #eaeaea;
        border-radius: 10px;
        transition: color 0.15s ease, border-color 0.15s ease;
      }

      .card:hover,
      .card:focus,
      .card:active {
        color: #0070f3;
        border-color: #0070f3;
      }

      .card h3 {
        margin: 0 0 1rem 0;
        font-size: 1.5rem;
      }

      .card p {
        margin: 0;
        font-size: 1.25rem;
        line-height: 1.5;
      }

      @media (max-width: 600px) {
        .grid {
          width: 100%;
          flex-direction: column;
        }
      }
    `}</style>


    <style jsx global>{`
      html,
      body {
        padding: 0;
        margin: 0;
        font-family: tahoma;
          background-color: white;
      }

      * {
        box-sizing: border-box;
        margin: 0;
        
      }
      html{
        scroll-behaviour: smooth;
      }
      .header{
        
        display: flex;
        margin-left: auto;
        margin-right: auto;
        max-width: 1024px;
        height: 70px;
        align-items: center;
      }
      .nav_link::before{
        position: absolute;
        content: "";
        height: 0.20rem;
        background-color: red;
        top: 3.5rem;
        left: 0;
        transition: width 1s;
        width:0%;
      }
      .nav_link:hover::before{
        width: 100%;
      }
      .nav__link{
    position: relative;
    color: #fff;
  }
.nav__link:hover{
    position: relative;
}
      li{
        margin-left: 70px;
      }
      .contain{
        background-color: rgba(255, 255, 255, 0.931);
        box-shadow: 0 1px 4px rgba(146,161,176,.15);
        position: fixed;
        width: 100%;
        z-index: 9999px;
      }
      .hom{
        display: grid;
        grid-template-rows: auto auto;
        margin-left: auto;
        margin-right: auto;
        max-width: 1024px;
        height: 100vh;
      }
      .social{
        width: 50px;
        height: 50px;
        background-color: black;
        margin-right: 50px;
      }
      .homeSoc{
        display: flex;
        align-self: flex-end;
        padding-bottom: 2.5rem;
      }
      .homeImg{
        position: absolute;
        padding-top: 200px;
        right: 10%;
        width: 457px;
        bottom: 5%;
      }
      .homedet{
        align-self: flex-end;
      }
      button{
        display: inline-block;
        padding: .75rem 2.5rem;
        color: #fff;
        background-color: #4070F4;
        border-radius: .5rem;
        border: none;
        font-weight: 600;
      }
      button:hover{
        box-shadow: 0 10px 36px rgba(22, 21, 21, 0.19);
    }
    .title{
      text-align: center;
      color: #4070F4;
      margin-top: 30px;
      margin-bottom: 50px;
    }
    .title::after{
      width: 80px;
      height: 0.18rem;
      content: '';
      position: absolute;
      background-color: #4070F4;
      left: 0;
      right: 0;
      margin: auto;
    }
    .abt{
      display: grid;
      margin-right: auto;
      margin-left: auto;
      max-width: 800px;
      grid-template-columns: repeat(2,1fr);
      align-items: center;
    }
    .about__section{
      padding-top: 4rem;
      padding-bottom: 3rem;
    }
    .skillsBar{
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: .5rem 1rem;
      margin-bottom: 20px;
      border-radius: .5rem;
      box-shadow: 0 4px 25px rgb(14 36 49 / 15%)
    }
    .skill{
      display: grid;
      grid-template-columns: repeat(2,1fr);
      max-width: 1024px;
      margin-left: auto;
      margin-right: auto;
      grid-gap: 40px;
      align-items: center;
    }
    .skills_contain{
      margin-bottom: 30px;
    }
    .comp{
      // display: flex;
      // flex-direction: column;
     margin-bottom: 40px;
     padding-top: 45px;
     padding-bottom: 70px;
     border-radius: 3px;
     box-shadow: 0 4px 25px rgb(14 36 49 / 15%);
     width: 250px;
    }
    .comp > div{
      margin-left: auto;
      margin-right: auto;
    }
    .service, .project{
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-gap: 20px;
      margin-right: auto;
      margin-left: auto;
      max-width: 1024px;
    }
    .projectCard{
      width: 300px;
      height: 400px;
      border-radius: 3px;
      box-shadow: 0 4px 25px rgb(14 36 49 / 15%);
    }
    `}</style>
  </div>
  )
}

export default Home
