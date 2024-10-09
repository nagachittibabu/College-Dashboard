import React, { createContext, useState } from 'react';
import { Badge, Calendar, Button, Modal } from 'antd';
import type { BadgeProps, CalendarProps } from 'antd';
import type { Dayjs } from 'dayjs';

const ReachableContext = createContext<string | null>(null);

const getListData = (value: Dayjs) => {
  let listData: { type: string; content: string }[] = [];
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
  return null;
};

const Calender: React.FC = () => {
  // Initialize modalContent as an array of objects
  const [modalVisible, setModalVisible] = useState(false);
  const [modalContent, setModalContent] = useState<{ type: string; content: string }[]>([]);

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
    const listData = getListData(value);
    if (listData.length) {
      return (
        <ReachableContext.Provider value={modalContent.map(item => item.content).join(', ')}>
          <Button
            onClick={() => handleDateClick(listData)}
            className="border-none bg-transparent w-full h-full "
          >
            <div>
              <ul>
                {listData.map((item) => (
                  <li key={item.content}>
                    <Badge status={item.type as BadgeProps['status']} text={item.content} />
                  </li>
                ))}
              </ul>
            </div>
          </Button>
        </ReachableContext.Provider>
      );
    }
  };

  const handleDateClick = (listData: { type: string; content: string }[]) => {
    setModalContent(listData); // Set the listData array in modalContent
    setModalVisible(true);
  };

  const cellRender: CalendarProps<Dayjs>['cellRender'] = (current, info) => {
    if (info.type === 'date') return dateCellRender(current);
    if (info.type === 'month') return monthCellRender(current);
    return info.originNode;
  };

  return (
    <div style={{ width: '600px', height: '400px', overflow: 'hidden' }}>
      <Calendar cellRender={cellRender} style={{ width: '100%', height: '100%' }} />
      <Modal
        title="Event Details"
        visible={modalVisible}
        onOk={() => setModalVisible(false)}
        onCancel={() => setModalVisible(false)}
        centered
        footer={[
          <Button key="ok" type="primary" onClick={() => setModalVisible(false)}>
            OK
          </Button>,
        ]}
      >
        <ul style={{ paddingLeft: 0 }}>
          {modalContent.map((item, index) => (
            <li key={index} style={{ listStyleType: "none", marginBottom: '8px' }}>
              <Badge
                status={
                  item.type === 'warning'
                    ? 'warning'
                    : item.type === 'error'
                    ? 'error'
                    : 'success'
                }
                text={item.content}
              />
            </li>
          ))}
        </ul>
      </Modal>
    </div>
  );
};

export default Calender;
