import { Component } from 'react';

import './search-panel.css';

export class SearchPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            term: ''
        }
    }

    onUpdateSearch = (e) => { // эта часть работает локально 
        const term = e.target.value;
        this.setState({ term });
        this.props.onUpdateSearch(term) // onUpdateSearch приходит и другого компонента 
    }

    render() {
        return (
            <input
                type="text"
                className="form-control search-input"
                placeholder="Найти сотрудника"
                value={this.state.term}
                onChange={this.onUpdateSearch} />
        )
    }
}