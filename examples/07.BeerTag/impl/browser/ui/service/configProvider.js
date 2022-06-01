import PropTypes from 'prop-types';
import { Component, Children } from 'react';
import { connect } from 'react-redux';

import { setConfig as setUserConfig } from 'ut-user/ui/react/configuration/actions.js';
import { setConfig as setHistoryConfig } from 'ut-history/ui/react/configuration/actions.js';
import { setConfig as setAuditConfig } from 'ut-audit/ui/react/configuration/actions.js';

import { userConfig } from './config/user.js';
import { historyConfig } from './config/history';
import { auditConfig } from './config/audit';

class ConfigProvider extends Component {
    componentDidMount() {
        this.props.setUserConfig(userConfig);
        this.props.setHistoryConfig(historyConfig);
        this.props.setAuditConfig(auditConfig);
    }

    render() {
        const { children } = this.props;
        return Children.only(children);
    }
}

ConfigProvider.propTypes = {
    setUserConfig: PropTypes.func,
    setHistoryConfig: PropTypes.func,
    setAuditConfig: PropTypes.func,
    children: PropTypes.node
};

export default connect(
    null,
    { setUserConfig, setHistoryConfig, setAuditConfig }
)(ConfigProvider);
