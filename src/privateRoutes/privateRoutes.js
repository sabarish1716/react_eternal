import React from 'react';
import { Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const PrivateRoute = ({ component: Component, user, common, ...rest }) => {
    return (
        <Route
            {...rest}
            render={props =>
                common.isAuthenticated && common.user.ROLE === user ?
                    (<Component user={common.user.ROLE} {...props} />)
                    : common.isAuthenticated && user !== common.user.ROLE ?
                        (<Redirect to='/error' />)
                        : (<Redirect to='/' />)
            }
        />
    );
}

PrivateRoute.propTypes = {
    common: PropTypes.object.isRequired,
    user: PropTypes.string
};

const mapStateToProps = state => ({
    common: state.common,

});

export default withRouter(connect(mapStateToProps)(PrivateRoute));