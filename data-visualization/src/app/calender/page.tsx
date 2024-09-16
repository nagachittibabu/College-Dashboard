'use client'
import React from 'react';
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
        { type: 'error', content: 'This is error event 1.' },
        { type: 'error', content: 'This is error event 2.' },
        { type: 'error', content: 'This is error event 3.' },
        { type: 'error', content: 'This is error event 4.' },
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

  const ClickFn = (e:any) => {
    dateContent=""
    e.map(item=>{
      return(
        dateContent+=item.content
      )
    })
    alert(dateContent)
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
      <div>
        <button >
        <ul onClick={()=>ClickFn(listData)}>
          {listData.map((item) => (
            <li key={item.content} >
              {console.log(item.type)}
              <Badge status={item.type as BadgeProps['status']} text={item.content} />
            </li>
          ))}
        </ul>
        </button>
      </div>
    );
  };
console.log(dateContent)
  const cellRender: CalendarProps<Dayjs>['cellRender'] = (current, info) => {
    if (info.type === 'date') return dateCellRender(current);
    if (info.type === 'month') return monthCellRender(current);
    return info.originNode;
  };
  return (
    <div className='w-1/2 h-26 border-4 m-4'>
      <Calendar cellRender={cellRender} className="bg-red-300" />;
      <Popconfirm
    description="Are you sure to delete this task?"
    okText="Yes"
    cancelText="No"
  >
    <Button>HELLO</Button>
  </Popconfirm>
    </div>
  )
};

export default App;
