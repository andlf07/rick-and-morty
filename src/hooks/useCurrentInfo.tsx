import { API_ENDPOINT } from '@/consts/API_ENDPOINT';
import { CurrentInfo } from '@/models/CurrentInfo';
import React from 'react';

const useCurrentInfo = (data: any) => {
  const [currentInfo, setCurrentInfo] = React.useState<CurrentInfo>({
    ...data.info,
    current: API_ENDPOINT,
  });
  const { current } = currentInfo;
  const disablePrevButton = currentInfo.prev === null;
  const disableNextButton = currentInfo.next === null;
  const currentPageNumber = current.includes('page=')
    ? Number(new URL(current).searchParams.get('page'))
    : 1;

  const handleNextPage = () => {
    setCurrentInfo((prevInfo: CurrentInfo) => {
      return { ...prevInfo, current: prevInfo.next ? prevInfo.next : current };
    });
  };

  const handlePrevPage = () => {
    setCurrentInfo((prevInfo: CurrentInfo) => {
      return { ...prevInfo, current: prevInfo.prev ? prevInfo.prev : current };
    });
  };

  return {
    disableNextButton,
    disablePrevButton,
    currentPageNumber,
    handlePrevPage,
    handleNextPage,
    currentInfo,
    setCurrentInfo,
  };
};

export default useCurrentInfo;
