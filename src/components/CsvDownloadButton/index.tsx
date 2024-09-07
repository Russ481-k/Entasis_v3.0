import { Button, ButtonProps, forwardRef } from '@chakra-ui/react';

type CsvDownloadButtonProps = ButtonProps & {
  data: string;
};

export const CsvDownloadButton = forwardRef<CsvDownloadButtonProps, 'button'>(
  ({ children, data, ...rest }, ref) => {
    const downloadCSV = () => {
      // 데이터 -> string 변환
      const dataString = data;
      // csv encoding format - utf-8로 설정
      const csvContent = 'data:text/csv;charset=utf-8,' + dataString;
      // url을 통해 다운로드할 수 있는 형태로 변환
      const encodedUri = encodeURI(csvContent);
      // 다운로드 링크 생성
      const link = document.createElement('a');
      link.setAttribute('href', encodedUri);
      link.setAttribute('download', 'user_list.csv');
      // 다운로드 링크 클릭
      document.body.appendChild(link);
      link.click();
      // 다운로드 링크 삭제
      link.remove();
    };
    return (
      <Button ref={ref} {...rest} onClick={downloadCSV}>
        {children}
      </Button>
    );
  }
);
