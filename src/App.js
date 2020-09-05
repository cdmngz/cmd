import React, { Fragment, useState } from 'react';
import './App.css';

function App() {
  
  const array = [
    {
      lang: 'git',
      title: 'Iniciar Repositorio GitHub',
      cmd: ['git init', 'git add .', 'git commit -m "Initial commit"', 'git remote add origin https://github.com/USER/REPOSITORY.git', 'git push -u origin master']
    },
    {
      lang: 'react',
      title: 'Crear proyecto',
      cmd: ['npx create-react-app my-app', 'cd my-app', 'npm start']
    },
    {
      lang: 'vue',
      title: 'Ejecutar servidor local',
      cmd: ['npm run serve']
    },
    {
      lang: 'firebase',
      title: 'Iniciar Firebase',
      cmd: ['firebase init', 'firebase login']
    },
    {
      lang: 'vue',
      title: 'Ejecutar servidor local',
      cmd: ['npm run serve']
    },
    {
      lang: 'firebase',
      title: 'Deploy Hosting',
      cmd: ['firebase deploy']
    },
  ]

  const [data, setData] = useState(() => array)

  const handleInputChange = (event) => {
    let valor = event.target.value
    setData(array.filter(element => element.lang.toLowerCase().includes(valor.toLowerCase()) || element.title.toLowerCase().includes(valor.toLowerCase())))
  }
  
  return (
    <Fragment>
      <nav className="nav-bar">
        <input
          autoFocus
          onChange={handleInputChange}
          name="search"
          placeholder="Buscar"
          type="search"
        />
      </nav>

      <section>
        {
          data.map((element, i) => {
            return(
              <div
                key={i}
                className={"code-container "+element.lang}
                >
                <p><b>{element.title}</b> <img className="logo" alt={element.lang} src={require(`./assets/${element.lang}.svg`)}/> {element.lang}</p>
                <div className="code-panel">
                { 
                  element.cmd.map((sub, subindex) =>
                    <pre
                      className="code-lines"
                      key={subindex}
                      >
                      {sub}
                    </pre>
                  )
                }
                </div>
              </div>
            )
          })
        }
      </section>

    </Fragment>
  );
}

export default App;