import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import icon from '../../assets/icon.svg';
import './App.css';


function Hello() {
  return (
    <div>
      <div className="Hello">
        <img width="200" alt="icon" src={icon} />
      </div>
      <h1>electron-react-boilerplate</h1>
      <div className="Hello">
        <a
          href="https://electron-react-boilerplate.js.org/"
          target="_blank"
          rel="noreferrer"
        >
          <button type="button">
            <span role="img" aria-label="books">
              📚
            </span>
            Read our docs
          </button>
        </a>
        <a
          href="https://github.com/sponsors/electron-react-boilerplate"
          target="_blank"
          rel="noreferrer"
        >
          <button type="button">
            <span role="img" aria-label="folded hands">
              🙏
            </span>
            Donate
          </button>
        </a>
      </div>
    </div>
  );
}

// const scene = new THREE.Scene();
// const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);

// const sceneContext = {
//   scene: scene,
//   camera: camera,
//   console: console,
// };

// function runUserCode(userCode, sceneContext) {
//   const sandbox = { 
//     scene: sceneContext.scene, 
//     camera: sceneContext.camera, 
//     console: console 
//   };

//   vm.createContext(sandbox);

//   try {
//     vm.runInContext(userCode, sandbox, { timeout: 1000 });
//   } catch (error) {
//     console.error('Error in user code:', error.message);
//   }
// }

// runUserCode(
//   `
//   scene.background = new THREE.Color(0xff0000);
//   console.log('Background color changed to red');
//   `,
//   { scene, camera }
// );

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hello />} />
      </Routes>
    </Router>
  );
}
