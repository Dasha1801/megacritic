import CardReview from '../cardReview/cardReview';
import SideBar from '../../components/sidebar/sidebar';

const BasePage = ({ posts }) => {
  return (
    <div>
      <SideBar />
      {posts.slice(0, 10).map((info) => {
        return <CardReview info={info} key={info.id} />;
      })}
    </div>
  );
};

export default BasePage;
