import React, { Fragment, useState, useEffect } from 'react';
import './App.css';
import { db } from './index'

function App() {

  //Hooks
  const [data, setData] = useState(() => [])
  const [showData, setShowData] = useState(() => [])
  const [addCode, setAddCode] = useState(() => false)
  useEffect(() => {
    loadData()
  }, [])

  //Variables
  const languages = data.map(element => element.lang)
  const lang = [...new Set(languages)]
  
  //Functions
  const handleInputChange = (event) => {
    const { value } = event.target
    setShowData(data.filter(element => element.lang.toLowerCase().includes(value.toLowerCase()) || element.title.toLowerCase().includes(value.toLowerCase())))
  }
  const showAddPanel = () => {
    setAddCode(!addCode)
  }

  //Firebase
  const loadData = async () => {
    let temp = []
    await db.collection("code").orderBy("lang").get()
      .then(res => {
        res.forEach(element => {
          temp.push(element.data())
        })
        setData(() => temp)
        setShowData(() => temp)
      })
      .catch(e => console.log(e))
  }
  const saveCode = async () => {
    const title = document.querySelector('#title').value
    const lang = document.querySelector('#lang').value
    let code = document.querySelector('#code').value.split()
    await db.collection("code").add({
      title: title,
      lang: lang,
      code: code,
      click: 1
    })
      .then(() => {
        setAddCode(() => false)
        loadData()
      })
      .catch(e => console.log(e))
  }

  //Components
  const AddBox = () => (
    <div className={"code-container "}>
      <p>
        <input id="title" className="add-title" type="text" placeholder="Qué hace el código?" required={true}/>
        <select id="lang" className="add-lang">
          {
            lang.map((element, index) => {
              return(
                <option key={index} value={element}>{element}</option>
              )
            })
          }
        </select>
      </p>
      <div className="code-panel">
        <input id="code" className="add-code" type="text" placeholder="............." required={true}/>
        <br/>
      </div>
        <button className="save-button" onClick={saveCode}>Guardar</button>
        <button className="cancel-button" onClick={showAddPanel}>Cancelar</button>
    </div>
  )

  //App
  return (
    <Fragment>
      <nav className="nav-bar">
        <input
          autoFocus={true}
          className="search"
          onChange={handleInputChange}
          name="search"
          placeholder="Buscar"
          type="search"
          />
        <button
          onClick={showAddPanel}
          >
          Agregar
        </button>
      </nav>

      <section>
        {
          addCode ? <AddBox /> : null
        }
        {
          showData.map((element, i) => {
            return(
              <div
                key={i}
                className={"code-container "+element.lang}
                >
                <p><b>{element.title}</b> <img className="logo" alt={element.lang} src={require(`./assets/${element.lang}.svg`)}/> {element.lang}</p>
                <div className="code-panel">
                {
                  element.code.map((item, index) =>
                    <pre className="code-lines" key={index}>
                      {item}
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