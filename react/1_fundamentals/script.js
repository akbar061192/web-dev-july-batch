const element = (
  <div>
    <div>
      hello world
      <h2>welcome to react course</h2>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae, enim!</p>
    </div>
    <div>another div</div>
  </div>
);

// JSX -- html template in js file
// const element = React.createElement('div', {}, 'Hello World', React.createElement('h2', { class: 'main' }, 'Welcome to React Course'));

const myApp = document.getElementById('app');
ReactDOM.createRoot(myApp).render(<div>{element}</div>);

// babel -- js complier
