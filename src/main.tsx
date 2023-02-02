import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import { TaskContextProvider } from './contexts/TasksContext'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <TaskContextProvider>
      <App />
    </TaskContextProvider>
  </React.StrictMode>
)
