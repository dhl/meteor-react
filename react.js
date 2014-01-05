MeteorMixin = {
    _handleMeteorChange: function(cb) {
        this.setState({meteor: this.getMeteorState()}, cb);
    },

    _cancelComputation: function() {
        this._meteorComputation.stop();
        this._meteorComputation = null;
    },

    componentWillMount: function() {
        this._meteorComputation = Deps.autorun(this._handleMeteorChange.bind(this, null));
        this._realReplaceState = this.replaceState;
        this.replaceState = this._replaceState;
    },

    _replaceState: function(newState, cb) {
        if (this.state.meteor === newState.meteor) {
            this.state = newState;
            this._cancelComputation();
            this._meteorComputation = Deps.autorun(this._handleMeteorChange.bind(this, cb));
        } else {
            this._realReplaceState(newState, cb);
        }
    },

    componentWillReceiveProps: function(nextProps) {
        var oldProps = this.props;
        this.props = nextProps;
        this._handleMeteorChange(null);
        this.props = oldProps;
    },

    componentWillUnmount: function() {
        this._cancelComputation();
    }

};
