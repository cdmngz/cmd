import React, { Fragment, useState } from 'react';
import './App.css';
import { db } from './index'
import array from './Data'

function App() {

  
  //State
  const [data, setData] = useState(() => array)
  const [addCode, setAddCode] = useState(() => false)

  //Variables
  const languages = array.map(element => element.lang)
  const lang = [...new Set(languages)]
  
  //Functions
  const handleInputChange = (event) => {
    const { value } = event.target
    setData(array.filter(element => element.lang.toLowerCase().includes(value.toLowerCase()) || element.title.toLowerCase().includes(value.toLowerCase())))
  }
  const clickAgregar = () => {
    setAddCode(!addCode)
  }
  const saveCode = async () => {
    const title = document.querySelector('#title').value
    const lang = document.querySelector('#lang').value
    let code = document.querySelector('#code').value.split()
    console.log(code);
    await db.collection("code").add({
      title: title,
      lang: lang,
      code: code
    })
      .then(() => {
        console.log('Dato Agregado')
        setAddCode(() => false)
        loadData()
      })
      .catch(e => console.log(e))
  }
  const loadData = async () => {
    let temp = []
    await db.collection("code").get()
      .then(res => {
        res.forEach(element => {
          temp.push(element.data())
        })
        console.log(temp)
        setData(() => temp)
      })
      .catch(e => console.log(e))
  }

  //Components
  const AddBox = () => (
    <div className="code-container">
      <p>
        <input id="title" className="add-title" type="text" placeholder="Qué hace el código?" required/>
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
    </div>
  )

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
          onClick={clickAgregar}
          >
          Agregar
        </button>
      </nav>

      <section>
        { addCode ? <AddBox /> : null }
        {
          console.log(data)}{
          data.map((element, i) => {
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