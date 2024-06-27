let Button = ({ content, classs, func }) => (
  <button className={classs} onClick={func}>
    {content}
  </button>
);

let H1 = () => <h1>hello world</h1>;

let P = () => <p>hello P tag</p>;

export { Button, H1, P };
