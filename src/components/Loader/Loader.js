import { LoaderContainer } from './Loader.styled';

import { ThreeDots } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <LoaderContainer>
      <ThreeDots
        height="80"
        width="80"
        radius="9"
        color="#3f51b5"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
    </LoaderContainer>
  );
};
