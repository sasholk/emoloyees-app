import { Component } from 'react';

import { AppInfo } from '../app-info/app-info';
import { SearchPanel } from '../search-panel/search-panel';
import { AppFilter } from '../app-filter/app-filter';
import { EmployeesList } from '../employees-list/employees-list';
import { EmployeesAddForm } from '../employees-add-form/empoyees-add-form';


import './app.css';

export class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                { name: 'Bob Y.', salary: 800, increase: false, id: 1 },
                { name: 'Mark V.', salary: 3000, increase: true, id: 2 },
                { name: 'Alex B.', salary: 5000, increase: false, id: 3 },
            ]
        }
    }

    deleteItem = (id) => {
        this.setState(({ data }) => {
            // const index = data.findIndex(elem => elem.id === id);

            // const before = data.slice(0, index); копирует до нужного элемента который удаляем
            // const after = data.slice(index + 1); копирует после нужного элемента который удаляем

            // const newArr = [...before, ...after];



            return {
                data: data.filter(item => item.id !== id)
            }
        })
    }

    render() {
        return (
            <div className="app" >
                <AppInfo />

                <div className="search-panel">
                    <SearchPanel />
                    <AppFilter />
                </div>

                <EmployeesList
                    data={this.state.data}
                    onDelete={this.deleteItem} />
                <EmployeesAddForm />
            </div>
        )
    }
}