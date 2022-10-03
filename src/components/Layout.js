import ResponsiveAppBar from "./ResponsiveAppBar";
const Layout = (props) => {
  return (
    <div>
      <ResponsiveAppBar isSignedIn={props.isSignedIn} setIsSignedIn={props.setIsSignedIn}/>
      {props.children}
    </div>
  );
};

export default Layout;
