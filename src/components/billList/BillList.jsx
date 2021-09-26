import React, { useState } from 'react'
import "./billlist.css"
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { getMonth, getYear } from 'date-fns';
import range from "lodash/range";
import { AiFillCloseSquare } from "react-icons/ai"

export default function BillList({billListPop,setBillList}) {

    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const years = range(1990, getYear(new Date()) + 1, 1);
    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];

    return (
        billListPop?
        <div className="background">
            <div className="billlistpop">
                <div className="bluebar" ></div>
                <div className="selectdate">
                    <span className="totalcash">0.000 DT </span>
                    <span className="fromto">from</span>
                    <DatePicker
                        className="datepicker"
                        dateFormat="dd/MM/yyyy"
                        renderCustomHeader={({
                            date,
                            changeYear,
                            changeMonth,
                            decreaseMonth,
                            increaseMonth,
                            prevMonthButtonDisabled,
                            nextMonthButtonDisabled,
                        }) => (
                            <div
                            style={{
                                margin: 10,
                                display: "flex",
                                justifyContent: "center",
                            }}
                            >
                            <button onClick={decreaseMonth} disabled={prevMonthButtonDisabled}>
                                {"<"}
                            </button>
                            <select
                                value={getYear(date)}
                                onChange={({ target: { value } }) => changeYear(value)}
                            >
                                {years.map((option) => (
                                <option key={option} value={option}>
                                    {option}
                                </option>
                                ))}
                            </select>

                            <select
                                value={months[getMonth(date)]}
                                onChange={({ target: { value } }) =>
                                changeMonth(months.indexOf(value))
                                }
                            >
                                {months.map((option) => (
                                <option key={option} value={option}>
                                    {option}
                                </option>
                                ))}
                            </select>

                            <button onClick={increaseMonth} disabled={nextMonthButtonDisabled}>
                                {">"}
                            </button>
                            </div>
                        )}
                        selected={startDate}
                        onChange={(date) => setStartDate(date)}
                        />
                        <span className="fromto">To</span>
                        <DatePicker
                        className="datepicker"
                        dateFormat="dd/MM/yyyy"
                        renderCustomHeader={({
                            date,
                            changeYear,
                            changeMonth,
                            decreaseMonth,
                            increaseMonth,
                            prevMonthButtonDisabled,
                            nextMonthButtonDisabled,
                        }) => (
                            <div
                            style={{
                                margin: 10,
                                display: "flex",
                                justifyContent: "center",
                            }}
                            >
                            <button onClick={decreaseMonth} disabled={prevMonthButtonDisabled}>
                                {"<"}
                            </button>
                            <select
                                value={getYear(date)}
                                onChange={({ target: { value } }) => changeYear(value)}
                            >
                                {years.map((option) => (
                                <option key={option} value={option}>
                                    {option}
                                </option>
                                ))}
                            </select>

                            <select
                                value={months[getMonth(date)]}
                                onChange={({ target: { value } }) =>
                                changeMonth(months.indexOf(value))
                                }
                            >
                                {months.map((option) => (
                                <option key={option} value={option}>
                                    {option}
                                </option>
                                ))}
                            </select>

                            <button onClick={increaseMonth} disabled={nextMonthButtonDisabled}>
                                {">"}
                            </button>
                            </div>
                        )}
                        selected={endDate}
                        onChange={(date) => setEndDate(date)}
                        />
                        <button className="btn">LOAD</button>
                        <AiFillCloseSquare onClick={() => setBillList(false)} className="billlistclose" />
                </div>
                <div className="pickachoice">
                    <span>Record(s) Found: 0</span>
                    <div>
                        <input defaultChecked type="radio" value="Male" name="gender" /> ALL
                        <input type="radio" value="Female" name="gender" /> DINE IN
                        <input type="radio" value="Other" name="gender" /> TAKE OUT
                    </div>
                </div>
                <div className="billtable">
                    <span># &nbsp; Invoice</span>
                    <span>Total Amount</span>
                    <span>Order Type</span>
                    <span>Customer Name</span>
                    <span>Contact</span>
                    <span>Cashier</span>
                    <span>Edit &nbsp; Print &nbsp; Refund</span>
                </div>
            </div>
        </div>:null
    )
}
