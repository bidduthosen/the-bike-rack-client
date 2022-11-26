import { Toaster } from 'react-hot-toast';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import router from './Routes/Route/Route';

function App() {
  return (
    <div className='max-w-screen-xl	mx-auto'>
      <RouterProvider router={router}>

      </RouterProvider>
      <Toaster position="top-right" reverseOrder={false}/>

    </div>
  );
}

export default App;
