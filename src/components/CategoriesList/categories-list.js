import { useState } from 'react';
import CategoryCard from '../CategoryCard';
import PropTypes from 'prop-types';
import { Wrapper } from './styles';
import CreateCategory from '../Categories/create-category';

function CategoriesList({
  data,
  onAddTransaction,
  onAddCatrgory,
  categories,
  date,
}) {
  const [showCatModal, setShowCatModal] = useState(false);

  function handleShowCatModal() {
    setShowCatModal(!showCatModal);
  }

  return (
    <Wrapper>
      {data.map((category) => (
        <CategoryCard
          key={category.id}
          category={category}
          onAddTransaction={onAddTransaction}
          date={date}
        />
      ))}
      <CreateCategory
        showCatModal={() => handleShowCatModal()}
        isModalOpen={showCatModal}
        onAddCatrgory={onAddCatrgory}
        categories={categories}
      />
    </Wrapper>
  );
}

CategoriesList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
};

export default CategoriesList;
