import './App.css';
import MyComponent from './Components';
import ControlledComponentsForm from './ControlledComponentsForm';
import EventHandlers from './EventHandlers';
import LetNotUpdating from './LetNotUpdating';
import Props from './Props';
import StatefulCounter from './StatefulCounter';
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
    </div>
  );
}
