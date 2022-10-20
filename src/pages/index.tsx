import type { NextPage } from 'next';
import { Layout } from 'src/components/Layout/Layouts';
import { HeroSection } from 'src/components/Main/HeroSection';
import { AboutService } from 'src/components/Main/AboutService';

const Home: NextPage = () => {
  return (
    <Layout title="トップページ | 訪問看護ステーションIris">
      <HeroSection />
      <AboutService />
    </Layout>
  );
};

export default Home;
