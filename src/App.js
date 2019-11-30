import React from "react";
import Sidebar from "react-sidebar";
import 'bootstrap/dist/css/bootstrap.min.css';
import Routes from './Routes';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebarOpen: true
    };
    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
  }

  onSetSidebarOpen(open) {
    this.setState({ sidebarOpen: open });
  }

  render() {
    return (
      <div>
        {/* <Sidebar
          docked
          sidebar={<b>Sidebar content</b>}
          open={this.state.sidebarOpen}
          onSetOpen={this.onSetSidebarOpen}
          styles={{ sidebar: { background: "lightblue", width: "200px" } }}
          >
        </Sidebar> */}
        <Routes />
      </div>
    );
  }
}

export default App;