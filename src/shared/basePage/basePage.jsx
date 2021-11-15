import CardReview from '../../components/cardReview/cardReview';
import SideBar from '../../components/sidebar/sidebar';

const BasePage = ({ posts }) => {
  return (
    <div>
      <SideBar />
      {posts.map((info) => {
        return <CardReview info={info} key={info.id} />;
      })}
    </div>
  );
};

export default BasePage;
