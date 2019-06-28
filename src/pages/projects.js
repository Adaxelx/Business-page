import React from 'react'
import styled from 'styled-components'
import device from '../templates/MediaWidth'
import H2 from '../components/headers/H2'
import H3 from '../components/headers/H3'
import Layout from '../components/layout'
import Project from '../components/Project'
import Logo from '../components/Logo'

import img from '../images/projects2.png'
import windows from '../images/windows.png'
import salon from '../images/salon.png'
import react2 from '../images/react-router-2.png'
import estne from '../images/estne.png'
import witcher from '../images/witcher.png'
/* zółty #f3ba0c */

const StyledProjects = styled.article`
  margin-top: 40px;
  background-color: rgb(194, 194, 206);
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding-bottom: 30px;
`
const StyledDescription = styled.p`
  margin-top: 30px;
  width: 90%;
`

const StyledSection = styled.section`
  width: 90%;
  margin-top: 30px;
  padding: 10px 20px;
  background-color: #f3ba0c;

  @media ${device.mobileS} and (orientation: landscape) {
    width: 40%;
  }
`
const StyledGitSec = styled.section`
  width: 100%;
  display: flex;
  justify-content: space-around;
`

const StyledGit = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
`

const StyledButton = styled.a`
  background-color: rgb(194, 194, 206);
  border: 1px solid black;
  margin: 10px 0 10px 0;
  width: 50px;
  height: 50px;
`

const StyledConSec = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  @media ${device.mobileS} and (orientation: landscape) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: flex-start;
  }
`
const Projects = () => {
  const projectsData = [
    {
      key: 0,
      title: 'Windows',
      author: 'Razem',
      img: windows,
      content:
        'Jest to nasz pierwszy wspólny projekt, czyli klasyczny windows. Przenoszenie ikon, pasek zadań z zegarkiem i menu start otwierające się okna z połączonymi ściezkami - to wszystko jest tutaj. Projekt jest oparty na reactcie, ale nie zabrakło tam tez styled-components czy context-api.',
      link: 'https://github.com/superkacper4/windows',
    },
    {
      key: 1,
      title: 'Estne',
      author: 'Gksasddsa',
      img: estne,
      content:
        'Jest to strona firmy Estne. Mimo ze jest oparta na HTML i CSS nie mozna powiedzieć, ze jest to strona prosta. Mozna na niej znalezc zarówno ciekawy design, jak i przejzystość i interesujące animacje. Składa się z 3 sekcji, wszystkie na jednej stronie.',
      link: 'https://github.com/superkacper4/estne-website',
    },
    {
      key: 2,
      title: 'Salon fryzjerski',
      author: 'Gksasddsa',
      img: salon,
      content:
        'Jedna z wielu prób utworzenia strony salonu fryzjerskiego. Mozna tam znaleźć animacje na scrolla, formularz, rózne nawigacje na desktop/mobile oraz ciekawą animacje routingu. Strona oparta na reactcie z wykorzystaniem react-routera, react-transition-group oraz preprocesora Sass.',
      link: 'https://github.com/adaxelx/strona-salonu',
    },
    {
      key: 3,
      title: 'Strona biznesowa',
      author: 'Gksasddsa',
      img: react2,
      content:
        'Jest to szablon strony biznesowej. Jedna z pierwszych pierwszych stron oparta na reactcie, z wykorzystaniem sassa. Dodatkowo został tam uzyty react-router, który obsługuję całą nawigację na stornie. Jest to tez jedna z pierwszych prób samodzielnego designu strony.',
      link: 'https://github.com/adaxelx/react-react-router-2',
    },
    {
      key: 4,
      title: 'History of Witchers',
      author: 'Gksasddsa',
      img: witcher,
      content:
        'Strona o jednej z najlepszych gier, czyli oczywiście o Wiedzminie. Ale oczywiście poza ciekawą tematyką sama budowa strony równiez jest bardzo ciekawa. Strona oparta na reactcie wraz z uzytym react-routerem. Mozna na niej znalezc przede wszystkim ciekawe menu boczne oraz interesujący design.',
      link: 'https://github.com/superkacper4/witcher-story-website',
    },
  ]

  const projectArr = projectsData.map(project => (
    <Project
      key={project.key}
      title={project.title}
      author={project.author}
      img={project.img}
      content={project.content}
      link={project.link}
    />
  ))
  return (
    <Layout>
      <StyledProjects>
        <H2>Nasze projekty</H2>
        <Logo src={img} alt="" />
        <StyledDescription>
          Jest to zbiór naszych wspólnych jak i samodzielnych projektów. Przedstawione tutaj
          projekty nie są wszystkimi projektami naszej firmy jak i jej pracowników, jednak
          postaraliśmy się wybrać te najbardziej interesujące.
        </StyledDescription>
        <StyledConSec>
          {projectArr}
          <StyledSection>
            <H3>Github</H3>
            <p>Resztę naszych projektów mozna obejrzeć na naszych githubach:</p>
            <StyledGitSec>
              <StyledGit>
                <h5>Adrian Gklasdfgh</h5>
                <StyledButton target="_blank" href="https://github.com/Adaxelx" />
              </StyledGit>
              <StyledGit>
                <h5>Kacper Gklasdfgh</h5>
                <StyledButton target="_blank" href="https://github.com/superkacper4" />
              </StyledGit>
            </StyledGitSec>
          </StyledSection>
        </StyledConSec>
      </StyledProjects>
    </Layout>
  )
}

export default Projects
