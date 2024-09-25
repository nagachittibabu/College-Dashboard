"use client"
import React, { createContext } from 'react';
import { Button, Modal, Space } from 'antd';

const ReachableContext = createContext<string | null>(null);

const config = {
  title: 'Use Hook!',
  content: (
    <>
      <ReachableContext.Consumer>{(name) => `Reachable: ${name}!`}</ReachableContext.Consumer>
    </>
  ),
};

const App: React.FC = () => {
  const [modal, contextHolder] = Modal.useModal();

  return (
    <ReachableContext.Provider value="Light">
        <Button
          onClick={async () => {
            modal.info(config);
          }}
        >
          Info
        </Button>
      {/* `contextHolder` should always be placed under the context you want to access */}
      {contextHolder}
      {/* Can not access this context since `contextHolder` is not in it */}
    </ReachableContext.Provider>
  );
};

export default App;