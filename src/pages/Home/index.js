import React from 'react'
import { addNumber as add } from 'common/utils'
import { Header, Container } from 'components'
import { get } from 'lodash'
import { connect } from 'react-redux'
import { goBack } from 'react-router-redux'
import toastr from 'toastr'

const Home = props => {
  return <div>
    <Header />
    <Container>

      <div className='jumbotron'>
        <div className='col-sm-8 mx-auto'>
          <h1>Navbar examples</h1>
          <p>This {add(1, 2, 3)} example is a quick exercise to illustrate how the navbar and its contents work. Some navbars extend the width of the viewport, others are confined within a <code>.container</code>. For positioning of navbars, checkout the <a href='../navbar-top/'>top</a> and <a href='../navbar-top-fixed/'>fixed top</a> examples.</p>
          <p>
            <button className='btn btn-primary' onClick={() => props.setUserName('Dispatched New Name')} role='button'>Dispatch »</button>
            {` Hi, I'm `}{props.userName}
          </p>
          <p>
            <button className='btn btn-primary' onClick={() => props.goBack()} role='button'>Go back »</button>
          </p>
          <p>
            <button className='btn btn-primary' onClick={() => props.getUserProfile('1041677')} role='button'>Get user profile »</button>
            {' [email] ' + props.userProfile.email + ' [phone] ' + props.userProfile.phone}
          </p>
          <p>
            <button className='btn btn-primary' onClick={() => props.getWelcomPageInfo()} role='button'>Test saga take (see console) »</button>
            {' [isMaintain] ' + props.systemConfig.isMaintain}
          </p>
          <p>
            <button className='btn btn-primary' onClick={() => toastr.success('Have fun storming the castle!', 'Miracle Max Says')} role='button'>Toastr msg »</button>
          </p>
          <p>
            <button className='btn btn-primary' onClick={() => props.login()} role='button'>Login »</button>
          </p>
        </div>
      </div>

    </Container>
  </div>
}

const mapStateToProps = state => ({
  userName: get(state, 'profile.userName'),
  userProfile: get(state, 'profile.userProfile'),
  systemConfig: get(state, 'app.systemConfig')
})

const mapDispatchToProps = dispatch => ({
  setUserName: (newName) => dispatch({ type: 'profile/setUserName', payload: newName }),
  goBack: () => dispatch(goBack()),
  getUserProfile: (userId) => dispatch({ type: 'profile/getUserProfile', payload: userId }),
  getWelcomPageInfo: () => dispatch({ type: 'app/getWelcomPageInfo' }),
  login: (userId) => dispatch({ type: 'profile/login', payload: { userId: 'uuuu', password: 'pppp' } })
})

// export default Home
export default connect(mapStateToProps, mapDispatchToProps)(Home)