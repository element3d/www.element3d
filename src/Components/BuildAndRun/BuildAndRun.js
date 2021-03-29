
import './BuildAndRun.css'

export function BuildAndRun() {
  return (
    <div className="d-flex fd-col ai-start">
      <h1 className="color-main">Build</h1>
      <h2 className="mt-30">Desktop</h2>
      <p>An Element 3D project for desktop platforms is nothing else then a regular cmake project. To Build the project run the following commands.</p>

      <div className="e3-terminal">
        <div><span className="color-main"> > </span> <span> cd MyApp </span></div>
        <div><span className="color-main"> > </span> <span> mkdir build </span></div>
        <div><span className="color-main"> > </span> <span> cmake .. . </span></div>
        <div><span className="color-main"> > </span> <span> cmake --build . </span></div>
      </div>
      <p>For debugging and coding You can choose your favorite IDE like Visual Studio, XCode, Qt Creator, Clion or any other c++ code editor.</p>

      <h2 className="mt-30">Android</h2>
      <p>Each application of Element 3D contains a gradle project for Android platform placed inside of its directory. The project can be easily edited, compiled and debugged with an Android Studio IDE.</p>

      <h1 className="color-main">Run</h1>
      <h2 className="mt-30">Desktop</h2>
      <p>After successfull build of the project the application will be available inside of bin direcotry. Now you can run the application an see the following result.</p>

      <div className="e3-desktop-device">
        <div className="e3-desktop-display">
          <div className="e3-desktop-app-display">
            <div>Hello from MyProject!</div>
          </div>
        </div>
        <div className="e3-desktop-under">
        </div>
      </div>

      <h2 className="mt-30">Android</h2>
      <p>You can run the Android project by clicking the "Run" button as any other Android project. The following will be shown on the device or on emulator.</p>
      <div className="e3-desktop-device">
        <div className="e3-android-display">
          <div className="e3-android-app-display">
            <div>Hello from MyProject!</div>
          </div>
          <div className="e3-android-button">

          </div>
        </div>
      </div>
    </div>
  );
}

