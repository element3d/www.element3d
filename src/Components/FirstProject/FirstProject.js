
import './FirstProject.css'

export function FirstProject() {
  return (
    <div className="d-flex fd-col ai-start">
      <h1 className="color-main">First project</h1>
      <p>Create a starter project, using Element 3D command line interface(e3). </p>
      <div className="e3-terminal">
        > e3 init my_project desktop android ios
      </div>
      <h1 className="mt-30">Project structure</h1>
      <p>The above command will generate a new project with all nesseccery platform specific code and c++ libraries.</p>

      <h3>e3.xml</h3>
      <p>An Element 3D project can contain multiple applications and libraries. Each application/library can setup its own platform specific configurations via e3.xml project file.</p>

      <h3>CMakeLists.txt</h3>
      <p>The main cmake project for all platforms. It will be generated at the very first initialization of the project so can be carefuly modified at any time by a developer.</p>

      <h3>libs</h3>
      <p>A directory which contains precompiled c++ libraries and header files of Element 3D for all selected platforms.</p>

      <h2>Directory with application name</h2>
      <p>For each application or library will be generated a separate directory with a specific configuration set by e3.xml project file. It will contain project files for all selected platforms, shared assets files and a main c++ code.</p>

      <h3>Android</h3>
      <p>A generated gradle project for Android platform. It contains a single activity which is connected to the main c++ application. You are free to carefuly add an android specific views, activities and any other functionality. The project will be generated at the very first time of project initialization.</p>

      <h3>Desktop</h3>
      <p>A generated cros-platform cmake project for Windows, Linux and Mac platforms. It contains a single platform window which is connected to the main application. It also can be carefuly modified for Your needs.</p>

      <h3>CMakeLists.txt</h3>
      <p>A simple cmake file to connect the main c++ project to all platform specific projects.</p>

      <h3>assets</h3>
      <p>A directory to store all assets and resources of an application or library. It is shared across the all platforms.</p>

      <h2>App</h2>
      <p>Contains all of the ui(.xml) and c++ files of the current application/library. You should mainly work with the content of this directory.</p>


    </div>
  );
}

