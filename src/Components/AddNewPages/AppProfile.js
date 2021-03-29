import './AddNewPages.css';


export function AppProfile() {
  const codeString = '(num) => num + 1';
  return (
    <div className="d-flex fd-col ai-start">
      <h1 className="color-main">Add new pages</h1>
      <h2 className="mt-30">Profile</h2>


      <p>Before we start make sure that the Element 3D cli is running. Now lets create a new element for Profile page. Lets add a circular avatar and name for our lovely hero Melman from Madagascar. The code can be the following.</p>

      <p>Now we can add some posts for our hero. In this case lets use a dynamic way. Create an empty scroll inside of profile page and add post items from c++ code.</p>

      <p>For posts we can crate a simple element with additional attributes for post title and for picture.</p>

      <p>Now all we need to do is just fill the profile page with a few posts. This can be done inside of AppProfile class constructor with a simple loop.</p>
    </div>
  );
}

