import './App.css';
import Welcome from './pages/WellCome';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { RouterProvider } from 'react-router-dom';
import { providerRoute } from './routes/routeProvider';
function App() {
  return (
    <div className="App">
      <RouterProvider router={providerRoute} />
    </div>
  );
}

export default App;
