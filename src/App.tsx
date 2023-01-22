import { Form } from './components/Form'
import { Header } from './components/Header'
import { TaskList } from './components/Tasks/TaskList'
import './index.css'

export function App() {
  return (
    <div>
      <Header />
      <Form />
      <main>
        <TaskList />
      </main>
    </div>
  )
}
