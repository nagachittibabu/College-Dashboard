'use client'
import React, { useState } from 'react';
import type { BadgeProps, CalendarProps } from 'antd';
import { Badge, Calendar } from 'antd';
import type { Dayjs } from "../../../node_modules/@ant-design/";
import Popup from '../popop/page';
import { Button, Popconfirm } from '../../../node_modules/antd/es/index';
var dateContent = ""
const getListData = (value: Dayjs) => {
  let listData: { type: string; content: string }[] = []; // Specify the type of listData
  switch (value.date()) {
    case 1:
      listData = [
        { type: 'warning', content: 'This is warning event.' },
        { type: 'success', content: 'This is usual event.' },
      ];
      break;
    case 2:
      listData = [
        { type: 'warning', content: 'This is warning event.' },
        { type: 'success', content: 'This is usual event.' },
        { type: 'error', content: 'This is error event.' },
      ];
      break;
    case 3:
      listData = [
        { type: 'warning', content: 'This is warning event' },
        { type: 'success', content: 'This is very long usual event' },
        { type: 'error', content: 'This is error event ' },
        { type: 'error', content: 'This is error event ' },
        { type: 'error', content: 'This is error event ' },
        { type: 'error', content: 'This is error event ' },
      ];
      break;
    default:
  }
  return listData || [];
};

const getMonthData = (value: Dayjs) => {
  if (value.month() === 9) {
    return 1394;
  }
};


const App: React.FC = () => {
  const[clickedval,setcickedval]=useState("")

  const ClickFn = (e:any) => {
    dateContent=""
    e.map(item=>{
      return(
        dateContent+=item.content
      )
    })
    setcickedval(dateContent)
  }

  const monthCellRender = (value: Dayjs) => {
    const num = getMonthData(value);
    return num ? (
      <div className="notes-month">
        <section>{num}</section>
        <span>Backlog number</span>
      </div>
    ) : null;
  };

  const dateCellRender = (value: Dayjs) => {
    let listData = getListData(value);
    return (
         <Popconfirm
    description={clickedval}
    okText="ok"
  > <Button onClick={()=>ClickFn(listData)}>
    <div>
        <ul  >
          {listData.map((item) => (
            <li key={item.content} >
              <Badge status={item.type as BadgeProps['status']} text={item.content} />
            </li>
          ))}
        </ul>
      </div>
        </Button>
  </Popconfirm>
    );
  };
  const cellRender: CalendarProps<Dayjs>['cellRender'] = (current, info) => {
    if (info.type === 'date') return dateCellRender(current);
    if (info.type === 'month') return monthCellRender(current);
    return info.originNode;
  };
  return (
    <div className='w-1/2 h-26 border-4 m-4'>
      <Calendar cellRender={cellRender}  />;
    </div>
  )
};

export default App;
