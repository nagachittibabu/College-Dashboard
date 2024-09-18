'use client'
import React, { createContext, useEffect, useState } from 'react';
import type { BadgeProps, CalendarProps } from 'antd';
import { Badge, Calendar } from 'antd';
import type { Dayjs } from "../../../node_modules/@ant-design/";
import { Button, Modal, Popconfirm } from '../../../node_modules/antd/es/index';
const ReachableContext = createContext<string | null>(null);

const getListData = (value: Dayjs) => {
  let listData: { type: string; content: string }[] = []; // Specify the type of listData
  switch (value.date()) {
    case 1:
      listData = [
        { type: 'warning', content: 'This is warning event.' },
        { type: 'success', content: 'This is usual event.' },
      ];
      break;
    case 20:
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
        { type: 'error', content: 'This is error event ' },      ];
      break;
      case 6:
      listData = [
        { type: 'warning', content: 'This is warning event.' },
        { type: 'success', content: 'This is usual event.' },
      ];
      break;
    case 11:
      listData = [
        { type: 'warning', content: 'This is warning event.' },
        { type: 'success', content: 'This is usual event.' },
        { type: 'error', content: 'This is error event.' },
      ];
      break;
    case 23:
      listData = [
        { type: 'warning', content: 'This is warning event' },
        { type: 'success', content: 'This is very long usual event' },
        { type: 'error', content: 'This is error event ' },

      ];
    default:
  }
  return listData || [];
};

const getMonthData = (value: Dayjs) => {
  console.log(value)
  if (value.month() === 9) {
    return 1394;
  }
};

const Calender: React.FC = () => {
  const[day,setday]=useState()
  const [clickedval, setcickedval] = useState("")



  const monthCellRender = (value: Dayjs) => {
    const num = getMonthData(value);
    return num ? (
      <div className="notes-month">
        <section>{num}</section>
        <span>Backlog number</span>
      </div>
    ) : null;
  };
  let output:any;
  let contents=""
  const dateCellRender = (value: Dayjs) => {
    let listData = getListData(value);
   if(listData){
      return (
        <ReachableContext.Provider value={clickedval}>  
        <Button  onClick={ () => {Modal.info(output)}} className="border-none bg-transparent w-full h-full ">
          {output=""}
              <div>
                <ul onClick={()=>{ClickedVal(listData)}}>
                  {listData.map((item) => (
                    <li key={item.content} >
                      <Badge status={item.type as BadgeProps['status']} text={item.content} />
                    </li>
                  ))}
                </ul>
              </div>
            </Button>
          </ReachableContext.Provider>
      )
      }
  };
  const ClickedVal=(e:any)=>{
    contents=""
    output={}
    e.map(item=>{
      contents +=item.content;
    })
    output={content:contents}
  }
  const cellRender: CalendarProps<Dayjs>['cellRender'] = (current, info) => {
    if (info.type === 'date') return dateCellRender(current);
    if (info.type === 'month') return monthCellRender(current);
    return info.originNode;
  };
  return (
    <div className='w-1/2 h-28 border-2'>
      <Calendar cellRender={cellRender} />;
    </div>
  )

};

export default Calender;
