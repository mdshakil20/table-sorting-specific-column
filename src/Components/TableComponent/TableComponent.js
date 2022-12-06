import React, { useState } from 'react';
import data from '../../TestTableData.json'
import { BiSortAlt2 } from "react-icons/bi";

const TableComponent = () => {
    const [isAscOrder, setIsAscOrder] = useState(null);

    const dataSort = (selected) => {

        //(button toggle) if have in asc order then it execute for desc order
        if (isAscOrder === true) {

            //checking name keyword is name or not
            if (selected == "name") {
                const aKeyword = `a.person.${selected}`;
                const bKeyword = `b.person.${selected}`;

                //sort method for desc order
                data.sort((a, b) => {
                    if (eval(aKeyword) > eval(bKeyword)) {
                        return -1;
                    }
                });

            }
            
            //checking name joiningDate is name or not
            if (selected == "joiningDate") {
                
                //date sorting
                data.sort(function (a, b) {
                    var aa = a.joiningDate.split('/').reverse().join(),
                        bb = b.joiningDate.split('/').reverse().join();
                    return aa > bb ? -1 : (aa < bb ? 1 : 0);
                });
            }

            else {
                const aKeyword = `a.${selected}`;
                const bKeyword = `b.${selected}`;

                //sort method for desc order
                data.sort((a, b) => {
                    if (eval(aKeyword) > eval(bKeyword)) {
                        return -1;
                    }
                });

            }
            setIsAscOrder(false);
        }

        //(button toggle) if have in desc order then it execute for asc order
        else {

            if (selected == "name") {
                const aKeyword = `a.person.${selected}`;
                const bKeyword = `b.person.${selected}`;

                //sort method for asc order
                data.sort((a, b) => {
                    if (eval(aKeyword) < eval(bKeyword)) {
                        return -1;
                    }
                });

            }

            //checking name joiningDate is name or not
            if (selected == "joiningDate") {

                //date sorting
                const aaa = data.sort(function (a, b) {
                    var aa = a.joiningDate.split('/').reverse().join(),
                        bb = b.joiningDate.split('/').reverse().join();
                    return aa < bb ? -1 : (aa > bb ? 1 : 0);
                });
            }

            else {
                const aKeyword = `a.${selected}`;
                const bKeyword = `b.${selected}`;

                //sort method for asc order
                data.sort((a, b) => {
                    if (eval(aKeyword) < eval(bKeyword)) {
                        return -1;
                    }
                });
            }
            setIsAscOrder(true);
        }

    }

    return (
        <div className="overflow-x-auto">

            <table className="table border-collapse border border-slate-400 font-sm mx-auto my-10">
                <thead className='max-h-10'>
                    <tr className='bg-white'>
                        <th className='normal-case w-[175px] px-2.5 py-2 h-10 border bg-transparent border-slate-300'>Name <button onClick={() => dataSort('name')}><BiSortAlt2 size={12} /></button></th>
                        <th className='normal-case w-[175px] px-2.5 py-2 h-10 border bg-transparent border-slate-300'>City <button onClick={() => dataSort('city')}><BiSortAlt2 size={12} /></button></th>
                        <th className='normal-case w-[220px] px-2.5 py-2 h-10 border bg-transparent border-slate-300'>Email Address <button onClick={() => dataSort('email')}><BiSortAlt2 size={12} /></button></th>
                        <th className='normal-case w-[175px] px-2.5 py-2 h-10 border bg-transparent border-slate-300'>Joining Date <button onClick={() => dataSort('joiningDate')}><BiSortAlt2 size={12} /></button></th>
                        <th className='normal-case w-[175px] px-2.5 py-2 h-10 border bg-transparent border-slate-300'>Role <button onClick={() => dataSort('role')}><BiSortAlt2 size={12} /></button></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((data, i) =>
                            <tr key={i} className='text-sm odd:bg-rowBG max-h-10'>
                                <td className='normal-case w-[175px] px-2.5 py-[7px] h-10 bg-transparent border border-slate-300'>
                                    <div className="flex items-center">
                                        <img className='' src="https://i.ibb.co/rH2rt34/unsplash-r-DEOVt-E7v-Os.png" alt="" width={25} height={25} />
                                        <div className="ml-2.5">{data.person.name}</div>
                                    </div>
                                </td>
                                <td className='normal-case w-[175px] px-2.5 py-2 h-10 bg-transparent border border-slate-300'>{data.city}</td>
                                <td className='normal-case w-[220px] px-2.5 py-2 h-10 bg-transparent border border-slate-300 '>
                                    <button className=' text-blue-500 underline'
                                        onClick={() => window.location = `mailto:${data.email}`}> {data.email}
                                    </button>
                                </td>
                                <td className='normal-case w-[175px] px-2.5 py-2 h-10 bg-transparent border border-slate-300'>{data.joiningDate}</td>
                                <td className='normal-case w-[175px] px-2.5 py-2 h-10 bg-transparent border border-slate-300'>{data.role}</td>
                            </tr>
                        )
                    }

                </tbody>
            </table>
        </div>
    );
};

export default TableComponent;