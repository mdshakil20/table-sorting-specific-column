import logo from './logo.svg';
import './App.css';
import NewTable from './Components/NewTable/NewTable';
import TableComponent from './Components/TableComponent/TableComponent';
import tableData from './TestTableData.json'

function App() {


  const tableConfig1 = {
    "table": {
      "class": "table border-collapse border border-slate-400 mx-auto my-10",
      "children": {
        "thead": {
          "class": "",
          "children": {
            "tr": {
              "class": "",
              "children": [
                {
                  "element": "th",
                  "name": "Name",
                  "title": "name",
                  "class": "normal-case w-[175px] px-2.5 py-2 h-10 border bg-transparent border-slate-300",
                  "sort": "true"
                },
                {
                  "element": "th",
                  "title": "email",
                  "name": "Email Address",
                  "class": "normal-case w-[175px] px-2.5 py-2 h-10 border bg-transparent border-slate-300",
                  "sort": "false"
                },

                {
                  "element": "th",
                  "title": "role",
                  "name": "Role",
                  "class": "normal-case w-[175px] px-2.5 py-2 h-10 border bg-transparent border-slate-300",
                  "sort": "false"
                }
              ]
            }
          }
        },
        "tbody": {
          "class": "",
          "children": {
            "tr": {
              "class": "text-sm odd:bg-rowBG ",
              "children": [
                {
                  "element": "td",
                  "title": "name-img",
                  "class": "normal-case w-[175px] px-2.5 py-[7px] h-10  bg-transparent border border-slate-300 ",
                  "children": {
                    "element": "div",
                    "class": "flex items-center",
                    "children": {
                      "img": { "title": "avater", "src": "tableData.person.avatar" },
                      "div": { "title": "person name", "class": "ml-2.5", "name": "tableData.name" }
                    }
                  }
                },
                {
                  "title": "email",
                  "element": "td",
                  "class": "normal-case w-[220px] px-2.5 py-2 h-10 bg-transparent border border-slate-300 text-blue-500 underline",
                  "data": "tableData.email",
                  "children": {
                    "element": "button",
                    "class": "text-blue-500 underline"
                  }
                },
                { "title": "role", "element": "td", "class": "normal-case w-[175px] px-2.5 py-2 h-10 bg-transparent border border-slate-300", "data": "tableData.role" }
              ]
            }
          }
        },
      }
    }
  };
  const tableConfig2 = {
    "table": {
      "class": "table border-collapse border border-slate-400 mx-auto my-10",
      "children": {
        "thead": {
          "class": "",
          "children": {
            "tr": {
              "class": "",
              "children": [
                {
                  "element": "th",
                  "title": "email",
                  "name": "Email Address",
                  "class": "normal-case w-[220px] px-2.5 py-2 h-10 border bg-transparent border-slate-300",
                  "sort": "false"
                },
                {
                  "element": "th",
                  "title": "joiningDate",
                  "name": "Joining Date",
                  "class": "normal-case w-[175px] px-2.5 py-2 h-10 border bg-transparent border-slate-300",
                  "sort": "true"
                },
                {
                  "element": "th",
                  "name": "Role",
                  "title": "role",
                  "class": "normal-case w-[175px] px-2.5 py-2 h-10 border bg-transparent border-slate-300",
                  "sort": "true"
                }
              ]
            }
          }
        },
        "tbody": {
          "class": "",
          "children": {
            "tr": {
              "class": "text-sm odd:bg-rowBG",
              "children": [
                {
                  "title": "email",
                  "element": "td",
                  "class": "normal-case w-[220px] px-2.5 py-2 h-10 bg-transparent border border-slate-300 text-blue-500 underline",
                  "data": "tableData.email",
                  "children": {
                    "element": "button",
                    "class": "text-blue-500 underline"
                  }
                },
                { "title": "joiningDate", "element": "td", "class": "normal-case w-[175px] px-2.5 py-2 h-10 bg-transparent border border-slate-300", "data": "tableData.joiningDate" },
                { "title": "role", "element": "td", "class": "normal-case w-[175px] px-2.5 py-2 h-10 bg-transparent border border-slate-300", "data": "tableData.role" }
              ]
            }
          }
        },
      }
    }
  };
  const tableConfig3 = {
    "table": {
      "class": "table border-collapse border border-slate-400 mx-auto my-10",
      "children": {
        "thead": {
          "class": "",
          "children": {
            "tr": {
              "class": "",
              "children": [
                {
                  "element": "th",
                  "title": "name",
                  "name": "Name",
                  "class": "normal-case w-[175px] px-2.5 py-2 h-10 border bg-transparent border-slate-300",
                  "sort": "false"
                },
                {
                  "element": "th",
                  "name": "City",
                  "title": "city",
                  "class": "normal-case w-[175px] px-2.5 py-2 h-10 border bg-transparent border-slate-300",
                  "sort": "true"
                },
                {
                  "element": "th",
                  "name": "Joining Date",
                  "title": "joiningDate",
                  "class": "normal-case w-[175px] px-2.5 py-2 h-10 border bg-transparent border-slate-300",
                  "sort": "false"
                },

                {
                  "element": "th",
                  "name": "Role",
                  "title": "role",
                  "class": "normal-case w-[175px] px-2.5 py-2 h-10 border bg-transparent border-slate-300",
                  "sort": "true"
                }
              ]
            }
          }
        },
        "tbody": {
          "class": "",
          "children": {
            "tr": {
              "class": "text-sm odd:bg-rowBG ",
              "children": [
                {
                  "element": "td",
                  "title": "name-img",
                  "class": "normal-case w-[175px] px-2.5 py-[7px] h-10  bg-transparent border border-slate-300 ",
                  "children": {
                    "element": "div",
                    "class": "flex items-center",
                    "children": {
                      "img": { "title": "avater", "src": "tableData.person.avatar" },
                      "div": { "title": "person name", "class": "ml-2.5", "name": "tableData.name" }
                    }
                  }
                },
                { "title": "city", "element": "td", "class": "normal-case w-[175px] px-2.5 py-2 h-10 bg-transparent border border-slate-300", "data": "tableData.city" },
                { "title": "joiningDate", "element": "td", "class": "normal-case w-[175px] px-2.5 py-2 h-10 bg-transparent border border-slate-300", "data": "tableData.joiningDate" },
                { "title": "role", "element": "td", "class": "normal-case w-[175px] px-2.5 py-2 h-10 bg-transparent border border-slate-300", "data": "tableData.role" }
              ]
            }
          }
        },
      }
    }
  };

  return (
    <div className="">
      {/* --------- assignment part- 01 ---------  */}
      <TableComponent></TableComponent>

      {/* --------- assignment part- 02.01 ---------  */}
      <NewTable
        data={tableData}
        config={tableConfig1}
      ></NewTable>

      {/* --------- assignment part- 02.02 ---------  */}
      <NewTable
        data={tableData}
        config={tableConfig2}
      ></NewTable>

      {/* --------- assignment part- 02.03 ---------  */}
      <NewTable
        data={tableData}
        config={tableConfig3}
      ></NewTable>

    </div>
  );
}

export default App;
