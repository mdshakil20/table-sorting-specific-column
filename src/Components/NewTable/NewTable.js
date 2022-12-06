import React, { useState } from 'react';
import { BiSortAlt2 } from "react-icons/bi";

const NewTable = (props) => {

    const table = props.config.table;
    const data = props.data;

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
                data.sort(function (a, b) {
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
        <div className="overflow-x-auto ">

            <table className={table.class}>
                <thead>
                    <tr>
                        {
                            table.children.thead.children.tr.children.map(
                                (element, i) => <th key={i} className={element.class}>{element.name} {element.sort == 'true' && <button onClick={() => dataSort(element.title)}><BiSortAlt2 size={12} /></button>} </th>

                            )
                        }
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((tableData, i) =>
                            <tr key={i} className={table.children.tbody.children.tr.class} >
                                {
                                    table.children.tbody.children.tr.children.map((tblData, i) =>

                                        tblData.title == "name-img" ?
                                            <td key={i} className={tblData.class}>
                                                <div className={tblData.children.class}>
                                                    <img src={tableData.person.avatar} alt="" width={25} height={25} />
                                                    <div className={tblData.children.children.div.class}>{tableData.person.name}</div>
                                                </div>
                                            </td>
                                            :

                                            tblData.title == "email" ?
                                                <td key={i} className={tblData.class}><button className={tblData.children?.class} onClick={() => window.location = `mailto:${tableData.email}`}>{tableData.email}</button></td>
                                                :
                                                <td key={i} className={tblData.class}>{eval(tblData.data)}</td>

                                    )
                                }
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    );
};

export default NewTable;