import Button from "./components/Button";
import Card from "./components/Card";
import TaskColumn from "./components/TaskColumn";
function App() {
  return (
    <>
      <div>
        <Card
          name="Create a product details page"
          id="TS - 40"
          estimatedHour={8}
          remainingHour={4}
        />
        <Button />
        <TaskColumn />
      </div>
    </>
  );
}

export default App;
