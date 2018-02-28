import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import { IconShow } from './iconShow';
const styles = {
  root: {
    flexGrow: 1,
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ''
    }
  }

  onSelect(item) {
    this.setState({
      title:`import ${item} from 'material-ui-icons/${item}'`
    })
  }

  render() {
    return (
      <div >
        <AppBar position="sticky">
          <Toolbar>
            <Typography variant="title" color="inherit" >
              {this.state.title || 'click a button'}
            </Typography>
          </Toolbar>
        </AppBar>
        <IconShow onSelect={this.onSelect.bind(this)}></IconShow>

      </div>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);