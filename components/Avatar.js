import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
    View,
    Image,
} from 'react-native';

export default class Avatar extends PureComponent {
    
    render() { 
        const { width, height, image } = this.props;
        return (
            <View style={{ overflow: 'hidden', borderRadius: width / 2, width: width, height: height }}>
                <Image source={image} style={{ width: width, height: height }} />
            </View>
        );
    }
}


Avatar.propTypes = { width: PropTypes.number, height: PropTypes.number, image: PropTypes.number };
Avatar.defaultProps = { width: 100, height: 100 };