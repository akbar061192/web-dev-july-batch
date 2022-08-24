// JS Way
const renderDom = () => {
  const jsElement = `<div>
    <div>Hello World</div>
    <div>
      <input type='text' />
    </div>
    <div>
    ${new Date().toLocaleTimeString()}
    </div>
  </div>`;

  const jsDom = document.getElementById('app-js');
  jsDom.innerHTML = jsElement;

  // React Way
  // diff algorithm

  const reactElement = (
    <div>
      <div>Hello World</div>
      <div>
        <input type='text' />
      </div>
      <div>{new Date().toLocaleTimeString()}</div>
    </div>
  );

  // const root = ReactDOM.render(document.getElementById('app-react'));
  // root.render(reactElement);

  ReactDOM.render(reactElement, document.getElementById('app-react'));
};

setInterval(renderDom, 1000);
