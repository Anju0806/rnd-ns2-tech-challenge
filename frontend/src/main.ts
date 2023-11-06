import './app.css'
import App from './App.svelte'

const app = new App({
  target: document.getElementById('app'),
  props: {
    // Passing the initial page and pageSize as props to the App component
    page: 1, // Initial page
    pageSize: 10, // Initial page size
  },
})

export default app
