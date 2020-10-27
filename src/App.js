import React, { Fragment, useState } from 'react';
import './App.css';
import array from './Data'

function App() {

  //State
  const [data, setData] = useState(() => array)
  const [addCode, setAddCode] = useState(() => true)
  const [code, setCode] = useState({title: '', lang: '', code: ''})

  //Variables
  const languages = array.map(element => element.lang)
  const lang = [...new Set(languages)]
  
  //Functions
  const handleInputChange = (event) => {
    const { value } = event.target
    setData(array.filter(element => element.lang.toLowerCase().includes(value.toLowerCase()) || element.title.toLowerCase().includes(value.toLowerCase())))
  }
  const clickSearch = () => setAddCode(!addCode)
  const saveCode = () => {
    const title = document.querySelector('#title').value
    const lang = document.querySelector('#lang').value
    const code = document.querySelector('#code').value
    console.log(title, lang, code);
    setCode({title: title, lang: lang, code: code})
  }


  //Components
  const AddBox = () => (
    <div className="code-container">
      <p>
        <input id="title" className="search" type="text" placeholder="Qué hace el código?"/>
        <select id="lang">
          {
            lang.map((element, index) => {
              return(
                <option key={index} value={code.lang = element}>{element}</option>
              )
            })
          }
        </select>
      </p>
      <div className="code-panel">
        <input id="code" className="code-lines" type="text" placeholder="línea de código"/>
        <br/>
      </div>
        <button onClick={saveCode}>Guardar</button>
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