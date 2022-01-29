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

/*
import ReactDOM from 'react-dom';
import React from 'react';

/*
const element = (
    <div id='foo'>
  <a href='diii'>lorem ipsun</a>
  <br></br>
  

    </div>
)

const contanier = document.getElementById('root');
ReactDOM.render(element, contanier);
*/

/*
function createElement(type, props, ...children){
   
   return{ type,
    props:{
        ...props1,
        children = children.map((child)=>(typeof child === 'object' ? child:createElement(child))),
    }


}
}
function createTextElement(text){
    return {
        type:'Text_element',
        props:{
            nodeValue:text,
            children:[],
        }
    }
}

const Act = {
    createElement
};

const element = Act.createElement(
    'div',
    {id: 'foo'},
    Act.createElement('a', 'null', 'bar'),
    Act.createElement('b')
);

console.log(element);

*/



/** @jsxRuntime classic */
function createElement(type, props, ...children) {
    return {
        type,
        props: {
            ...props,
            // title: "title",
            // id: "id",
            // className: "name",
            children: children.map(child =>
                typeof child === "object" ? child : createTextElement(child)
            )
        }
    };
}


// <h1 title="title" id="id" className="name">children</h1>

function createTextElement(text) {
    return {
        type: "TEXT_ELEMENT",
        props: {
            nodeValue: text, // hello
            children: []
        }
    };
}

function render(element, container) {
    const dom =
        element.type == "TEXT_ELEMENT"
            ? document.createTextNode("")
            : document.createElement(element.type); // h1

    const isProperty = key => key !== "children";

    Object.keys(element.props)
        .filter(isProperty)
        .forEach(name => {
            dom[name] = element.props[name];
        });

    element.props.children.forEach(child => render(child, dom));
    container.appendChild(dom);
}

const Act = {
    createElement,
    render
};

/** @jsx Act.createElement */
const element = (
    <div style="background: salmon">
        <h1>Hello World</h1>
        <h2 style="text-align:right">from Act</h2>
        <h3>hello world</h3>
        <ul>
            <li><a><span style="color: red">code</span></a></li>
        </ul>
    </div>
);
const container = document.getElementById("root");
Act.render(element, container);



