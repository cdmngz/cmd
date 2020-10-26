import React, { Fragment, useState } from 'react';
import './App.css';
import array from './Data'

function App() {

  //State
  const [data, setData] = useState(() => array)
  const [addCode, setAddCode] = useState(() => false)

  //Variables
  const languages = data.map(element => element.lang)
  const lang = [...new Set(languages)]
  
  //Functions
  const handleInputChange = (event) => {
    let valor = event.target.value
    console.log(valor);
    setData(array.filter(element => element.lang.toLowerCase().includes(valor.toLowerCase()) || element.title.toLowerCase().includes(valor.toLowerCase())))
  }
  const clickSearch = () => setAddCode(!addCode)
  const addCodeLine = (event) => (event.target) 


  //Components
  const AddBox = () => (
    <div className="code-container">
      <p>
        <input className="search" type="text" placeholder="Qué hace el código?"/>
        <select>
          {
            lang.map((element, index) => {
              return(
                <option key={index}>{element}</option>
              )
            })
          }
        </select>
        <button>Guardar</button>
      </p>
      <div className="code-panel">
        <input className="code-lines" type="text" placeholder="línea de código"/>
        <br/>
        <button onClick={addCodeLine}>+</button>
      </div>
    </div>
  )

  return (
    <Fragment>
      <nav className="nav-bar">
        <input
          autoFocus
          className="search"
          onChange={handleInputChange}
          name="search"
          placeholder="Buscar"
          type="search"
          />
        <button
          className="add"
          onClick={clickSearch}
          >
          +
        </button>
      </nav>

      <section>
        { addCode ? <AddBox /> : null }
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