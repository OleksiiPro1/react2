const fruits = ['Banana', 'Kiwi', 'Mango', 'apple'];
const fruitsObjects = [
  { id: 1, name: 'Banana' },
  { id: 2, name: 'Kiwi' },
  { id: 3, name: 'Mango' },
  { id: 4, name: 'apple' },
  { id: 5, name: 'apple2' },
  { id: 6, name: 'apple3' },
  { id: 7, name: 'apple4' },
  { id: 8, name: 'apple5' },
];
export default function MapOverArrays() {
  const liFruits = [
    <li key="Banana">Banana</li>,
    <li key="Kiwi">Kiwi</li>,
    <li key="Mango">Mango</li>,
    <li key="apple">apple</li>,
  ];
  const listOfFruitsFromMap = fruitsObjects.map((fruitObject) => {
    return <li key={fruitObject.id}>{fruitObject.name}</li>;
  });
  const listOfFruitsFromMapFromString = fruits.map((fruit) => {
    return <li key={fruit}>{fruit}</li>;
  });
  console.log(listOfFruitsFromMap);
  return (
    <>
      <h1>From string array</h1>
      <ul>{listOfFruitsFromMapFromString}</ul>
      <h1>From object array</h1>
      <ul>{listOfFruitsFromMap}</ul>
    </>
  );
}
