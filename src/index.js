//import ReactDOM from 'react-dom';
/*
const element = {
    type:'h1',
    props:{
        title:'foo', children:"hello"
    }
}

const contanier = document.querySelector('#root');

const node = document.createElement(element.type);

node.title = element.props.title;

const text = document.createTextNode('');
text['nodeValue'] = element.props.children;

node.append(text);

contanier.append(node);
*/


import ReactDOM from 'react-dom';
import React from 'react';

const element = (
    <div id='foo'>
  <a>Bar</a>
  <br></br>
  

    </div>
)

const contanier = document.getElementById('root');
ReactDOM.render(element, contanier);
