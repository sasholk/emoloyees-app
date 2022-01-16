import { EmployeesListItem } from "../employees-list-item/empoyees-list-item";

import './employees-list.css';

export const EmployeesList = ({ data, onDelete }) => {

    const elements = data.map(item => {
        const { id, ...itemProps } = item;
        return (
            <EmployeesListItem
                key={id}
                {...itemProps}
                onDelete={() => onDelete(id)} />
            // {...item} - это сокращение для массива[data]  name={item.name} salary={item.salary}
        )
    })

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}