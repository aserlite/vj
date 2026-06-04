import VisualizerCanvas from './components/VisualizerCanvas';
import AudioSelector from './components/AudioSelector';
import ControlPanel from './components/ControlPanel';

function App() {
  return (
    <div className="relative w-full h-screen bg-black overflow-hidden font-sans text-white">
      {/* Background 3D Canvas */}
      <div className="absolute inset-0 z-0">
        <VisualizerCanvas />
      </div>

      {/* UI Overlay */}
      <div className="absolute inset-0 z-10 pointer-events-none flex flex-col justify-between p-6">
        <header className="flex justify-between items-start pointer-events-auto">
          <div>
            <h1 className="text-3xl font-bold tracking-tighter text-fuchsia-500 drop-shadow-[0_0_10px_rgba(217,70,239,0.5)] uppercase">
              Les visuels la
            </h1>
          </div>
          <AudioSelector />
        </header>

        <main className="flex justify-between items-end pointer-events-auto">
          <ControlPanel />
          <div className="text-right text-xs text-gray-500 font-mono">
            {/* Status indicators */}
            <div className="flex items-center gap-2 mb-1 justify-end">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              READY
            </div>
            <div>FPS: 60</div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
