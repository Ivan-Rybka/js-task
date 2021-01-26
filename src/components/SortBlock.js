import React from "react";

export default function SortBlock({sortAscendingArray,
                                    sortDescending,
                                    sortAlphabet
}) {
    return (
        <div className="left">
            <h3>Цена</h3>
            от
            <input className={'min-max'} type="number" min="0" max="150000" step="1" />
            до
            <input className={'min-max'} type="number" min="1" max="150000" step="1" />
            <h3>Валюта</h3>
            <form>
                <button className='usd currency'>USD</button>
                <button className='uah currency'>UAH</button>
            </form>
            <h3>Сортировка</h3>
            <form>
                <p><input className={'sort_up'} onClick={sortDescending} name="sort" type="radio" value="up-price"  /> по возрастанию цены</p>
                <p><input className={'sort_down'} onClick={sortAscendingArray} name="sort" type="radio" value="down-price" /> по убыванию цены</p>
                <p><input className={'sort_abc'} onClick={sortAlphabet} name="sort" type="radio" value="abc" /> по алфавиту</p>
            </form>
        </div>
    );
}