import React from 'react';
import * as s from './App.styles';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Sidebar from './components/Sidebar/Sidebar';
import MainView from './components/MainView/MainView';

function App() {
  const backgroundImage='images/mountain.jpg';
  const sidebarHeader='Yo Yo Travels';
  const menuItems=[
    {name:'Home', to:'/' , icon:'icons/home.svg',subMenuItems:[]},
    {name:'About',to:'/' , icon:'icons/about.svg',subMenuItems:[]},
    {name:'Destinations',to:'/' , icon:'icons/destinations.svg',subMenuItems:[
      {name:'Canada' , to:'/canada'},
      {name:'Brazil' , to:'/brazil'},
      {name:'India' , to:'/India'},
      {name:'Australia' , to:'/Australia'},
      {name:'Kenya' , to:'/kenya'},
      {name:'Moldova' , to:'/moldova'},
     
    ]},
    {name:'Blog',to:'/' , icon:'icons/blog.svg',subMenuItems:[]},
    {name:'Services',to:'/' , icon:'icons/services.svg',subMenuItems:[]},
    {name:'Contacts',to:'/' , icon:'icons/contacts.svg',subMenuItems:[]},
    
  ];

  const fonts={
    header:'ZCOOL Kualie',
    menu:'Poppins'
  }

  return (
    <s.App>

      <Sidebar
       backgroundImage={backgroundImage}
       sidebarHeader={sidebarHeader}
       menuItems={menuItems}
       fonts={fonts}
      
      />
      <MainView/>
      

  
    </s.App>
  );
}

export default App;
