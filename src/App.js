import './App.css';
import MyComponent from './Components';
import ConditionalRendering from './ConditionalRendering';
import ControlledComponent from './ControlledComponent';
import ControlledComponentsForm from './ControlledComponentsForm';
import EventHandlers from './EventHandlers';
import LetNotUpdating from './LetNotUpdating';
import MapOverArrays from './MapOverArrays';
import Props from './Props';
import ShowAndDestructure from './ShowAndDestructure';
import StatefulCounter from './StatefulCounter';
import StateIsAsync from './StateIsAsync';
import StyleProp from './StyleProp';

export default function App() {
  return (
    <div className="App">
      <h1>Components</h1>
      <MyComponent />
      <Props />
      <h1>State</h1>
      <StatefulCounter />
      <h1>Form with Controlled Components</h1>
      <ControlledComponentsForm />
      <h1>Event Handlers: onClick, onChange</h1>
      <EventHandlers />
      <h1>Using `let` won't show you updates</h1>
      <LetNotUpdating />
      <h1>StyleProp</h1>
      <StyleProp />
      <h1>State is Async</h1>
      <StateIsAsync />
      <h1>Show Values And Destruction</h1>
      <ShowAndDestructure />
      <h1>Map Over Arrays</h1>
      <ConditionalRendering />
      <h1>Conditional Rendering</h1>
      <MapOverArrays />
      <h1>Controlled Component</h1>
      <ControlledComponent />
    </div>
  );
}
