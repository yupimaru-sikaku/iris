import type { NextPage } from 'next';
import { Layout } from 'src/components/Layout/Layouts';
import { HeroSection } from 'src/components/Main/HeroSection';
import { AboutService } from 'src/components/Main/AboutService';
import { TextBase } from 'src/components/Common/TextBase';
import { BaseText } from 'src/components/Common/BaseText';

const Home: NextPage = () => {
  return (
    <Layout title="トップページ | 訪問看護ステーションIris">
      <HeroSection />
      <AboutService />
    </Layout>
  );
};

export default Home;
