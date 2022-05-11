function Box(props) {
  console.log('This are Box props', props);
  return <div>{props.content}</div>;
}

export default function ShowAndDestructure() {
  const array = [1, null, 3, 4, [], 'string'];
  return (
    <>
      <div>{JSON.stringify(array)}</div>
      <Box content="my string" />
    </>
  );
}
