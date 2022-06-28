import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeDataProviderAsync } from '../redux/DataProviderSlice';
import { RootState } from "../redux/store";

function DataSourceSelect() {
    const currentDataProvider = useSelector((state: RootState) => state.dataProvider.dataProviderName);

    const [state, setState] = useState({
        dataSource: currentDataProvider
    });

    const dispatch = useDispatch();

    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        dispatch(
            changeDataProviderAsync(state.dataSource)
        );
    }

    return (
        <div className="data-source-container">
            <form onSubmit={onSubmit} className="data-source-form">
                <div className="categories-container">
                    <select id="category" name="category" value={state.dataSource}
                            onChange={(event) =>
                                setState({...state, dataSource: event.currentTarget.value})}>
                        <option value="sql">Sql Server</option>
                        <option value="xml">Xml Storage</option>
                    </select>
                </div>
                <button type="submit">Use</button>
            </form>
        </div>
    );
}

export default DataSourceSelect;