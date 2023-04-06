import { useQuery } from '@apollo/client';
import { useEffect, useState } from 'react';
import { INTERFACE_LIST } from './Interface.Query';
import InterfacePresenter from './Interface.Presenter';
import { InterfaceListMock } from 'src/_mock/InterfaceMock';
const mode = process.env.REACT_APP_MODE;

const InterfaceContainer = () => {
  const [interfaceList, setInterfaceList] = useState<any>([]);

  const { data, loading } = useQuery(INTERFACE_LIST);

  useEffect(() => {
    if (mode === 'DEV') {
      setInterfaceList(InterfaceListMock);
    } else {
      if (!loading && data?.system_related.length > 0) {
        setInterfaceList(data?.system_related);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading]);

  return <InterfacePresenter interfaceList={interfaceList} />;
};

export default InterfaceContainer;
