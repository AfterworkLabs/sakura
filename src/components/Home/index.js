import React, { Component } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { openSideMenu } from '../../actions/constrol'
import LoadingCircle from '../LoadingCircle'
import Navbar from '../Navbar'

const LoadingViewContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`

// TODO: fix chrome uncompatibility issue
const LoadingProgress = styled(LoadingCircle)`
  &::after {
    box-sizing: unset;
  }
`

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      pageLoadingStatus: 'loading'
    }
    this.handleMenuClick = this.handleMenuClick.bind(this)
  }

  componentDidMount() {
    const self = this
    setInterval(() => {
      self.setState({
        pageLoadingStatus: 'loaded'
      })
    }, 1500)
  }

  handleMenuClick = () => {
    this.props.openSideMenu()
  }

  render() {
    const { pageLoadingStatus } = this.state

    if (pageLoadingStatus === 'loading') {
      return (
        <LoadingViewContainer>
          <LoadingProgress />
        </LoadingViewContainer>
      )
    }

    return (
      <div>
        <Navbar toggleMenu={this.handleMenuClick} />
      </div>
    )
  }
}

function mapStateToProps(state) {
  const { sideMenuOpened } = state.control
  return {
    sideMenuOpened
  }
}

export default connect(mapStateToProps, {
  openSideMenu
})(Home)
