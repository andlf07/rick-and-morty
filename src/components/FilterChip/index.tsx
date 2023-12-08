import { IoCloseSharp } from 'react-icons/io5';
import { ChipContainer, ClearButton, FilterSpan, FilteredContainer } from './styles';

interface Props {
  filters: string[];
  handleClearFilter: () => void;
}

const FilterChip: React.FC<Props> = ({ filters, handleClearFilter }) => {
  if (filters.length === 0) return null;

  return (
    <>
      <FilteredContainer>
        <div>
          Filtered by:{' '}
          <ChipContainer>
            {filters.map((filter, index: number) => {
              return (
                <FilterSpan key={index}>
                  {filter}{' '}
                  <ClearButton type="button" onClick={handleClearFilter}>
                    <IoCloseSharp />
                  </ClearButton>
                </FilterSpan>
              );
            })}
          </ChipContainer>
        </div>
      </FilteredContainer>
    </>
  );
};

export default FilterChip;
