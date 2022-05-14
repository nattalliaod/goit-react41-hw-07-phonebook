import { Circles } from 'react-loader-spinner';
import { LoaderContainer, TextLoading } from './Loader.styled';

export const Spinner = () => {
  
    return (
      <LoaderContainer>
        <Circles
          color="#fff"
          height={100}
          width={100}
        />
        <TextLoading>Loading...</TextLoading>
      </LoaderContainer>
    );
}