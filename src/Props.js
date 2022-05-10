function Greeting(props) {
  console.log('props', props);
  return <h2>Hello {props.userName}</h2>;
}

export default function Props() {
  const userName = 'Alexey';
  return <Greeting userName={userName} abc={123} />;
}
