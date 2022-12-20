import * as React from 'react';
import { Route, Routes } from 'react-router-dom';
import './style.css';

function Micomponente(){
    return <p>Soy un componente</p>
}


class MiComponenteClase extends React.Component{
  constructor(props){
    super(props);    
  }
  
  render(){
    return <p>Soy un componente de clase</p>
  }  
}


export default function App() {
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <Routes>
        <Route>
        <Route path='/' element={<MiComponenteClase/>}/>
        <Route path='/a' element={<Micomponente/>}/>
        </Route>
      </Routes>    
      
    </div>
    
  );
}
