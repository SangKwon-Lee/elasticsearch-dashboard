import { uniqBy } from 'lodash';

const getLengthByStatus = (list, type, node: string) => {
  return list.filter((item) => item[type] === node).length;
};

export const makeTableStatus = (list, type) => {
  let newData = [
    {
      value: '전체',
      label: '전체',
      count: list.length,
    },
  ];
  uniqBy(list, type).map((data: any) => {
    let test = {
      value: data[type],
      label: data[type],
      count: getLengthByStatus(list, type, data[type]),
    };
    return newData.push(test);
  });
  return newData.sort((a, b) => b.count - a.count);
};
