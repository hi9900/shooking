import { useNavigate } from 'react-router-dom';
import Layout from '../components/common/Layout';

export default function CardAddPage() {
  const navigate = useNavigate();
  return (
    <>
      <Layout type="sub" title="카드 추가" back={true} onCloseClick={() => navigate(-1)}>
        카드 추가 폼
      </Layout>
    </>
  );
}
