import { Container, Tab, TabList, Tabs } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { FILTER } from "../constants";
import { setFilter } from "../redux/actions";

const Filter = () => {
  const dispatch = useDispatch();

  return (
    <Container centerContent>
      <Tabs>
        <TabList>
          {Object.keys(FILTER).map((filterkey) => {
            const currentFilter = FILTER[filterkey];
            return (
              <Tab
                key={`filter-${currentFilter}`}
                onClick={() => dispatch(setFilter(currentFilter))}
              >
                {currentFilter}
              </Tab>
            );
          })}
        </TabList>
      </Tabs>
    </Container>
  );
};

export default Filter;
